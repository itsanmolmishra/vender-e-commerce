import { motion } from 'motion/react';

export function ClientLogos() {
  const clients = [
    'Amazon', 'Flipkart', 'Myntra', 'Meesho', 'Shopify', 
    'Nykaa', 'Ajio', 'eBay', 'Etsy', 'BigCommerce'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Trusted Partners & Platforms
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="group flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-32 h-20 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center border border-gray-200 group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-lg font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                    {client}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
