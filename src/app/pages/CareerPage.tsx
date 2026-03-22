import { TrendingUp, Users, Heart, Award, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function CareerPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear progression paths and learning opportunities',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible hours and remote work options',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Competitive Pay',
      description: 'Industry-leading salaries and performance bonuses',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented, passionate professionals',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const perks = [
    'Health Insurance (including family)',
    'Unlimited Paid Time Off',
    'Stock Options',
    'Learning & Development Budget',
    'Home Office Setup',
    'Team Offsites & Events',
    'Gym Membership',
    'Mental Health Support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us empower thousands of sellers to build successful e-commerce businesses. 
            Be part of something meaningful.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Perks & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Perks & Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
              >
                <Zap className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{perk}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented people. Send us your resume and let's talk!
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-xl transition-all">
            Send Resume
          </button>
        </motion.div>
      </div>
    </div>
  );
}
