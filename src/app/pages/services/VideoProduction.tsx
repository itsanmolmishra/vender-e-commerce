import { Palette, Video, Award, Zap, TrendingUp, Target } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';
import { serviceHeroImages } from '../../data/serviceHeroImages';

export function VideoProduction() {
  return (
    <ServiceDetailPage
      icon={Video}
      title="Video Production"
      subtitle="Engage Customers with Professional Videos"
      description="High-quality video production services for product demos, brand stories, and marketing campaigns that drive conversions."
      gradient="from-red-500 to-pink-600"
      heroImage={serviceHeroImages['video-production']}
      features={[
        {
          title: 'Product Demo Videos',
          description: 'Professional product demonstration videos showcasing features and benefits.'
        },
        {
          title: 'Amazon Video Ads',
          description: 'Sponsored brand videos and product videos optimized for Amazon advertising.'
        },
        {
          title: 'Brand Story Videos',
          description: 'Compelling brand story videos that connect emotionally with customers.'
        },
        {
          title: 'Social Media Videos',
          description: 'Short-form videos for Instagram Reels, YouTube Shorts, and Facebook.'
        },
        {
          title: 'Tutorial & How-To',
          description: 'Educational videos showing product usage and benefits.'
        },
        {
          title: 'Testimonial Videos',
          description: 'Customer testimonial and review videos to build trust.'
        }
      ]}
      benefits={[
        {
          icon: Award,
          title: 'Professional Production',
          description: 'Experienced videographers and editors with e-commerce expertise.'
        },
        {
          icon: TrendingUp,
          title: 'Higher Conversions',
          description: 'Product videos increase conversion rates by 80%.'
        },
        {
          icon: Zap,
          title: 'Quick Turnaround',
          description: 'From concept to final video in 7-10 business days.'
        },
        {
          icon: Target,
          title: 'Platform Optimized',
          description: 'Videos optimized for each platform\'s specifications and audience.'
        },
        {
          icon: Video,
          title: 'Multiple Formats',
          description: 'Receive videos in all required formats and aspect ratios.'
        },
        {
          icon: Palette,
          title: 'Creative Excellence',
          description: 'Engaging storytelling that captures attention and drives action.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Creative Brief',
          description: 'Discuss your goals, product, and video requirements.'
        },
        {
          step: 2,
          title: 'Scripting & Storyboard',
          description: 'Create script and storyboard for your approval.'
        },
        {
          step: 3,
          title: 'Production & Filming',
          description: 'Professional filming with high-quality equipment and lighting.'
        },
        {
          step: 4,
          title: 'Editing & Delivery',
          description: 'Post-production, editing, and delivery in all required formats.'
        }
      ]}
      faq={[
        {
          question: 'Do I need to send my product for filming?',
          answer: 'Yes, for best results we need the physical product. We can also arrange pick-up and safe return shipping. Alternatively, we offer remote guidance for self-filming.'
        },
        {
          question: 'What if I need videos for multiple products?',
          answer: 'We offer bulk discounts for multiple products. Contact us for a custom package tailored to your needs.'
        },
        {
          question: 'Can you add voice-over in multiple languages?',
          answer: 'Yes, we offer voice-over services in Hindi, English, and other regional languages with professional voice artists.'
        },
        {
          question: 'What formats will I receive?',
          answer: 'You\'ll receive videos optimized for each platform: Amazon (16:9), Instagram (1:1, 9:16), YouTube, and Facebook, in MP4 and MOV formats.'
        }
      ]}
    />
  );
}
