import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BarChart,
  Clock,
  Globe,
  Heart,
  MapPin,
  Package,
  Rocket,
  Shield,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from 'lucide-react';

export interface PlatformServiceBlock {
  category: string;
  icon: LucideIcon;
  color: string;
  items: string[];
}

export interface PlatformPageConfig {
  brandName: string;
  HeroIcon: LucideIcon;
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleGradient: string;
  heroDescription: string;
  primaryCta: string;
  secondaryCta: string;
  metrics: { label: string; value: string; sublabel: string }[];
  benefitsSectionTitle: string;
  benefitsSectionSubtitle: string;
  benefits: { icon: LucideIcon; title: string; description: string }[];
  servicesSectionTitle: string;
  servicesSectionSubtitle: string;
  services: PlatformServiceBlock[];
  ctaTitle: string;
  ctaDescription: string;
  pageBgClass: string;
}

export const nykaaPlatformConfig: PlatformPageConfig = {
  brandName: 'Nykaa',
  HeroIcon: Sparkles,
  heroBadge: 'Nykaa Beauty & Fashion',
  heroTitleLine1: "Grow on India's",
  heroTitleGradient: 'Leading Beauty & Lifestyle Destination',
  heroDescription:
    'List cosmetics, skincare, fashion, and wellness products with Ceuki—from brand onboarding and catalog hygiene to campaigns that convert.',
  primaryCta: 'Start on Nykaa',
  secondaryCta: 'Explore Services',
  metrics: [
    { label: 'Beauty-first audience', value: 'Crores+', sublabel: 'monthly visits' },
    { label: 'Brand trust', value: 'Premium', sublabel: 'positioning' },
    { label: 'Categories', value: 'Beauty +', sublabel: 'fashion & more' },
    { label: 'Support', value: '360°', sublabel: 'listing to ads' },
  ],
  benefitsSectionTitle: 'Why Nykaa?',
  benefitsSectionSubtitle: 'Purpose-built for beauty, personal care, and premium lifestyle brands.',
  benefits: [
    { icon: Heart, title: 'Beauty-first shoppers', description: 'High-intent customers browsing for cosmetics, skincare, and self-care.' },
    { icon: Star, title: 'Brand discovery', description: 'Editorial-style discovery and strong brand storytelling on PDPs.' },
    { icon: Shield, title: 'Trust & authenticity', description: 'Positioning that rewards genuine products and clear claims.' },
    { icon: TrendingUp, title: 'Campaign peaks', description: 'Plan for Pink Friday, festive beauty, and category sale events.' },
  ],
  servicesSectionTitle: 'Nykaa Growth Services',
  servicesSectionSubtitle: 'End-to-end support tailored for beauty & lifestyle sellers.',
  services: [
    {
      category: 'Onboarding & Catalog',
      icon: Package,
      color: 'from-pink-600 to-rose-500',
      items: ['Seller onboarding & KYC', 'Category mapping & compliance', 'Rich PDP content & ingredients', 'Bundle & combo planning'],
    },
    {
      category: 'Merchandising & Content',
      icon: Sparkles,
      color: 'from-fuchsia-600 to-pink-500',
      items: ['A+ style storytelling', 'Lifestyle imagery guidance', 'Shade/SKU hygiene', 'Review & rating strategy'],
    },
    {
      category: 'Growth & Ads',
      icon: TrendingUp,
      color: 'from-blue-600 to-indigo-600',
      items: ['Sponsored placements', 'Event & sale calendars', 'Audience-led offers', 'Performance reporting'],
    },
    {
      category: 'Operations',
      icon: Truck,
      color: 'from-orange-500 to-pink-600',
      items: ['Inventory planning', 'Expiry & batch discipline', 'Returns insights', 'SLA-friendly fulfillment advice'],
    },
  ],
  ctaTitle: 'Ready to Shine on Nykaa?',
  ctaDescription: 'Partner with Ceuki to launch, optimise, and scale your beauty & lifestyle brand.',
  pageBgClass: 'from-pink-50/90 via-white to-rose-50/50',
};

export const walmartPlatformConfig: PlatformPageConfig = {
  brandName: 'Walmart',
  HeroIcon: Store,
  heroBadge: 'Walmart Marketplace',
  heroTitleLine1: 'Scale with',
  heroTitleGradient: 'Global Retail Standards',
  heroDescription:
    'Win on Walmart with sharp catalog discipline, competitive pricing intelligence, and fulfilment excellence aligned to marketplace policies.',
  primaryCta: 'Sell on Walmart',
  secondaryCta: 'Talk to Experts',
  metrics: [
    { label: 'Quality bar', value: 'High', sublabel: 'trust & compliance' },
    { label: 'Reach', value: 'Global', sublabel: 'marketplace footprint' },
    { label: 'Ops focus', value: 'WFS', sublabel: 'fulfilment ready' },
    { label: 'Growth', value: 'Data-led', sublabel: 'listing & ads' },
  ],
  benefitsSectionTitle: 'Why Walmart?',
  benefitsSectionSubtitle: 'A marketplace that rewards reliable sellers and consistent fulfilment.',
  benefits: [
    { icon: Shield, title: 'Trust-forward', description: 'Strong emphasis on authentic listings and policy adherence.' },
    { icon: Globe, title: 'Scale potential', description: 'Connect with shoppers who value value and reliability.' },
    { icon: BarChart, title: 'Analytics depth', description: 'Use performance data to refine inventory and pricing.' },
    { icon: Truck, title: 'Fulfilment fit', description: 'WFS and shipping templates that match customer expectations.' },
  ],
  servicesSectionTitle: 'Walmart Marketplace Management',
  servicesSectionSubtitle: 'Operational rigour to grow sustainably on Walmart.',
  services: [
    {
      category: 'Account & Compliance',
      icon: Package,
      color: 'from-blue-700 to-blue-500',
      items: ['Seller onboarding & verification', 'Category & brand approvals', 'Listing quality & variants', 'Policy monitoring'],
    },
    {
      category: 'Catalog & Pricing',
      icon: TrendingUp,
      color: 'from-cyan-600 to-blue-600',
      items: ['Competitive benchmarking', 'MAP & promo rules', 'Bulk catalog updates', 'Search relevance tuning'],
    },
    {
      category: 'Advertising',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      items: ['Sponsored search & display', 'Budget allocation', 'ROAS tracking', 'Seasonal pushes'],
    },
    {
      category: 'Fulfilment',
      icon: Truck,
      color: 'from-slate-600 to-blue-700',
      items: ['WFS readiness', 'Inventory placement', 'Returns reduction', 'SLA dashboards'],
    },
  ],
  ctaTitle: 'Build Momentum on Walmart',
  ctaDescription: 'Ceuki helps you align operations, listings, and ads for marketplace success.',
  pageBgClass: 'from-blue-50/80 via-white to-cyan-50/40',
};

export const jiomartPlatformConfig: PlatformPageConfig = {
  brandName: 'JioMart',
  HeroIcon: ShoppingBag,
  heroBadge: 'JioMart',
  heroTitleLine1: 'Reach households',
  heroTitleGradient: 'Across India with JioMart',
  heroDescription:
    "From kirana-led commerce to omnichannel reach—optimise your JioMart presence with Ceuki's onboarding, catalog, and growth playbooks.",
  primaryCta: 'Grow on JioMart',
  secondaryCta: 'View Services',
  metrics: [
    { label: 'Hyperlocal', value: 'Strong', sublabel: 'pincode coverage' },
    { label: 'Categories', value: 'Grocery+', sublabel: 'daily needs' },
    { label: 'Velocity', value: 'Fast', sublabel: 'repeat orders' },
    { label: 'Support', value: 'Full', sublabel: 'ops to promos' },
  ],
  benefitsSectionTitle: 'Why JioMart?',
  benefitsSectionSubtitle: 'Blend of digital scale and local retail familiarity.',
  benefits: [
    { icon: MapPin, title: 'Local reach', description: 'Serve neighbourhoods with strong delivery expectations.' },
    { icon: Users, title: 'Household demand', description: 'High-frequency purchases across FMCG and daily needs.' },
    { icon: Zap, title: 'Quick turns', description: 'Optimise for stock freshness and fast replenishment.' },
    { icon: Shield, title: 'Trust', description: 'Clear MRP, pack sizes, and compliance for grocery norms.' },
  ],
  servicesSectionTitle: 'JioMart Seller Services',
  servicesSectionSubtitle: 'Operational excellence for high-velocity categories.',
  services: [
    {
      category: 'Onboarding & Catalog',
      icon: Package,
      color: 'from-green-600 to-emerald-500',
      items: ['Seller setup', 'Category mapping', 'SKU & pack hygiene', 'Bulk listing tools'],
    },
    {
      category: 'Merchandising',
      icon: Star,
      color: 'from-lime-600 to-green-600',
      items: ['Promo & combo planning', 'Visibility during peak days', 'Cross-sell bundles', 'Price ladder management'],
    },
    {
      category: 'Supply & Inventory',
      icon: Truck,
      color: 'from-teal-600 to-cyan-600',
      items: ['Stock depth planning', 'Near-expiry alerts', 'Returns analytics', 'Fulfilment SLAs'],
    },
    {
      category: 'Growth',
      icon: BarChart,
      color: 'from-blue-600 to-green-600',
      items: ['Weekly performance reviews', 'Category insights', 'Competitor tracking', 'Margin improvement'],
    },
  ],
  ctaTitle: 'Ready for JioMart Growth?',
  ctaDescription: 'Let Ceuki streamline your catalog, supply rhythm, and promotions.',
  pageBgClass: 'from-green-50/80 via-white to-emerald-50/40',
};

export const glowroadPlatformConfig: PlatformPageConfig = {
  brandName: 'GlowRoad',
  HeroIcon: Users,
  heroBadge: 'GlowRoad',
  heroTitleLine1: 'Grow with',
  heroTitleGradient: 'Social Commerce & Resellers',
  heroDescription:
    'Activate resellers, sharpen your catalog, and scale repeat orders on GlowRoad with Ceuki’s community-led growth playbook.',
  primaryCta: 'Start on GlowRoad',
  secondaryCta: 'See How We Help',
  metrics: [
    { label: 'Reseller-led', value: 'Viral', sublabel: 'sharing loops' },
    { label: 'Categories', value: 'Wide', sublabel: 'fashion & lifestyle' },
    { label: 'Margins', value: 'Healthy', sublabel: 'with right pricing' },
    { label: 'Ops', value: 'Lean', sublabel: 'order routing' },
  ],
  benefitsSectionTitle: 'Why GlowRoad?',
  benefitsSectionSubtitle: 'Built for social selling and reseller-led distribution.',
  benefits: [
    { icon: Users, title: 'Reseller network', description: 'Amplify reach through trusted micro-sellers.' },
    { icon: TrendingUp, title: 'Shareable catalog', description: 'Creatives and offers that travel in WhatsApp groups.' },
    { icon: Zap, title: 'Fast iteration', description: 'Test bundles and price points quickly.' },
    { icon: Heart, title: 'Community trust', description: 'Peer recommendations that convert better than cold ads.' },
  ],
  servicesSectionTitle: 'GlowRoad Growth Services',
  servicesSectionSubtitle: 'End-to-end support for social sellers and brands.',
  services: [
    {
      category: 'Onboarding & Catalog',
      icon: Package,
      color: 'from-violet-600 to-purple-600',
      items: ['Account setup', 'SKU hygiene', 'Reseller-friendly packs', 'Returns policy clarity'],
    },
    {
      category: 'Social Selling',
      icon: Star,
      color: 'from-fuchsia-600 to-violet-500',
      items: ['Share creatives', 'Offer calendars', 'Group-buy mechanics', 'Influencer-style scripts'],
    },
    {
      category: 'Pricing & Promos',
      icon: TrendingUp,
      color: 'from-orange-500 to-pink-600',
      items: ['Margin-safe pricing', 'Flash deals', 'Volume incentives', 'Competitor watch'],
    },
    {
      category: 'Analytics',
      icon: BarChart,
      color: 'from-indigo-600 to-blue-600',
      items: ['Reseller performance', 'Repeat orders', 'Category mix', 'Payout tracking'],
    },
  ],
  ctaTitle: 'Scale Your GlowRoad Business',
  ctaDescription: 'Ceuki helps you align catalog, community, and fulfilment.',
  pageBgClass: 'from-violet-50/80 via-white to-fuchsia-50/40',
};

export const blinkitPlatformConfig: PlatformPageConfig = {
  brandName: 'Blinkit',
  HeroIcon: Zap,
  heroBadge: 'Q-Commerce (Blinkit)',
  heroTitleLine1: 'Win in',
  heroTitleGradient: 'Minutes, Not Days',
  heroDescription:
    'Quick commerce needs fast replenishment, tight inventory, and city-wise operations. Ceuki helps you stay in-stock and visible on Blinkit.',
  primaryCta: 'Optimise on Blinkit',
  secondaryCta: 'Operational Audit',
  metrics: [
    { label: 'SLA', value: 'Minutes', sublabel: 'delivery promise' },
    { label: 'Dark stores', value: 'City', sublabel: 'network depth' },
    { label: 'Inventory', value: 'Real-time', sublabel: 'shelf sync' },
    { label: 'Velocity', value: 'High', sublabel: 'impulse orders' },
  ],
  benefitsSectionTitle: 'Why Blinkit?',
  benefitsSectionSubtitle: 'Instant commerce for daily essentials and impulse categories.',
  benefits: [
    { icon: Clock, title: 'Speed matters', description: 'Customers expect availability in minutes, not hours.' },
    { icon: MapPin, title: 'Hyperlocal', description: 'Dark-store level planning and city-wise demand.' },
    { icon: Package, title: 'Shelf discipline', description: 'SKU mix, pack sizes, and expiry handling.' },
    { icon: TrendingUp, title: 'Repeat baskets', description: 'Win with availability and replenishment rhythm.' },
  ],
  servicesSectionTitle: 'Blinkit Q-Commerce Services',
  servicesSectionSubtitle: 'Operational precision for quick commerce.',
  services: [
    {
      category: 'Onboarding & Assortment',
      icon: Package,
      color: 'from-yellow-500 to-amber-600',
      items: ['Listing & pack compliance', 'Assortment by city', 'Promo & MRP hygiene', 'NPI launches'],
    },
    {
      category: 'Inventory & Supply',
      icon: Truck,
      color: 'from-lime-600 to-yellow-500',
      items: ['Replenishment cadence', 'Stock-out alerts', 'Wastage control', 'Vendor coordination'],
    },
    {
      category: 'Visibility & Growth',
      icon: Star,
      color: 'from-orange-500 to-red-500',
      items: ['Search placement', 'In-app offers', 'Peak-hour planning', 'Category insights'],
    },
    {
      category: 'Analytics',
      icon: BarChart,
      color: 'from-slate-700 to-yellow-600',
      items: ['City-wise performance', 'Basket analysis', 'Margin tracking', 'SLA dashboards'],
    },
  ],
  ctaTitle: 'Stay In-Stock on Blinkit',
  ctaDescription: 'Partner with Ceuki for fast-moving ops and growth on quick commerce.',
  pageBgClass: 'from-yellow-50/90 via-white to-amber-50/50',
};

export const zeptoPlatformConfig: PlatformPageConfig = {
  brandName: 'Zepto',
  HeroIcon: Rocket,
  heroBadge: 'Q-Commerce (Zepto)',
  heroTitleLine1: 'Scale with',
  heroTitleGradient: '10-Minute Commerce',
  heroDescription:
    'Zepto rewards brands that can keep shelves full and operations tight. Ceuki supports onboarding, city-wise assortment, and growth analytics.',
  primaryCta: 'Grow on Zepto',
  secondaryCta: 'Talk to Experts',
  metrics: [
    { label: 'Promise', value: '10 min', sublabel: 'delivery ethos' },
    { label: 'Urban', value: 'Dense', sublabel: 'city coverage' },
    { label: 'Ops', value: 'Tight', sublabel: 'inventory discipline' },
    { label: 'Growth', value: 'Data', sublabel: 'led decisions' },
  ],
  benefitsSectionTitle: 'Why Zepto?',
  benefitsSectionSubtitle: 'Premium quick-commerce experience for time-poor urban shoppers.',
  benefits: [
    { icon: Rocket, title: 'Velocity', description: 'Ultra-fast fulfilment that rewards reliable supply.' },
    { icon: Star, title: 'Brand discovery', description: 'Strong placement for high-velocity SKUs.' },
    { icon: Shield, title: 'Quality bar', description: 'Packaging, labelling, and cold-chain where needed.' },
    { icon: BarChart, title: 'Insights', description: 'City and store-level performance to iterate fast.' },
  ],
  servicesSectionTitle: 'Zepto Q-Commerce Services',
  servicesSectionSubtitle: 'Launch, replenish, and optimise for 10-minute delivery.',
  services: [
    {
      category: 'Onboarding & Catalog',
      icon: Package,
      color: 'from-purple-600 to-indigo-600',
      items: ['Seller onboarding', 'Category fit', 'Pack & price ladder', 'Compliance checks'],
    },
    {
      category: 'City & Supply',
      icon: MapPin,
      color: 'from-pink-600 to-purple-600',
      items: ['City-wise assortment', 'Dark-store rhythm', 'Vendor SLAs', 'Shrinkage control'],
    },
    {
      category: 'Merchandising',
      icon: Star,
      color: 'from-violet-600 to-fuchsia-500',
      items: ['In-app visibility', 'Bundles & offers', 'Peak-hour planning', 'Category promos'],
    },
    {
      category: 'Performance',
      icon: TrendingUp,
      color: 'from-indigo-600 to-blue-600',
      items: ['ROAS & margin views', 'Basket analysis', 'Competitor tracking', 'Weekly growth reviews'],
    },
  ],
  ctaTitle: 'Ready for Zepto Scale?',
  ctaDescription: 'Ceuki helps you align operations and growth for quick commerce.',
  pageBgClass: 'from-purple-50/85 via-white to-indigo-50/45',
};
