import { motion } from 'motion/react';
import { Users, TrendingUp, ShoppingBag, Star, ArrowRight, CheckCircle, BarChart, Shield, Zap, Heart, Award, Share2 } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router';

export function MeeshoPlatform() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Users,
      title: "150M+ App Downloads",
      description: "Massive reach in tier 2 & 3 cities"
    },
    {
      icon: ShoppingBag,
      title: "Zero Commission",
      description: "No selling fees, keep 100% of your profit"
    },
    {
      icon: Share2,
      title: "Social Selling",
      description: "Leverage reseller network for growth"
    },
    {
      icon: TrendingUp,
      title: "Low Investment",
      description: "Start selling with minimal capital"
    }
  ];

  const services = [
    {
      category: "Seller Onboarding",
      icon: Users,
      color: "from-pink-500 to-red-500",
      items: [
        "Quick seller registration",
        "Product catalog setup",
        "Pricing strategy consultation",
        "Quality verification support"
      ]
    },
    {
      category: "Social Commerce Growth",
      icon: Share2,
      color: "from-purple-500 to-pink-500",
      items: [
        "Reseller network building",
        "Social media integration",
        "Viral marketing campaigns",
        "Community engagement strategies"
      ]
    },
    {
      category: "Operations Management",
      icon: ShoppingBag,
      color: "from-orange-500 to-pink-500",
      items: [
        "Inventory management",
        "Order processing automation",
        "Returns & quality control",
        "Supplier network management"
      ]
    },
    {
      category: "Growth & Analytics",
      icon: BarChart,
      color: "from-blue-500 to-purple-500",
      items: [
        "Sales performance tracking",
        "Reseller analytics",
        "Trending product insights",
        "Profit margin optimization"
      ]
    }
  ];

  const successMetrics = [
    { label: "Sellers Managed", value: "800+", sublabel: "active Meesho sellers" },
    { label: "Average Growth", value: "400%", sublabel: "in first year" },
    { label: "Zero Commission", value: "100%", sublabel: "profit retained" },
    { label: "Delivery Success", value: "95%", sublabel: "on-time delivery" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹4,999",
      period: "/month",
      description: "Perfect for new Meesho sellers",
      features: [
        "Up to 50 products",
        "Basic catalog management",
        "Monthly performance report",
        "Email support",
        "Pricing optimization"
      ],
      highlighted: false
    },
    {
      name: "Growth",
      price: "₹14,999",
      period: "/month",
      description: "For expanding Meesho businesses",
      features: [
        "Up to 300 products",
        "Reseller network building",
        "Social media marketing",
        "Weekly analytics reports",
        "Dedicated account manager",
        "Trending product insights"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For high-volume Meesho suppliers",
      features: [
        "Unlimited product catalog",
        "Full account management",
        "Automated reseller outreach",
        "Real-time analytics dashboard",
        "24/7 priority support",
        "Custom integrations"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-white">
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-100 to-red-100 rounded-full mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-lg">Meesho Social Commerce</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Scale Your Business with
              <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent mt-2">
                India's Largest Reseller Network
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Leverage the power of social commerce on Meesho. Zero commission, massive reach, 
              and a network of resellers ready to sell your products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/')}
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Start Selling on Meesho
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-pink-500"
              >
                Learn More
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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Meesho */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Sell on Meesho?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India's fastest growing social commerce platform with unique advantages
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
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
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
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-red-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Meesho Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end services for social commerce success
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
              Meesho Management Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable plans designed for social commerce success
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
                    ? 'bg-gradient-to-br from-pink-500 to-red-500 text-white'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-yellow-400 text-gray-900 rounded-full font-bold text-sm shadow-lg">
                    Best Value
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
                      ? 'bg-white text-pink-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-pink-500 to-red-500 text-white hover:shadow-xl'
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
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 via-red-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow with Social Commerce?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful sellers leveraging Meesho's zero-commission model
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Start Free Consultation
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all"
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
