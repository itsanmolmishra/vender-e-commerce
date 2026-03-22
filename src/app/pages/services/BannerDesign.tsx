import { Palette, Award, Zap, TrendingUp, Target, Users } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';
import { serviceHeroImages } from '../../data/serviceHeroImages';

export function BannerDesign() {
  return (
    <ServiceDetailPage
      icon={Palette}
      title="Banner Design"
      subtitle="Eye-Catching Designs That Convert"
      description="Professional banner and promotional design services to boost your marketplace visibility and drive sales."
      gradient="from-orange-500 to-red-600"
      heroImage={serviceHeroImages['banner-design']}
      features={[
        {
          title: 'Marketplace Banners',
          description: 'Platform-specific banner designs for Amazon Brand Store, Flipkart, Myntra store pages.'
        },
        {
          title: 'Sale Event Graphics',
          description: 'Special designs for Prime Day, Big Billion Days, EORS, and seasonal sales.'
        },
        {
          title: 'A+ Content Design',
          description: 'Enhanced brand content and premium A+ modules for product listings.'
        },
        {
          title: 'Social Media Creatives',
          description: 'Eye-catching graphics for Instagram, Facebook, and other social Partnership.'
        },
        {
          title: 'Ad Banners',
          description: 'High-converting display ad banners for PPC and sponsored campaigns.'
        },
        {
          title: 'Brand Guidelines',
          description: 'Consistent visual identity across all Partnership and marketing materials.'
        }
      ]}
      benefits={[
        {
          icon: Award,
          title: 'Professional Quality',
          description: 'Designs by experienced graphic designers with e-commerce expertise.'
        },
        {
          icon: TrendingUp,
          title: 'Higher Conversions',
          description: 'Professional banners improve click-through rates by 45%.'
        },
        {
          icon: Zap,
          title: 'Quick Turnaround',
          description: 'Get your designs within 24-48 hours with unlimited revisions.'
        },
        {
          icon: Target,
          title: 'Platform Optimized',
          description: 'Designs meet all marketplace specifications and guidelines.'
        },
        {
          icon: Users,
          title: 'Audience Focused',
          description: 'Designs tailored to your target audience and product category.'
        },
        {
          icon: Palette,
          title: 'Brand Consistency',
          description: 'Maintain consistent brand identity across all touchpoints.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Brief & Discovery',
          description: 'Understand your brand, products, and design requirements.'
        },
        {
          step: 2,
          title: 'Concept Creation',
          description: 'Create initial design concepts and mockups for your approval.'
        },
        {
          step: 3,
          title: 'Refinement',
          description: 'Unlimited revisions until you\'re completely satisfied.'
        },
        {
          step: 4,
          title: 'Delivery & Support',
          description: 'Final files in all required formats with ongoing design support.'
        }
      ]}
      faq={[
        {
          question: 'What file formats do you provide?',
          answer: 'We provide all standard formats including JPG, PNG, PSD, AI, and platform-specific formats required by Amazon, Flipkart, etc.'
        },
        {
          question: 'How many revisions are included?',
          answer: 'Professional and Enterprise plans include unlimited revisions until you\'re satisfied. Starter plan includes 2 revisions per design.'
        },
        {
          question: 'Can you design for sale events?',
          answer: 'Yes, we specialize in creating high-impact sale event graphics for Prime Day, Big Billion Days, EORS, and other promotional events.'
        },
        {
          question: 'Do you create A+ content for Amazon?',
          answer: 'Yes, we create complete A+ content including premium modules, brand stories, comparison charts, and enhanced images meeting Amazon\'s specifications.'
        }
      ]}
    />
  );
}
