import { motion } from 'motion/react';
import { Globe, TrendingUp, Users, Star, ArrowRight, CheckCircle, BarChart, Shield, Zap, Code, Award, ShoppingCart } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { PartnershipFocusSections } from '../../components/PartnershipFocusSections';
import { useNavigate } from 'react-router';

export function ShopifyPlatform() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Globe,
      title: "Your Own Brand Store",
      description: "Complete control over your brand identity"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security & PCI compliance"
    },
    {
      icon: Code,
      title: "Unlimited Customization",
      description: "Tailor every aspect of your store"
    },
    {
      icon: TrendingUp,
      title: "Global Reach",
      description: "Sell worldwide with multi-currency support"
    }
  ];

  const services = [
    {
      category: "Store Setup & Design",
      icon: Globe,
      color: "from-blue-600 to-orange-500",
      items: [
        "Complete Shopify store setup",
        "Custom theme design & development",
        "Responsive mobile optimization",
        "Brand identity integration"
      ]
    },
    {
      category: "App & Integration",
      icon: Code,
      color: "from-blue-600 to-blue-700",
      items: [
        "Payment gateway integration",
        "Shipping & logistics setup",
        "Essential app installation",
        "Third-party tool connections"
      ]
    },
    {
      category: "Marketing & SEO",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      items: [
        "SEO optimization for stores",
        "Facebook & Instagram integration",
        "Email marketing automation",
        "Google Ads & shopping campaigns"
      ]
    },
    {
      category: "Management & Support",
      icon: Shield,
      color: "from-blue-500 to-orange-500",
      items: [
        "Product catalog management",
        "Order & inventory tracking",
        "Customer support setup",
        "Performance monitoring & reporting"
      ]
    }
  ];

  const successMetrics = [
    { label: "Stores Launched", value: "600+", sublabel: "successful Shopify stores" },
    { label: "Average Revenue", value: "₹5L+", sublabel: "monthly per store" },
    { label: "Store Uptime", value: "99.9%", sublabel: "reliability guarantee" },
    { label: "Client Satisfaction", value: "4.9/5", sublabel: "average rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40">
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-lg">Shopify E-commerce</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your Dream
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent mt-2">
                Online Store with Shopify
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create a powerful, beautiful online store that converts. From design to launch and 
              beyond, we build Shopify stores that drive sales and grow your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Launch Your Store
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-orange-500"
              >
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnershipFocusSections brandName="Shopify" />

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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shopify */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Shopify?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The world's leading e-commerce platform trusted by millions
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
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Shopify Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From store creation to growth, we handle everything
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
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Store?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of successful brands selling on their own Shopify stores
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-blue-700 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Start Your Project
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all"
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
