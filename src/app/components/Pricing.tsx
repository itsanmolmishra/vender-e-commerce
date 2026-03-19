import { Check, Zap, Crown, Rocket, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '₹9,999',
      period: '/month',
      description: 'Perfect for new sellers just getting started',
      features: [
        '1 Marketplace account setup',
        'Up to 50 products',
        'Basic inventory management',
        'Email support',
        'Monthly performance reports',
        'Product listing optimization'
      ],
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100/50',
      popular: false
    },
    {
      name: 'Professional',
      icon: Crown,
      price: '₹24,999',
      period: '/month',
      description: 'Best for growing businesses',
      features: [
        '3 Marketplace accounts',
        'Up to 500 products',
        'Advanced inventory management',
        'Priority support (24/7)',
        'Weekly analytics & insights',
        'SEO & PPC campaign management',
        'Product photography (10/month)',
        'Dedicated account manager',
        'GST & compliance support'
      ],
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100/50',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      price: 'Custom',
      period: '',
      description: 'For established brands and high-volume sellers',
      features: [
        'Unlimited marketplace accounts',
        'Unlimited products',
        'Full-service management',
        'White-glove support',
        'Real-time analytics dashboard',
        'Advanced marketing automation',
        'Unlimited product photography',
        'Dedicated team (4+ members)',
        'Legal & trademark services',
        'Custom integrations',
        'Bulk product supply'
      ],
      gradient: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-50 to-pink-100/50',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100 to-transparent rounded-full blur-3xl opacity-30 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-6 border border-blue-200/50">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Flexible Pricing</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. Scale as you grow with no hidden fees.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative group ${
                  plan.popular ? 'lg:scale-105 lg:-my-4' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
                  plan.popular 
                    ? 'border-purple-500 hover:border-purple-600' 
                    : 'border-gray-200 hover:border-blue-400'
                } overflow-hidden`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6 min-h-[48px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-500 text-lg">
                          {plan.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced CTA Button */}
                  <button className={`w-full group/btn relative px-6 py-4 bg-gradient-to-r ${plan.gradient} text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-xl`} />
                    <span className="relative flex items-center justify-center gap-2">
                      {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>

                  {/* Decorative elements */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${plan.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            All plans include a <span className="font-bold text-blue-600">14-day free trial</span>. No credit card required.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group">
              Need help choosing? 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
              Compare all features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}