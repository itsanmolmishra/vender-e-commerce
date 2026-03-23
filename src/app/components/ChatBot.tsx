import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { createPortal } from 'react-dom';
import {
  MessageCircle,
  X,
  Send,
  ExternalLink,
  Sparkles,
  RotateCcw,
  ChevronRight,
  Phone,
} from 'lucide-react';
import { getBulkReplyById, matchBulkKnowledge } from '../chatbot/bulkKnowledge';

type BotLink = { label: string; path: string };

type ChatMessage = {
  id: string;
  role: 'bot' | 'user';
  text: string;
  links?: BotLink[];
};

const WELCOME: ChatMessage = {
  id: 'welcome',
  role: 'bot',
  text:
    "Hi — I'm Ceuki's assistant. Ask me anything about **this website**, **e-commerce selling**, **GST**, **ads**, **marketplaces**, or **your account**. I answer from our knowledge base; for unique cases I'll point you to **Contact**.",
};

/** Floating WA / Call — Ceuki India (same number for both) */
const CEUKI_CONTACT_E164 = '918986863081';
const CEUKI_WHATSAPP_PREFILL = encodeURIComponent(
  'Hello, I would like to get in touch regarding Ceuki India services.'
);
const CEUKI_WHATSAPP_HREF = `https://wa.me/${CEUKI_CONTACT_E164}?text=${CEUKI_WHATSAPP_PREFILL}`;
const CEUKI_TEL_HREF = `tel:+${CEUKI_CONTACT_E164}`;

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[.,!?]+$/g, '');
}

function isFollowUp(q: string): boolean {
  const n = normalize(q);
  if (n.length > 48) return false;
  return (
    /^(more|more details|details|tell me more|go deeper|elaborate|expand|continue|next|yes|ok|okay|sure|why|how so|and|aur|और|आगे|समझाओ)$/.test(
      n
    ) ||
    /^(what else|anything else|can you explain|say more)$/.test(n)
  );
}

function wantsContactForm(q: string): boolean {
  const n = normalize(q);
  // Phone / helpline questions — handled by bulk layer, not the form
  if (/\bcontact\s+(number|phone|no|mobile|detail|email|info|whatsapp)\b/i.test(n)) return false;
  if (/^(contact|contact us|open contact|form|contact form)$/.test(n)) return true;
  return (
    /\b(contact|संपर्क|फॉर्म|कॉल|ईमेल|talk to (a )?(human|person|team)|human|live agent|schedule (a )?call|book (a )?call|request (a )?callback|get quote|request quote|custom quote|proposal|enquiry|inquiry|email me|call me)\b/.test(
      n
    ) ||
    /\b(quote|pricing) (for|on|about) my\b/.test(n) ||
    /^(open|show) (the )?contact/.test(n)
  );
}

type IntentDef = {
  id: string;
  keywords: string[];
  patterns?: RegExp[];
  /** Minimum keyword hits + pattern bonus to accept (patterns add +2 each). */
  minScore: number;
  /** On equal score, higher wins (use for platforms vs generic intents). */
  priority?: number;
  short: string;
  deep: string;
  links?: BotLink[];
};

/** Site FAQ + common seller questions (matched first; higher priority on ties). */
const FAQ_COMMON_INTENTS: IntentDef[] = [
  {
    id: 'faq_setup_speed',
    keywords: ['setup', 'onboarding', 'account', 'marketplace', 'how long', 'how quickly', 'kitne din', 'time', 'days'],
    patterns: [
      /how (quick|fast|soon|long)|account setup|set up.*account|marketplace.*setup|onboarding/i,
      /(48|72).*hour|3.?5.*day/i,
    ],
    minScore: 3,
    priority: 15,
    short:
      '**Marketplace setup** usually takes **3–5 business days** (docs + verification). **Amazon & Flipkart** are often **48–72 hours** once we have complete documents.',
    deep:
      'Delays usually come from pending KYC or category approvals. Share your platform on **Contact** for a realistic timeline.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  {
    id: 'faq_gst_online',
    keywords: ['gst', 'tax', 'registration', 'mandatory', 'sell online', 'without gst'],
    patterns: [/need.*gst|gst.*required|sell.*online.*gst|without gst/i],
    minScore: 3,
    priority: 15,
    short:
      '**GST** is required for most **major Indian marketplaces**. We provide **GST registration & filings** under **Business Setup**.',
    deep:
      'Getting GST in place early avoids listing blocks and invoice issues. We can align registration with your company structure.',
    links: [
      { label: 'GST services', path: '/services/gst-services' },
      { label: 'Company registration', path: '/services/company-registration' },
    ],
  },
  {
    id: 'faq_after_setup_support',
    keywords: ['support', 'after', 'account manager', '24/7', 'monitoring', 'help'],
    patterns: [/after.*setup|ongoing support|what support|customer service.*provide|dedicated manager/i],
    minScore: 3,
    priority: 15,
    short:
      'After setup we help with **inventory**, **orders**, **performance monitoring**, **analytics**, and higher plans include **dedicated account managers** (as per scope).',
    deep:
      'Exact SLAs depend on your package—describe your channels and volume on **Contact** for a fit.',
    links: [{ label: 'Order & inventory', path: '/services/order-inventory' }, { label: 'Contact', path: '/contact' }],
  },
  {
    id: 'faq_photo_listing',
    keywords: ['photography', 'listing', 'optimization', 'description', 'images', 'conversion'],
    patterns: [/photo.*listing|listing optimization|product description|image editing|conversion rate/i],
    minScore: 3,
    priority: 15,
    short:
      'Yes — **Creative Services** covers **product photography**, editing, **SEO-friendly listings**, and content that improves **conversion**.',
    deep:
      'We align images and copy to marketplace guidelines so you rank and convert better.',
    links: [
      { label: 'Product photography', path: '/services/product-photography' },
      { label: 'SEO & PPC', path: '/services/seo-ppc-ads' },
    ],
  },
  {
    id: 'faq_multi_inventory',
    keywords: ['multiple', 'sync', 'inventory', 'channels', 'amazon', 'flipkart', 'oversell'],
    patterns: [/inventory.*multiple|sync.*marketplace|across.*channel|prevent oversell|real.?time stock/i],
    minScore: 3,
    priority: 15,
    short:
      'We use **inventory workflows** that keep **stock aligned across marketplaces** to reduce **overselling** and fulfilment errors.',
    deep:
      'Scope depends on your tools and SKUs—**Order & inventory** is the right starting page.',
    links: [{ label: 'Order & inventory', path: '/services/order-inventory' }],
  },
  {
    id: 'faq_ppc_roi',
    keywords: ['ppc', 'ads', 'roi', 'effective', 'marketing', '3x', 'sales'],
    patterns: [/ppc.*effective|advertising.*roi|why.*ads|increase sales.*month/i],
    minScore: 3,
    priority: 15,
    short:
      'Our **PPC/ads** approach is **data-driven**: structure, testing, and continuous optimization. Many clients see **strong sales uplift** over months—exact results vary by category.',
    deep:
      'Share your ACOS/ROAS goals and budgets on **Contact** for a realistic plan.',
    links: [{ label: 'SEO & PPC ads', path: '/services/seo-ppc-ads' }],
  },
  {
    id: 'faq_contract',
    keywords: ['contract', 'commitment', 'month', 'minimum', 'lock', 'cancel'],
    patterns: [/minimum contract|lock.?in|month to month|long term|enterprise.*month/i],
    minScore: 3,
    priority: 15,
    short:
      'Plans are often **flexible** (e.g. monthly options); **enterprise** engagements may use a **minimum term** so we can deliver depth—details are confirmed during sales.',
    deep:
      'Tell us your runway and scope on **Contact**; we align contract length to outcomes.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  {
    id: 'faq_security',
    keywords: ['secure', 'security', 'data', 'privacy', 'nda', 'encrypt'],
    patterns: [/data.*secure|privacy|nda|encryption|leak/i],
    minScore: 3,
    priority: 15,
    short:
      'We follow **standard security practices**: controlled access, secure connections, and **NDAs** where required. Compliance details can be discussed with our team.',
    deep:
      'For enterprise needs, request our security / compliance discussion on **Contact**.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  {
    id: 'common_new_seller',
    keywords: ['new seller', 'start', 'begin', 'first time', 'kaise bechu', 'online selling'],
    patterns: [/how to start selling|begin.*sell|new to amazon|first time seller/i],
    minScore: 3,
    priority: 14,
    short:
      'Start with **GST**, **business identity**, then **marketplace onboarding**, **catalog**, and **ads**. We can handle the full stack or specific steps.',
    deep:
      'Tell us your category and budget—we map **account setup → catalog → growth**.',
    links: [{ label: 'Services overview', path: '/#services' }, { label: 'Contact', path: '/contact' }],
  },
  {
    id: 'common_documents',
    keywords: ['document', 'pan', 'bank', 'certificate', 'kyc', 'paper'],
    patterns: [/what document|documents needed|kyc requirement|pan card/i],
    minScore: 3,
    priority: 14,
    short:
      'Typically **PAN**, **GST**, **bank proof**, **business proof**, and **identity** docs—**exact lists vary by platform** and entity type.',
    deep:
      'Send your structure (individual/company) on **Contact** for a checklist.',
    links: [{ label: 'Business setup', path: '/services/company-registration' }],
  },
  {
    id: 'common_acos',
    keywords: ['acos', 'roas', 'tacos', 'cpc', 'bid'],
    patterns: [/what is acos|acos meaning|roas vs/i],
    minScore: 2,
    priority: 14,
    short:
      '**ACOS** = ad spend ÷ ad sales (lower is often better). **ROAS** = return on ad spend. We tune campaigns to your **margin** targets.',
    deep:
      'Category benchmarks differ—share screenshots or goals on **Contact**.',
    links: [{ label: 'SEO & PPC', path: '/services/seo-ppc-ads' }],
  },
  {
    id: 'common_suspension',
    keywords: ['suspended', 'deactivated', 'appeal', 'reinstate', 'policy violation'],
    patterns: [/account suspend|listing removed|reinstat/i],
    minScore: 3,
    priority: 14,
    short:
      'Suspensions need **root-cause** review, **corrective actions**, and **plan of action** per platform rules. Our team helps with structured appeals.',
    deep:
      'Share the **notification text** and **ASIN/SKU** context on **Contact**—avoid guesswork.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  {
    id: 'common_brand_registry',
    keywords: ['brand registry', 'trademark', 'brand approval', 'counterfeit'],
    patterns: [/brand registry|trademark.*amazon|ip complaint/i],
    minScore: 2,
    priority: 14,
    short:
      '**Brand registry** and **IP** need trademark/brand evidence. We support **trademark/legal** alongside marketplace work.',
    deep:
      'We align **legal assets** with **platform brand programs**.',
    links: [
      { label: 'Legal & trademark', path: '/services/legal-trademark' },
      { label: 'Amazon service', path: '/services/amazon-seller-central' },
    ],
  },
  {
    id: 'common_international',
    keywords: ['export', 'international', 'global', 'usa', 'uk', 'fba export'],
    patterns: [/sell.*abroad|international selling|export from india/i],
    minScore: 3,
    priority: 14,
    short:
      'Cross-border selling needs **compliance**, **tax**, and **fulfilment** planning. We advise per **target marketplace**.',
    deep:
      'Tell us **destination** and **category** on **Contact** for a feasibility check.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  {
    id: 'common_returns',
    keywords: ['return', 'refund', 'customer return', 'rto'],
    patterns: [/who handle.*return|return policy|customer refund/i],
    minScore: 3,
    priority: 14,
    short:
      '**Returns** follow **each marketplace’s policy**; ops teams usually manage **RTO/returns** as part of **account handling**.',
    deep:
      'We can tighten **listing accuracy** and **fulfilment** to reduce returns.',
    links: [{ label: 'Order & inventory', path: '/services/order-inventory' }],
  },
  {
    id: 'common_payout',
    keywords: ['payout', 'settlement', 'payment', 'when paid', 'transfer'],
    patterns: [/when.*money|marketplace.*pay|settlement cycle/i],
    minScore: 3,
    priority: 14,
    short:
      '**Payout cycles** depend on the **platform** (weekly/bi-weekly) and **account health**. We help you **track** this in **reporting**.',
    deep:
      'For reconciliation help, use **analytics** + ops support.',
    links: [{ label: 'Analytics', path: '/services/analytics-dashboard' }],
  },
  {
    id: 'common_fba',
    keywords: ['fba', 'fulfilment', 'warehouse', 'amazon warehouse'],
    patterns: [/what is fba|fulfilled by amazon|should i use fba/i],
    minScore: 2,
    priority: 14,
    short:
      '**FBA** = Amazon stores, packs, ships your stock. Good for **Prime** and scale; costs and **inventory planning** matter.',
    deep:
      'We help decide **FBA vs self-ship** using your margin and velocity.',
    links: [{ label: 'Amazon service', path: '/services/amazon-seller-central' }],
  },
  {
    id: 'common_competitor',
    keywords: ['competitor', 'better than', 'why choose', 'difference'],
    patterns: [/why.*ceuki|vs other|compare.*agency/i],
    minScore: 2,
    priority: 13,
    short:
      'We combine **marketplace execution**, **compliance**, **creatives**, and **growth** in one partner model—less coordination overhead for you.',
    deep:
      'Share your pain points; we’ll show a **scoped plan** on **Contact**.',
    links: [{ label: 'About', path: '/about' }, { label: 'Contact', path: '/contact' }],
  },
  {
    id: 'site_nav_faq',
    keywords: ['faq', 'frequently', 'question', 'where is'],
    patterns: [/where.*faq|faq section|common question/i],
    minScore: 3,
    priority: 13,
    short:
      'The site has an **FAQ** on the **home page** (scroll to **Frequently Asked Questions**). You can also ask me here.',
    deep:
      'For anything not listed, use **Contact**.',
    links: [{ label: 'Home (FAQ)', path: '/#home' }],
  },
  {
    id: 'site_blog',
    keywords: ['blog', 'article', 'read', 'learn'],
    patterns: [/where.*blog|read article/i],
    minScore: 2,
    priority: 12,
    short:
      'We showcase **insights** from the **Blog** section on the **home page**. Good for trends and tips.',
    deep:
      'For personalized advice, **Contact** works best.',
    links: [{ label: 'Home', path: '/#home' }],
  },
  {
    id: 'site_case_studies',
    keywords: ['case study', 'success', 'result', 'client', 'testimonial'],
    patterns: [/case stud|success story|client result/i],
    minScore: 3,
    priority: 12,
    short:
      'Explore **case studies / testimonials** on the **home page** sections—we highlight outcomes and workflows.',
    deep:
      'Want something similar for your brand? Tell us your category on **Contact**.',
    links: [{ label: 'Home', path: '/#home' }],
  },
  {
    id: 'site_process',
    keywords: ['process', 'how you work', 'steps', 'method'],
    patterns: [/how do you work|your process|step by step/i],
    minScore: 3,
    priority: 12,
    short:
      'We typically follow **discover → onboard → execute → optimize**, with **clear reporting**. The **Process** section on the home page visualizes this.',
    deep:
      'We adapt depth to your **plan** and **channels**.',
    links: [{ label: 'Home', path: '/#home' }],
  },
  {
    id: 'site_partnership_menu',
    keywords: ['partnership', 'menu', 'navbar', 'page'],
    patterns: [/where.*partnership|partnership page/i],
    minScore: 2,
    priority: 12,
    short:
      '**Partnership** pages cover each **marketplace** (Amazon, Flipkart, …). Open **Partnership** from the main **navigation**.',
    deep:
      'Pick your platform for tailored guidance.',
    links: [{ label: 'Amazon partnership', path: '/Partnership/amazon' }],
  },
  {
    id: 'hi_services_hindi',
    keywords: ['सेवा', 'सेवाएं', 'क्या करते', 'मदद'],
    patterns: [/aap.*kya.*karte|services.*hindi/i],
    minScore: 2,
    priority: 12,
    short:
      'Hum **e-commerce** par **account management**, **GST/legal setup**, **ads/SEO**, **photos/videos**, aur **analytics** offer karte hain. **Contact** par apni zaroorat likhein.',
    deep:
      'Platform bataiye (Amazon, Flipkart, …) — main sahi **link** suggest kar dunga.',
    links: [{ label: 'Services', path: '/#services' }, { label: 'Contact', path: '/contact' }],
  },
  {
    id: 'hi_price_hindi',
    keywords: ['दाम', 'कीमत', 'चार्ज', 'पैकेज'],
    patterns: [/kitna.*charge|price.*hindi|paise/i],
    minScore: 2,
    priority: 12,
    short:
      '**Pricing** scope ke hisaab se hoti hai — **Contact** par requirement bhej kar **custom quote** lein.',
    deep:
      'Marketplaces, ad spend, aur creatives batane se accurate estimate milta hai.',
    links: [{ label: 'Get quote', path: '/contact' }],
  },
  {
    id: 'listing_seo',
    keywords: ['bullet', 'a+', 'backend keyword', 'search term', 'indexing'],
    patterns: [/listing seo|search term|backend keyword|a\+ content/i],
    minScore: 3,
    priority: 13,
    short:
      '**Listing SEO** = relevant **keywords**, **readable titles**, **structured bullets**, **A+** (where applicable), and **conversion-focused** images.',
    deep:
      'We audit **indexing** issues and competitor gaps as part of growth projects.',
    links: [{ label: 'SEO & PPC', path: '/services/seo-ppc-ads' }, { label: 'Sales optimization', path: '/services/sales-optimization' }],
  },
  {
    id: 'coupon_deal',
    keywords: ['coupon', 'discount', 'offer', 'promo code'],
    patterns: [/any discount|promo code|coupon code/i],
    minScore: 2,
    priority: 11,
    short:
      'Public **promo codes** aren’t always listed on the site—ask on **Contact** if any **campaign** is running.',
    deep:
      'For **enterprise** scopes, we discuss commercials directly.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  {
    id: 'whatsapp',
    keywords: ['whatsapp', 'wa ', 'chat on phone'],
    patterns: [/whatsapp|whats app/i],
    minScore: 1,
    priority: 11,
    short:
      '**Phone**: **+91 9508088497** (Mon–Sat, 9 AM–7 PM IST). WhatsApp availability—please **confirm on call/email** or ask via **Contact**.',
    deep:
      'We want your request routed to the right specialist—**Contact** helps with context.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  {
    id: 'email_direct',
    keywords: ['email', 'mail id', 'info@'],
    patterns: [/what.*email|send.*mail|email address/i],
    minScore: 2,
    priority: 11,
    short:
      'Write to **info@ceukiindia.com** — we aim to reply within **~24 hours**.',
    deep:
      'For briefs, include **platform**, **store link**, and **goal**.',
    links: [{ label: 'Contact form', path: '/contact' }],
  },
  {
    id: 'phone_direct',
    keywords: ['phone', 'number', 'call', 'mobile'],
    patterns: [/phone number|call you|dial/i],
    minScore: 2,
    priority: 11,
    short:
      'Call **+91 9508088497** (**Mon–Sat, 9 AM–7 PM IST**). Email: **info@ceukiindia.com**.',
    deep:
      'If lines are busy, leave details on **Contact**.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  {
    id: 'delhi_mumbai',
    keywords: ['delhi', 'mumbai', 'bangalore', 'hyderabad', 'remote'],
    patterns: [/office.*delhi|located.*mumbai|only noida/i],
    minScore: 2,
    priority: 11,
    short:
      'Head office is **Noida**; we serve **clients across India** **remotely** for most services.',
    deep:
      'On-site needs—discuss on **Contact**.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  {
    id: 'free_consultation',
    keywords: ['free', 'consultation', 'demo', 'trial'],
    patterns: [/free consult|book.*call|demo/i],
    minScore: 2,
    priority: 11,
    short:
      'We often start with a **discovery** on **Contact** / call—**whether it is free** depends on current promos; ask explicitly when you reach out.',
    deep:
      'Share **category + goal** so the call is productive.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  {
    id: 'seller_funding',
    keywords: ['funding', 'loan', 'credit', 'investment'],
    patterns: [/need loan|startup fund/i],
    minScore: 2,
    priority: 10,
    short:
      'We focus on **e-commerce execution**; **funding** is outside our core—your **CA/bank** can advise. We can still help **pitch-ready** numbers via **analytics**.',
    deep:
      'Ask how we structure **reporting** for investors on **Contact**.',
    links: [{ label: 'Analytics', path: '/services/analytics-dashboard' }],
  },
  {
    id: 'dropshipping',
    keywords: ['dropship', 'dropshipping', 'no inventory'],
    patterns: [/drop ship/i],
    minScore: 1,
    priority: 10,
    short:
      '**Dropshipping** vs **inventory-led** models have different risks. We mostly help **inventory/marketplace** brands—tell us your model on **Contact**.',
    deep:
      'Platform rules and **SLA** still apply.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  {
    id: 'private_label',
    keywords: ['private label', 'white label', 'oem', 'manufacturing'],
    patterns: [/private label|own brand/i],
    minScore: 2,
    priority: 10,
    short:
      '**Private label** needs **sourcing**, **compliance**, **brand**, and **catalog**—we support **launch + marketplace** scaling.',
    deep:
      'Share category and MOQ context on **Contact**.',
    links: [{ label: 'Brand creatives', path: '/services/brand-creatives' }],
  },
  {
    id: 'social_media',
    keywords: ['instagram', 'facebook', 'social media', 'influencer'],
    patterns: [/instagram ads|social media marketing/i],
    minScore: 3,
    priority: 10,
    short:
      'Our **growth** stack focuses on **marketplace + web performance**; **social** can tie in via **creatives** and **performance**—scope on **Contact**.',
    deep:
      'We align **D2C** and **marketplace** messaging.',
    links: [{ label: 'SEO & PPC', path: '/services/seo-ppc-ads' }],
  },
  {
    id: 'catalog_error',
    keywords: ['8541', 'error', 'gst', 'mismatch', 'catalog'],
    patterns: [/catalog error|listing error|8541|gst mismatch/i],
    minScore: 2,
    priority: 14,
    short:
      '**Catalog errors** (GST, category, attributes) need **screenshots** and **exact error codes**. We fix systematically per **platform rules**.',
    deep:
      'Send **SKU + error text** on **Contact**.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
];

const CORE_INTENTS: IntentDef[] = [
  {
    id: 'greeting',
    keywords: [],
    patterns: [
      /^(hello|hi|hey|namaste|नमस्ते|start)\s*$/i,
      /^(good morning|good evening)\s*$/i,
      /^(hello|hi)\s+there\s*$/i,
    ],
    minScore: 2,
    priority: 1,
    short:
      'Hello! Ceuki India helps sellers and brands on Amazon, Flipkart, Myntra, Meesho, Shopify, Nykaa, quick commerce, and more. What should we explore—platforms, a service, or getting a tailored quote?',
    deep:
      'You can browse **Partnership** for marketplace pages, **Services** for account management, creatives, compliance, and growth. If you share your category (fashion, FMCG, electronics, etc.), our team can suggest the right mix on Contact.',
    links: [
      { label: 'View services', path: '/#services' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    id: 'hours',
    keywords: ['hour', 'timing', 'open', 'when', 'available', 'ist', 'time', 'weekend', 'sunday'],
    patterns: [/monday|tuesday|wednesday|thursday|friday|saturday|business hour/i],
    minScore: 1,
    short:
      'We work **Monday–Saturday**, **9:00 AM–7:00 PM IST**. Email **info@ceukiindia.com** — we typically reply within **24 hours**.',
    deep:
      'For urgent marketplace issues, mention your platform and seller ID when you write to us so we can route you faster.',
    links: [{ label: 'Contact form', path: '/contact' }],
  },
  {
    id: 'location',
    keywords: ['location', 'address', 'office', 'where', 'noida', 'visit', 'map', 'india'],
    minScore: 1,
    short:
      'Our office is in **Sector 16, Noida, Uttar Pradesh (201301)**, India. Phone **+91 9508088497**, email **info@ceukiindia.com**.',
    deep:
      'If you are planning a visit, please schedule ahead via Contact so the right specialist is available.',
    links: [{ label: 'Contact & directions', path: '/contact' }],
  },
  {
    id: 'about',
    keywords: ['who', 'about', 'company', 'ceuki', 'what is ceuki', 'brand'],
    minScore: 1,
    short:
      'Ceuki supports **e-commerce growth**: marketplace ops, compliance, performance marketing, analytics, and creatives (photo, video, banners).',
    deep:
      'We work with brands that want structured execution—listings, ads, catalog, design, and reporting—so you can scale channels with clarity.',
    links: [
      { label: 'About', path: '/about' },
      { label: 'Brand', path: '/brand' },
    ],
  },
  {
    id: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'fee', 'charges', 'how much', 'package', 'retainer'],
    minScore: 1,
    short:
      'Pricing depends on **scope** (marketplaces, ad spend, creatives, compliance). We prepare a **custom quote** after understanding your catalog and goals.',
    deep:
      'Share your monthly revenue range, active platforms, and whether you need ads/creatives—our team responds with options on the Contact form.',
    links: [{ label: 'Get a quote', path: '/contact' }],
  },
  {
    id: 'services_overview',
    keywords: ['service', 'services', 'what do you', 'offer', 'help', 'do you do', 'capabilities'],
    minScore: 2,
    short:
      'We offer **account management** (Amazon, Flipkart, Myntra, Meesho), **business setup** (GST, company, legal), **growth** (SEO, PPC, ranking, sales), **analytics**, and **creatives** (photography, banners, video).',
    deep:
      'Tell me a platform name (e.g. Amazon) or a goal (e.g. improve ROAS), and I will point you to the right page.',
    links: [
      { label: 'Amazon service', path: '/services/amazon-seller-central' },
      { label: 'SEO & ads', path: '/services/seo-ppc-ads' },
    ],
  },
  {
    id: 'amazon',
    keywords: ['amazon', 'seller central', 'fba', 'a+'],
    priority: 10,
    minScore: 1,
    short:
      'We help with **Amazon Seller Central** — listings, ads, inventory discipline, and growth strategy.',
    deep:
      'We align content, search terms, and advertising with your margin goals; onboarding details are easier over email with your seller account context.',
    links: [
      { label: 'Amazon service page', path: '/services/amazon-seller-central' },
      { label: 'Amazon partnership', path: '/Partnership/amazon' },
    ],
  },
  {
    id: 'flipkart',
    keywords: ['flipkart'],
    priority: 10,
    minScore: 1,
    short: 'We support **Flipkart** account management, catalog health, and campaign scaling.',
    deep:
      'If you share category and monthly GMV, we can suggest listing fixes vs paid growth priorities.',
    links: [
      { label: 'Flipkart management', path: '/services/flipkart-management' },
      { label: 'Flipkart partnership', path: '/Partnership/flipkart' },
    ],
  },
  {
    id: 'myntra',
    keywords: ['myntra'],
    priority: 10,
    minScore: 1,
    short: 'We assist **Myntra** sellers with brand readiness, catalog, and marketplace ops.',
    deep:
      'Fashion brands often need strong imagery and size charts—our creatives team can pair with ops.',
    links: [
      { label: 'Myntra seller hub', path: '/services/myntra-seller-hub' },
      { label: 'Myntra partnership', path: '/Partnership/myntra' },
    ],
  },
  {
    id: 'meesho',
    keywords: ['meesho'],
    priority: 10,
    minScore: 1,
    short: 'We help **Meesho** sellers improve catalog, pricing discipline, and scale safely.',
    deep:
      'We focus on margin-aware pricing and repeatable catalog workflows as order volume grows.',
    links: [{ label: 'Meesho partnership', path: '/Partnership/meesho' }],
  },
  {
    id: 'shopify',
    keywords: ['shopify', 'd2c', 'direct to consumer'],
    priority: 10,
    minScore: 1,
    short:
      'We help **Shopify** brands with store hygiene, creatives, and performance marketing across channels.',
    deep:
      'If you also sell on marketplaces, we keep messaging and promos aligned to avoid channel conflict.',
    links: [
      { label: 'Shopify partnership', path: '/Partnership/shopify' },
      { label: 'Web / growth services', path: '/services/seo-ppc-ads' },
    ],
  },
  {
    id: 'nykaa',
    keywords: ['nykaa'],
    priority: 10,
    minScore: 1,
    short: 'We support **Nykaa** brand and seller use-cases with marketplace-specific guidance.',
    deep: 'Beauty and personal care often need strong compliance assets—our team can review gaps.',
    links: [{ label: 'Nykaa partnership', path: '/Partnership/nykaa' }],
  },
  {
    id: 'walmart',
    keywords: ['walmart'],
    priority: 10,
    minScore: 1,
    short: 'We help brands navigate **Walmart** marketplace requirements and listing quality.',
    deep: 'Cross-border catalog and compliance checks are easier with a structured brief on Contact.',
    links: [{ label: 'Walmart partnership', path: '/Partnership/walmart' }],
  },
  {
    id: 'jiomart',
    keywords: ['jiomart', 'jio mart'],
    priority: 10,
    minScore: 1,
    short: 'We assist with **JioMart** onboarding themes and operational readiness.',
    deep: 'Share your category and fulfillment model for tailored next steps.',
    links: [{ label: 'JioMart partnership', path: '/Partnership/jiomart' }],
  },
  {
    id: 'glowroad',
    keywords: ['glowroad', 'glow road'],
    priority: 10,
    minScore: 1,
    short: 'We support **GlowRoad** sellers with catalog and growth fundamentals.',
    links: [{ label: 'GlowRoad partnership', path: '/Partnership/glowroad' }],
  },
  {
    id: 'quick_commerce',
    keywords: ['blinkit', 'zepto', 'quick commerce', 'qcommerce', 'instant delivery'],
    priority: 10,
    minScore: 1,
    short:
      'We help brands plan **quick commerce** on **Blinkit** and **Zepto** — availability, promos, and ops rhythm.',
    deep:
      'Assortment and city-level supply decisions matter; we align creatives and promos to your stock strategy.',
    links: [
      { label: 'Blinkit', path: '/Partnership/blinkit' },
      { label: 'Zepto', path: '/Partnership/zepto' },
    ],
  },
  {
    id: 'seo_ads',
    keywords: ['seo', 'ppc', 'ads', 'google ads', 'sponsored', 'roas', 'acos'],
    minScore: 1,
    short:
      'Our **SEO & PPC** team improves discoverability and paid efficiency on marketplaces and the web.',
    deep:
      'We usually combine search term hygiene, structured testing, and reporting—scope depends on category competition.',
    links: [{ label: 'SEO & PPC service', path: '/services/seo-ppc-ads' }],
  },
  {
    id: 'ranking',
    keywords: ['rank', 'ranking', 'bestseller', 'visibility', 'organic rank'],
    minScore: 1,
    short:
      '**Product ranking** work focuses on relevance, conversion, and sustainable promo/search balance.',
    links: [{ label: 'Product ranking', path: '/services/product-ranking' }],
  },
  {
    id: 'sales_opt',
    keywords: ['sales optimization', 'conversion', 'cvr', 'listing quality'],
    minScore: 1,
    short:
      '**Sales optimization** improves PDPs, pricing/promo logic, and funnel leaks across touchpoints.',
    links: [{ label: 'Sales optimization', path: '/services/sales-optimization' }],
  },
  {
    id: 'photography',
    keywords: ['photo', 'photography', 'shoot', 'catalog image', 'infographic'],
    minScore: 1,
    short:
      'We deliver **product photography** and catalog-ready assets aligned to marketplace specs.',
    links: [{ label: 'Product photography', path: '/services/product-photography' }],
  },
  {
    id: 'banner',
    keywords: ['banner', 'creative', 'display'],
    minScore: 1,
    short: '**Banner design** for campaigns, storefronts, and seasonal promos.',
    links: [{ label: 'Banner design', path: '/services/banner-design' }],
  },
  {
    id: 'brand_creative',
    keywords: ['brand creative', 'brand asset', 'logo pack'],
    minScore: 1,
    short: '**Brand creatives** for cohesive identity across channels.',
    links: [{ label: 'Brand creatives', path: '/services/brand-creatives' }],
  },
  {
    id: 'video',
    keywords: ['video', 'reel', 'ad film', 'product video'],
    minScore: 1,
    short: '**Video production** for ads, PDPs, and social proof.',
    links: [{ label: 'Video production', path: '/services/video-production' }],
  },
  {
    id: 'business_setup',
    keywords: ['gst', 'company registration', 'pvt ltd', 'llp', 'trademark', 'compliance', 'legal'],
    minScore: 1,
    short:
      '**Business setup** covers GST, company registration, trademark, and ongoing **compliance** support.',
    deep:
      'Exact documents vary by structure—our specialists confirm checklists on Contact.',
    links: [
      { label: 'GST services', path: '/services/gst-services' },
      { label: 'Company registration', path: '/services/company-registration' },
      { label: 'Legal & trademark', path: '/services/legal-trademark' },
      { label: 'Compliance', path: '/services/compliance-support' },
    ],
  },
  {
    id: 'inventory',
    keywords: ['inventory', 'order', 'warehouse', 'fulfil', 'fulfill', 'oms', 'stock'],
    minScore: 1,
    short:
      '**Order & inventory** solutions help you synchronize stock and orders across channels.',
    links: [{ label: 'Order & inventory', path: '/services/order-inventory' }],
  },
  {
    id: 'analytics',
    keywords: ['analytics', 'dashboard', 'report', 'bi', 'metrics'],
    minScore: 1,
    short:
      'We build **analytics dashboards** for sales, ads, and ops KPIs you can act on weekly.',
    links: [{ label: 'Analytics dashboard', path: '/services/analytics-dashboard' }],
  },
  {
    id: 'career',
    keywords: ['career', 'job', 'hiring', 'vacancy', 'intern', 'apply'],
    minScore: 1,
    short: 'Open roles and applications: **Career** page.',
    links: [{ label: 'Careers', path: '/career' }],
  },
  {
    id: 'events',
    keywords: ['event', 'webinar', 'workshop', 'seminar'],
    minScore: 1,
    short: 'Sessions and updates are listed under **Events**.',
    links: [{ label: 'Events', path: '/events' }],
  },
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'dhanyavaad', 'धन्यवाद'],
    minScore: 1,
    short: "You're welcome! Ask anything else, or open **Contact** for a detailed discussion.",
    links: [{ label: 'Contact', path: '/contact' }],
  },
];

/** FAQ/common first for more specific matches, then core marketplace intents. */
const ALL_INTENTS = [...FAQ_COMMON_INTENTS, ...CORE_INTENTS];

function scoreIntent(n: string, intent: IntentDef): number {
  let s = 0;
  for (const kw of intent.keywords) {
    if (n.includes(kw)) s += 1;
  }
  if (intent.patterns) {
    for (const p of intent.patterns) {
      if (p.test(n)) s += 2;
    }
  }
  return s;
}

function pickIntent(q: string): IntentDef | null {
  const n = normalize(q);
  let best: IntentDef | null = null;
  let bestScore = -1;
  let bestPriority = -999;
  for (const intent of ALL_INTENTS) {
    const s = scoreIntent(n, intent);
    if (s < intent.minScore) continue;
    const p = intent.priority ?? 0;
    if (s > bestScore || (s === bestScore && p > bestPriority)) {
      bestScore = s;
      bestPriority = p;
      best = intent;
    }
  }
  return best;
}

function formatText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-gray-900">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function TypingDots() {
  return (
    <div className="flex justify-start" aria-live="polite" aria-label="Assistant is typing">
      <div className="flex items-center gap-1 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-duration:0.9s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-duration:0.9s] [animation-delay:0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-duration:0.9s] [animation-delay:0.3s]" />
      </div>
    </div>
  );
}

export function ChatBot() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [unknownStreak, setUnknownStreak] = useState(0);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const lastIntentId = useRef<string | null>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, open, typing, scrollToBottom]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openContactForm = useCallback(() => {
    navigate('/contact', { state: { focusContactForm: true } });
    setOpen(false);
  }, [navigate]);

  const pushBot = useCallback(
    (msg: Omit<ChatMessage, 'id'>) => {
      const id = `b-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setMessages((prev) => [...prev, { ...msg, id }]);
    },
    []
  );

  const runWithTyping = useCallback(
    (fn: () => void, replyLength: number) => {
      setTyping(true);
      const delay = Math.min(1400, 380 + Math.min(replyLength, 800) * 1.2);
      window.setTimeout(() => {
        setTyping(false);
        fn();
      }, delay);
    },
    []
  );

  const send = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text) return;

      const userMsg: ChatMessage = { id: `u-${Date.now()}`, role: 'user', text };
      setMessages((prev) => [...prev, userMsg]);
      setInput('');

      if (wantsContactForm(text)) {
        setUnknownStreak(0);
        lastIntentId.current = null;
        runWithTyping(() => {
          pushBot({
            role: 'bot',
            text: 'Taking you to **Contact** — add your platform, goals, and timeline so we respond with the right specialist.',
            links: [{ label: 'Open form', path: '/contact' }],
          });
          navigate('/contact', { state: { focusContactForm: true } });
          setOpen(false);
        }, 80);
        return;
      }

      const n = normalize(text);

      const bulkFirst = matchBulkKnowledge(n);
      if (bulkFirst) {
        setUnknownStreak(0);
        lastIntentId.current = bulkFirst.id;
        runWithTyping(() => {
          pushBot({
            role: 'bot',
            text: bulkFirst.short,
            links: bulkFirst.links,
          });
        }, bulkFirst.short.length);
        return;
      }

      if (isFollowUp(text) && lastIntentId.current) {
        const bulkFollow = getBulkReplyById(lastIntentId.current);
        if (bulkFollow) {
          setUnknownStreak(0);
          runWithTyping(() => {
            pushBot({
              role: 'bot',
              text: bulkFollow.deep,
              links: bulkFollow.links,
            });
          }, bulkFollow.deep.length);
          return;
        }
        const intent = ALL_INTENTS.find((i) => i.id === lastIntentId.current);
        if (intent) {
          setUnknownStreak(0);
          runWithTyping(() => {
            pushBot({
              role: 'bot',
              text: intent.deep,
              links: intent.links,
            });
          }, intent.deep.length);
          return;
        }
      }

      const intent = pickIntent(text);
      if (intent) {
        setUnknownStreak(0);
        lastIntentId.current = intent.id;
        runWithTyping(() => {
          pushBot({
            role: 'bot',
            text: intent.short,
            links: intent.links,
          });
        }, intent.short.length);
        return;
      }

      const nextStreak = unknownStreak + 1;
      setUnknownStreak(nextStreak);
      lastIntentId.current = null;

      const fallback =
        nextStreak >= 2
          ? "I'm not fully confident about that from here. Want me to open **Contact** so our team can answer precisely?"
          : "I couldn't match that to a specific topic yet. Try naming a **marketplace** (Amazon, Flipkart, …) or a **service** (SEO, GST, photography). You can also tap **Get a quote** below.";

      runWithTyping(() => {
        pushBot({
          role: 'bot',
          text: fallback,
          links:
            nextStreak >= 2
              ? [{ label: 'Contact us', path: '/contact' }]
              : [
                  { label: 'Services overview', path: '/#services' },
                  { label: 'Contact', path: '/contact' },
                ],
        });
      }, fallback.length);
    },
    [navigate, pushBot, runWithTyping, unknownStreak]
  );

  const resetChat = useCallback(() => {
    setMessages([WELCOME]);
    setUnknownStreak(0);
    lastIntentId.current = null;
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const openLink = (path: string) => {
    if (path.startsWith('/#')) {
      navigate('/');
      window.setTimeout(() => {
        const id = path.slice(2);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      setOpen(false);
      return;
    }
    navigate(path);
    setOpen(false);
  };

  const chatUi = (
    <div
      className="fixed z-[100] flex flex-col items-end gap-2 font-sans right-3 bottom-3 sm:right-4 sm:bottom-4"
      style={{
        right: 'max(0.75rem, env(safe-area-inset-right))',
        bottom: 'max(0.75rem, env(safe-area-inset-bottom))',
      }}
    >
      {open && (
        <div
          className="flex w-[min(100vw-2rem,420px)] max-h-[min(76vh,580px)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
          role="dialog"
          aria-label="Chat assistant"
        >
          <div className="flex items-center justify-between gap-2 bg-gradient-to-r from-[var(--ceuki-blue)] to-[var(--ceuki-bright)] px-4 py-3 text-white">
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <Sparkles className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Ceuki Assistant</p>
                <p className="truncate text-xs text-white/85">500+ phrases · Phone / toll-free · Basics</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                className="rounded-lg p-2 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/80"
                title="Clear conversation"
                aria-label="Clear conversation"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/80"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-gradient-to-b from-slate-50/90 to-white">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col gap-2 ${m.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[92%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-[var(--ceuki-blue)] to-[var(--ceuki-bright)] text-white'
                      : 'border border-gray-100 bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{formatText(m.text)}</div>
                </div>
                {m.role === 'bot' && m.links && m.links.length > 0 && (
                  <div className="flex max-w-[92%] flex-wrap gap-1.5 pl-0.5">
                    {m.links.map((link) => (
                      <button
                        key={`${m.id}-${link.path}`}
                        type="button"
                        onClick={() => openLink(link.path)}
                        className="inline-flex items-center gap-0.5 rounded-lg border border-[var(--ceuki-blue)]/25 bg-[var(--secondary)] px-2.5 py-1 text-xs font-medium text-[var(--ceuki-blue)] transition hover:bg-white"
                      >
                        {link.label}
                        <ChevronRight className="h-3 w-3 opacity-70" aria-hidden />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && <TypingDots />}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-gray-100 bg-white px-3 py-2 space-y-2">
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => send('What services do you offer?')}
                className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700 hover:bg-gray-50"
              >
                All services
              </button>
              <button
                type="button"
                onClick={() => send('How quickly can you set up my marketplace accounts?')}
                className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700 hover:bg-gray-50"
              >
                Setup time
              </button>
              <button
                type="button"
                onClick={() => send('Do I need GST to sell online?')}
                className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700 hover:bg-gray-50"
              >
                GST required?
              </button>
              <button
                type="button"
                onClick={() => send('Amazon seller help')}
                className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700 hover:bg-gray-50"
              >
                Amazon
              </button>
              <button
                type="button"
                onClick={() => send('How does pricing work?')}
                className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700 hover:bg-gray-50"
              >
                Pricing
              </button>
              <button
                type="button"
                onClick={() => send('Where is the FAQ on this website?')}
                className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700 hover:bg-gray-50"
              >
                Site FAQ
              </button>
              <button
                type="button"
                onClick={() => send('Contact form')}
                className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700 hover:bg-gray-50"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={openContactForm}
                className="inline-flex items-center gap-1 rounded-full border border-[var(--ceuki-orange)]/40 bg-orange-50 px-2.5 py-1 text-xs font-medium text-[var(--ceuki-text)] hover:bg-orange-100"
              >
                Open form
                <ExternalLink className="h-3 w-3" aria-hidden />
              </button>
            </div>
            <form onSubmit={onSubmit} className="flex gap-2">
              <label htmlFor="chatbot-input" className="sr-only">
                Message
              </label>
              <input
                id="chatbot-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything — GST, setup time, Amazon, ROI, site FAQ…"
                className="min-w-0 flex-1 rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-[var(--ceuki-bright)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]/30"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={typing}
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[var(--ceuki-blue)] to-[var(--ceuki-bright)] px-3 py-2.5 text-white shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[var(--ceuki-bright)] disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col items-end gap-2">
        <a
          href={CEUKI_WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp — Ceuki India"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/90 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          aria-label="Chat on WhatsApp with Ceuki India"
        >
          <WhatsAppGlyph className="h-7 w-7" />
        </a>
        <a
          href={CEUKI_TEL_HREF}
          title="Call Ceuki India"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg ring-2 ring-white/90 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-emerald-500/35"
          aria-label="Call Ceuki India on +91 89868 63081"
        >
          <Phone className="h-6 w-6" strokeWidth={2.25} />
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--ceuki-blue)] to-[var(--ceuki-bright)] text-white shadow-lg ring-2 ring-white/90 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-[var(--ceuki-bright)]/35 transition-transform"
          aria-expanded={open}
          aria-label={open ? 'Close chat' : 'Open chat'}
        >
          {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(chatUi, document.body);
}
