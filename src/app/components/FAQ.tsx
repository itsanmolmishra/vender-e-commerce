import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can you set up my marketplace accounts?',
      answer: 'We can set up your marketplace accounts within 3-5 business days, depending on the platform requirements and document verification. For Amazon and Flipkart, we typically complete the setup within 48-72 hours after receiving all necessary documents.'
    },
    {
      question: 'Do I need GST registration to sell online?',
      answer: 'Yes, GST registration is mandatory for selling on most major marketplaces in India. We provide complete GST registration services as part of our Business Setup package, handling all documentation and compliance requirements for you.'
    },
    {
      question: 'What kind of support do you provide after account setup?',
      answer: 'We provide end-to-end support including inventory management, order processing, customer service, performance monitoring, and regular analytics reports. Our Professional and Enterprise plans include dedicated account managers available 24/7.'
    },
    {
      question: 'Can you help with product photography and listing optimization?',
      answer: 'Absolutely! Our Creative Services team provides professional product photography, image editing, compelling product descriptions, and SEO-optimized listings. This significantly improves your conversion rates and search rankings.'
    },
    {
      question: 'How do you handle inventory across multiple platforms?',
      answer: 'We use advanced inventory management systems that sync across all your marketplace accounts in real-time. This prevents overselling and ensures accurate stock levels across Amazon, Flipkart, Myntra, and other platforms.'
    },
    {
      question: 'What makes your PPC and advertising services effective?',
      answer: 'Our marketing team has extensive experience with marketplace advertising. We use data-driven strategies, A/B testing, and continuous optimization to maximize your ROI. On average, our clients see a 3X increase in sales within 6 months.'
    },
    {
      question: 'Is there a minimum contract period?',
      answer: 'Our Starter and Professional plans are month-to-month with no long-term commitment. Enterprise plans typically involve a minimum 3-month engagement to ensure we can deliver comprehensive results for your business.'
    },
    {
      question: 'How do you ensure my business data remains secure?',
      answer: 'We follow industry-standard security protocols including encrypted data storage, secure API connections, and strict access controls. We sign NDAs with all clients and are fully compliant with data protection regulations.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our services
            </p>
          </motion.div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
              >
                <span className="text-lg font-semibold text-gray-900 flex-1">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br ${
                  openIndex === idx ? 'from-blue-500 to-purple-600' : 'from-gray-100 to-gray-200'
                } rounded-full flex items-center justify-center transition-all duration-300`}>
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Our team is here to help.</p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
