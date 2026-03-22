import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router';
import { Logo } from './Logo';

const ecommercePartnerLinks = [
  { label: 'Amazon', to: '/Partnership/amazon' },
  { label: 'Flipkart', to: '/Partnership/flipkart' },
  { label: 'Meesho', to: '/Partnership/meesho' },
  { label: 'Nykaa', to: '/Partnership/nykaa' },
  { label: 'Myntra', to: '/Partnership/myntra' },
  { label: 'Walmart', to: '/Partnership/walmart' },
  { label: 'JioMart', to: '/Partnership/jiomart' },
  { label: 'Shopify', to: '/Partnership/shopify' },
  { label: 'GlowRoad', to: '/Partnership/glowroad' },
];

const quickCommerceLinks = [
  { label: 'Blinkit', to: '/Partnership/blinkit' },
  { label: 'Zepto', to: '/Partnership/zepto' },
];

const socialLinks: { Icon: typeof Facebook; href: string; label: string }[] = [
  { Icon: Facebook, href: 'https://www.facebook.com', label: 'Facebook' },
  { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  {
    Icon: Instagram,
    href: 'https://www.instagram.com/ceuki_india?utm_source=qr&igsh=amhsdTV1ZHFleDlz',
    label: 'Instagram',
  },
  {
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/vikas-kumar-b148293b8',
    label: 'LinkedIn',
  },
  { Icon: Youtube, href: 'https://www.youtube.com', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight">
              Ceuki India Pvt Ltd
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for launching and scaling e-commerce businesses across all major Partnership.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {['Account Management', 'Business Setup', 'Growth Marketing', 'Creative Services', 'Product Supply'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Partnership</h3>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">E-commerce</p>
            <ul className="space-y-2 mb-4">
              {ecommercePartnerLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Quick commerce</p>
            <ul className="space-y-2">
              {quickCommerceLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Support'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for tips and insights</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Ceuki India Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}