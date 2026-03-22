import { ArrowUpRight, TrendingUp, ShoppingBag, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function CaseStudies() {
  const cases = [
    {
      company: 'StyleCraft Fashion',
      industry: 'Apparel & Accessories',
      image: 'https://images.unsplash.com/photo-1560128382-af550cccf1aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVzaCUyMHRlZGR5JTIwYmVhciUyMHRveXxlbnwxfHx8fDE3NzM4NTE4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Struggling with low visibility on multiple Partnership and manual inventory management',
      results: [
        { icon: TrendingUp, label: 'Revenue Growth', value: '340%' },
        { icon: ShoppingBag, label: 'Monthly Orders', value: '5.2K' },
        { icon: Users, label: 'New Customers', value: '12K+' }
      ],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      company: 'TechGadget Pro',
      industry: 'Electronics & Accessories',
      image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMGdhZGdldHN8ZW58MXx8fHwxNzczOTQwMTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Needed professional presence across Amazon and Flipkart with optimized listings',
      results: [
        { icon: TrendingUp, label: 'Revenue Growth', value: '280%' },
        { icon: ShoppingBag, label: 'Monthly Orders', value: '3.8K' },
        { icon: Users, label: 'Return Rate', value: '-45%' }
      ],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      company: 'HomeLiving Essentials',
      industry: 'Home & Kitchen',
      image: 'https://images.unsplash.com/photo-1677578447584-f28f89d1361e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZmFuJTIwaG9tZSUyMGFwcGxpYW5jZXxlbnwxfHx8fDE3NzM5NDk1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Zero online presence, needed complete setup from scratch including GST registration',
      results: [
        { icon: TrendingUp, label: 'Revenue (6mo)', value: '₹45L' },
        { icon: ShoppingBag, label: 'Monthly Orders', value: '2.1K' },
        { icon: Users, label: 'Partnership Live', value: '5' }
      ],
      gradient: 'from-purple-500 to-indigo-600'
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
              Success{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from businesses we've helped transform
            </p>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-60`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">{study.company}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mb-4">
                  {study.industry}
                </div>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  <span className="font-semibold text-gray-900">Challenge:</span> {study.challenge}
                </p>

                {/* Results */}
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-gray-900 mb-3">Results:</div>
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 bg-gradient-to-br ${study.gradient} rounded-lg flex items-center justify-center`}>
                          <result.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-gray-700">{result.label}</span>
                      </div>
                      <span className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                        {result.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Read More Link */}
                <button className="mt-6 w-full py-3 bg-gray-50 hover:bg-gray-100 rounded-xl font-medium text-gray-900 transition-colors flex items-center justify-center gap-2 group">
                  Read Full Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
