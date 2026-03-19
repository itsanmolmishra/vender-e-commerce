import { FileText, Shield, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';

export function GSTServices() {
  return (
    <ServiceDetailPage
      icon={FileText}
      title="GST Registration & Services"
      subtitle="Complete GST Solutions for Your Business"
      description="Fast GST registration, monthly/quarterly return filing, compliance management, and expert consultation. Get GST registered in 3-5 days."
      gradient="from-indigo-500 to-indigo-600"
      features={[
        {
          title: 'GST Registration',
          description: 'Quick GST registration with GSTIN within 3-5 business days for all business types.'
        },
        {
          title: 'GSTR-1 Filing',
          description: 'Monthly/quarterly outward supply returns with invoice reconciliation.'
        },
        {
          title: 'GSTR-3B Filing',
          description: 'Monthly summary returns with tax liability calculation and payment.'
        },
        {
          title: 'Input Tax Credit',
          description: 'ITC reconciliation, claim optimization, and credit utilization planning.'
        },
        {
          title: 'GST Compliance',
          description: 'Annual returns (GSTR-9), audit support, and compliance calendar management.'
        },
        {
          title: 'GST Advisory',
          description: 'Expert consultation on GST rates, HSN codes, and tax-saving strategies.'
        }
      ]}
      benefits={[
        {
          icon: Shield,
          title: 'Penalty Protection',
          description: 'Timely filing to avoid late fees, interest, and GST notices from authorities.'
        },
        {
          icon: Zap,
          title: '3-Day Registration',
          description: 'Get your GSTIN within 3-5 business days with our expedited process.'
        },
        {
          icon: TrendingUp,
          title: 'ITC Maximization',
          description: 'Maximize input tax credit claims to reduce your tax liability.'
        },
        {
          icon: CheckCircle,
          title: '100% Accuracy',
          description: 'CA-verified returns ensuring error-free filing and compliance.'
        },
        {
          icon: Users,
          title: 'Dedicated CA Support',
          description: 'Chartered Accountants available for consultation and query resolution.'
        },
        {
          icon: Shield,
          title: 'Notice Handling',
          description: 'Expert support for responding to GST notices and assessments.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Document Collection',
          description: 'Submit PAN, Aadhaar, business proof, and bank details digitally.'
        },
        {
          step: 2,
          title: 'Application Filing',
          description: 'We prepare and file GST REG-01 application with all supporting documents.'
        },
        {
          step: 3,
          title: 'Verification',
          description: 'Track application status and handle any queries from GST officials.'
        },
        {
          step: 4,
          title: 'GSTIN Issued',
          description: 'Receive your GST registration certificate and login credentials.'
        }
      ]}
      packages={[
        {
          name: 'GST Registration',
          price: '₹1,999',
          period: '',
          features: [
            'GST registration for one state',
            'Document preparation',
            'Online application filing',
            'ARN tracking',
            'GSTIN certificate',
            'GST portal login setup',
            '7-day processing'
          ]
        },
        {
          name: 'Monthly Filing',
          price: '₹1,499',
          period: '/month',
          popular: true,
          features: [
            'GSTR-1 filing',
            'GSTR-3B filing',
            'ITC reconciliation',
            'Invoice verification',
            'Tax payment support',
            'Compliance reminders',
            'Dedicated CA support',
            'GST portal management'
          ]
        },
        {
          name: 'Complete Package',
          price: '₹15,999',
          period: '/year',
          features: [
            'All monthly filings (12 months)',
            'Annual return (GSTR-9)',
            'GST audit support',
            'ITC optimization',
            'Notice handling',
            'Unlimited consultations',
            'Priority support',
            '20% cost savings'
          ]
        }
      ]}
      faq={[
        {
          question: 'Is GST registration mandatory for e-commerce sellers?',
          answer: 'Yes, GST registration is mandatory for all e-commerce sellers in India, regardless of turnover. Marketplaces like Amazon and Flipkart require GSTIN to activate your seller account.'
        },
        {
          question: 'What is the GST rate for products sold online?',
          answer: 'GST rates vary by product category - 5%, 12%, 18%, or 28%. Most common products fall under 12% or 18%. We help identify correct HSN codes and applicable rates for your products.'
        },
        {
          question: 'What happens if I miss the GST return filing deadline?',
          answer: 'Late filing attracts late fees of ₹50 per day (₹20 for nil returns) per Act, plus interest on tax payable. We send timely reminders to ensure you never miss deadlines.'
        },
        {
          question: 'Can I claim GST refund for exports?',
          answer: 'Yes, exports are zero-rated under GST. You can claim refund of input tax credit. We handle the entire refund application process including documentation and tracking.'
        },
        {
          question: 'Do you handle GST notices and assessments?',
          answer: 'Yes, our CA team handles all GST notices, assessment queries, and represents you before GST authorities. This is included in our Complete Package.'
        }
      ]}
    />
  );
}
