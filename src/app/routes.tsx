import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { LogoShowcase } from './components/LogoShowcase';
import { Layout } from './components/Layout';

// Main Pages
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CareerPage } from './pages/CareerPage';
import { EventsPage } from './pages/EventsPage';

// Platform Pages (files live in pages/platforms/)
import { AmazonPlatform } from './pages/platforms/AmazonPlatform';
import { FlipkartPlatform } from './pages/platforms/FlipkartPlatform';
import { MyntraPlatform } from './pages/platforms/MyntraPlatform';
import { MeeshoPlatform } from './pages/platforms/MeeshoPlatform';
import { ShopifyPlatform } from './pages/platforms/ShopifyPlatform';
import { NykaaPlatform } from './pages/platforms/NykaaPlatform';
import { WalmartPlatform } from './pages/platforms/WalmartPlatform';
import { JioMartPlatform } from './pages/platforms/JioMartPlatform';
import { GlowRoadPlatform } from './pages/platforms/GlowRoadPlatform';
import { BlinkitPlatform } from './pages/platforms/BlinkitPlatform';
import { ZeptoPlatform } from './pages/platforms/ZeptoPlatform';

// Account Management Services
import { AmazonSellerCentral } from './pages/services/AmazonSellerCentral';
import { FlipkartManagement } from './pages/services/FlipkartManagement';
import { MyntraSellerHub } from './pages/services/MyntraSellerHub';
import { OrderInventory } from './pages/services/OrderInventory';

// Business Setup Services
import { CompanyRegistration } from './pages/services/CompanyRegistration';
import { GSTServices } from './pages/services/GSTServices';
import { LegalTrademark } from './pages/services/LegalTrademark';
import { ComplianceSupport } from './pages/services/ComplianceSupport';

// Growth Services
import { SEOPPCAds } from './pages/services/SEOPPCAds';
import { ProductRanking } from './pages/services/ProductRanking';
import { SalesOptimization } from './pages/services/SalesOptimization';
import { AnalyticsDashboard } from './pages/services/AnalyticsDashboard';

// Creative Services
import { ProductPhotography } from './pages/services/ProductPhotography';
import { BannerDesign } from './pages/services/BannerDesign';
import { BrandCreatives } from './pages/services/BrandCreatives';
import { VideoProduction } from './pages/services/VideoProduction';
import { ClientBrandPage } from './pages/clients/ClientBrandPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'brand',
        Component: LogoShowcase,
      },
      // Main Pages
      {
        path: 'about',
        Component: AboutPage,
      },
      {
        path: 'contact',
        Component: ContactPage,
      },
      {
        path: 'career',
        Component: CareerPage,
      },
      {
        path: 'events',
        Component: EventsPage,
      },
      // Client brand pages
      {
        path: 'clients/:slug',
        Component: ClientBrandPage,
      },
      // Platform Pages
      {
        path: 'Partnership/amazon',
        Component: AmazonPlatform,
      },
      {
        path: 'Partnership/flipkart',
        Component: FlipkartPlatform,
      },
      {
        path: 'Partnership/myntra',
        Component: MyntraPlatform,
      },
      {
        path: 'Partnership/meesho',
        Component: MeeshoPlatform,
      },
      {
        path: 'Partnership/shopify',
        Component: ShopifyPlatform,
      },
      {
        path: 'Partnership/nykaa',
        Component: NykaaPlatform,
      },
      {
        path: 'Partnership/walmart',
        Component: WalmartPlatform,
      },
      {
        path: 'Partnership/jiomart',
        Component: JioMartPlatform,
      },
      {
        path: 'Partnership/glowroad',
        Component: GlowRoadPlatform,
      },
      {
        path: 'Partnership/blinkit',
        Component: BlinkitPlatform,
      },
      {
        path: 'Partnership/zepto',
        Component: ZeptoPlatform,
      },
      // Account Management
      {
        path: 'services/amazon-seller-central',
        Component: AmazonSellerCentral,
      },
      {
        path: 'services/flipkart-management',
        Component: FlipkartManagement,
      },
      {
        path: 'services/myntra-seller-hub',
        Component: MyntraSellerHub,
      },
      {
        path: 'services/order-inventory',
        Component: OrderInventory,
      },
      // Business Setup
      {
        path: 'services/company-registration',
        Component: CompanyRegistration,
      },
      {
        path: 'services/gst-services',
        Component: GSTServices,
      },
      {
        path: 'services/legal-trademark',
        Component: LegalTrademark,
      },
      {
        path: 'services/compliance-support',
        Component: ComplianceSupport,
      },
      // Growth Services
      {
        path: 'services/seo-ppc-ads',
        Component: SEOPPCAds,
      },
      {
        path: 'services/product-ranking',
        Component: ProductRanking,
      },
      {
        path: 'services/sales-optimization',
        Component: SalesOptimization,
      },
      {
        path: 'services/analytics-dashboard',
        Component: AnalyticsDashboard,
      },
      // Creative Services
      {
        path: 'services/product-photography',
        Component: ProductPhotography,
      },
      {
        path: 'services/banner-design',
        Component: BannerDesign,
      },
      {
        path: 'services/brand-creatives',
        Component: BrandCreatives,
      },
      {
        path: 'services/video-production',
        Component: VideoProduction,
      },
    ]
  }
]);