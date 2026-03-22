import React from 'react';
import { ArrowRight, PlayCircle, TrendingUp, ShoppingBag, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const heroVideo = new URL('../../assets/PixVerse_V5.6_Image_Text_360P_Create_a_premium.mp4', import.meta.url).href;

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl -z-10" />
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-2xl blur-sm -z-10"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-sm -z-10"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg shadow-blue-500/10 mb-8"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Trusted by 500+ Sellers Worldwide
              </span>
            </motion.div>

            {/* Heading with improved typography */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]"
            >
              Launch & Grow Your{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  E-commerce Business
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                />
              </span>
            </motion.h1>

            {/* Enhanced Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              We handle everything from account setup to scaling your sales across Amazon, Flipkart, Myntra, Meesho, and Shopify.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2 font-semibold">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl shadow-lg transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center gap-2 font-semibold">
                  <PlayCircle className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </span>
              </button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="group cursor-default">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="text-sm text-gray-600 mt-2 font-medium">Active Clients</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  7+
                </div>
                <div className="text-sm text-gray-600 mt-2 font-medium">Patnership</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  3X
                </div>
                <div className="text-sm text-gray-600 mt-2 font-medium">Avg Growth</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Dashboard with Illustrations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
              {/* Soft premium tint without blur to keep video sharp */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-blue-100/10 border border-white/50 rounded-3xl z-10 pointer-events-none" />
              
              {/* Hero Demo Video */}
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[16/9] relative z-0 object-cover"
                aria-label="Premium e-commerce platform preview video"
              />

              {/* Video label chip */}
              <div className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs tracking-wide uppercase font-semibold">
                Live Platform Preview
              </div>

              {/* Enhanced Floating Cards with Icons */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -left-4 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/50 z-20 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-medium text-gray-600">Total Revenue</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mt-1">₹12.5L</div>
                <div className="flex items-center gap-1 text-sm text-green-600 mt-2 font-medium">
                  <TrendingUp className="w-4 h-4" />
                  +23% this month
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                className="absolute bottom-8 -right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/50 z-20 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-medium text-gray-600">Orders</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mt-1">1,247</div>
                <div className="flex items-center gap-1 text-sm text-blue-600 mt-2 font-medium">
                  <Zap className="w-4 h-4" />
                  +18% increase
                </div>
              </motion.div>

            </div>

            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}