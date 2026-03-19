import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ClientLogos } from '../components/ClientLogos';
import { TrustBadges } from '../components/TrustBadges';
import { Marketplaces } from '../components/Marketplaces';
import { Features } from '../components/Features';
import { Services } from '../components/Services';
import { ProductSupply } from '../components/ProductSupply';
import { Process } from '../components/Process';
import { Comparison } from '../components/Comparison';
import { Benefits } from '../components/Benefits';
import { CaseStudies } from '../components/CaseStudies';
import { Stats } from '../components/Stats';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { Blog } from '../components/Blog';
import { FAQ } from '../components/FAQ';
import { BrandKit } from '../components/BrandKit';
import { CTA } from '../components/CTA';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <ClientLogos />
        <TrustBadges />
        <div id="platforms">
          <Marketplaces />
        </div>
        <Features />
        <div id="services">
          <Services />
        </div>
        <ProductSupply />
        <Process />
        <Comparison />
        <Benefits />
        <CaseStudies />
        <Stats />
        <div id="pricing">
          <Pricing />
        </div>
        <Testimonials />
        <Blog />
        <FAQ />
        <BrandKit />
        <CTA />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
