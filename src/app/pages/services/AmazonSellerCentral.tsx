import { ShoppingCart, Shield, Zap, TrendingUp, Users, Clock } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';
import { serviceHeroImages } from '../../data/serviceHeroImages';

export function AmazonSellerCentral() {
  return (
    <ServiceDetailPage
      icon={ShoppingCart}
      title="Amazon Seller Central"
      subtitle="Complete Amazon Account Management"
      description="Professional end-to-end Amazon seller account management. From setup to scaling, we handle everything so you can focus on growing your business."
      gradient="from-orange-500 to-orange-600"
      heroImage={serviceHeroImages['amazon-seller-central']}
      features={[
        {
          title: 'Account Setup & Verification',
          description: 'Complete Amazon seller account registration, verification, and compliance setup within 48 hours.'
        },
        {
          title: 'Product Listing Optimization',
          description: 'SEO-optimized listings with high-converting titles, bullet points, and enhanced brand content.'
        },
        {
          title: 'Inventory Management',
          description: 'Real-time inventory tracking, FBA shipment planning, and stock level optimization.'
        },
        {
          title: 'Order Processing & Fulfillment',
          description: 'Automated order management, shipping coordination, and customer communication.'
        },
        {
          title: 'Amazon PPC Advertising',
          description: 'Strategic sponsored ads campaigns with keyword optimization and bid management.'
        },
        {
          title: 'Performance Analytics',
          description: 'Comprehensive reports on sales, traffic, conversion rates, and profitability metrics.'
        }
      ]}
      benefits={[
        {
          icon: Shield,
          title: 'Account Health Protection',
          description: 'Proactive monitoring to maintain perfect account health scores and prevent suspensions.'
        },
        {
          icon: TrendingUp,
          title: 'Revenue Growth',
          description: 'Average 3X sales increase within 6 months through optimization and strategic advertising.'
        },
        {
          icon: Zap,
          title: 'Fast Setup',
          description: 'Get your Amazon store live and selling within 48-72 hours with our expedited process.'
        },
        {
          icon: Users,
          title: 'Dedicated Team',
          description: 'Expert Amazon specialists, PPC managers, and customer support available 24/7.'
        },
        {
          icon: Clock,
          title: 'Time Savings',
          description: 'Save 20+ hours per week on account management and focus on business strategy.'
        },
        {
          icon: Shield,
          title: 'Buy Box Optimization',
          description: 'Strategic pricing and fulfillment to win more Buy Box and increase sales velocity.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Consultation & Audit',
          description: 'Free consultation to understand your goals. Audit existing account if applicable.'
        },
        {
          step: 2,
          title: 'Account Setup',
          description: 'Register and verify your seller account with all compliance requirements met.'
        },
        {
          step: 3,
          title: 'Product Launch',
          description: 'Create optimized listings, set up FBA, and launch with initial PPC campaigns.'
        },
        {
          step: 4,
          title: 'Growth & Scaling',
          description: 'Continuous optimization, performance tracking, and strategic expansion.'
        }
      ]}
      faq={[
        {
          question: 'How long does it take to set up an Amazon seller account?',
          answer: 'With our expedited process, we can have your Amazon seller account fully set up, verified, and ready to sell within 48-72 hours. This includes all compliance requirements and initial product listings.'
        },
        {
          question: 'Do I need GST registration to sell on Amazon?',
          answer: 'Yes, GST registration is mandatory for selling on Amazon in India. We provide complete GST registration services as part of our business setup package if you don\'t have it already.'
        },
        {
          question: 'What is the average ROI on Amazon PPC advertising?',
          answer: 'Our clients typically see 3-5X ROAS (Return on Ad Spend) on Amazon PPC campaigns. We optimize campaigns continuously to maintain profitability while scaling sales.'
        },
        {
          question: 'Can you help with existing Amazon accounts?',
          answer: 'Absolutely! We offer account takeover services where we audit your existing account, identify improvement areas, and implement optimization strategies to boost performance.'
        },
        {
          question: 'What happens if my account gets suspended?',
          answer: 'We provide proactive account health monitoring to prevent suspensions. If issues arise, our team handles appeals and reinstatement with a 95% success rate.'
        }
      ]}
    />
  );
}
