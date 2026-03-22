import { ShoppingCart, TrendingUp, Settings } from 'lucide-react';
import { motion } from 'motion/react';

export function Marketplaces() {
  const marketplaces = [
    { name: 'Amazon', logoSrc: '/partners/amazon.svg', color: 'from-orange-500 to-yellow-500' },
    { name: 'Flipkart', logoSrc: '/partners/flipkart.svg', color: 'from-blue-600 to-blue-400' },
    { name: 'Myntra', logoSrc: '/partners/myntra.png', color: 'from-pink-600 to-pink-400' },
    { name: 'Meesho', logoSrc: '/partners/meesho.png', color: 'from-purple-600 to-purple-400' },
    { name: 'Shopify', logoSrc: '/partners/shopify.svg', color: 'from-green-600 to-green-400' }
  ];

  const features = [
    { icon: Settings, label: 'Setup' },
    { icon: ShoppingCart, label: 'Management' },
    { icon: TrendingUp, label: 'Growth' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
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
              Sell On Every Major{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Platform
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              One dashboard to manage all your marketplaces. We make multi-channel selling effortless.
            </p>
          </motion.div>
        </div>

        {/* Marketplace Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {marketplaces.map((marketplace, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${marketplace.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />

              {/* Brand logo (same assets as Trusted Partners / nav) */}
              <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-md bg-white border border-gray-100 p-2 group-hover:shadow-lg transition-shadow">
                <img
                  src={marketplace.logoSrc}
                  alt=""
                  className="max-h-11 w-auto max-w-full object-contain object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{marketplace.name}</h3>

              {/* Features */}
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <feature.icon className="w-4 h-4 text-blue-600" />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-gray-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                <svg className="w-3 h-3 text-gray-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
