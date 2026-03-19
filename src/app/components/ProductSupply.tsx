import { motion } from 'motion/react';
import { Package } from 'lucide-react';

export function ProductSupply() {
  const products = [
    {
      name: 'Soft Toys',
      image: 'https://images.unsplash.com/photo-1560128382-af550cccf1aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVzaCUyMHRlZGR5JTIwYmVhciUyMHRveXxlbnwxfHx8fDE3NzM4NTE4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMGdhZGdldHN8ZW58MXx8fHwxNzczOTQwMTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Speakers',
      image: 'https://images.unsplash.com/photo-1762328500592-c6f654d07e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyJTIwZGV2aWNlfGVufDF8fHx8MTc3Mzg1ODQ5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Home Appliances',
      image: 'https://images.unsplash.com/photo-1677578447584-f28f89d1361e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZmFuJTIwaG9tZSUyMGFwcGxpYW5jZXxlbnwxfHx8fDE3NzM5NDk1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
              <Package className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Product Supply</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Bulk Product{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Supply Chain
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access to verified suppliers and bulk inventory for your business
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Bulk Supply Available</span>
                  <div className={`w-8 h-8 bg-gradient-to-br ${product.gradient} rounded-full flex items-center justify-center`}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <span className={`text-xs font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                  In Stock
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
