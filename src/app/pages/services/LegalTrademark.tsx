import { Shield, FileCheck, Clock, TrendingUp, Users, Award } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';
import { serviceHeroImages } from '../../data/serviceHeroImages';

export function LegalTrademark() {
  return (
    <ServiceDetailPage
      icon={Shield}
      title="Legal & Trademark Services"
      subtitle="Protect Your Brand & Business"
      description="Comprehensive legal support and trademark registration services to safeguard your brand identity and intellectual property."
      gradient="from-purple-500 to-indigo-600"
      heroImage={serviceHeroImages['legal-trademark']}
      features={[
        {
          title: 'Trademark Registration',
          description: 'Complete trademark filing and registration across multiple classes and jurisdictions.'
        },
        {
          title: 'Brand Protection',
          description: 'Monitor and protect your brand from infringement across marketplaces.'
        },
        {
          title: 'Legal Documentation',
          description: 'Partnership agreements, NDAs, vendor contracts, and business documentation.'
        },
        {
          title: 'IP Consultation',
          description: 'Expert guidance on intellectual property strategy and portfolio management.'
        },
        {
          title: 'Marketplace Compliance',
          description: 'Ensure compliance with Amazon Brand Registry, Flipkart Brand Store requirements.'
        },
        {
          title: 'Dispute Resolution',
          description: 'Professional support for trademark disputes and infringement cases.'
        }
      ]}
      benefits={[
        {
          icon: Shield,
          title: 'Brand Security',
          description: 'Protect your brand identity and prevent unauthorized use across Partnership.'
        },
        {
          icon: FileCheck,
          title: 'Fast Processing',
          description: 'Expert handling ensures faster approval with 95% success rate.'
        },
        {
          icon: Clock,
          title: 'Quick Turnaround',
          description: 'Trademark filing completed within 48 hours of documentation.'
        },
        {
          icon: TrendingUp,
          title: 'Market Advantage',
          description: 'Registered trademarks unlock premium features on marketplaces.'
        },
        {
          icon: Users,
          title: 'Expert Team',
          description: 'Experienced IP attorneys and legal professionals.'
        },
        {
          icon: Award,
          title: 'Long-term Support',
          description: 'Ongoing monitoring and renewal management for your trademarks.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Consultation',
          description: 'Free consultation to understand your brand protection needs.'
        },
        {
          step: 2,
          title: 'Trademark Search',
          description: 'Comprehensive search to ensure your mark is unique and registrable.'
        },
        {
          step: 3,
          title: 'Filing & Registration',
          description: 'Complete filing with IPO and follow-up until registration.'
        },
        {
          step: 4,
          title: 'Protection & Monitoring',
          description: 'Ongoing brand monitoring and protection services.'
        }
      ]}
      faq={[
        {
          question: 'How long does trademark registration take?',
          answer: 'The process typically takes 12-18 months for complete registration, though you can start using the TM symbol once filed.'
        },
        {
          question: 'Do I need a trademark to sell on marketplaces?',
          answer: 'While not mandatory, a registered trademark unlocks premium features like Amazon Brand Registry, enhanced brand protection, and better visibility.'
        },
        {
          question: 'Can you help with international trademark registration?',
          answer: 'Yes, we assist with trademark registration in multiple countries through Madrid Protocol and direct filing in specific jurisdictions.'
        },
        {
          question: 'What happens if my trademark is objected?',
          answer: 'Our IP attorneys will handle all objections and responses to ensure the best chance of approval, included in our service packages.'
        }
      ]}
    />
  );
}
