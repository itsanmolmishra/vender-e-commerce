import { Calendar, MapPin, Clock, Users, Video, ArrowRight, TrendingUp, Award, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents = [
    {
      title: 'Amazon Seller Masterclass 2024',
      date: 'April 15, 2024',
      time: '10:00 AM - 4:00 PM IST',
      location: 'Mumbai, India',
      type: 'In-Person',
      attendees: 150,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      description: 'Learn advanced strategies to scale your Amazon business from industry experts.',
      tags: ['Amazon', 'Workshop', 'Networking'],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'E-commerce Growth Summit',
      date: 'April 28, 2024',
      time: '2:00 PM - 6:00 PM IST',
      location: 'Online',
      type: 'Virtual',
      attendees: 500,
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
      description: 'Join us for a deep dive into growth strategies across multiple platforms.',
      tags: ['Multi-Platform', 'Growth', 'Strategy'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Product Photography Workshop',
      date: 'May 5, 2024',
      time: '11:00 AM - 3:00 PM IST',
      location: 'Bangalore, India',
      type: 'In-Person',
      attendees: 50,
      image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800',
      description: 'Hands-on workshop to master product photography for e-commerce.',
      tags: ['Photography', 'Creative', 'Hands-on'],
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      title: 'Flipkart Seller Success Webinar',
      date: 'May 12, 2024',
      time: '3:00 PM - 5:00 PM IST',
      location: 'Online',
      type: 'Virtual',
      attendees: 300,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
      description: 'Exclusive insights into optimizing your Flipkart seller account.',
      tags: ['Flipkart', 'Webinar', 'Optimization'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const pastEvents = [
    {
      title: 'Myntra Fashion Seller Bootcamp',
      date: 'March 10, 2024',
      location: 'Delhi, India',
      type: 'In-Person',
      attendees: 120,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      recording: true
    },
    {
      title: 'SEO & PPC Masterclass',
      date: 'February 22, 2024',
      location: 'Online',
      type: 'Virtual',
      attendees: 450,
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c4b3?w=800',
      recording: true
    },
    {
      title: 'Shopify Store Setup Workshop',
      date: 'January 15, 2024',
      location: 'Mumbai, India',
      type: 'In-Person',
      attendees: 80,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
      recording: false
    }
  ];

  const eventCategories = [
    {
      icon: TrendingUp,
      title: 'Growth Workshops',
      description: 'Learn strategies to scale your business',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: BookOpen,
      title: 'Educational Webinars',
      description: 'Platform-specific training sessions',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Networking Events',
      description: 'Connect with fellow sellers',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      icon: Award,
      title: 'Seller Awards',
      description: 'Celebrate success stories',
      gradient: 'from-orange-500 to-red-500'
    }
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
            Events & Workshops
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community events to learn, network, and grow your e-commerce business. 
            From workshops to webinars, we've got you covered.
          </p>
        </motion.div>

        {/* Event Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'upcoming'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'past'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Upcoming Events */}
        {activeTab === 'upcoming' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${event.gradient} text-white rounded-full text-sm font-semibold`}>
                      {event.type}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{event.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-700">
                          <Calendar className="w-5 h-5 text-purple-600" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <Clock className="w-5 h-5 text-purple-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <MapPin className="w-5 h-5 text-purple-600" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <Users className="w-5 h-5 text-purple-600" />
                          <span>{event.attendees} attendees registered</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {event.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                      Register Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Past Events */}
        {activeTab === 'past' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pastEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {event.recording && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white rounded-full text-xs font-semibold flex items-center gap-1">
                      <Video className="w-3 h-3" />
                      Recording Available
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  {event.recording && (
                    <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                      Watch Recording
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">Never Miss an Event</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and be the first to know about upcoming events
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-bold hover:shadow-xl transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
