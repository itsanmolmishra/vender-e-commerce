import { Zap, TrendingUp, BarChart, Target, Award, DollarSign } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';
import { serviceHeroImages } from '../../data/serviceHeroImages';

export function SalesOptimization() {
  return (
    <ServiceDetailPage
      icon={Zap}
      title="Sales Optimization"
      subtitle="Maximize Revenue & Conversion Rates"
      description="Data-driven sales optimization strategies to boost your e-commerce revenue and improve conversion rates across all Partnership."
      gradient="from-green-500 to-emerald-600"
      heroImage={serviceHeroImages['sales-optimization']}
      features={[
        {
          title: 'Conversion Rate Optimization',
          description: 'A/B testing, pricing strategies, and listing improvements to maximize conversions.'
        },
        {
          title: 'Dynamic Pricing',
          description: 'AI-powered pricing optimization based on competition, demand, and market trends.'
        },
        {
          title: 'Sales Funnel Analysis',
          description: 'Identify and fix bottlenecks in your customer journey to reduce drop-offs.'
        },
        {
          title: 'Product Bundling',
          description: 'Strategic product bundles and cross-sell opportunities to increase AOV.'
        },
        {
          title: 'Promotional Strategy',
          description: 'Data-driven promotional campaigns and discount optimization.'
        },
        {
          title: 'Performance Monitoring',
          description: 'Real-time tracking of sales metrics, trends, and growth opportunities.'
        }
      ]}
      benefits={[
        {
          icon: TrendingUp,
          title: 'Revenue Growth',
          description: 'Average 180% increase in revenue within 6 months.'
        },
        {
          icon: Target,
          title: 'Higher Conversions',
          description: 'Improve conversion rates by 40-60% with optimized listings.'
        },
        {
          icon: Zap,
          title: 'Quick Wins',
          description: 'See improvements within the first month of optimization.'
        },
        {
          icon: BarChart,
          title: 'Data-Driven Decisions',
          description: 'Make informed decisions with comprehensive analytics.'
        },
        {
          icon: DollarSign,
          title: 'Better Margins',
          description: 'Optimize pricing to maximize profit margins.'
        },
        {
          icon: Award,
          title: 'Competitive Edge',
          description: 'Stay ahead of competition with advanced optimization techniques.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Performance Audit',
          description: 'Analyze current sales performance and identify opportunities.'
        },
        {
          step: 2,
          title: 'Strategy Development',
          description: 'Create customized optimization strategy based on data insights.'
        },
        {
          step: 3,
          title: 'Implementation',
          description: 'Execute optimization tactics across listings, pricing, and promotions.'
        },
        {
          step: 4,
          title: 'Monitor & Refine',
          description: 'Continuous testing, monitoring, and refinement for maximum results.'
        }
      ]}
      faq={[
        {
          question: 'How quickly can I see results?',
          answer: 'Most clients see initial improvements within 2-4 weeks, with significant results by month 2-3 as optimization strategies compound.'
        },
        {
          question: 'What is dynamic pricing?',
          answer: 'Dynamic pricing automatically adjusts your product prices based on competitor pricing, demand, inventory levels, and market conditions to maximize revenue and margins.'
        },
        {
          question: 'Do you work with specific product categories?',
          answer: 'We work across all product categories with specialized strategies for fashion, electronics, home & kitchen, beauty, and more.'
        },
        {
          question: 'How do you measure success?',
          answer: 'We track key metrics including conversion rate, average order value, revenue, profit margins, and overall ROI to measure optimization success.'
        }
      ]}
    />
  );
}
