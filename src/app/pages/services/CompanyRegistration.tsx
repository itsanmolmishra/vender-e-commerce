import { FileCheck, Shield, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';

export function CompanyRegistration() {
  return (
    <ServiceDetailPage
      icon={FileCheck}
      title="Company Registration"
      subtitle="Fast & Hassle-Free Business Registration"
      description="Complete company registration services for Private Limited, LLP, One Person Company, and Sole Proprietorship. Get your business legally registered in 7-10 days."
      gradient="from-purple-500 to-purple-600"
      features={[
        {
          title: 'Digital Signature Certificate (DSC)',
          description: 'Obtain Class 2 or Class 3 DSC for directors to digitally sign all MCA filings.'
        },
        {
          title: 'Director Identification Number',
          description: 'Apply for DIN for all directors and partners as required by MCA.'
        },
        {
          title: 'Name Approval',
          description: 'Check name availability and secure approval from Ministry of Corporate Affairs.'
        },
        {
          title: 'MOA & AOA Drafting',
          description: 'Professional drafting of Memorandum and Articles of Association tailored to your business.'
        },
        {
          title: 'Company Incorporation',
          description: 'Complete incorporation process with Certificate of Incorporation from MCA.'
        },
        {
          title: 'Post-Registration Support',
          description: 'PAN, TAN, bank account opening support, and compliance calendar setup.'
        }
      ]}
      benefits={[
        {
          icon: Shield,
          title: 'Legal Protection',
          description: 'Limited liability protection separates personal assets from business liabilities.'
        },
        {
          icon: Zap,
          title: '7-Day Registration',
          description: 'Fast-track incorporation process completed within 7-10 working days.'
        },
        {
          icon: TrendingUp,
          title: 'Business Credibility',
          description: 'Registered companies gain trust from clients, investors, and partners.'
        },
        {
          icon: CheckCircle,
          title: '100% Online Process',
          description: 'Completely digital process - no need to visit government offices.'
        },
        {
          icon: Users,
          title: 'Expert Guidance',
          description: 'CA and CS professionals guide you through every step of registration.'
        },
        {
          icon: Shield,
          title: 'Compliance Support',
          description: 'Ongoing support for annual filings, statutory registers, and board meetings.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Business Structure',
          description: 'Consult with our experts to choose the right business structure for your needs.'
        },
        {
          step: 2,
          title: 'Documentation',
          description: 'Submit required documents - ID proof, address proof, and business details.'
        },
        {
          step: 3,
          title: 'Name & Filing',
          description: 'We handle name approval and file all applications with MCA on your behalf.'
        },
        {
          step: 4,
          title: 'Incorporation',
          description: 'Receive Certificate of Incorporation and PAN/TAN within 7-10 days.'
        }
      ]}
      packages={[
        {
          name: 'Sole Proprietorship',
          price: '₹4,999',
          period: '',
          features: [
            'Business name registration',
            'GST registration',
            'Shop & Establishment Act',
            'MSME/Udyam registration',
            'Bank account opening support',
            'Digital documentation'
          ]
        },
        {
          name: 'Private Limited Company',
          price: '₹14,999',
          period: '',
          popular: true,
          features: [
            '2 DSC (Digital Signatures)',
            '2 DIN applications',
            'Name approval (RUN)',
            'MOA & AOA drafting',
            'PAN & TAN application',
            'Certificate of Incorporation',
            'Share certificates',
            'First year compliance free',
            'Current account opening support'
          ]
        },
        {
          name: 'LLP Registration',
          price: '₹11,999',
          period: '',
          features: [
            '2 DSC for designated partners',
            '2 DPIN applications',
            'Name approval',
            'LLP Agreement drafting',
            'PAN & TAN',
            'Certificate of Incorporation',
            'Compliance support',
            'Bank account assistance'
          ]
        }
      ]}
      faq={[
        {
          question: 'What is the difference between Pvt Ltd and LLP?',
          answer: 'Private Limited offers more credibility for fundraising and expansion but has stricter compliance. LLP offers flexibility with lower compliance requirements and is ideal for service businesses.'
        },
        {
          question: 'How many directors are required for Pvt Ltd company?',
          answer: 'Minimum 2 directors and maximum 200 directors are allowed in a Private Limited Company. At least one director must be an Indian resident.'
        },
        {
          question: 'What is the minimum capital requirement?',
          answer: 'There is no minimum capital requirement for Private Limited Company or LLP registration in India. You can start with ₹1 lakh or any amount you choose.'
        },
        {
          question: 'Can foreign nationals be directors?',
          answer: 'Yes, foreign nationals can be directors. However, at least one director must be an Indian resident. We handle all DIN applications for foreign directors.'
        },
        {
          question: 'What are the annual compliance requirements?',
          answer: 'Private Limited companies must file annual returns (MGT-7), financial statements (AOC-4), income tax returns, and maintain statutory registers. We provide compliance packages for ongoing support.'
        }
      ]}
    />
  );
}
