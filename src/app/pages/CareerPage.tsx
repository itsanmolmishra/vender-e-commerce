import { Briefcase, MapPin, Clock, TrendingUp, Users, Heart, Award, Zap, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function CareerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

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

  const openings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Build scalable solutions for our multi-platform integration system'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Drive product strategy and execution for our seller tools'
    },
    {
      title: 'Senior UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Create beautiful, intuitive experiences for our platform'
    },
    {
      title: 'Account Manager',
      department: 'Sales',
      location: 'Delhi',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Help sellers succeed by providing expert guidance and support'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Build and maintain our cloud infrastructure'
    },
    {
      title: 'Content Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Create compelling content that drives engagement and growth'
    },
    {
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Transform data into actionable insights for our sellers'
    },
    {
      title: 'Customer Success Manager',
      department: 'Support',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Ensure seller satisfaction and drive retention'
    }
  ];

  const departments = [
    'all',
    'Engineering',
    'Product',
    'Design',
    'Sales',
    'Marketing',
    'Analytics',
    'Support'
  ];

  const filteredOpenings = openings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

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

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Open Positions</h2>
          <p className="text-gray-600 text-center mb-8">
            {filteredOpenings.length} {filteredOpenings.length === 1 ? 'position' : 'positions'} available
          </p>

          {/* Search & Filter */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredOpenings.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredOpenings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No positions found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDepartment('all');
                }}
                className="mt-4 text-purple-600 hover:text-purple-700 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
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
