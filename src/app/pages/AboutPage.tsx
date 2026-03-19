import { Target, Users, Award, TrendingUp, Shield, Zap, Globe, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutPage() {
  const stats = [
    { label: 'Active Sellers', value: '10,000+', icon: Users },
    { label: 'Years Experience', value: '8+', icon: Award },
    { label: 'Platform Integrations', value: '5+', icon: Globe },
    { label: 'Success Rate', value: '95%', icon: TrendingUp }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Empowering sellers to succeed in the competitive e-commerce landscape',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Building lasting relationships through honest and reliable service',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technology to drive growth',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your growth is our success. We\'re committed to your journey',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const team = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: '15+ years in e-commerce and business development'
    },
    {
      name: 'Priya Patel',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Expert in marketplace integrations and automation'
    },
    {
      name: 'Amit Kumar',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      bio: 'Specializes in seller support and account management'
    },
    {
      name: 'Sneha Reddy',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      bio: 'Leading brand strategy and creative services'
    }
  ];

  const timeline = [
    {
      year: '2016',
      title: 'The Beginning',
      description: 'Started with helping 10 sellers on Amazon'
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'Added Flipkart and Myntra platform support'
    },
    {
      year: '2020',
      title: 'Growth',
      description: 'Crossed 1,000 active seller milestone'
    },
    {
      year: '2022',
      title: 'Innovation',
      description: 'Launched AI-powered analytics platform'
    },
    {
      year: '2024',
      title: 'Leadership',
      description: 'Became India\'s #1 multi-platform e-commerce service'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About EcomHub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize e-commerce success. Since 2016, we've helped thousands of sellers 
            build thriving businesses across India's top marketplaces.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              EcomHub was founded in 2016 by a team of e-commerce veterans who saw sellers struggling to navigate 
              the complex world of online marketplaces. What started as a small consulting service has grown into 
              India's most comprehensive e-commerce enablement platform.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Today, we serve over 10,000 active sellers across Amazon, Flipkart, Myntra, Meesho, and Shopify. 
              Our integrated approach combines technology, expertise, and personalized support to help businesses 
              of all sizes achieve their e-commerce goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that every entrepreneur deserves the tools and knowledge to succeed online. That's why 
              we've built a platform that makes e-commerce accessible, manageable, and profitable for everyone.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Values</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-8 ${
                    idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Meet Our Leadership</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Experienced professionals dedicated to your success
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-purple-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful sellers who trust EcomHub
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-xl transition-all">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </div>
  );
}
