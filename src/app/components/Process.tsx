import { UserPlus, Settings, Rocket, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Process() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up & Onboard',
      description: 'Create your account and tell us about your business goals',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Settings,
      title: 'Setup & Configure',
      description: 'We set up your marketplace accounts and integrate your inventory',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Rocket,
      title: 'Launch Products',
      description: 'Start selling with optimized listings and professional content',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Scale & Grow',
      description: 'Leverage our marketing and analytics to boost your sales',
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How It{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From setup to success in four simple steps
            </p>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-xl font-bold text-gray-700">{idx + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>

                  {/* Hover effect gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />
                </div>

                {/* Connection Dot - Desktop */}
                <div className={`hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br ${step.gradient} rounded-full shadow-lg border-4 border-white z-10`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
