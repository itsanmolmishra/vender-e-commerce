import { useState } from 'react';
import { Menu, X, ChevronDown, Package, TrendingUp, Palette, FileCheck, Globe, ShoppingCart, BarChart, Users, Settings, Zap, Shield, Clock, MapPin, Mail, Phone, Facebook, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { useNavigate } from 'react-router';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const megaMenuServices = [
    {
      category: 'Account Management',
      icon: Settings,
      color: 'bg-blue-500',
      items: [
        { name: 'Amazon Seller Central', icon: ShoppingCart, path: '/services/amazon-seller-central' },
        { name: 'Flipkart Management', icon: Package, path: '/services/flipkart-management' },
        { name: 'Myntra Seller Hub', icon: Palette, path: '/services/myntra-seller-hub' },
        { name: 'Order & Inventory', icon: BarChart, path: '/services/order-inventory' }
      ]
    },
    {
      category: 'Business Setup',
      icon: FileCheck,
      color: 'bg-purple-500',
      items: [
        { name: 'Company Registration', icon: FileCheck, path: '/services/company-registration' },
        { name: 'GST Services', icon: Shield, path: '/services/gst-services' },
        { name: 'Legal & Trademark', icon: Shield, path: '/services/legal-trademark' },
        { name: 'Compliance Support', icon: Clock, path: '/services/compliance-support' }
      ]
    },
    {
      category: 'Growth Services',
      icon: TrendingUp,
      color: 'bg-green-500',
      items: [
        { name: 'SEO & PPC Ads', icon: TrendingUp, path: '/services/seo-ppc-ads' },
        { name: 'Product Ranking', icon: BarChart, path: '/services/product-ranking' },
        { name: 'Sales Optimization', icon: Zap, path: '/services/sales-optimization' },
        { name: 'Analytics Dashboard', icon: BarChart, path: '/services/analytics-dashboard' }
      ]
    },
    {
      category: 'Creative Services',
      icon: Palette,
      color: 'bg-orange-500',
      items: [
        { name: 'Product Photography', icon: Palette, path: '/services/product-photography' },
        { name: 'Banner Design', icon: Palette, path: '/services/banner-design' },
        { name: 'Brand Creatives', icon: Palette, path: '/services/brand-creatives' },
        { name: 'Video Production', icon: Palette, path: '/services/video-production' }
      ]
    }
  ];

  const platformsMenu = [
    { 
      name: 'Amazon', 
      icon: ShoppingCart, 
      desc: "India's largest marketplace",
      gradient: 'from-purple-500 to-blue-500',
      path: '/platforms/amazon'
    },
    { 
      name: 'Flipkart', 
      icon: Package, 
      desc: 'Top e-commerce platform',
      gradient: 'from-blue-500 to-purple-600',
      path: '/platforms/flipkart'
    },
    { 
      name: 'Myntra', 
      icon: Palette, 
      desc: 'Fashion & lifestyle',
      gradient: 'from-purple-600 to-pink-500',
      path: '/platforms/myntra'
    },
    { 
      name: 'Meesho', 
      icon: Users, 
      desc: 'Social commerce leader',
      gradient: 'from-blue-600 to-purple-500',
      path: '/platforms/meesho'
    },
    { 
      name: 'Shopify', 
      icon: Globe, 
      desc: 'Build your own store',
      gradient: 'from-purple-500 to-indigo-600',
      path: '/platforms/shopify'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
            {/* Left Side - Contact Info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Plot No: A-61, Ground Floor, Seven Wonder's Tower, Sector 16, Noida-201301, Uttar Pradesh</span>
                <span className="sm:hidden">Sector 16, Noida</span>
              </div>
              <a href="mailto:info@ceukiindia.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden md:inline">info@ceukiindia.com</span>
              </a>
              <a href="tel:+919508088497" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 9508088497</span>
              </a>
            </div>

            {/* Right Side - Social Media */}
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button onClick={() => navigate('/')} className="flex items-center hover:opacity-80 transition-opacity">
              <Logo variant="full" size="sm" />
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <button 
                onClick={() => navigate('/')} 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                Home
              </button>

              {/* Services Mega Menu */}
              <div className="relative">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
                >
                  Services 
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Platforms Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('platforms')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium">
                  Platforms 
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'platforms' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'platforms' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-6"
                    >
                      <h3 className="text-sm font-bold text-gray-900 mb-4 px-3">Supported Platforms</h3>
                      <ul className="space-y-2">
                        {platformsMenu.map((platform, idx) => {
                          const PlatformIcon = platform.icon;
                          return (
                            <li key={idx}>
                              <button 
                                onClick={() => handleNavigation(platform.path)}
                                className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all group w-full text-left"
                              >
                                <div className={`w-12 h-12 bg-gradient-to-br ${platform.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                                  <PlatformIcon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors">
                                    {platform.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">{platform.desc}</div>
                                </div>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => navigate('/pricing')} 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => navigate('/about')} 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                About Us
              </button>
              <button 
                onClick={() => navigate('/career')} 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                Career
              </button>
              <button 
                onClick={() => navigate('/events')} 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                Events
              </button>
              <button 
                onClick={() => navigate('/contact')} 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                Contact
              </button>

              {/* Enhanced CTA Button */}
              <button 
                onClick={() => navigate('/contact')}
                className="ml-4 group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative font-semibold">Get a Quote</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
              <button 
                onClick={() => navigate('/')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
              >
                Home
              </button>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-bold text-gray-500">Services</div>
                {megaMenuServices.map((category) => (
                  <div key={category.category}>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400">{category.category}</div>
                    {category.items.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.path)}
                        className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all text-sm"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile Platforms */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-bold text-gray-500">Platforms</div>
                {platformsMenu.map((platform) => {
                  const PlatformIcon = platform.icon;
                  return (
                    <button
                      key={platform.name}
                      onClick={() => handleNavigation(platform.path)}
                      className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${platform.gradient} rounded-lg flex items-center justify-center shadow-md`}>
                        <PlatformIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-sm">{platform.name}</div>
                        <div className="text-xs text-gray-500">{platform.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={() => navigate('/pricing')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => navigate('/about')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
              >
                About Us
              </button>
              <button 
                onClick={() => navigate('/career')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
              >
                Career
              </button>
              <button 
                onClick={() => navigate('/events')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
              >
                Events
              </button>
              <button 
                onClick={() => navigate('/contact')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
              >
                Contact
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Selling
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Centered Services Mega Menu Modal */}
      <AnimatePresence>
        {activeDropdown === 'services' && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setActiveDropdown(null)}
            />
            
            {/* Centered Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-4xl bg-white rounded-3xl shadow-2xl p-8"
            >
              {/* Category Icons Row */}
              <div className="flex justify-around items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                {megaMenuServices.map((service, idx) => {
                  const CategoryIcon = service.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center gap-3 group cursor-pointer">
                      <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <CategoryIcon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-center">
                        {service.category}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-4 gap-6 mb-6">
                {megaMenuServices.map((service, idx) => {
                  return (
                    <div key={idx} className="space-y-2">
                      <ul className="space-y-2">
                        {service.items.map((item, i) => {
                          const ItemIcon = item.icon;
                          return (
                            <li key={i}>
                              <button 
                                onClick={() => handleNavigation(item.path)}
                                className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all group w-full text-left"
                              >
                                <ItemIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                                <span className="text-sm">{item.name}</span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
              
              {/* CTA Section */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Need Custom Solutions?</h4>
                    <p className="text-sm text-gray-600">Get personalized service recommendations</p>
                  </div>
                  <button 
                    onClick={() => {
                      scrollToSection('contact');
                      setActiveDropdown(null);
                    }}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all font-semibold whitespace-nowrap"
                  >
                    Talk to Expert
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}