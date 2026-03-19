import { Check, Zap, Award, Crown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: '₹9,999', yearly: '₹99,990' },
      description: 'Perfect for new sellers starting their journey',
      gradient: 'from-blue-500 to-purple-500',
      features: [
        'Single Platform Integration',
        'Basic Product Listing (up to 50)',
        'Order Management Dashboard',
        'Email Support',
        'Monthly Performance Reports',
        'GST Registration Assistance',
        'Basic SEO Optimization',
        'Community Access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      icon: Award,
      price: { monthly: '₹24,999', yearly: '₹2,49,990' },
      description: 'Best for growing businesses',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Up to 3 Platform Integrations',
        'Unlimited Product Listings',
        'Advanced Analytics & Reports',
        'Priority Support (24/7)',
        'PPC Campaign Management',
        'Product Photography (10/month)',
        'Brand Store Setup',
        'Inventory Management',
        'Legal & Compliance Support',
        'Dedicated Account Manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: { monthly: '₹49,999', yearly: '₹4,99,990' },
      description: 'For established brands scaling up',
      gradient: 'from-pink-500 to-purple-600',
      features: [
        'All Platform Integrations',
        'Unlimited Everything',
        'AI-Powered Analytics',
        'Premium 24/7 Support',
        'Advanced PPC & SEO',
        'Unlimited Product Photography',
        'Custom Brand Development',
        'Multi-Channel Inventory Sync',
        'Legal Team Support',
        'Dedicated Success Team',
        'Custom API Integration',
        'White-label Solutions'
      ],
      popular: false
    }
  ];

  const addons = [
    {
      name: 'Product Photography Pack',
      price: '₹999/product',
      description: 'Professional photography with editing'
    },
    {
      name: 'Video Production',
      price: '₹4,999/video',
      description: 'High-quality product videos'
    },
    {
      name: 'Advanced PPC Management',
      price: '₹9,999/month',
      description: 'Dedicated campaign optimization'
    },
    {
      name: 'Brand Store Design',
      price: '₹14,999 one-time',
      description: 'Custom storefront design'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your e-commerce business. All plans include our core features.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative bg-white rounded-3xl shadow-xl p-8 ${
                  plan.popular ? 'ring-4 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="text-gray-600">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Premium Add-ons</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Enhance your plan with additional services tailored to your needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, idx) => (
              <div
                key={idx}
                className="p-6 border-2 border-gray-200 rounded-2xl hover:border-purple-500 transition-all hover:shadow-lg"
              >
                <h3 className="font-bold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-purple-600 mb-3">{addon.price}</p>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Our team is here to help you choose the right plan
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
            Contact Sales Team
          </button>
        </motion.div>
      </div>
    </div>
  );
}
