import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { clientNavItems } from '../pages/clients/clientConfigs';

export function OurClients() {
  const navigate = useNavigate();

  return (
    <section
      id="clients"
      className="scroll-mt-24 py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/80 to-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Our{' '}
            <span className="bg-gradient-to-r from-[var(--ceuki-blue)] to-[var(--ceuki-bright)] bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Brands we&apos;ve partnered with for e-commerce growth and marketplace excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {clientNavItems.map(({ path, logoSrc }, idx) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group flex"
            >
              <button
                type="button"
                onClick={() => navigate(path)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-6 sm:py-8 shadow-sm flex flex-col items-center justify-center gap-3 min-h-[5.5rem] group-hover:border-[var(--ceuki-bright)]/35 group-hover:shadow-md transition-all duration-300 text-center"
              >
                <span className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-100 bg-white px-3 py-1">
                  <img src={logoSrc} alt="" className="h-7 w-full object-contain" loading="lazy" decoding="async" />
                </span>
                <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-[var(--ceuki-blue)] opacity-0 group-hover:opacity-100 transition-opacity">
                  View page
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden />
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


