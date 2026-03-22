import { TrendingUp, Target, BarChart, Zap, Users, LineChart } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';
import { serviceHeroImages } from '../../data/serviceHeroImages';

export function SEOPPCAds() {
  return (
    <ServiceDetailPage
      icon={TrendingUp}
      title="SEO & PPC Advertising"
      subtitle="Drive Traffic & Boost Sales"
      description="Data-driven SEO and PPC campaigns to increase your product visibility, drive qualified traffic, and maximize ROI across all marketplace Partnership."
      gradient="from-green-500 to-green-600"
      heroImage={serviceHeroImages['seo-ppc-ads']}
      features={[
        {
          title: 'Marketplace SEO',
          description: 'Keyword research, title optimization, and backend search term management for better organic rankings.'
        },
        {
          title: 'Amazon Sponsored Ads',
          description: 'Sponsored Products, Sponsored Brands, and Sponsored Display campaigns with advanced targeting.'
        },
        {
          title: 'Flipkart PLA',
          description: 'Product Listing Ads optimization with bid management and performance tracking.'
        },
        {
          title: 'Google Shopping Ads',
          description: 'Strategic Google Shopping campaigns to drive external traffic to your listings.'
        },
        {
          title: 'Keyword Optimization',
          description: 'Continuous A/B testing of keywords, bids, and ad copy for maximum performance.'
        },
        {
          title: 'Performance Analytics',
          description: 'Detailed ROI tracking, ACoS optimization, and conversion rate analysis.'
        }
      ]}
      benefits={[
        {
          icon: Target,
          title: 'Targeted Reach',
          description: 'Reach customers actively searching for your products with intent-based advertising.'
        },
        {
          icon: TrendingUp,
          title: '300% Average ROAS',
          description: 'Our campaigns deliver 3-5X return on ad spend through continuous optimization.'
        },
        {
          icon: Zap,
          title: 'Quick Results',
          description: 'See traffic and sales increase within 7-14 days of campaign launch.'
        },
        {
          icon: BarChart,
          title: 'Data-Driven',
          description: 'Make informed decisions with comprehensive analytics and performance insights.'
        },
        {
          icon: Users,
          title: 'Certified Experts',
          description: 'Amazon Ads certified professionals managing your campaigns.'
        },
        {
          icon: LineChart,
          title: 'Scalable Growth',
          description: 'Scale winning campaigns while maintaining profitability and efficiency.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Audit & Strategy',
          description: 'Comprehensive account audit, competitor analysis, and custom strategy development.'
        },
        {
          step: 2,
          title: 'Campaign Setup',
          description: 'Create optimized campaigns with proper structure, targeting, and budgets.'
        },
        {
          step: 3,
          title: 'Launch & Monitor',
          description: 'Launch campaigns and monitor performance metrics in real-time.'
        },
        {
          step: 4,
          title: 'Optimize & Scale',
          description: 'Continuous optimization through data analysis and strategic bid adjustments.'
        }
      ]}
      faq={[
        {
          question: 'What is ACoS and why does it matter?',
          answer: 'ACoS (Advertising Cost of Sales) is the ratio of ad spend to sales revenue. Lower ACoS means better profitability. We typically achieve 15-25% ACoS while maintaining healthy sales volume.'
        },
        {
          question: 'How much should I spend on advertising?',
          answer: 'We recommend starting with 10-15% of your target monthly revenue as ad spend. For example, if you want ₹2L in monthly sales, budget ₹20-30K for ads. We can scale as performance improves.'
        },
        {
          question: 'Do you handle Google Ads for my e-commerce site?',
          answer: 'Yes! We create Google Shopping and Search campaigns to drive external traffic to your Shopify store or marketplace listings, increasing overall sales velocity.'
        },
        {
          question: 'What is the contract duration?',
          answer: 'We recommend a minimum 3-month commitment to see meaningful results from SEO and PPC campaigns. However, all plans are month-to-month with no long-term lock-in.'
        },
        {
          question: 'Can I see real-time campaign performance?',
          answer: 'Absolutely! Professional and Enterprise plans include access to our custom dashboard where you can view real-time metrics, spend, sales, and ROI.'
        }
      ]}
    />
  );
}
