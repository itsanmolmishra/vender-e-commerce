import { Package, Shield, Zap, TrendingUp, Users, BarChart } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';
import { serviceHeroImages } from '../../data/serviceHeroImages';

export function FlipkartManagement() {
  return (
    <ServiceDetailPage
      icon={Package}
      title="Flipkart Management"
      subtitle="End-to-End Flipkart Seller Solutions"
      description="Comprehensive Flipkart marketplace management to maximize your reach and sales in India's leading e-commerce platform."
      gradient="from-blue-500 to-blue-600"
      heroImage={serviceHeroImages['flipkart-management']}
      features={[
        {
          title: 'Flipkart Account Registration',
          description: 'Complete seller account setup with all required documentation and verification processes.'
        },
        {
          title: 'Catalog Management',
          description: 'Product listing, image optimization, and catalog maintenance for maximum visibility.'
        },
        {
          title: 'Flipkart Ads Management',
          description: 'Strategic PLA (Product Listing Ads) and display advertising campaigns for better ROI.'
        },
        {
          title: 'Inventory & Logistics',
          description: 'FBF (Fulfillment by Flipkart) integration, stock management, and shipping optimization.'
        },
        {
          title: 'Seller Performance',
          description: 'Maintain Flipkart SLA compliance, rating management, and performance score optimization.'
        },
        {
          title: 'Sales Analytics',
          description: 'Detailed insights on sales trends, customer behavior, and growth opportunities.'
        }
      ]}
      benefits={[
        {
          icon: Shield,
          title: 'Compliance Expert',
          description: 'Stay compliant with Flipkart\'s policies and maintain excellent seller ratings.'
        },
        {
          icon: TrendingUp,
          title: 'Sales Boost',
          description: 'Average 250% increase in sales within first 3 months with our optimization strategies.'
        },
        {
          icon: Zap,
          title: 'Quick Launch',
          description: 'Get your Flipkart store live within 3-5 business days with full catalog setup.'
        },
        {
          icon: Users,
          title: 'Expert Support',
          description: 'Dedicated Flipkart specialists with 5+ years of marketplace experience.'
        },
        {
          icon: BarChart,
          title: 'Performance Tracking',
          description: 'Real-time dashboards and weekly reports to monitor every aspect of your store.'
        },
        {
          icon: Shield,
          title: 'Big Billion Days Prep',
          description: 'Specialized support for Flipkart\'s biggest sale events with inventory and ad planning.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Account Creation',
          description: 'Register your Flipkart seller account with all required business documents.'
        },
        {
          step: 2,
          title: 'Catalog Setup',
          description: 'Upload products with optimized listings, images, and competitive pricing.'
        },
        {
          step: 3,
          title: 'Launch & Promote',
          description: 'Go live with strategic PLA campaigns and promotional strategies.'
        },
        {
          step: 4,
          title: 'Scale & Optimize',
          description: 'Continuous improvement through data analysis and performance optimization.'
        }
      ]}
      faq={[
        {
          question: 'What documents are required for Flipkart seller registration?',
          answer: 'You need GST registration, PAN card, bank account details, address proof, and product images. We\'ll guide you through the entire documentation process.'
        },
        {
          question: 'How does Flipkart FBF work?',
          answer: 'Fulfillment by Flipkart (FBF) allows you to store products in Flipkart warehouses. They handle packaging, shipping, and customer service, ensuring faster delivery and better ratings.'
        },
        {
          question: 'What is the commission structure on Flipkart?',
          answer: 'Flipkart charges 5-25% commission depending on product category. We help optimize your pricing strategy to maintain healthy margins while staying competitive.'
        },
        {
          question: 'Can I sell across multiple categories?',
          answer: 'Yes, we can help you expand into multiple categories. Our team will handle category approvals, catalog setup, and optimization for each segment.'
        }
      ]}
    />
  );
}