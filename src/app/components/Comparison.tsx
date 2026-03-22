import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

export function Comparison() {
  const features = [
    { name: 'Account Setup & Management', diy: false, basic: true, us: true },
    { name: 'Multi-Platform Integration', diy: false, basic: false, us: true },
    { name: 'Inventory Sync', diy: false, basic: true, us: true },
    { name: 'Order Processing', diy: true, basic: true, us: true },
    { name: 'GST & Legal Compliance', diy: false, basic: false, us: true },
    { name: 'Professional Photography', diy: false, basic: false, us: true },
    { name: 'SEO Optimization', diy: false, basic: false, us: true },
    { name: 'PPC Campaign Management', diy: false, basic: false, us: true },
    { name: '24/7 Support', diy: false, basic: false, us: true },
    { name: 'Dedicated Account Manager', diy: false, basic: false, us: true },
    { name: 'Analytics & Reporting', diy: false, basic: true, us: true },
    { name: 'Product Supply Network', diy: false, basic: false, us: true }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ceuki India Pvt Ltd
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we compare to doing it yourself or basic services
            </p>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
            <div className="font-semibold text-gray-900">Features</div>
            <div className="text-center">
              <div className="font-semibold text-gray-700 mb-1">DIY</div>
              <div className="text-xs text-gray-500">Do It Yourself</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-700 mb-1">Basic</div>
              <div className="text-xs text-gray-500">Other Services</div>
            </div>
            <div className="text-center">
              <div className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 text-sm sm:text-base leading-tight whitespace-normal px-1">
                Ceuki India Pvt Ltd
              </div>
              <div className="text-xs text-gray-500">Full Service</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="grid grid-cols-4 gap-4 p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="text-gray-700">{feature.name}</div>
                <div className="flex justify-center">
                  {feature.diy ? (
                    <Check className="w-5 h-5 text-gray-400" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.basic ? (
                    <Check className="w-5 h-5 text-gray-400" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.us ? (
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Footer CTA */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-700 mb-4">Ready to experience the Ceuki India Pvt Ltd difference?</p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
