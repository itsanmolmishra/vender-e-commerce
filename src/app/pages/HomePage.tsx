import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ClientLogos } from '../components/ClientLogos';
import { OurClients } from '../components/OurClients';
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
import { Testimonials } from '../components/Testimonials';
import { Blog } from '../components/Blog';
import { FAQ } from '../components/FAQ';
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
        <OurClients />
        <TrustBadges />
        <div id="Partnership" className="scroll-mt-24">
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
        <Testimonials />
        <Blog />
        <FAQ />
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
