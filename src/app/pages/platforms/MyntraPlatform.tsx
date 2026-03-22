import { motion } from 'motion/react';
import { Palette, TrendingUp, Users, Star, ArrowRight, CheckCircle, BarChart, Shield, Zap, Heart, Award, Sparkles } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { PartnershipFocusSections } from '../../components/PartnershipFocusSections';
import { useNavigate } from 'react-router';

export function MyntraPlatform() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Users,
      title: "100M+ Fashion Lovers",
      description: "India's #1 fashion destination"
    },
    {
      icon: TrendingUp,
      title: "Premium Audience",
      description: "High-value customers with strong purchasing power"
    },
    {
      icon: Heart,
      title: "Brand Building",
      description: "Perfect platform for fashion brand growth"
    },
    {
      icon: Sparkles,
      title: "Visual Excellence",
      description: "Premium presentation for fashion products"
    }
  ];

  const services = [
    {
      category: "Brand Setup",
      icon: Palette,
      color: "from-pink-500 to-purple-600",
      items: [
        "Seller registration & brand onboarding",
        "Catalog creation with style guides",
        "Fashion photography & styling",
        "Size chart & fit guide creation"
      ]
    },
    {
      category: "Marketing & Visibility",
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-500",
      items: [
        "Myntra Fashion Show campaigns",
        "Influencer marketing integration",
        "End-of-season sale strategies",
        "Brand page optimization"
      ]
    },
    {
      category: "Content & Creatives",
      icon: Sparkles,
      color: "from-orange-500 to-pink-500",
      items: [
        "Professional product shoots",
        "Model photography & videos",
        "Lifestyle & lookbook creation",
        "A+ content for brand pages"
      ]
    },
    {
      category: "Performance & Analytics",
      icon: BarChart,
      color: "from-blue-500 to-purple-500",
      items: [
        "Fashion trend analysis",
        "Style performance tracking",
        "Customer preference insights",
        "Seasonal demand forecasting"
      ]
    }
  ];

  const successMetrics = [
    { label: "Fashion Brands", value: "500+", sublabel: "successfully launched" },
    { label: "Average Sales Growth", value: "200%", sublabel: "in first season" },
    { label: "Customer Rating", value: "4.6+", sublabel: "star average" },
    { label: "Return Rate", value: "<8%", sublabel: "vs 15% industry avg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-lg">Myntra Fashion Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your Fashion Brand on
              <span className="block bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                India's #1 Fashion Destination
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your fashion business on Myntra. From stunning product photography to 
              influencer campaigns, we help you build a premium fashion brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/')}
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Launch Your Fashion Brand
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-pink-500"
              >
                View Fashion Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnershipFocusSections brandName="Myntra" />

      {/* Success Metrics */}
      <section className="py-12 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Myntra */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Sell on Myntra?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The ultimate platform for fashion entrepreneurs and established brands
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Fashion Brand Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build a successful fashion brand on Myntra
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Fashion Brand?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join India's leading fashion brands selling successfully on Myntra
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Start Your Fashion Journey
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all"
              >
                Explore All Partnership
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
