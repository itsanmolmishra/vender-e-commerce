import { Clock, Shield, FileCheck, TrendingUp, Users, Award } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';

export function ComplianceSupport() {
  return (
    <ServiceDetailPage
      icon={Clock}
      title="Compliance Support"
      subtitle="Stay Compliant, Sell Confidently"
      description="Expert compliance management to ensure your e-commerce business meets all regulatory requirements and marketplace policies."
      gradient="from-blue-500 to-cyan-600"
      features={[
        {
          title: 'Marketplace Compliance',
          description: 'Stay compliant with Amazon, Flipkart, Myntra, and other platform policies.'
        },
        {
          title: 'GST Compliance',
          description: 'Complete GST filing, returns, and reconciliation services.'
        },
        {
          title: 'Legal Compliance',
          description: 'Ensure adherence to Consumer Protection Act, e-commerce rules, and regulations.'
        },
        {
          title: 'Product Compliance',
          description: 'Certification support for BIS, FSSAI, and category-specific requirements.'
        },
        {
          title: 'Data Protection',
          description: 'GDPR and data privacy compliance for international sales.'
        },
        {
          title: 'Regular Audits',
          description: 'Periodic compliance audits and risk assessments.'
        }
      ]}
      benefits={[
        {
          icon: Shield,
          title: 'Risk Mitigation',
          description: 'Prevent account suspensions and legal issues with proactive compliance.'
        },
        {
          icon: FileCheck,
          title: 'Expert Guidance',
          description: 'Stay updated with changing regulations and marketplace policies.'
        },
        {
          icon: Clock,
          title: 'Save Time',
          description: 'Focus on growth while we handle complex compliance requirements.'
        },
        {
          icon: TrendingUp,
          title: 'Better Performance',
          description: 'Compliant sellers get better visibility and customer trust.'
        },
        {
          icon: Users,
          title: 'Dedicated Team',
          description: 'Compliance experts with deep knowledge of e-commerce regulations.'
        },
        {
          icon: Award,
          title: 'Peace of Mind',
          description: 'Sleep easy knowing your business is fully compliant.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Compliance Audit',
          description: 'Comprehensive audit of your current compliance status.'
        },
        {
          step: 2,
          title: 'Gap Analysis',
          description: 'Identify compliance gaps and create action plan.'
        },
        {
          step: 3,
          title: 'Implementation',
          description: 'Execute compliance improvements and documentation.'
        },
        {
          step: 4,
          title: 'Ongoing Monitoring',
          description: 'Continuous monitoring and updates for regulatory changes.'
        }
      ]}
      packages={[
        {
          name: 'Basic',
          price: '₹7,999',
          period: '/month',
          features: [
            'GST compliance support',
            'Marketplace policy guidance',
            'Monthly compliance review',
            'Documentation assistance',
            'Email support',
            'Compliance alerts'
          ]
        },
        {
          name: 'Professional',
          price: '₹15,999',
          period: '/month',
          popular: true,
          features: [
            'Everything in Basic',
            'Multi-platform compliance',
            'Product certification support',
            'Legal documentation',
            'Quarterly compliance audits',
            'Priority issue resolution',
            'Dedicated compliance manager',
            '24/7 support'
          ]
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '',
          features: [
            'Everything in Professional',
            'International compliance',
            'Custom compliance framework',
            'Legal team on retainer',
            'Monthly audits',
            'Risk management',
            'Dedicated team',
            'Strategic consulting'
          ]
        }
      ]}
      faq={[
        {
          question: 'Why is marketplace compliance important?',
          answer: 'Non-compliance can lead to account suspensions, listing removals, and loss of revenue. Staying compliant ensures smooth operations and customer trust.'
        },
        {
          question: 'What happens if my account is suspended for compliance issues?',
          answer: 'We provide complete suspension appeal support, working directly with marketplace teams to resolve issues and reinstate your account.'
        },
        {
          question: 'Do you handle GST filing?',
          answer: 'Yes, we provide complete GST compliance including filing, returns, reconciliation, and marketplace GST reporting.'
        },
        {
          question: 'How do you stay updated with changing regulations?',
          answer: 'Our team continuously monitors regulatory changes, marketplace policy updates, and industry developments to keep you compliant.'
        }
      ]}
    />
  );
}
