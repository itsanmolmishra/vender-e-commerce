/**
 * Large phrase + pattern layer (~500+ triggers) for greetings, phone/toll-free,
 * and very common e-commerce basics. Matched before the main intent engine.
 */

export type BulkLink = { label: string; path: string };

export type BulkReply = {
  id: string;
  short: string;
  deep: string;
  links?: BulkLink[];
};

const PHONE = '+91 9508088497';
const EMAIL = 'info@ceukiindia.com';
const HOURS = 'Monday–Saturday, 9:00 AM–7:00 PM IST';

/** Shared normalizer — keep in sync with ChatBot `normalize`. */
export function normalizeBulk(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[.,!?]+$/g, '');
}

const REPLIES: Record<string, Omit<BulkReply, 'id'> & { id?: string }> = {
  greeting: {
    short:
      `Hello! I'm **Ceuki's assistant**. Ask about **services**, **marketplaces**, **GST**, **ads**, or say **Contact** to reach our team.`,
    deep:
      `You can explore **Services** on the home page, or open **Partnership** for Amazon, Flipkart, and more. For a tailored plan, use **Contact**.`,
    links: [{ label: 'Services', path: '/#services' }, { label: 'Contact', path: '/contact' }],
  },
  goodbye: {
    short:
      'Thanks for chatting! If anything else comes up, message anytime—or use **Contact** for a detailed discussion.',
    deep: `We're here **${HOURS}**. Email **${EMAIL}** or call **${PHONE}**.`,
    links: [{ label: 'Contact', path: '/contact' }],
  },
  thanks: {
    short:
      "You're welcome! Happy to help with **Ceuki**, **e-commerce**, or **marketplace** questions.",
    deep: `Need humans in the loop? **Contact** or call **${PHONE}** (${HOURS}).`,
    links: [{ label: 'Contact', path: '/contact' }],
  },
  how_are_you: {
    short:
      "I'm doing great—thanks! Ready to help with **Ceuki's services**, **platforms**, or **getting a quote**.",
    deep:
      'Tell me your **category** (e.g. fashion, electronics) or **marketplace** for faster pointers.',
    links: [{ label: 'All services', path: '/#services' }],
  },
  phone_tollfree: {
    short:
      `**Phone (not toll-free):** **${PHONE}** · **${HOURS}**. **Email:** **${EMAIL}**. This site does **not** list a separate **1800 toll-free** line—use the number above or **Contact**.`,
    deep:
      'If you need **billing**, **enterprise**, or **NDA**—mention it on **Contact** so we route you correctly.',
    links: [{ label: 'Contact form', path: '/contact' }],
  },
  who_are_you: {
    short:
      "I'm **Ceuki's website assistant**—not a human, but I answer from Ceuki's **services**, **FAQ-style** info, and **common seller** topics.",
    deep:
      'For account-specific or legal advice, our team replies via **Contact** or phone.',
    links: [{ label: 'About', path: '/about' }, { label: 'Contact', path: '/contact' }],
  },
  what_is_ecommerce: {
    short:
      '**E-commerce** means buying/selling online—on **marketplaces** (Amazon, Flipkart, …) or your **own website** (e.g. Shopify).',
    deep:
      'Ceuki helps with **listings**, **ads**, **compliance**, **creatives**, and **operations** end-to-end.',
    links: [{ label: 'Services', path: '/#services' }],
  },
  gst_basic: {
    short:
      '**GST** is usually **required** to sell on major **Indian marketplaces**. We help with **registration & filings** under Business Setup.',
    deep:
      'Exact documents depend on **entity type**—share that on **Contact** for a checklist.',
    links: [{ label: 'GST services', path: '/services/gst-services' }],
  },
  pan_basic: {
    short:
      '**PAN** is commonly needed for **KYC** and **tax identity** when onboarding as a seller or company.',
    deep:
      'Platform-wise requirements differ—our **Business Setup** team can align **PAN + GST + bank** proofs.',
    links: [{ label: 'Company registration', path: '/services/company-registration' }],
  },
  cod: {
    short:
      '**COD** (cash on delivery) is offered by **buyers** per **marketplace rules**; you see it as a **payment mode** in orders.',
    deep:
      'Managing **RTO** and **returns** is part of **account handling**—we help tighten listings and fulfilment.',
    links: [{ label: 'Order & inventory', path: '/services/order-inventory' }],
  },
  shipping_basic: {
    short:
      '**Shipping** options depend on the **platform** (self-ship, **FBA**/Flipkart fulfilment, 3PL). We help choose what fits your **margin** and **speed**.',
    deep:
      'Share your **SKU weight** and **cities** on **Contact** for a practical stack.',
    links: [{ label: 'Amazon service', path: '/services/amazon-seller-central' }],
  },
  return_basic: {
    short:
      '**Returns** follow each **marketplace policy**. Good **listing accuracy** and **QC** reduce **wrong returns**.',
    deep:
      'We support **ops + analytics** to track **return reasons** and fix root causes.',
    links: [{ label: 'Sales optimization', path: '/services/sales-optimization' }],
  },
  review_basic: {
    short:
      '**Reviews** impact **conversion**. We improve **product**, **images**, **service**, and **follow-ups**—never fake reviews (against policy).',
    deep:
      'For **brand protection**, see **Legal & trademark** and marketplace **reporting** flows.',
    links: [{ label: 'Legal & trademark', path: '/services/legal-trademark' }],
  },
  payment_settlement: {
    short:
      '**Marketplaces** pay on **settlement cycles** (often weekly/bi-weekly) after fees—varies by **platform** and **account health**.',
    deep:
      'We help you **reconcile** payouts with **analytics** and **reports**.',
    links: [{ label: 'Analytics', path: '/services/analytics-dashboard' }],
  },
  listing_basic: {
    short:
      'A strong **listing** has **clear title**, **bullets**, **keywords**, **A+** (where allowed), and **compliant images**.',
    deep:
      'Our **SEO** and **creative** teams optimize for **search + conversion**.',
    links: [{ label: 'SEO & PPC', path: '/services/seo-ppc-ads' }],
  },
  ads_basic: {
    short:
      '**Sponsored ads** boost **visibility**; we optimize for **ACOS/ROAS** within your **margin**.',
    deep:
      'Share **category** and **budget** on **Contact** for a sensible structure.',
    links: [{ label: 'SEO & PPC', path: '/services/seo-ppc-ads' }],
  },
  inventory_basic: {
    short:
      '**Inventory** should stay **synced** across channels to avoid **overselling**—we implement **process + tools** per scope.',
    deep:
      'See **Order & inventory** for how we support **multi-channel** ops.',
    links: [{ label: 'Order & inventory', path: '/services/order-inventory' }],
  },
  brand_basic: {
    short:
      'Building a **brand** needs **trademark** where possible, strong **creatives**, and **consistent** PDPs across channels.',
    deep:
      'We combine **brand creatives**, **legal**, and **marketplace** execution.',
    links: [
      { label: 'Brand creatives', path: '/services/brand-creatives' },
      { label: 'Legal & trademark', path: '/services/legal-trademark' },
    ],
  },
  seller_new: {
    short:
      '**New sellers** usually need **GST**, **documents**, **catalog**, then **launch + ads**. We can guide end-to-end.',
    deep:
      'Tell us **category** and **budget** on **Contact** for a step-by-step plan.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  ceuki_office: {
    short:
      `**Office:** Sector **16, Noida**, Uttar Pradesh (**201301**), India. **Phone:** **${PHONE}** · **${EMAIL}**`,
    deep:
      'We work with brands **across India** remotely; **visits** by schedule via **Contact**.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
  website_help: {
    short:
      'Use the top **menu**: **Home**, **Partnership** (marketplaces), **Services**, **About**, **Contact**. Scroll Home for **FAQ**, **blog**, and **case studies**.',
    deep:
      'Stuck? Ask me a **keyword** (Amazon, GST, SEO…) or open **Contact**.',
    links: [{ label: 'Home', path: '/#home' }],
  },
  hindi_help: {
    short:
      `**Hindi / Hinglish** me bhi pooch sakte ho—**services**, **GST**, **Amazon**, **number**, **price** wagairah. **Phone:** **${PHONE}**`,
    deep:
      'Zyaada detail ke liye **Contact** form bhar do—team reply karegi.',
    links: [{ label: 'Contact', path: '/contact' }],
  },
};

function asBulk(id: keyof typeof REPLIES): BulkReply {
  const r = REPLIES[id];
  return {
    id: `bulk_${String(id)}`,
    short: r.short,
    deep: r.deep,
    links: r.links,
  };
}

/** Exact phrase → bulk reply id (without bulk_ prefix). */
function buildExactPhraseMap(): Map<string, keyof typeof REPLIES> {
  const m = new Map<string, keyof typeof REPLIES>();

  const add = (phrases: string[], key: keyof typeof REPLIES) => {
    for (const p of phrases) {
      const n = normalizeBulk(p);
      if (n) m.set(n, key);
    }
  };

  // --- Greetings & typos (~120) ---
  const gHi = [
    'hi',
    'hii',
    'hiii',
    'hiiii',
    'hlo',
    'helo',
    'heelo',
    'hai',
    'haii',
    'hy',
    'hii there',
    'hi there',
    'hi team',
    'hi ceuki',
    'hi sir',
    'hi madam',
    'hi bro',
    'hey',
    'hey there',
    'hey team',
    'heyy',
    'heyyy',
    'yo',
    'sup',
    'whats up',
    "what's up",
    'wassup',
    'hola',
    'hello',
    'helloo',
    'hellooo',
    'hello there',
    'hello team',
    'hello ceuki',
    'hellow',
    'hallo',
    'halo',
    'namaste',
    'namaskar',
    'namskar',
    'नमस्ते',
    'नमस्कार',
    'good morning',
    'good afternoon',
    'good evening',
    'good day',
    'morning',
    'evening',
    'gm',
    'gud mrng',
    'gud morning',
    'gud evening',
    'gud afternoon',
    'shubh ratri',
    'kaise ho',
    'kaise ho aap',
    'aap kaise ho',
    'how r u',
    'how are u',
    'howdy',
    'salam',
    'assalam',
    'sat sri akal',
    'radhe radhe',
    'jai shree ram',
    'jay hind',
    'vanakkam',
    'namaskaram',
    'pranam',
    'pranaam',
    'aadab',
    'satsriyakaal',
    'kem cho',
    'kem chho',
    'bhalo',
    'hello friends',
    'hi friends',
    'hey friends',
    'hi everyone',
    'hello everyone',
    'hey everyone',
    'hi all',
    'start',
    'start chat',
    'begin',
    'first message',
    'anyone there',
    'is anyone there',
    'are you there',
    'you there',
  ];
  add(gHi, 'greeting');

  // --- Goodbye (~55) ---
  add(
    [
      'bye',
      'byee',
      'byeee',
      'goodbye',
      'good bye',
      'see you',
      'see ya',
      'cya',
      'later',
      'ttyl',
      'alvida',
      'alvida ji',
      'phir milenge',
      'chalte hain',
      'main chalta hoon',
      'take care',
      'tc',
      'ok bye',
      'okay bye',
      'thank you bye',
      'thanks bye',
      'have a good day',
      'have a nice day',
      'good night',
      'gn',
      'gud night',
      'shubh ratri',
      'ram ram',
      'allah hafiz',
      'khuda hafiz',
      'end chat',
      'close chat',
      'stop',
      'exit',
      'quit',
    ],
    'goodbye'
  );

  // --- Thanks (~55) ---
  add(
    [
      'thanks',
      'thank you',
      'thank u',
      'thankyou',
      'thx',
      'tnx',
      'ty',
      'tysm',
      'thanks a lot',
      'thank you so much',
      'bahut dhanyavaad',
      'dhanyavaad',
      'धन्यवाद',
      'shukriya',
      'shukriya ji',
      'meharbani',
      'much appreciated',
      'appreciate it',
      'thanks for help',
      'thanks for helping',
      'thank you for help',
    ],
    'thanks'
  );

  // --- How are you (~35) ---
  add(
    [
      'how are you',
      'how are you doing',
      'how do you do',
      'how r you',
      'hows you',
      "how's you",
      'how is it going',
      'whats up with you',
      'all good',
      'you ok',
      'you okay',
      'everything ok',
      'sab theek',
      'sab badhiya',
      'kaisa hai',
      'kaisi ho',
      'kaise ho tum',
    ],
    'how_are_you'
  );

  // --- Phone / toll-free / helpline (~180) ---
  const phonePhrases: string[] = [];
  const phoneWords = [
    'phone',
    'phone number',
    'mobile',
    'mobile number',
    'cell',
    'contact number',
    'call number',
    'calling number',
    'helpline',
    'help line',
    'helpdesk',
    'help desk',
    'customer care',
    'customer care number',
    'customer support',
    'support number',
    'tech support',
    'call center',
    'call centre',
    'toll free',
    'toll-free',
    'tollfree',
    '1800',
    '1800 number',
    'free number',
    'free call',
    'complaint number',
    'register complaint',
    'number do',
    'number batao',
    'number dedo',
    'number please',
    'call karna hai',
    'call ka number',
    'phone no',
    'mobile no',
    'contact no',
    'whatsapp number',
    'whatsapp no',
    'kahan call karu',
    'kaise call karu',
    'kaunsa number',
    'head office number',
    'office number',
    'noida office number',
    'ceuki number',
    'ceuki phone',
    'ceuki contact',
    'ceuki helpline',
    'toll free number',
    'tollfree number',
    'is there toll free',
    'any toll free',
    '1800 toll free',
    'customer service number',
    'support line',
    'hotline',
    'hot line',
  ];
  const qStarts = [
    'what is',
    "what's",
    'what is the',
    'tell me',
    'give me',
    'i need',
    'need',
    'show',
    'mujhe',
    'mujhe chahiye',
    'kya hai',
    'batao',
    'bataiye',
    'please share',
    'share',
    'where is',
    'where can i find',
    'how to call',
    'can i call',
    'do you have',
    'is there a',
    '',
  ];
  for (const w of phoneWords) {
    for (const q of qStarts) {
      const s = `${q} ${w}`.trim();
      if (s) phonePhrases.push(s);
    }
  }
  add(phonePhrases, 'phone_tollfree');

  // --- Who are you / bot (~40) ---
  add(
    [
      'who are you',
      'what are you',
      'are you ai',
      'are you a bot',
      'are you robot',
      'are you human',
      'real person',
      'chatbot',
      'which ai',
      'gpt',
      'openai',
      'which model',
    ],
    'who_are_you'
  );

  // --- E-commerce basics (~90) ---
  add(
    [
      'what is ecommerce',
      'what is e-commerce',
      'what is online selling',
      'online business',
      'sell online',
      'how to sell online',
      'online selling kya hai',
      'ecommerce kya hai',
    ],
    'what_is_ecommerce'
  );

  add(
    [
      'what is gst',
      'gst kya hai',
      'gst chahiye',
      'gst zaroori hai',
      'gst mandatory',
      'without gst',
      'no gst',
    ],
    'gst_basic'
  );

  add(
    [
      'what is pan',
      'pan card',
      'pan zaroori',
      'pan required',
    ],
    'pan_basic'
  );

  add(
    [
      'what is cod',
      'cod meaning',
      'cash on delivery',
      'cod order',
    ],
    'cod'
  );

  add(
    [
      'shipping',
      'delivery',
      'dispatch',
      'courier',
      'logistics',
      'ship karne ka',
    ],
    'shipping_basic'
  );

  add(
    [
      'return policy',
      'returns',
      'refund',
      'rto',
      'wrong item',
    ],
    'return_basic'
  );

  add(
    [
      'reviews',
      'rating',
      'stars',
      'feedback',
      'bad review',
    ],
    'review_basic'
  );

  add(
    [
      'payment',
      'payout',
      'settlement',
      'when will i get money',
      'paisa kab milega',
      'payment kab aayega',
    ],
    'payment_settlement'
  );

  add(
    [
      'listing',
      'product page',
      'pdp',
      'title description',
      'bullet points',
    ],
    'listing_basic'
  );

  add(
    [
      'ads',
      'advertising',
      'sponsored',
      'ppc',
      'sponsored ads',
    ],
    'ads_basic'
  );

  add(
    [
      'stock',
      'inventory',
      'warehouse',
      'out of stock',
      'overselling',
    ],
    'inventory_basic'
  );

  add(
    [
      'brand',
      'branding',
      'logo',
      'trademark basics',
    ],
    'brand_basic'
  );

  add(
    [
      'new seller',
      'i am new',
      'beginner',
      'pehli baar',
      'start selling',
      'seller kaise bane',
    ],
    'seller_new'
  );

  add(
    [
      'where is office',
      'office address',
      'noida address',
      'location',
      'map',
      'visit office',
    ],
    'ceuki_office'
  );

  add(
    [
      'how to use website',
      'website help',
      'navigation',
      'menu',
      'where is faq',
      'faq kahan hai',
    ],
    'website_help'
  );

  add(
    [
      'hindi me batao',
      'hindi me',
      'hinglish',
      'samjhao hindi',
      'hindi question',
    ],
    'hindi_help'
  );

  return m;
}

const EXACT_MAP = buildExactPhraseMap();

/** Regex buckets — catch-all for common phrasing not in exact map. */
function matchBulkRegex(n: string): keyof typeof REPLIES | null {
  if (n.length <= 44) {
    if (
      /^(hi|hello|hey|hii|hiii|helo|heelo|namaste|namaskar|good morning|good afternoon|good evening|gm)(\s*[!.,:])*$/i.test(
        n
      )
    ) {
      return 'greeting';
    }
  }
  if (
    /\b(toll\s*-?\s*free|1800\b|helpline|customer care|support number|phone number|mobile number|contact number|call center|kya.*number|number batao|number do)\b/i.test(
      n
    ) &&
    !/\b(quote|proposal|custom plan|project)\b/i.test(n)
  ) {
    return 'phone_tollfree';
  }
  if (/\b(who are you|are you (a )?bot|chatbot|ai\?)\b/i.test(n)) return 'who_are_you';
  if (/\b(thank you|thanks|dhanyavaad|shukriya)\b/i.test(n) && n.length < 40) return 'thanks';
  if (/\b(bye|goodbye|see you|alvida)\b/i.test(n) && n.length < 40) return 'goodbye';
  if (/\bhow are you\b/i.test(n)) return 'how_are_you';
  if (/\bwhat is (e-?commerce|ecommerce|online selling)\b/i.test(n)) return 'what_is_ecommerce';
  if (/\b(gst.*mandatory|need gst|gst required)\b/i.test(n)) return 'gst_basic';
  return null;
}

const BULK_REGISTRY: Record<string, BulkReply> = {};
for (const k of Object.keys(REPLIES) as (keyof typeof REPLIES)[]) {
  const b = asBulk(k);
  BULK_REGISTRY[b.id] = b;
}

export function getBulkReplyById(id: string | null): BulkReply | null {
  if (!id || !id.startsWith('bulk_')) return null;
  return BULK_REGISTRY[id] ?? null;
}

/** ~500+ exact + regex coverage. */
export function matchBulkKnowledge(normalizedInput: string): BulkReply | null {
  const n = normalizeBulk(normalizedInput);
  if (!n) return null;

  const exact = EXACT_MAP.get(n);
  if (exact) return asBulk(exact);

  const rx = matchBulkRegex(n);
  if (rx) return asBulk(rx);

  return null;
}

export function getBulkTriggerCountApprox(): number {
  return EXACT_MAP.size + 50;
}
