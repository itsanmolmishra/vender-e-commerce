import { Settings, ShoppingCart, TrendingUp, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

export type MarketplacePartner = {
  name: string;
  logoSrc: string;
  path: string;
  desc?: string;
};

type Props = {
  partner: MarketplacePartner;
  compact?: boolean;
};

export function MarketplacePartnerCard({ partner, compact }: Props) {
  const navigate = useNavigate();
  const { name, logoSrc, path, desc } = partner;

  const go = (hash: string) => {
    navigate({ pathname: path, hash });
  };

  return (
    <div
      className={`flex flex-col rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-[var(--ceuki-bright)]/25 transition-all duration-300 ${
        compact ? 'p-3 min-w-[9.5rem]' : 'p-4 min-w-[11rem]'
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-sm p-1.5">
          <img src={logoSrc} alt="" className="max-h-8 max-w-full object-contain" loading="lazy" decoding="async" />
        </div>
        <button
          type="button"
          onClick={() => navigate(path)}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[var(--ceuki-blue)] hover:text-white transition-colors"
          aria-label={`${name} — full page`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <h3 className={`font-bold text-gray-900 mb-1 ${compact ? 'text-sm' : 'text-base'}`}>{name}</h3>
      {desc && !compact && <p className="text-xs text-gray-500 mb-3 line-clamp-2">{desc}</p>}

      <nav className="mt-auto flex flex-col gap-1.5 border-t border-gray-100 pt-3">
        <button
          type="button"
          onClick={() => go('#partnership-setup')}
          className="flex items-center gap-2 text-left text-xs font-semibold text-gray-700 hover:text-[var(--ceuki-blue)] transition-colors py-0.5"
        >
          <Settings className="w-3.5 h-3.5 text-[var(--ceuki-blue)] shrink-0" aria-hidden />
          Setup
        </button>
        <button
          type="button"
          onClick={() => go('#partnership-management')}
          className="flex items-center gap-2 text-left text-xs font-semibold text-gray-700 hover:text-[var(--ceuki-blue)] transition-colors py-0.5"
        >
          <ShoppingCart className="w-3.5 h-3.5 text-[var(--ceuki-blue)] shrink-0" aria-hidden />
          Management
        </button>
        <button
          type="button"
          onClick={() => go('#partnership-growth')}
          className="flex items-center gap-2 text-left text-xs font-semibold text-gray-700 hover:text-[var(--ceuki-blue)] transition-colors py-0.5"
        >
          <TrendingUp className="w-3.5 h-3.5 text-[var(--ceuki-blue)] shrink-0" aria-hidden />
          Growth
        </button>
      </nav>
    </div>
  );
}
