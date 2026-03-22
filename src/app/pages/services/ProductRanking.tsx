import { BarChart, Target, TrendingUp, Zap, LineChart, PieChart } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';
import { serviceHeroImages } from '../../data/serviceHeroImages';

export function ProductRanking() {
  return (
    <ServiceDetailPage
      icon={BarChart}
      title="Product Ranking Optimization"
      subtitle="Rank Higher, Sell More"
      description="Advanced strategies to improve your product rankings on Amazon, Flipkart, and other marketplaces. Get to page 1 and stay there with our proven ranking techniques."
      gradient="from-blue-500 to-blue-600"
      heroImage={serviceHeroImages['product-ranking']}
      features={[
        {
          title: 'Keyword Research & Mapping',
          description: 'Identify high-volume, low-competition keywords specific to your products and niche.'
        },
        {
          title: 'Listing Optimization',
          description: 'Title, bullet points, description, and backend keyword optimization for better relevance.'
        },
        {
          title: 'Sales Velocity Boost',
          description: 'Strategic promotions and advertising to increase sales velocity and improve rankings.'
        },
        {
          title: 'Review Management',
          description: 'Ethical review generation strategies to build social proof and credibility.'
        },
        {
          title: 'Competitor Analysis',
          description: 'Track competitor rankings, prices, and strategies to stay ahead.'
        },
        {
          title: 'Algorithm Optimization',
          description: 'Stay updated with marketplace algorithm changes and adapt strategies accordingly.'
        }
      ]}
      benefits={[
        {
          icon: TrendingUp,
          title: 'Page 1 Rankings',
          description: 'Get your products ranking on page 1 for primary keywords within 30-60 days.'
        },
        {
          icon: Target,
          title: 'Increased Visibility',
          description: '300% increase in product impressions and organic traffic from better rankings.'
        },
        {
          icon: Zap,
          title: 'Higher Conversions',
          description: 'Top-ranked products convert 3-5X better than products on page 2 or beyond.'
        },
        {
          icon: LineChart,
          title: 'Sustainable Growth',
          description: 'Long-term ranking strategies that withstand algorithm updates.'
        },
        {
          icon: PieChart,
          title: 'Data-Driven',
          description: 'Weekly rank tracking and performance analysis for all target keywords.'
        },
        {
          icon: BarChart,
          title: 'Organic Sales',
          description: 'Reduce dependence on paid ads as organic rankings improve.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Rank Audit',
          description: 'Analyze current rankings, identify gaps, and benchmark against competitors.'
        },
        {
          step: 2,
          title: 'Strategy Development',
          description: 'Create custom ranking strategy based on your product category and goals.'
        },
        {
          step: 3,
          title: 'Implementation',
          description: 'Optimize listings, launch campaigns, and execute velocity-building tactics.'
        },
        {
          step: 4,
          title: 'Monitor & Improve',
          description: 'Track rankings daily, analyze performance, and refine strategies continuously.'
        }
      ]}
      faq={[
        {
          question: 'How long does it take to rank on page 1?',
          answer: 'Typically 30-60 days for moderately competitive keywords, and 60-90 days for highly competitive keywords. New products may take longer as they build sales history.'
        },
        {
          question: 'What is the Amazon A9 algorithm?',
          answer: 'A9 is Amazon\'s search algorithm that determines product rankings. It considers relevance (keywords), performance (sales, conversion), and customer satisfaction (reviews, ratings) to rank products.'
        },
        {
          question: 'Do you guarantee page 1 rankings?',
          answer: 'While we cannot guarantee specific rankings due to constantly changing algorithms, we have a 90% success rate of getting products to page 1 for their primary keywords within 60 days.'
        },
        {
          question: 'Will rankings drop if I stop the service?',
          answer: 'Rankings are maintained through ongoing optimization and performance. If you stop, rankings may gradually decline depending on competition and market dynamics. We recommend at least 6 months for sustainable results.'
        },
        {
          question: 'How do you track keyword rankings?',
          answer: 'We use professional rank tracking tools that monitor your product positions multiple times daily across all target keywords. You receive weekly reports with ranking movements and insights.'
        }
      ]}
    />
  );
}
