import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Benefits() {
  const benefits = [
    {
      title: 'Save 10+ Hours Weekly',
      description: 'Automate routine tasks and focus on growing your business while we handle the operations.'
    },
    {
      title: 'Reduce Operating Costs by 40%',
      description: 'Our efficient systems and bulk resources help you save significantly on operations.'
    },
    {
      title: 'Increase Conversion Rate',
      description: 'Professional listings, quality images, and optimized content boost your sales by 2-3x.'
    },
    {
      title: 'Zero Technical Hassle',
      description: 'No need to learn complex marketplace rules - we handle all technical aspects.'
    },
    {
      title: 'Expert Team Access',
      description: 'Get a dedicated team of e-commerce experts without hiring full-time employees.'
    },
    {
      title: 'Scale Without Limits',
      description: 'Expand to new platforms and categories seamlessly as your business grows.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Transform Your Business in Ways You Never Imagined
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join hundreds of successful sellers who have already transformed their e-commerce journey with our comprehensive platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-blue-100">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">₹100Cr+</div>
                <div className="text-sm text-blue-100">GMV Managed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-blue-100">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
