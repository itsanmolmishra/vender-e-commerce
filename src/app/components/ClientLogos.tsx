import { motion } from 'motion/react';

const partners: { name: string; logoSrc: string }[] = [
  { name: 'Amazon', logoSrc: '/partners/amazon.svg' },
  { name: 'Flipkart', logoSrc: '/partners/flipkart.svg' },
  { name: 'Myntra', logoSrc: '/partners/myntra.png' },
  { name: 'Meesho', logoSrc: '/partners/meesho.png' },
  { name: 'Shopify', logoSrc: '/partners/shopify.svg' },
  { name: 'Nykaa', logoSrc: '/partners/nykaa.svg' },
  { name: 'Ajio', logoSrc: '/partners/ajio.svg' },
  { name: 'eBay', logoSrc: '/partners/ebay.svg' },
  { name: 'Etsy', logoSrc: '/partners/etsy.svg' },
  { name: 'BigCommerce', logoSrc: '/partners/bigcommerce.svg' },
];

export function ClientLogos() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Trusted Partners & Partnership
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {partners.map(({ name, logoSrc }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="group flex flex-col items-center justify-center gap-2"
            >
              <div className="w-full max-w-[8.5rem] mx-auto bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border border-gray-200 group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300 px-3 py-4 flex items-center justify-center min-h-[5.25rem]">
                <img
                  src={logoSrc}
                  alt=""
                  className="h-10 w-auto max-w-full object-contain object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="text-sm font-bold text-gray-600 text-center group-hover:text-blue-600 transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
