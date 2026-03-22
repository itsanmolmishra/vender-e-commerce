/**
 * Hero banners in /public/services/heroes/ — map each route to the PNG whose **on-image headline**
 * matches the service theme (Ceuki templates).
 *
 * File → text on banner (approx.)
 * - e-commerce-marketing.png     → "E-Commerce Marketing"
 * - web-development.png          → "Web Development"
 * - graphic-design-videos.png    → "Graphic Design & Videos"
 * - digital-marketing.png        → "Digital Marketing"
 * - product-photography.png      → "Product Photography"
 * - seo-services.png             → "SEO Services"
 * - quick-commerce-blinkit.png   → "Quick Commerce – Blinkit" (only if you need Blinkit-specific page)
 */
export const serviceHeroImages: Record<string, string> = {
  // E-Commerce Marketing — marketplace + ops
  'amazon-seller-central': '/services/heroes/e-commerce-marketing.png',
  'flipkart-management': '/services/heroes/e-commerce-marketing.png',
  'myntra-seller-hub': '/services/heroes/e-commerce-marketing.png',
  'order-inventory': '/services/heroes/e-commerce-marketing.png',

  // Web Development — business / legal / tech setup (same banner art)
  'company-registration': '/services/heroes/web-development.png',
  'legal-trademark': '/services/heroes/web-development.png',

  // Digital Marketing — growth, analytics, sales (banner says Digital Marketing)
  'gst-services': '/services/heroes/digital-marketing.png',
  'product-ranking': '/services/heroes/digital-marketing.png',
  'sales-optimization': '/services/heroes/digital-marketing.png',
  'analytics-dashboard': '/services/heroes/digital-marketing.png',

  // SEO Services — banner says SEO Services
  'seo-ppc-ads': '/services/heroes/seo-services.png',
  'compliance-support': '/services/heroes/seo-services.png',

  // Product Photography
  'product-photography': '/services/heroes/product-photography.png',

  // Graphic Design & Videos — creative suite
  'banner-design': '/services/heroes/graphic-design-videos.png',
  'brand-creatives': '/services/heroes/graphic-design-videos.png',
  'video-production': '/services/heroes/graphic-design-videos.png',
};
