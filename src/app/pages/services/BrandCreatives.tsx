import { Palette, Award, Zap, TrendingUp, Target, Sparkles } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';

export function BrandCreatives() {
  return (
    <ServiceDetailPage
      icon={Palette}
      title="Brand Creatives"
      subtitle="Build a Memorable Brand Identity"
      description="Complete brand identity and creative services to establish a strong, professional brand presence across all platforms."
      gradient="from-pink-500 to-purple-600"
      features={[
        {
          title: 'Logo Design',
          description: 'Professional logo design with multiple concepts and unlimited revisions.'
        },
        {
          title: 'Brand Identity',
          description: 'Complete brand identity including color palette, typography, and visual guidelines.'
        },
        {
          title: 'Packaging Design',
          description: 'Eye-catching product packaging that stands out and builds brand recall.'
        },
        {
          title: 'Marketing Collateral',
          description: 'Business cards, brochures, catalogs, and other marketing materials.'
        },
        {
          title: 'Store Branding',
          description: 'Branded store designs for Amazon, Flipkart, Myntra, and Shopify.'
        },
        {
          title: 'Brand Guidelines',
          description: 'Comprehensive brand book for consistent brand application.'
        }
      ]}
      benefits={[
        {
          icon: Award,
          title: 'Premium Quality',
          description: 'Award-winning designers with 10+ years of branding experience.'
        },
        {
          icon: Sparkles,
          title: 'Unique Identity',
          description: 'Stand out from competitors with a distinctive brand identity.'
        },
        {
          icon: Zap,
          title: 'Fast Delivery',
          description: 'Initial concepts within 3-5 days, final delivery in 2 weeks.'
        },
        {
          icon: TrendingUp,
          title: 'Brand Value',
          description: 'Strong branding increases perceived value by up to 40%.'
        },
        {
          icon: Target,
          title: 'Market Fit',
          description: 'Designs aligned with your target market and industry.'
        },
        {
          icon: Palette,
          title: 'Versatile Assets',
          description: 'All files in multiple formats for any use case.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Brand Discovery',
          description: 'Deep dive into your business, values, and target audience.'
        },
        {
          step: 2,
          title: 'Concept Development',
          description: 'Create multiple brand concepts and mood boards for review.'
        },
        {
          step: 3,
          title: 'Design Refinement',
          description: 'Refine chosen concept with unlimited iterations.'
        },
        {
          step: 4,
          title: 'Brand Rollout',
          description: 'Complete brand assets delivery with implementation support.'
        }
      ]}
      packages={[
        {
          name: 'Logo Package',
          price: '₹14,999',
          period: '/one-time',
          features: [
            'Logo design (3 concepts)',
            'Unlimited revisions',
            'Color variations',
            'Source files (AI, PSD)',
            'Social media kit',
            'Basic brand guidelines'
          ]
        },
        {
          name: 'Brand Identity',
          price: '₹49,999',
          period: '/one-time',
          popular: true,
          features: [
            'Everything in Logo Package',
            'Complete brand identity',
            'Business card design',
            'Letterhead & envelope',
            'Packaging design (1 product)',
            'Store branding template',
            'Comprehensive brand book',
            'Launch support'
          ]
        },
        {
          name: 'Complete Branding',
          price: 'Custom',
          period: '',
          features: [
            'Everything in Brand Identity',
            'Multi-product packaging',
            'Marketing collateral suite',
            'Website design mockups',
            'Photography art direction',
            'Brand strategy consulting',
            'Dedicated brand manager',
            '6-month support'
          ]
        }
      ]}
      faq={[
        {
          question: 'What is included in brand identity?',
          answer: 'Brand identity includes logo, color palette, typography, visual style, brand voice guidelines, and application examples across various mediums.'
        },
        {
          question: 'Do I own the copyright to the designs?',
          answer: 'Yes, upon final payment, you receive full ownership and copyright of all brand assets and designs created for you.'
        },
        {
          question: 'Can you redesign my existing brand?',
          answer: 'Absolutely! We offer brand refresh and redesign services to modernize and strengthen your existing brand identity.'
        },
        {
          question: 'How long does the branding process take?',
          answer: 'Logo design takes 1-2 weeks, complete brand identity 3-4 weeks, and full branding packages 6-8 weeks depending on scope.'
        }
      ]}
    />
  );
}
