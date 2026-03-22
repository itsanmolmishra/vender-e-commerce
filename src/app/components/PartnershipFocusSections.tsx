import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Settings, ShoppingCart, TrendingUp } from 'lucide-react';

type Props = { brandName: string };

const HASHES = ['partnership-setup', 'partnership-management', 'partnership-growth'] as const;

export function PartnershipFocusSections({ brandName }: Props) {
  const location = useLocation();
  useEffect(() => {
    const raw = location.hash.replace(/^#/, '') || window.location.hash.replace(/^#/, '');
    if (HASHES.includes(raw as (typeof HASHES)[number])) {
      window.requestAnimationFrame(() => {
        document.getElementById(raw)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location.hash, location.pathname]);

  return (
    <section className="py-12 px-4 bg-white/90 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
          Partnership focus
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div
            id="partnership-setup"
            className="scroll-mt-28 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50/90 to-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3 text-[var(--ceuki-blue)]">
              <Settings className="w-5 h-5" aria-hidden />
              <h2 className="text-lg font-bold text-gray-900">Setup</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Onboarding, catalog, KYC, and launch readiness for <strong>{brandName}</strong> with Ceuki.
            </p>
          </div>
          <div
            id="partnership-management"
            className="scroll-mt-28 rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-50/80 to-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3 text-purple-700">
              <ShoppingCart className="w-5 h-5" aria-hidden />
              <h2 className="text-lg font-bold text-gray-900">Management</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Day-to-day ops, inventory rhythm, orders, and marketplace SLAs for <strong>{brandName}</strong>.
            </p>
          </div>
          <div
            id="partnership-growth"
            className="scroll-mt-28 rounded-2xl border border-gray-200 bg-gradient-to-br from-orange-50/80 to-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3 text-orange-700">
              <TrendingUp className="w-5 h-5" aria-hidden />
              <h2 className="text-lg font-bold text-gray-900">Growth</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ads, SEO, promos, and analytics to scale revenue on <strong>{brandName}</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
