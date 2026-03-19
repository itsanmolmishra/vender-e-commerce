import { Shield, Award, Lock, Verified } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'ISO Certified',
      description: 'Quality assured'
    },
    {
      icon: Lock,
      title: 'Secure Platform',
      description: 'Bank-grade security'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Best in class service'
    },
    {
      icon: Verified,
      title: 'Verified Partner',
      description: 'Official marketplace partner'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                <badge.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">{badge.title}</h4>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
