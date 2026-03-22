import { Shield, Zap, Users, TrendingUp, HeadphonesIcon, Globe, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-grade security with full GST and legal compliance. Your business data is always protected.',
      gradient: 'from-blue-500 to-blue-600',
      glowColor: 'blue-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get your marketplace accounts up and running in 48-72 hours. Start selling immediately.',
      gradient: 'from-yellow-500 to-orange-600',
      glowColor: 'orange-500'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Expert account managers, designers, and marketers focused on growing your business.',
      gradient: 'from-purple-500 to-purple-600',
      glowColor: 'purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Growth',
      description: 'Advanced analytics and insights to optimize your sales and maximize ROI across all Partnership.',
      gradient: 'from-green-500 to-green-600',
      glowColor: 'green-500'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any issues or questions.',
      gradient: 'from-pink-500 to-pink-600',
      glowColor: 'pink-500'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Selling',
      description: 'Manage all your marketplaces from one dashboard. Sync inventory, orders, and analytics.',
      gradient: 'from-cyan-500 to-cyan-600',
      glowColor: 'cyan-500'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
      
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
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Why Choose Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ceuki India Pvt Ltd
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to succeed in e-commerce, all in one place with professional support
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2 overflow-hidden">
                  {/* Gradient glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon with animation */}
                  <div className="mb-6 relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Icon glow */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  {/* Bottom shine effect */}
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                99.9%
              </div>
              <div className="text-blue-100 font-medium">Uptime</div>
            </div>
            <div className="group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-blue-100 font-medium">Happy Clients</div>
            </div>
            <div className="group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-blue-100 font-medium">Support</div>
            </div>
            <div className="group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                3X
              </div>
              <div className="text-blue-100 font-medium">Avg Growth</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}