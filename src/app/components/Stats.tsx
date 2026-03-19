import { Users, ShoppingBag, Globe, Award, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Active Clients',
      description: 'Trusted by sellers nationwide',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: ShoppingBag,
      value: '7+',
      label: 'Platforms',
      description: 'Multi-channel coverage',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      value: '3X',
      label: 'Average Growth',
      description: 'Sales increase in 6 months',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Award,
      value: '95%',
      label: 'Success Rate',
      description: 'Client satisfaction',
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Trusted by Thousands of Sellers
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join the fastest-growing e-commerce community
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-lg rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                {/* Value */}
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>

                {/* Label */}
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>

                {/* Description */}
                <div className="text-sm text-blue-100">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}