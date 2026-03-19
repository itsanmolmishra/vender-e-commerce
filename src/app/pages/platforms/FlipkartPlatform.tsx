import { motion } from 'motion/react';
import { Package, TrendingUp, Users, Star, ArrowRight, CheckCircle, BarChart, Shield, Zap, IndianRupee, Award, Truck } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router';

export function FlipkartPlatform() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Users,
      title: "400M+ Registered Users",
      description: "Access India's most trusted e-commerce platform"
    },
    {
      icon: TrendingUp,
      title: "Rapid Growth",
      description: "30% YoY growth in seller ecosystem"
    },
    {
      icon: Shield,
      title: "Seller Protection",
      description: "Comprehensive seller support and fraud protection"
    },
    {
      icon: Truck,
      title: "Flipkart Assured",
      description: "Quality certification for increased trust"
    }
  ];

  const services = [
    {
      category: "Account & Catalog",
      icon: Package,
      color: "from-blue-500 to-indigo-600",
      items: [
        "Seller registration & onboarding",
        "Category selection & approval",
        "Product listing & catalog management",
        "Bulk upload & inventory sync"
      ]
    },
    {
      category: "Marketing & Growth",
      icon: TrendingUp,
      color: "from-purple-500 to-blue-500",
      items: [
        "Sponsored ads & PLA campaigns",
        "Big Billion Days preparation",
        "Deal hunting & discount management",
        "Brand store creation & optimization"
      ]
    },
    {
      category: "Operations",
      icon: Truck,
      color: "from-green-500 to-teal-500",
      items: [
        "FAssured program enrollment",
        "Warehouse & logistics setup",
        "Order fulfillment optimization",
        "Returns & exchange handling"
      ]
    },
    {
      category: "Performance Analytics",
      icon: BarChart,
      color: "from-orange-500 to-yellow-500",
      items: [
        "Sales & revenue tracking",
        "Competition benchmarking",
        "Performance scorecard monitoring",
        "Custom business insights"
      ]
    }
  ];

  const successMetrics = [
    { label: "Revenue Growth", value: "250%", sublabel: "average in 6 months" },
    { label: "Active Sellers", value: "1000+", sublabel: "managed by us" },
    { label: "Product Visibility", value: "10x", sublabel: "increased reach" },
    { label: "Customer Satisfaction", value: "98%", sublabel: "positive ratings" }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "₹8,999",
      period: "/month",
      description: "Ideal for new Flipkart sellers",
      features: [
        "Up to 30 SKUs management",
        "Basic listing optimization",
        "Monthly performance report",
        "Email & chat support",
        "Inventory tracking"
      ],
      highlighted: false
    },
    {
      name: "Growth",
      price: "₹19,999",
      period: "/month",
      description: "For scaling Flipkart businesses",
      features: [
        "Up to 150 SKUs management",
        "Sponsored ads management",
        "Sale event preparation",
        "Weekly analytics & insights",
        "Dedicated account manager",
        "FAssured optimization"
      ],
      highlighted: true
    },
    {
      name: "Premium",
      price: "Custom",
      period: "",
      description: "For enterprise sellers & brands",
      features: [
        "Unlimited SKU management",
        "Full-service management",
        "Priority sale event access",
        "Real-time monitoring",
        "24/7 dedicated support team",
        "Custom API integrations"
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-lg">Flipkart Marketplace</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Succeed on India's
              <span className="block bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
                Most Trusted E-commerce Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Partner with experts to build and scale your Flipkart business. From registration to 
              Big Billion Days success, we manage it all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Start Selling on Flipkart
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-blue-500"
              >
                Explore Services
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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Flipkart */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Flipkart?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India's homegrown e-commerce leader with unmatched seller benefits
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
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Flipkart Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end services to maximize your Flipkart sales potential
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
              Flipkart Management Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing to match your business goals
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
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-yellow-400 text-gray-900 rounded-full font-bold text-sm shadow-lg">
                    Recommended
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
                      : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-xl'
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Scale on Flipkart?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of sellers achieving remarkable growth with our expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all"
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
