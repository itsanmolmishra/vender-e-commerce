import { Camera, Image, Sparkles, Zap, Users, TrendingUp } from 'lucide-react';
import { ServiceDetailPage } from '../ServiceDetailPage';
import { serviceHeroImages } from '../../data/serviceHeroImages';

export function ProductPhotography() {
  return (
    <ServiceDetailPage
      icon={Camera}
      title="Product Photography"
      subtitle="Professional E-commerce Photography"
      description="High-quality product photography that drives conversions. Studio-grade images, 360° views, lifestyle shoots, and A+ content visuals for all marketplaces."
      gradient="from-pink-500 to-pink-600"
      heroImage={serviceHeroImages['product-photography']}
      features={[
        {
          title: 'White Background Shoots',
          description: 'Clean, professional product images on pure white backgrounds meeting Amazon/Flipkart standards.'
        },
        {
          title: '360° Product Views',
          description: 'Interactive 360-degree product photography for enhanced customer engagement.'
        },
        {
          title: 'Lifestyle Photography',
          description: 'Styled product shots in real-life settings to showcase usage and context.'
        },
        {
          title: 'Infographic Images',
          description: 'Feature callouts, size charts, and benefits highlighted in visual format.'
        },
        {
          title: 'A+ Content Visuals',
          description: 'High-resolution images optimized for Amazon A+ Content and Flipkart Rich Media.'
        },
        {
          title: 'Image Editing & Retouching',
          description: 'Professional color correction, background removal, and enhancement for pixel-perfect results.'
        }
      ]}
      benefits={[
        {
          icon: TrendingUp,
          title: 'Higher Conversions',
          description: 'Professional images increase conversion rates by 30-50% compared to amateur photos.'
        },
        {
          icon: Sparkles,
          title: 'Studio Quality',
          description: 'Professional lighting, cameras, and equipment for magazine-quality images.'
        },
        {
          icon: Zap,
          title: 'Fast Turnaround',
          description: 'Receive edited images within 24-48 hours of the photoshoot.'
        },
        {
          icon: Camera,
          title: 'Multiple Angles',
          description: 'Get 6-8 different angles and compositions for each product.'
        },
        {
          icon: Users,
          title: 'Expert Photographers',
          description: 'Experienced e-commerce photographers who understand marketplace requirements.'
        },
        {
          icon: Image,
          title: 'Marketplace Ready',
          description: 'Images delivered in correct dimensions and file sizes for all Partnership.'
        }
      ]}
      process={[
        {
          step: 1,
          title: 'Product Collection',
          description: 'Ship products to our studio or we can shoot at your location.'
        },
        {
          step: 2,
          title: 'Photography Session',
          description: 'Professional shoot with multiple angles, props, and styling options.'
        },
        {
          step: 3,
          title: 'Editing & Enhancement',
          description: 'Color correction, background removal, and professional retouching.'
        },
        {
          step: 4,
          title: 'Delivery & Upload',
          description: 'Receive images via secure download and we can upload to your listings.'
        }
      ]}
      faq={[
        {
          question: 'What products do you photograph?',
          answer: 'We photograph all types of products - fashion, electronics, jewelry, home decor, beauty, food, and more. Our studio is equipped to handle items from small jewelry to large furniture.'
        },
        {
          question: 'Do I need to provide props or backgrounds?',
          answer: 'No, our studio has a wide range of props, backgrounds, and styling accessories. However, you\'re welcome to provide specific props if you have brand requirements.'
        },
        {
          question: 'What are the image specifications for Amazon/Flipkart?',
          answer: 'Main images must be on pure white background (RGB 255, 255, 255), minimum 1000px on longest side, and product should fill 85% of frame. We ensure all images meet these requirements.'
        },
        {
          question: 'Can you handle bulk photography for large catalogs?',
          answer: 'Yes! We have capacity to shoot 50-100+ products per day. For bulk orders, we offer discounted rates and dedicated project management.'
        },
        {
          question: 'Do you offer video production as well?',
          answer: 'Yes, we create product videos for Amazon A+ Content, social media, and websites. Videos include product demonstrations, unboxing, and 360° rotation clips.'
        }
      ]}
    />
  );
}
