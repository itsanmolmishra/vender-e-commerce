import { Palette, Shield, Zap, TrendingUp, Users, BarChart } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';
import { serviceHeroImages } from '../../data/serviceHeroImages';

export function MyntraSellerHub() {
  return (
    <ServiceDetailPage
      icon={Palette}
      title="Myntra Seller Hub"
      subtitle="Fashion & Lifestyle E-commerce Excellence"
      description="Complete Myntra marketplace management for fashion and lifestyle brands to maximize visibility and sales."
      gradient="from-pink-500 to-purple-600"
      heroImage={serviceHeroImages['myntra-seller-hub']}
      features={[
        {
          title: 'Myntra Seller Registration',
          description: 'End-to-end seller account setup with brand onboarding and verification assistance.'
        },
        {
          title: 'Fashion Catalog Management',
          description: 'Professional product listings optimized for fashion categories with size charts and variants.'
        },
        {
          title: 'Myntra Studio Integration',
          description: 'Leverage Myntra Studio for content marketing and brand storytelling.'
        },
        {
          title: 'Inventory & Fulfillment',
          description: 'Seamless inventory management with FBM (Fulfillment by Myntra) integration.'
        },
        {
          title: 'Campaign Management',
          description: 'Strategic planning for EORS, Big Fashion Festival, and other Myntra sale events.'
        },
        {
          title: 'Performance Analytics',
          description: 'Deep insights into fashion trends, customer preferences, and sales performance.'
        }
      ]}
      benefits={[
        {
          icon: Shield,
          title: 'Fashion Expertise',
          description: 'Specialized team with deep knowledge of fashion e-commerce and Myntra platform.'
        },
        {
          icon: TrendingUp,
          title: 'Sales Growth',
          description: 'Average 200% increase in sales with our fashion-focused optimization strategies.'
        },
        {
          icon: Zap,
          title: 'Quick Onboarding',
          description: 'Get your Myntra store live within 5-7 days with complete catalog setup.'
        },
        {
          icon: Users,
          title: 'Dedicated Support',
          description: 'Fashion industry specialists available 24/7 for your success.'
        },
        {
          icon: BarChart,
          title: 'Trend Analysis',
          description: 'Stay ahead with real-time fashion trend insights and seasonal planning.'
        },
        {
          icon: Palette,
          title: 'Creative Excellence',
          description: 'Professional fashion photography and styling for maximum appeal.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Brand Onboarding',
          description: 'Register your brand on Myntra with complete documentation and verification.'
        },
        {
          step: 2,
          title: 'Catalog Creation',
          description: 'Professional product listings with high-quality images and detailed specifications.'
        },
        {
          step: 3,
          title: 'Launch Campaign',
          description: 'Go live with strategic promotions and marketing campaigns.'
        },
        {
          step: 4,
          title: 'Scale & Optimize',
          description: 'Continuous performance optimization and seasonal campaign planning.'
        }
      ]}
      faq={[
        {
          question: 'What are the requirements for selling on Myntra?',
          answer: 'You need a registered brand (trademark), GST registration, business documents, and fashion/lifestyle products. We help with the entire onboarding process.'
        },
        {
          question: 'How does Myntra Studio work?',
          answer: 'Myntra Studio is a content platform where brands can share fashion tips, styling ideas, and product stories to engage customers and drive sales.'
        },
        {
          question: 'What is the commission structure on Myntra?',
          answer: 'Myntra charges 15-25% commission depending on product category. We help optimize your pricing strategy for profitability.'
        },
        {
          question: 'Can you help with sale event preparation?',
          answer: 'Yes, we provide complete support for EORS, Big Fashion Festival, and other Myntra sales with inventory planning, pricing strategy, and campaign management.'
        }
      ]}
    />
  );
}
