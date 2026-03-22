import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Shield, Clock, Users, LucideIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTA } from '../components/CTA';
import { useNavigate } from 'react-router';

interface Feature {
  title: string;
  description: string;
}

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Process {
  step: number;
  title: string;
  description: string;
}

interface ServiceDetailPageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  /** Optional Ceuki-branded banner from /public/services/heroes/ */
  heroImage?: string;
  features: Feature[];
  benefits: Benefit[];
  process: Process[];
  faq?: { question: string; answer: string }[];
}

export function ServiceDetailPage({
  icon: Icon,
  title,
  subtitle,
  description,
  gradient,
  heroImage,
  features,
  benefits,
  process,
  faq = []
}: ServiceDetailPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {heroImage && (
        <section className="pt-24 pb-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', damping: 24, stiffness: 280, mass: 0.9 }}
              className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-xl"
            >
              <motion.img
                src={heroImage}
                alt={`${title} — Ceuki India Pvt Ltd`}
                className="w-full h-auto max-h-[min(22rem,46vw)] object-cover object-center sm:max-h-[min(26rem,40vw)]"
                loading="eager"
                decoding="async"
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Hero Section */}
      <section
        className={`${heroImage ? 'pt-6 pb-20' : 'pt-32 pb-20'} px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => navigate('/')}
                className="text-blue-600 hover:text-blue-700 font-medium mb-6 flex items-center gap-2 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Back to Home
              </button>

              <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${gradient} rounded-3xl items-center justify-center shadow-xl mb-6`}>
                <Icon className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
              <p className="text-2xl text-blue-600 font-semibold mb-6">
                {subtitle}
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2 font-semibold">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 rounded-full border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl shadow-lg transition-all duration-300 hover:scale-105 font-semibold">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className={`relative bg-gradient-to-br ${gradient} rounded-3xl p-12 shadow-2xl`}>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">500+</div>
                      <div className="text-white/80 text-sm">Active Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">98%</div>
                      <div className="text-white/80 text-sm">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">24/7</div>
                      <div className="text-white/80 text-sm">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">4.9★</div>
                      <div className="text-white/80 text-sm">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Included</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">This Service</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <BenefitIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How It <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, streamlined process to get you started quickly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent -z-10" />
                )}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faq.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {faq.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </div>
  );
}
