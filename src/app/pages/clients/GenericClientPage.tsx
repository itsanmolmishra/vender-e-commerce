import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router';
import type { ClientPageConfig } from './clientConfigs';

interface Props {
  config: ClientPageConfig;
}

export function GenericClientPage({ config }: Props) {
  const navigate = useNavigate();
  const {
    HeroIcon,
    logoSrc,
    heroBadge,
    heroTitleLine1,
    heroTitleGradient,
    heroDescription,
    metrics,
    benefits,
    focusTitle,
    focusItems,
    pageBgClass,
    brandName,
    brandFrom,
    brandTo,
    brandSoftFrom,
    brandSoftTo,
  } = config;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${pageBgClass}`}>
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur rounded-full border border-gray-200 shadow-sm mb-6">
              <span className="flex h-8 w-[5.25rem] items-center justify-center rounded-md border border-gray-100 bg-white px-2">
                <img src={logoSrc} alt="" className="h-5 w-full object-contain" loading="lazy" decoding="async" />
              </span>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                style={{ backgroundImage: `linear-gradient(135deg, ${brandFrom}, ${brandTo})` }}
              >
                <HeroIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">{heroBadge}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              {heroTitleLine1}
              <span className="block bg-clip-text text-transparent mt-2" style={{ backgroundImage: `linear-gradient(90deg, ${brandFrom}, ${brandTo})` }}>
                {heroTitleGradient}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">{heroDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="group px-8 py-3.5 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                style={{ backgroundImage: `linear-gradient(90deg, ${brandFrom}, ${brandTo})` }}
              >
                Talk about {brandName}
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate('/');
                  window.setTimeout(() => {
                    document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                className="px-8 py-3.5 bg-white text-gray-900 rounded-full font-semibold shadow-md border border-gray-200 transition-all"
                style={{ borderColor: `${brandFrom}4D` }}
              >
                Back to Our Clients
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white/60 backdrop-blur-sm border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="text-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent mb-1" style={{ backgroundImage: `linear-gradient(90deg, ${brandFrom}, ${brandTo})` }}>
                  {metric.value}
                </div>
                <div className="font-semibold text-gray-900 text-sm">{metric.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{metric.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Ceuki for {brandName}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Execution that matches how buyers search, compare, and purchase.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundImage: `linear-gradient(135deg, ${brandSoftFrom}, ${brandSoftTo})` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: brandFrom }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundImage: `linear-gradient(90deg, ${brandSoftFrom}, ${brandSoftTo})` }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">{focusTitle}</h2>
          <ul className="space-y-4">
            {focusItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 items-start text-gray-700"
              >
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: brandFrom }} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to grow {brandName} online?</h2>
          <p className="text-gray-600 mb-8">Share your goals—we’ll map a practical plan across marketplaces and creatives.</p>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="px-10 py-4 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            style={{ backgroundImage: `linear-gradient(90deg, ${brandFrom}, ${brandTo})` }}
          >
            Get in touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
