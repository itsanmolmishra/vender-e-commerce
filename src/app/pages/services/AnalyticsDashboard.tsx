import { BarChart, TrendingUp, PieChart, Activity, Target, Zap } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';

export function AnalyticsDashboard() {
  return (
    <ServiceDetailPage
      icon={BarChart}
      title="Analytics Dashboard"
      subtitle="Real-Time Insights for Smarter Decisions"
      description="Comprehensive analytics platform to track, analyze, and optimize your e-commerce business performance across all channels."
      gradient="from-cyan-500 to-blue-600"
      features={[
        {
          title: 'Unified Dashboard',
          description: 'Single dashboard for all marketplaces with real-time sales, inventory, and performance data.'
        },
        {
          title: 'Sales Analytics',
          description: 'Deep dive into sales trends, product performance, and revenue patterns.'
        },
        {
          title: 'Customer Insights',
          description: 'Understand customer behavior, demographics, and purchase patterns.'
        },
        {
          title: 'Inventory Intelligence',
          description: 'Track inventory levels, turnover rates, and demand forecasting.'
        },
        {
          title: 'Marketing ROI',
          description: 'Measure advertising spend effectiveness and campaign performance.'
        },
        {
          title: 'Custom Reports',
          description: 'Create custom reports and automated insights for your specific needs.'
        }
      ]}
      benefits={[
        {
          icon: TrendingUp,
          title: 'Data-Driven Growth',
          description: 'Make informed decisions based on real-time data and insights.'
        },
        {
          icon: Zap,
          title: 'Real-Time Updates',
          description: 'Live data synchronization across all platforms every 15 minutes.'
        },
        {
          icon: Target,
          title: 'Better Targeting',
          description: 'Identify high-performing products and customer segments.'
        },
        {
          icon: Activity,
          title: 'Performance Monitoring',
          description: 'Track KPIs, set goals, and monitor progress in real-time.'
        },
        {
          icon: PieChart,
          title: 'Visual Insights',
          description: 'Beautiful charts and graphs for easy data interpretation.'
        },
        {
          icon: BarChart,
          title: 'Predictive Analytics',
          description: 'AI-powered forecasting for inventory and sales planning.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Platform Integration',
          description: 'Connect all your sales channels and data sources to our analytics platform.'
        },
        {
          step: 2,
          title: 'Dashboard Setup',
          description: 'Customize dashboards and reports based on your business priorities.'
        },
        {
          step: 3,
          title: 'Training & Onboarding',
          description: 'Comprehensive training on using analytics for business decisions.'
        },
        {
          step: 4,
          title: 'Ongoing Optimization',
          description: 'Regular insights sessions and dashboard refinements.'
        }
      ]}
      packages={[
        {
          name: 'Basic',
          price: '₹4,999',
          period: '/month',
          features: [
            'Up to 2 platform integration',
            'Standard dashboard',
            'Sales & inventory reports',
            'Monthly data refresh',
            'Basic visualizations',
            'Email support'
          ]
        },
        {
          name: 'Professional',
          price: '₹12,999',
          period: '/month',
          popular: true,
          features: [
            'Unlimited platform integration',
            'Custom dashboards',
            'Real-time data sync',
            'Advanced analytics',
            'Automated insights',
            'Export & API access',
            'Weekly strategy calls',
            '24/7 support'
          ]
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '',
          features: [
            'Everything in Professional',
            'AI-powered predictions',
            'Custom integrations',
            'White-label dashboard',
            'Dedicated BI analyst',
            'Advanced forecasting',
            'Priority support',
            'Strategic consulting'
          ]
        }
      ]}
      faq={[
        {
          question: 'Which platforms can you integrate?',
          answer: 'We integrate with Amazon, Flipkart, Myntra, Meesho, Shopify, and can connect to any platform with API access or data export capabilities.'
        },
        {
          question: 'How often is the data updated?',
          answer: 'Data is synced every 15 minutes for real-time insights. You can also trigger manual refreshes anytime.'
        },
        {
          question: 'Can I export reports?',
          answer: 'Yes, all reports can be exported in PDF, Excel, and CSV formats. Professional plans include API access for custom integrations.'
        },
        {
          question: 'Do you provide training on using the dashboard?',
          answer: 'Yes, we provide comprehensive onboarding, training sessions, and ongoing support to help you maximize the platform\'s value.'
        }
      ]}
    />
  );
}
