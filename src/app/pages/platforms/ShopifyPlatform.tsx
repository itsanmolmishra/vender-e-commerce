import { motion } from 'motion/react';
import { Globe, TrendingUp, Users, Star, ArrowRight, CheckCircle, BarChart, Shield, Zap, Code, Award, ShoppingCart } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
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
      color: "from-green-500 to-teal-600",
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
      color: "from-blue-500 to-purple-500",
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
      color: "from-purple-500 to-pink-500",
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

  const pricingPlans = [
    {
      name: "Store Launch",
      price: "₹29,999",
      period: "/one-time",
      description: "Perfect for new Shopify stores",
      features: [
        "Complete store setup",
        "Premium theme customization",
        "Up to 50 product listings",
        "Payment & shipping integration",
        "1 month free support"
      ],
      highlighted: false
    },
    {
      name: "Store + Management",
      price: "₹19,999",
      period: "/month",
      description: "For growing online businesses",
      features: [
        "Everything in Store Launch",
        "Unlimited product management",
        "SEO & marketing campaigns",
        "Weekly performance reports",
        "Dedicated store manager",
        "App & integration support"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For established brands & high-volume stores",
      features: [
        "Custom Shopify Plus setup",
        "Advanced customization & features",
        "Multi-store management",
        "24/7 priority support",
        "Dedicated development team",
        "White-label solutions"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-white">
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-100 to-teal-100 rounded-full mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-lg">Shopify E-commerce</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your Dream
              <span className="block bg-gradient-to-r from-green-500 via-teal-600 to-blue-600 bg-clip-text text-transparent mt-2">
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
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Launch Your Store
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-green-500"
              >
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent mb-2">
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
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
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
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-teal-50 to-white">
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

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Shopify Store Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible plans for every business stage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl shadow-xl transition-all hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-green-500 to-teal-600 text-white'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-yellow-400 text-gray-900 rounded-full font-bold text-sm shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-green-500'
                      }`} />
                      <span className={plan.highlighted ? 'text-white' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate('/')}
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-white text-green-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:shadow-xl'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500 via-teal-600 to-blue-600">
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
                className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Start Your Project
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all"
              >
                Explore All Platforms
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
