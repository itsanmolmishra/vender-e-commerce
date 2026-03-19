import { motion } from 'motion/react';
import { ShoppingCart, TrendingUp, Package, Users, Star, ArrowRight, CheckCircle, BarChart, Shield, Zap, Globe, Award } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router';

export function AmazonPlatform() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Users,
      title: "500M+ Active Users",
      description: "Access to India's largest customer base"
    },
    {
      icon: TrendingUp,
      title: "High Conversion Rate",
      description: "Average 8-12% conversion on optimized listings"
    },
    {
      icon: Shield,
      title: "Trust & Credibility",
      description: "Amazon's trusted brand builds instant customer confidence"
    },
    {
      icon: Globe,
      title: "Pan-India Reach",
      description: "Deliver to 19,000+ pin codes across India"
    }
  ];

  const services = [
    {
      category: "Account Setup & Management",
      icon: ShoppingCart,
      color: "from-blue-500 to-purple-600",
      items: [
        "Professional seller account registration",
        "Category approval & brand registry",
        "Catalog creation & product listing",
        "Inventory management & forecasting"
      ]
    },
    {
      category: "Growth & Optimization",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      items: [
        "Amazon PPC campaigns management",
        "A+ Content & Enhanced Brand Content",
        "SEO optimization for better ranking",
        "Lightning deals & promotional campaigns"
      ]
    },
    {
      category: "Operations & Support",
      icon: Package,
      color: "from-green-500 to-blue-500",
      items: [
        "FBA setup & optimization",
        "Order processing & fulfillment",
        "Returns & refund management",
        "Customer service & review management"
      ]
    },
    {
      category: "Analytics & Reporting",
      icon: BarChart,
      color: "from-orange-500 to-red-500",
      items: [
        "Sales performance analytics",
        "Competitor analysis & insights",
        "Profit margin calculation",
        "Custom reporting dashboards"
      ]
    }
  ];

  const successMetrics = [
    { label: "Average Sales Increase", value: "300%", sublabel: "in first 6 months" },
    { label: "Product Ranking", value: "Top 10", sublabel: "in category" },
    { label: "ROI on Ad Spend", value: "5x", sublabel: "average return" },
    { label: "Customer Rating", value: "4.5+", sublabel: "star average" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹9,999",
      period: "/month",
      description: "Perfect for new Amazon sellers",
      features: [
        "Up to 50 product listings",
        "Basic PPC campaign management",
        "Monthly performance report",
        "Email support",
        "Product listing optimization"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "₹24,999",
      period: "/month",
      description: "For growing Amazon businesses",
      features: [
        "Up to 200 product listings",
        "Advanced PPC & SEO optimization",
        "A+ Content creation",
        "Weekly analytics reports",
        "Priority support & account manager",
        "Promotional campaign management"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For established brands & high volume sellers",
      features: [
        "Unlimited product listings",
        "Full-service account management",
        "Dedicated team of specialists",
        "Daily performance monitoring",
        "24/7 priority support",
        "Custom integrations & automation"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-lg">Amazon Marketplace</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Grow Your Business on
              <span className="block bg-gradient-to-r from-orange-500 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                India's #1 E-commerce Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful sellers on Amazon India. We handle everything from account setup 
              to scaling your business with expert management and optimization services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/')}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Start Selling on Amazon
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-blue-500"
              >
                View Our Services
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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sell on Amazon */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Sell on Amazon?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Amazon provides unmatched opportunities for sellers to reach millions of customers
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
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
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

      {/* Our Services */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Amazon Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From setup to scaling, we provide end-to-end Amazon seller services
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

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Amazon Management Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your Amazon business growth
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
                    ? 'bg-gradient-to-br from-orange-500 to-blue-600 text-white'
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
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-orange-500 to-blue-600 text-white hover:shadow-xl'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate Amazon?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 1000+ successful sellers who trust us to grow their Amazon business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Schedule Free Consultation
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                View All Platforms
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
