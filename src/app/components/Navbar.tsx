import { useState, useRef, useLayoutEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, TrendingUp, Palette, FileCheck, Settings, MapPin, Mail, Phone, Facebook, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { useNavigate, useLocation } from 'react-router';
import { clientNavItems } from '../pages/clients/clientConfigs';

/** Services mega menu — staggered row + logo hover (motion) */
const servicesPanelSpring = { type: 'spring' as const, damping: 26, stiffness: 360, mass: 0.82 };
/** Flush under navbar: no vertical slide (avoids gap); fade + slight scale only */
const dropdownPanelMotion = {
  initial: { opacity: 0, y: 0, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 0, scale: 0.99 },
  transition: servicesPanelSpring,
};
const servicesCategoryList = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};
const servicesCategoryChip = {
  hidden: { opacity: 0, y: 14, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
  },
};
const servicesColumnList = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.035, delayChildren: 0.07 },
  },
};
const servicesRow = {
  hidden: { opacity: 0, x: -10, y: 5 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};
const partnershipList = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.055, delayChildren: 0.04 },
  },
};
const partnershipRow = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type PartnerNavItem = {
  name: string;
  logoSrc: string;
  desc: string;
  path: string;
};

function PartnerDropdownRow({
  item,
  onNavigate,
}: {
  item: PartnerNavItem;
  onNavigate: (path: string, hash?: string) => void;
}) {
  return (
    <motion.li variants={partnershipRow} className="rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200/80 transition-colors">
      <button
        type="button"
        onClick={() => onNavigate(item.path)}
        className="flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-colors"
      >
        <motion.span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm p-1"
          whileHover={{ scale: 1.06, y: -1 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 420, damping: 18 }}
        >
          <img src={item.logoSrc} alt="" className="max-h-7 max-w-full object-contain" loading="lazy" decoding="async" />
        </motion.span>
        <div className="min-w-0 flex-1">
          <div className="font-bold text-gray-900 text-sm leading-tight">{item.name}</div>
          <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
        </div>
        <ChevronRight className="w-4 h-4 shrink-0 text-gray-400" aria-hidden />
      </button>
      <div className="flex flex-wrap gap-x-3 gap-y-0.5 px-3 pb-2.5 pl-[3.25rem] border-t border-gray-50 bg-gray-50/60">
        <button type="button" onClick={() => onNavigate(item.path, '#partnership-setup')} className="text-[11px] font-medium text-blue-600 hover:underline">
          Setup
        </button>
        <button type="button" onClick={() => onNavigate(item.path, '#partnership-management')} className="text-[11px] font-medium text-blue-600 hover:underline">
          Management
        </button>
        <button type="button" onClick={() => onNavigate(item.path, '#partnership-growth')} className="text-[11px] font-medium text-blue-600 hover:underline">
          Growth
        </button>
      </div>
    </motion.li>
  );
}

function PartnerMobileRow({
  item,
  onNavigate,
}: {
  item: PartnerNavItem;
  onNavigate: (path: string, hash?: string) => void;
}) {
  return (
    <div className="rounded-xl border border-gray-100 overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => onNavigate(item.path)}
        className="flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-colors"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm p-1">
          <img src={item.logoSrc} alt="" className="max-h-7 max-w-full object-contain" loading="lazy" decoding="async" />
        </span>
        <div className="min-w-0 flex-1 text-left">
          <div className="font-bold text-gray-900 text-sm">{item.name}</div>
          <div className="text-xs text-gray-500">{item.desc}</div>
        </div>
        <ChevronRight className="w-4 h-4 shrink-0 text-gray-400" aria-hidden />
      </button>
      <div className="flex flex-wrap gap-x-3 gap-y-0.5 px-3 pb-2.5 pl-[3.25rem] border-t border-gray-50 bg-gray-50/60">
        <button type="button" onClick={() => onNavigate(item.path, '#partnership-setup')} className="text-[11px] font-medium text-blue-600">
          Setup
        </button>
        <button type="button" onClick={() => onNavigate(item.path, '#partnership-management')} className="text-[11px] font-medium text-blue-600">
          Management
        </button>
        <button type="button" onClick={() => onNavigate(item.path, '#partnership-growth')} className="text-[11px] font-medium text-blue-600">
          Growth
        </button>
      </div>
    </div>
  );
}

function clampPanelLeft(triggerLeft: number, panelWidthPx: number) {
  const pad = 8;
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1280;
  return Math.min(Math.max(pad, triggerLeft), Math.max(pad, vw - panelWidthPx - pad));
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  /** Bottom edge of the main (white) nav row — dropdowns align flush here, like typical e‑commerce menus */
  const mainNavRef = useRef<HTMLDivElement>(null);
  const partnershipWrapRef = useRef<HTMLDivElement>(null);
  const ecommerceMenuWrapRef = useRef<HTMLDivElement>(null);
  const quickCommerceMenuWrapRef = useRef<HTMLDivElement>(null);
  const clientsWrapRef = useRef<HTMLDivElement>(null);
  const [navBottomPx, setNavBottomPx] = useState(124);
  const [partnershipLeftPx, setPartnershipLeftPx] = useState(0);
  const [ecommerceMenuLeftPx, setEcommerceMenuLeftPx] = useState(0);
  const [quickCommerceMenuLeftPx, setQuickCommerceMenuLeftPx] = useState(0);
  const [clientsLeftPx, setClientsLeftPx] = useState(0);

  useLayoutEffect(() => {
    const updateAnchors = () => {
      if (mainNavRef.current) {
        setNavBottomPx(mainNavRef.current.getBoundingClientRect().bottom);
      }
      if (partnershipWrapRef.current) {
        const r = partnershipWrapRef.current.getBoundingClientRect();
        const w = Math.min(window.innerWidth * 0.98, 42 * 16);
        setPartnershipLeftPx(clampPanelLeft(r.left, w));
      }
      if (ecommerceMenuWrapRef.current) {
        const r = ecommerceMenuWrapRef.current.getBoundingClientRect();
        const w = Math.min(window.innerWidth * 0.96, 28 * 16);
        setEcommerceMenuLeftPx(clampPanelLeft(r.left, w));
      }
      if (quickCommerceMenuWrapRef.current) {
        const r = quickCommerceMenuWrapRef.current.getBoundingClientRect();
        const w = Math.min(window.innerWidth * 0.92, 22 * 16);
        setQuickCommerceMenuLeftPx(clampPanelLeft(r.left, w));
      }
      if (clientsWrapRef.current) {
        const r = clientsWrapRef.current.getBoundingClientRect();
        const w = Math.min(window.innerWidth * 0.92, 26 * 16);
        setClientsLeftPx(clampPanelLeft(r.left, w));
      }
    };

    updateAnchors();
    window.addEventListener('resize', updateAnchors);
    window.addEventListener('scroll', updateAnchors, true);
    return () => {
      window.removeEventListener('resize', updateAnchors);
      window.removeEventListener('scroll', updateAnchors, true);
    };
  }, [activeDropdown]);

  const megaMenuServices = [
    {
      category: 'Account Management',
      icon: Settings,
      color: 'bg-blue-600',
      items: [
        { name: 'Amazon Seller Central', path: '/services/amazon-seller-central', logoSrc: '/partners/amazon.svg' },
        { name: 'Flipkart Management', path: '/services/flipkart-management', logoSrc: '/partners/flipkart.svg' },
        { name: 'Myntra Seller Hub', path: '/services/myntra-seller-hub', logoSrc: '/partners/myntra.png' },
        { name: 'Order & Inventory', path: '/services/order-inventory', logoSrc: '/menu-services/order-inventory.svg' }
      ]
    },
    {
      category: 'Business Setup',
      icon: FileCheck,
      color: 'bg-blue-700',
      items: [
        { name: 'Company Registration', path: '/services/company-registration', logoSrc: '/menu-services/company-registration.svg' },
        { name: 'GST Services', path: '/services/gst-services', logoSrc: '/menu-services/gst-services.svg' },
        { name: 'Legal & Trademark', path: '/services/legal-trademark', logoSrc: '/menu-services/legal-trademark.svg' },
        { name: 'Compliance Support', path: '/services/compliance-support', logoSrc: '/menu-services/compliance-support.svg' }
      ]
    },
    {
      category: 'Growth Services',
      icon: TrendingUp,
      color: 'bg-orange-500',
      items: [
        { name: 'SEO & PPC Ads', path: '/services/seo-ppc-ads', logoSrc: '/menu-services/seo-ppc.svg' },
        { name: 'Product Ranking', path: '/services/product-ranking', logoSrc: '/menu-services/product-ranking.svg' },
        { name: 'Sales Optimization', path: '/services/sales-optimization', logoSrc: '/menu-services/sales-optimization.svg' },
        { name: 'Analytics Dashboard', path: '/services/analytics-dashboard', logoSrc: '/menu-services/analytics-dashboard.svg' }
      ]
    },
    {
      category: 'Creative Services',
      icon: Palette,
      color: 'bg-orange-600',
      items: [
        { name: 'Product Photography', path: '/services/product-photography', logoSrc: '/menu-services/product-photography.svg' },
        { name: 'Banner Design', path: '/services/banner-design', logoSrc: '/menu-services/banner-design.svg' },
        { name: 'Brand Creatives', path: '/services/brand-creatives', logoSrc: '/menu-services/brand-creatives.svg' },
        { name: 'Video Production', path: '/services/video-production', logoSrc: '/menu-services/video-production.svg' }
      ]
    }
  ];

  /** Brand logos in /public/partners/ (SVG or PNG) */
  const ecommercePartners = [
    { name: 'Amazon', logoSrc: '/partners/amazon.svg', desc: "India's largest marketplace", path: '/Partnership/amazon' },
    { name: 'Flipkart', logoSrc: '/partners/flipkart.svg', desc: 'Top e-commerce platform', path: '/Partnership/flipkart' },
    { name: 'Meesho', logoSrc: '/partners/meesho.png', desc: 'Social commerce leader', path: '/Partnership/meesho' },
    { name: 'Nykaa', logoSrc: '/partners/nykaa.svg', desc: 'Beauty & lifestyle', path: '/Partnership/nykaa' },
    { name: 'Myntra', logoSrc: '/partners/myntra.png', desc: 'Fashion & lifestyle', path: '/Partnership/myntra' },
    { name: 'Walmart', logoSrc: '/partners/walmart.svg', desc: 'Global marketplace', path: '/Partnership/walmart' },
    { name: 'JioMart', logoSrc: '/partners/jiomart.svg', desc: 'Grocery & daily needs', path: '/Partnership/jiomart' },
    { name: 'Shopify', logoSrc: '/partners/shopify.svg', desc: 'Build your own store', path: '/Partnership/shopify' },
    { name: 'GlowRoad', logoSrc: '/partners/glowroad.svg', desc: 'Social commerce & resellers', path: '/Partnership/glowroad' },
  ];

  const quickCommercePartners = [
    { name: 'Blinkit', logoSrc: '/partners/blinkit.svg', desc: '10-minute grocery', path: '/Partnership/blinkit' },
    { name: 'Zepto', logoSrc: '/partners/zepto.svg', desc: 'Quick commerce', path: '/Partnership/zepto' },
  ];

  const scrollToSectionId = (id: string) => {
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
  };

  const scrollToSection = (id: string) => {
    scrollToSectionId(id);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  /** Home page sections: navigate home first if needed, then scroll. */
  const goToHomeSection = (id: string) => {
    setActiveDropdown(null);
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => scrollToSectionId(id), 320);
    } else {
      scrollToSectionId(id);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const handlePartnerNav = (path: string, hash?: string) => {
    if (hash) {
      navigate({ pathname: path, hash });
    } else {
      navigate(path);
    }
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-visible bg-white shadow-sm">
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
                href="https://www.linkedin.com/in/vikas-kumar-b148293b8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Ceuki on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/ceuki_india?utm_source=qr&igsh=amhsdTV1ZHFleDlz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Ceuki on Instagram"
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

      {/* Main Navigation — ref used for flush dropdown top (no gap under this row) */}
      <div ref={mainNavRef} className="overflow-visible bg-white/90 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto overflow-visible px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-stretch overflow-visible h-20">
            {/* Logo */}
            <button type="button" onClick={() => navigate('/')} className="flex shrink-0 items-center hover:opacity-80 transition-opacity">
              <Logo variant="full" size="sm" />
            </button>

            {/* Desktop Menu — items-stretch so dropdown columns span full nav height (hover bridge to fixed panels) */}
            <div className="hidden h-full lg:flex items-stretch space-x-1 overflow-visible">
              <button 
                type="button"
                onClick={() => navigate('/')} 
                className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                Home
              </button>

              {/* Partnership — marketplaces + home section */}
              <div
                ref={partnershipWrapRef}
                className="relative flex self-stretch items-center overflow-visible"
                onMouseEnter={() => setActiveDropdown('partnership')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
                >
                  Partnership
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === 'partnership' ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'partnership' && (
                    <motion.div
                      initial={dropdownPanelMotion.initial}
                      animate={dropdownPanelMotion.animate}
                      exit={dropdownPanelMotion.exit}
                      transition={dropdownPanelMotion.transition}
                      className="fixed z-[100] w-[min(96vw,42rem)] max-h-[min(88vh,calc(100vh-4rem))] overflow-y-auto overflow-x-visible bg-white/95 backdrop-blur-xl rounded-b-2xl rounded-t-none shadow-2xl border border-t-0 border-gray-200/50 p-5"
                      style={{ top: navBottomPx, left: partnershipLeftPx }}
                    >
                      <button
                        type="button"
                        onClick={() => goToHomeSection('Partnership')}
                        className="w-full text-left px-3 py-2.5 mb-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-sm font-bold text-gray-900 hover:shadow-md transition-all"
                      >
                        Partnership overview (home)
                      </button>
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 px-1">E-commerce marketplaces</h3>
                      <motion.ul
                        className="space-y-1.5 mb-5"
                        variants={partnershipList}
                        initial="hidden"
                        animate="show"
                      >
                        {ecommercePartners.map((item) => (
                          <PartnerDropdownRow key={item.path} item={item} onNavigate={handlePartnerNav} />
                        ))}
                      </motion.ul>
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 px-1">Quick commerce</h3>
                      <motion.ul
                        className="space-y-1.5"
                        variants={partnershipList}
                        initial="hidden"
                        animate="show"
                      >
                        {quickCommercePartners.map((item) => (
                          <PartnerDropdownRow key={item.path} item={item} onNavigate={handlePartnerNav} />
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* E-commerce — list dropdown */}
              <div
                ref={ecommerceMenuWrapRef}
                className="relative flex self-stretch items-center overflow-visible"
                onMouseEnter={() => setActiveDropdown('ecommerce')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
                >
                  E-commerce
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === 'ecommerce' ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'ecommerce' && (
                    <motion.div
                      initial={dropdownPanelMotion.initial}
                      animate={dropdownPanelMotion.animate}
                      exit={dropdownPanelMotion.exit}
                      transition={dropdownPanelMotion.transition}
                      className="fixed z-[100] w-[min(96vw,28rem)] max-h-[min(88vh,calc(100vh-4rem))] overflow-y-auto bg-white/95 backdrop-blur-xl rounded-b-2xl rounded-t-none shadow-2xl border border-t-0 border-gray-200/50 p-5"
                      style={{ top: navBottomPx, left: ecommerceMenuLeftPx }}
                    >
                      <p className="text-xs text-gray-500 mb-2 px-1">Marketplaces &amp; D2C platforms</p>
                      <motion.ul
                        className="space-y-1.5"
                        variants={partnershipList}
                        initial="hidden"
                        animate="show"
                      >
                        {ecommercePartners.map((item) => (
                          <PartnerDropdownRow key={item.path} item={item} onNavigate={handlePartnerNav} />
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick commerce — list dropdown */}
              <div
                ref={quickCommerceMenuWrapRef}
                className="relative flex self-stretch items-center overflow-visible"
                onMouseEnter={() => setActiveDropdown('quickcommerce')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
                >
                  Quick commerce
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === 'quickcommerce' ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'quickcommerce' && (
                    <motion.div
                      initial={dropdownPanelMotion.initial}
                      animate={dropdownPanelMotion.animate}
                      exit={dropdownPanelMotion.exit}
                      transition={dropdownPanelMotion.transition}
                      className="fixed z-[100] w-[min(92vw,22rem)] max-h-[min(88vh,calc(100vh-4rem))] overflow-y-auto bg-white/95 backdrop-blur-xl rounded-b-2xl rounded-t-none shadow-2xl border border-t-0 border-gray-200/50 p-5"
                      style={{ top: navBottomPx, left: quickCommerceMenuLeftPx }}
                    >
                      <p className="text-xs text-gray-500 mb-2 px-1">10-minute &amp; quick delivery</p>
                      <motion.ul
                        className="space-y-1.5"
                        variants={partnershipList}
                        initial="hidden"
                        animate="show"
                      >
                        {quickCommercePartners.map((item) => (
                          <PartnerDropdownRow key={item.path} item={item} onNavigate={handlePartnerNav} />
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Our Clients — brand pages */}
              <div
                ref={clientsWrapRef}
                className="relative flex self-stretch items-center overflow-visible"
                onMouseEnter={() => setActiveDropdown('clients')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
                >
                  Our Clients
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === 'clients' ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'clients' && (
                    <motion.div
                      initial={dropdownPanelMotion.initial}
                      animate={dropdownPanelMotion.animate}
                      exit={dropdownPanelMotion.exit}
                      transition={dropdownPanelMotion.transition}
                      className="fixed z-[100] w-[min(92vw,26rem)] max-h-[min(85vh,calc(100vh-5rem))] overflow-y-auto bg-white/95 backdrop-blur-xl rounded-b-2xl rounded-t-none shadow-2xl border border-t-0 border-gray-200/50 p-4"
                      style={{ top: navBottomPx, left: clientsLeftPx }}
                    >
                      <button
                        type="button"
                        onClick={() => goToHomeSection('clients')}
                        className="w-full text-left px-3 py-2.5 mb-2 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 text-sm font-bold text-gray-900 hover:shadow-md transition-all"
                      >
                        Our Clients overview (home)
                      </button>
                      <p className="text-xs text-gray-500 px-1 mb-2">Brand pages</p>
                      <ul className="space-y-1">
                        {clientNavItems.map((c) => (
                          <li key={c.path}>
                            <button
                              type="button"
                              onClick={() => handleNavigation(c.path)}
                              className="flex w-full items-center gap-3 text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100 p-0.5 shadow-sm overflow-hidden">
                                <img
                                  src={c.logoSrc}
                                  alt=""
                                  className="h-full w-full object-contain"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </span>
                              <span>{c.name}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services mega menu — dropdown under nav (not full-screen modal) */}
              <div
                className="relative flex self-stretch items-center overflow-visible"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      key="services-mega"
                      initial={dropdownPanelMotion.initial}
                      animate={dropdownPanelMotion.animate}
                      exit={dropdownPanelMotion.exit}
                      transition={dropdownPanelMotion.transition}
                      className="fixed left-1/2 z-[100] w-[min(90vw,56rem)] max-w-[56rem] -translate-x-1/2"
                      style={{ top: navBottomPx }}
                    >
                      <div className="max-h-[min(85vh,calc(100vh-5rem))] overflow-y-auto overflow-x-visible bg-white/95 backdrop-blur-xl rounded-b-2xl rounded-t-none shadow-2xl border border-t-0 border-gray-200/50 p-6">
                        {/* Category icons row */}
                        <motion.div
                          className="flex flex-wrap justify-around items-center gap-4 mb-6 pb-6 border-b border-gray-200"
                          variants={servicesCategoryList}
                          initial="hidden"
                          animate="show"
                        >
                          {megaMenuServices.map((service, idx) => {
                            const CategoryIcon = service.icon;
                            return (
                              <motion.div
                                key={idx}
                                variants={servicesCategoryChip}
                                className="flex flex-col items-center gap-2 min-w-[5.5rem]"
                              >
                                <div
                                  className={`w-14 h-14 ${service.color} rounded-full flex items-center justify-center shadow-lg`}
                                >
                                  <CategoryIcon className="w-7 h-7 text-white" />
                                </div>
                                <span className="text-xs font-bold text-gray-800 text-center leading-tight">
                                  {service.category}
                                </span>
                              </motion.div>
                            );
                          })}
                        </motion.div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                          {megaMenuServices.map((service, idx) => (
                            <motion.ul
                              key={idx}
                              className="space-y-1"
                              variants={servicesColumnList}
                              initial="hidden"
                              animate="show"
                            >
                              {service.items.map((item, i) => (
                                <motion.li key={i} variants={servicesRow}>
                                  <button
                                    type="button"
                                    onClick={() => handleNavigation(item.path)}
                                    className="flex items-center gap-2.5 px-2 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group w-full text-left"
                                  >
                                    <motion.span
                                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm p-1 group-hover:border-blue-200 group-hover:shadow-md"
                                      whileHover={{ scale: 1.08, y: -1 }}
                                      whileTap={{ scale: 0.94 }}
                                      transition={{ type: 'spring', stiffness: 420, damping: 18 }}
                                    >
                                      <img
                                        src={item.logoSrc}
                                        alt=""
                                        aria-hidden
                                        className="max-h-7 max-w-full object-contain"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </motion.span>
                                    <span className="text-sm leading-snug">{item.name}</span>
                                  </button>
                                </motion.li>
                              ))}
                            </motion.ul>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm mb-0.5">Need Custom Solutions?</h4>
                              <p className="text-xs text-gray-600">Get personalized service recommendations</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                scrollToSection('contact');
                                setActiveDropdown(null);
                              }}
                              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all font-semibold text-sm whitespace-nowrap shrink-0 self-start sm:self-auto"
                            >
                              Talk to Expert
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                type="button"
                onClick={() => navigate('/about')} 
                className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                About Us
              </button>
              <button 
                type="button"
                onClick={() => navigate('/career')} 
                className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                Career
              </button>
              <button 
                type="button"
                onClick={() => navigate('/events')} 
                className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                Events
              </button>
              <button 
                type="button"
                onClick={() => navigate('/contact')} 
                className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="flex shrink-0 items-center self-center lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
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

              {/* Mobile — Partnership (list — all partners) */}
              <div className="space-y-3">
                <div className="px-4 py-2 text-sm font-bold text-gray-500">Partnership</div>
                <button
                  type="button"
                  onClick={() => goToHomeSection('Partnership')}
                  className="block w-full text-left px-4 py-2.5 text-gray-800 hover:bg-blue-50 rounded-lg font-semibold text-sm"
                >
                  Partnership overview (home)
                </button>
                <div className="px-2 space-y-2">
                  <div className="px-2 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">E-commerce</div>
                  {ecommercePartners.map((item) => (
                    <PartnerMobileRow key={`m-p-ec-${item.path}`} item={item} onNavigate={handlePartnerNav} />
                  ))}
                  <div className="px-2 pt-2 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Quick commerce</div>
                  {quickCommercePartners.map((item) => (
                    <PartnerMobileRow key={`m-p-qc-${item.path}`} item={item} onNavigate={handlePartnerNav} />
                  ))}
                </div>
              </div>

              {/* Mobile — E-commerce */}
              <div className="space-y-3">
                <div className="px-4 py-2 text-sm font-bold text-gray-500">E-commerce</div>
                <div className="px-2 space-y-2">
                  {ecommercePartners.map((item) => (
                    <PartnerMobileRow key={`m-e-${item.path}`} item={item} onNavigate={handlePartnerNav} />
                  ))}
                </div>
              </div>

              {/* Mobile — Quick commerce */}
              <div className="space-y-3">
                <div className="px-4 py-2 text-sm font-bold text-gray-500">Quick commerce</div>
                <div className="px-2 space-y-2">
                  {quickCommercePartners.map((item) => (
                    <PartnerMobileRow key={`m-q-${item.path}`} item={item} onNavigate={handlePartnerNav} />
                  ))}
                </div>
              </div>

              {/* Mobile — Our Clients */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-bold text-gray-500">Our Clients</div>
                <button
                  type="button"
                  onClick={() => goToHomeSection('clients')}
                  className="block w-full text-left px-4 py-2.5 text-gray-800 hover:bg-orange-50 rounded-lg font-semibold text-sm"
                >
                  Our Clients overview (home)
                </button>
                {clientNavItems.map((c) => (
                  <button
                    type="button"
                    key={c.path}
                    onClick={() => handleNavigation(c.path)}
                    className="flex w-full items-center gap-3 text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium text-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100 p-0.5 shadow-sm overflow-hidden">
                      <img
                        src={c.logoSrc}
                        alt=""
                        className="h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-bold text-gray-500">Services</div>
                {megaMenuServices.map((category) => (
                  <div key={category.category}>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400">{category.category}</div>
                    {category.items.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => handleNavigation(item.path)}
                        className="flex w-full items-center gap-3 text-left px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all text-sm"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm p-1">
                          <img
                            src={item.logoSrc}
                            alt=""
                            aria-hidden
                            className="max-h-7 max-w-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>

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
    </nav>
  );
}