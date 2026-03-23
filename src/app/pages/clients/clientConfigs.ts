import type { LucideIcon } from 'lucide-react';
import { Award, BarChart, Globe, Package, Router, Shield, Sparkles, TrendingUp, Zap } from 'lucide-react';

export interface ClientPageConfig {
  slug: string;
  brandName: string;
  logoSrc: string;
  HeroIcon: LucideIcon;
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleGradient: string;
  heroDescription: string;
  metrics: { label: string; value: string; sublabel: string }[];
  benefits: { icon: LucideIcon; title: string; description: string }[];
  focusTitle: string;
  focusItems: string[];
  pageBgClass: string;
  brandFrom: string;
  brandTo: string;
  brandSoftFrom: string;
  brandSoftTo: string;
}

export const clientPageConfigs: Record<string, ClientPageConfig> = {
  'd-link': {
    slug: 'd-link',
    brandName: 'D-Link',
    logoSrc: '/clients/d-link.svg',
    HeroIcon: Router,
    heroBadge: 'Ceuki × D-Link',
    heroTitleLine1: 'Scale D-Link networking &',
    heroTitleGradient: 'smart home on marketplaces',
    heroDescription:
      'From routers and switches to connected home—Ceuki helps D-Link partners and sellers with catalog accuracy, seasonal campaigns, and performance across Indian e-commerce.',
    metrics: [
      { label: 'Categories', value: 'Networking+', sublabel: 'Wi‑Fi, switches, IoT' },
      { label: 'Focus', value: 'B2C +', sublabel: 'B2B listings' },
      { label: 'Coverage', value: 'Pan-India', sublabel: 'fulfilment aware' },
      { label: 'Support', value: '360°', sublabel: 'ads & ops' },
    ],
    benefits: [
      { icon: Package, title: 'SKU discipline', description: 'Variants, compatibility, and spec sheets aligned to marketplace templates.' },
      { icon: TrendingUp, title: 'Peak planning', description: 'Festive and sale events with inventory and ad pacing.' },
      { icon: Shield, title: 'Brand trust', description: 'Consistent messaging and authorised-seller positioning.' },
      { icon: BarChart, title: 'Reporting', description: 'Visibility on ACOS, share of shelf, and regional demand.' },
    ],
    focusTitle: 'What we run for D-Link sellers',
    focusItems: [
      'Listing optimisation & A+ style content where applicable',
      'Sponsored ads and search term refinement',
      'Multi-channel inventory alignment with partner policies',
      'Creative refreshes for routers, mesh, and smart home bundles',
    ],
    pageBgClass: 'from-slate-50 via-cyan-50/40 to-white',
    brandFrom: '#0A8AA6',
    brandTo: '#0E7490',
    brandSoftFrom: '#ECFEFF',
    brandSoftTo: '#E0F2FE',
  },
  tenda: {
    slug: 'tenda',
    brandName: 'Tenda',
    logoSrc: '/clients/tenda.svg',
    HeroIcon: Zap,
    heroBadge: 'Ceuki × Tenda',
    heroTitleLine1: 'Grow Tenda',
    heroTitleGradient: 'connectivity & Wi‑Fi online',
    heroDescription:
      'Affordable networking with strong value perception—Ceuki supports Tenda sellers with sharp PDPs, promo planning, and marketplace execution.',
    metrics: [
      { label: 'Positioning', value: 'Value', sublabel: 'mass market' },
      { label: 'Velocity', value: 'Fast', sublabel: 'SKU updates' },
      { label: 'Channels', value: 'Multi', sublabel: 'marketplaces' },
      { label: 'Ops', value: 'Lean', sublabel: 'scalable playbooks' },
    ],
    benefits: [
      { icon: Sparkles, title: 'Conversion-first PDPs', description: 'Clear specs, comparison hooks, and bundle ideas.' },
      { icon: Globe, title: 'Regional demand', description: 'Pin-code and city-level insights for stock and ads.' },
      { icon: Award, title: 'Deals & coupons', description: 'Aligned to platform calendars without margin leaks.' },
      { icon: Router, title: 'Category clarity', description: 'Mesh vs router vs extender—reduced returns from confusion.' },
    ],
    focusTitle: 'What we run for Tenda sellers',
    focusItems: [
      'Catalog hygiene for routers, extenders, and switches',
      'Event and Big Billion Day–style sale readiness',
      'Review and rating programmes within policy',
      'Performance dashboards for your account team',
    ],
    pageBgClass: 'from-orange-50/50 via-white to-slate-50',
    brandFrom: '#F2581A',
    brandTo: '#EA580C',
    brandSoftFrom: '#FFF7ED',
    brandSoftTo: '#FFEDD5',
  },
  portronix: {
    slug: 'portronix',
    brandName: 'Portronix',
    logoSrc: '/clients/portronix.svg',
    HeroIcon: Package,
    heroBadge: 'Ceuki × Portronix',
    heroTitleLine1: 'Launch & scale',
    heroTitleGradient: 'Portronix with Ceuki',
    heroDescription:
      'Structured onboarding, marketplace fit, and growth programmes for Portronix—tailored listing strategy, creatives, and fulfilment-aware planning.',
    metrics: [
      { label: 'Stage', value: 'Growth', sublabel: 'partner-led' },
      { label: 'Scope', value: 'Full', sublabel: 'ops + marketing' },
      { label: 'Agility', value: 'High', sublabel: 'quick iterations' },
      { label: 'Team', value: 'Dedicated', sublabel: 'pods' },
    ],
    benefits: [
      { icon: TrendingUp, title: 'GTM clarity', description: 'Category, pricing ladder, and hero SKUs defined upfront.' },
      { icon: Shield, title: 'Compliance-ready', description: 'Documentation and claims aligned to platform norms.' },
      { icon: BarChart, title: 'Measurable growth', description: 'Weekly readouts on traffic, orders, and margin signals.' },
      { icon: Sparkles, title: 'Brand shelf', description: 'Storefront and campaign assets that feel cohesive.' },
    ],
    focusTitle: 'What we run for Portronix',
    focusItems: [
      'Marketplace selection and phased rollout',
      'Creative sprints for launches and seasonal pushes',
      'Inventory and order cadence with your supply chain',
      'Always-on and burst ad mixes',
    ],
    pageBgClass: 'from-rose-50/40 via-white to-orange-50/20',
    brandFrom: '#E4002B',
    brandTo: '#B91C1C',
    brandSoftFrom: '#FFF1F2',
    brandSoftTo: '#FFE4E6',
  },
  'tp-link': {
    slug: 'tp-link',
    brandName: 'TP-Link',
    logoSrc: '/clients/tp-link.svg',
    HeroIcon: Router,
    heroBadge: 'Ceuki × TP-Link',
    heroTitleLine1: 'Dominate listings for',
    heroTitleGradient: 'TP-Link & Deco',
    heroDescription:
      'Enterprise-grade home and SMB networking—Ceuki helps TP-Link sellers win on search, protect brand equity, and scale ads with disciplined ops.',
    metrics: [
      { label: 'Portfolio', value: 'Deep', sublabel: 'Deco, Omada, Archer' },
      { label: 'Premium', value: 'High', sublabel: 'A+ intent' },
      { label: 'Reach', value: 'National', sublabel: 'tiered cities' },
      { label: 'Ads', value: 'Structured', sublabel: 'ACOS guardrails' },
    ],
    benefits: [
      { icon: Shield, title: 'Brand-safe execution', description: 'MAP-aware messaging and authorised seller narratives.' },
      { icon: TrendingUp, title: 'Search dominance', description: 'Keyword architecture across hero and long-tail SKUs.' },
      { icon: BarChart, title: 'Portfolio analytics', description: 'Segment performance and cross-sell opportunities.' },
      { icon: Globe, title: 'Omnichannel sync', description: 'Align D2C and marketplace promos where relevant.' },
    ],
    focusTitle: 'What we run for TP-Link sellers',
    focusItems: [
      'Mesh, Wi‑Fi 6/7, and SMB switch storytelling',
      'Lightning deals and sponsor slots with margin checks',
      'RMA and return analytics to improve listing truth',
      'Executive-ready monthly business reviews',
    ],
    pageBgClass: 'from-cyan-50/60 via-white to-slate-50/40',
    brandFrom: '#4BC0C8',
    brandTo: '#2563EB',
    brandSoftFrom: '#ECFEFF',
    brandSoftTo: '#EFF6FF',
  },
};

export const clientNavItems: { name: string; path: string; slug: string; logoSrc: string }[] = [
  { name: 'D-Link', path: '/clients/d-link', slug: 'd-link', logoSrc: '/clients/d-link.svg' },
  { name: 'Tenda', path: '/clients/tenda', slug: 'tenda', logoSrc: '/clients/tenda.svg' },
  { name: 'Portronix', path: '/clients/portronix', slug: 'portronix', logoSrc: '/clients/portronix.svg' },
  { name: 'TP-Link', path: '/clients/tp-link', slug: 'tp-link', logoSrc: '/clients/tp-link.svg' },
];
