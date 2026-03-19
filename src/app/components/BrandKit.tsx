import { Logo, LogoMark } from './Logo';
import { Download, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export function BrandKit() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              EcomHub{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Brand Kit
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Complete brand identity package with all logo variations and guidelines
            </p>
          </motion.div>
        </div>

        {/* Quick Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Logo on White */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center justify-center h-24 mb-4">
              <Logo variant="full" size="md" />
            </div>
            <p className="text-sm text-gray-600 text-center">Light Background</p>
          </motion.div>

          {/* Logo on Dark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700"
          >
            <div className="flex items-center justify-center h-24 mb-4">
              <Logo variant="full" theme="dark" size="md" />
            </div>
            <p className="text-sm text-gray-300 text-center">Dark Background</p>
          </motion.div>

          {/* Icon Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center justify-center h-24 mb-4">
              <LogoMark size={56} />
            </div>
            <p className="text-sm text-gray-600 text-center">Icon Mark</p>
          </motion.div>

          {/* Stacked */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center justify-center h-24 mb-4">
              <Logo variant="stacked" theme="dark" size="sm" />
            </div>
            <p className="text-sm text-white text-center">Stacked Version</p>
          </motion.div>
        </div>

        {/* Download Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">SVG Package</h3>
                <p className="text-sm text-blue-200">Vector files</p>
              </div>
            </div>
            <p className="text-sm text-blue-200 mb-4">
              All logo variations in scalable SVG format. Perfect for web and print.
            </p>
            <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-medium text-white transition-all">
              Download SVG
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">PNG Package</h3>
                <p className="text-sm text-blue-200">Raster images</p>
              </div>
            </div>
            <p className="text-sm text-blue-200 mb-4">
              High-resolution PNG files in multiple sizes for various use cases.
            </p>
            <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-medium text-white transition-all">
              Download PNG
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Brand Guidelines</h3>
                <p className="text-sm text-blue-200">PDF document</p>
              </div>
            </div>
            <p className="text-sm text-blue-200 mb-4">
              Complete brand guide with usage rules, colors, and typography.
            </p>
            <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-medium text-white transition-all">
              View Guidelines
            </button>
          </motion.div>
        </div>

        {/* Color Swatches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Brand Colors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="h-24 bg-[#2563EB] rounded-xl mb-3 shadow-lg" />
              <div className="text-white font-medium">#2563EB</div>
              <div className="text-blue-200 text-sm">Primary Blue</div>
            </div>
            <div>
              <div className="h-24 bg-[#3B82F6] rounded-xl mb-3 shadow-lg" />
              <div className="text-white font-medium">#3B82F6</div>
              <div className="text-blue-200 text-sm">Mid Blue</div>
            </div>
            <div>
              <div className="h-24 bg-[#38BDF8] rounded-xl mb-3 shadow-lg" />
              <div className="text-white font-medium">#38BDF8</div>
              <div className="text-blue-200 text-sm">Cyan</div>
            </div>
            <div>
              <div className="h-24 bg-[#F97316] rounded-xl mb-3 shadow-lg" />
              <div className="text-white font-medium">#F97316</div>
              <div className="text-blue-200 text-sm">Orange Accent</div>
            </div>
          </div>
        </motion.div>

        {/* Download All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
            <Download className="w-6 h-6" />
            Download Complete Brand Kit
          </button>
          <p className="text-blue-200 mt-4 text-sm">Includes all logo files, color swatches, and brand guidelines</p>
        </motion.div>
      </div>
    </section>
  );
}
