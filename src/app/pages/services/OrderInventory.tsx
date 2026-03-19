import { BarChart, Shield, Zap, TrendingUp, Package, Clock } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';

export function OrderInventory() {
  return (
    <ServiceDetailPage
      icon={BarChart}
      title="Order & Inventory Management"
      subtitle="Streamlined Operations Across All Platforms"
      description="Comprehensive order processing and inventory management solutions for seamless multi-channel e-commerce operations."
      gradient="from-indigo-500 to-blue-600"
      features={[
        {
          title: 'Multi-Channel Order Management',
          description: 'Centralized dashboard to manage orders from Amazon, Flipkart, Myntra, Meesho, and Shopify.'
        },
        {
          title: 'Real-Time Inventory Sync',
          description: 'Automatic inventory synchronization across all platforms to prevent overselling.'
        },
        {
          title: 'Warehouse Integration',
          description: 'Seamless integration with FBA, FBF, and third-party warehouses for efficient fulfillment.'
        },
        {
          title: 'Returns Management',
          description: 'Complete returns processing, quality checks, and restocking automation.'
        },
        {
          title: 'Stock Alerts & Forecasting',
          description: 'Smart alerts for low stock and AI-powered demand forecasting.'
        },
        {
          title: 'Performance Analytics',
          description: 'Detailed reports on order trends, fulfillment metrics, and inventory turnover.'
        }
      ]}
      benefits={[
        {
          icon: Shield,
          title: 'Error-Free Operations',
          description: 'Reduce order errors by 95% with automated order processing and validation.'
        },
        {
          icon: TrendingUp,
          title: 'Faster Fulfillment',
          description: 'Improve order processing speed by 70% with streamlined workflows.'
        },
        {
          icon: Zap,
          title: 'Real-Time Updates',
          description: 'Instant inventory updates across all channels to prevent stockouts.'
        },
        {
          icon: Package,
          title: 'Smart Warehousing',
          description: 'Optimize warehouse operations with intelligent picking and packing.'
        },
        {
          icon: BarChart,
          title: 'Data-Driven Insights',
          description: 'Make informed decisions with comprehensive analytics and reporting.'
        },
        {
          icon: Clock,
          title: 'Save Time',
          description: 'Automate repetitive tasks and save 20+ hours per week.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'System Integration',
          description: 'Connect all your sales channels and warehouse systems to our platform.'
        },
        {
          step: 2,
          title: 'Workflow Setup',
          description: 'Configure automated workflows for order processing and inventory management.'
        },
        {
          step: 3,
          title: 'Team Training',
          description: 'Comprehensive training for your team on the management system.'
        },
        {
          step: 4,
          title: 'Optimize & Scale',
          description: 'Continuous optimization and scaling support as your business grows.'
        }
      ]}
      packages={[
        {
          name: 'Starter',
          price: '₹6,999',
          period: '/month',
          features: [
            'Up to 500 orders/month',
            '2 sales channel integration',
            'Basic inventory sync',
            'Order tracking',
            'Email support',
            'Monthly reports'
          ]
        },
        {
          name: 'Growth',
          price: '₹14,999',
          period: '/month',
          popular: true,
          features: [
            'Up to 2,000 orders/month',
            'Unlimited channel integration',
            'Advanced inventory management',
            'Returns processing',
            'Stock alerts & forecasting',
            'Real-time analytics',
            '24/7 support',
            'Dedicated account manager'
          ]
        },
        {
          name: 'Premium',
          price: 'Custom',
          period: '',
          features: [
            'Unlimited orders',
            'Multi-warehouse management',
            'Custom integrations',
            'API access',
            'Advanced automation',
            'Priority support',
            'Dedicated team',
            'Strategic consulting'
          ]
        }
      ]}
      faq={[
        {
          question: 'Which platforms do you support?',
          answer: 'We support Amazon, Flipkart, Myntra, Meesho, Shopify, and can integrate with any custom platform via API.'
        },
        {
          question: 'How does inventory sync work?',
          answer: 'Our system automatically updates inventory levels across all platforms in real-time when a sale occurs, preventing overselling.'
        },
        {
          question: 'Can you integrate with my existing warehouse system?',
          answer: 'Yes, we can integrate with most warehouse management systems (WMS) and ERP solutions through APIs or custom connectors.'
        },
        {
          question: 'What about returns management?',
          answer: 'We provide complete returns processing including quality checks, restocking automation, and refund processing across all platforms.'
        }
      ]}
    />
  );
}
