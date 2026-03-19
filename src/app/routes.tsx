import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { LogoShowcase } from './components/LogoShowcase';
import { Layout } from './components/Layout';

// Main Pages
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CareerPage } from './pages/CareerPage';
import { EventsPage } from './pages/EventsPage';

// Platform Pages
import { AmazonPlatform } from './pages/platforms/AmazonPlatform';
import { FlipkartPlatform } from './pages/platforms/FlipkartPlatform';
import { MyntraPlatform } from './pages/platforms/MyntraPlatform';
import { MeeshoPlatform } from './pages/platforms/MeeshoPlatform';
import { ShopifyPlatform } from './pages/platforms/ShopifyPlatform';

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
        path: 'pricing',
        Component: PricingPage,
      },
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
      // Platform Pages
      {
        path: 'platforms/amazon',
        Component: AmazonPlatform,
      },
      {
        path: 'platforms/flipkart',
        Component: FlipkartPlatform,
      },
      {
        path: 'platforms/myntra',
        Component: MyntraPlatform,
      },
      {
        path: 'platforms/meesho',
        Component: MeeshoPlatform,
      },
      {
        path: 'platforms/shopify',
        Component: ShopifyPlatform,
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