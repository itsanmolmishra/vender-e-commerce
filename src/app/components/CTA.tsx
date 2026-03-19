import { ArrowRight, Sparkles, Star, CheckCircle2, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/20"
        >
          {/* Animated background decorations */}
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" 
            />
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-12 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 right-12 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-8 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span className="text-sm text-white font-semibold">Limited Time Offer - 14 Days Free Trial</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Ready to Scale Your{' '}
              <span className="block mt-2 bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                E-commerce Business?
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Join 500+ sellers who have already transformed their business with our platform.
              Get started today with a free consultation and see results in 30 days.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <button className="group relative px-10 py-5 bg-white text-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/30 font-bold text-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg">
                <span className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Schedule a Call
                </span>
              </button>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">No Credit Card Required</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">Cancel Anytime</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">Setup in 48 Hours</span>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-10 border-t border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center shadow-lg">
                      <span className="text-sm text-white font-bold">👤</span>
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg">500+</div>
                  <div className="text-white/80 text-sm">Happy Sellers</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <div className="text-left ml-2">
                  <div className="text-white font-bold text-lg">4.9/5</div>
                  <div className="text-white/80 text-sm">Avg Rating</div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-white/20" />

              <div className="text-center">
                <div className="text-white font-bold text-2xl">3X</div>
                <div className="text-white/80 text-sm">Average Growth</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}