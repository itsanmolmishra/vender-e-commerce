import { Logo, LogoMark } from './Logo';
import { Download, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function LogoShowcase() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const variations = [
    { id: 'primary', label: 'Primary Logo', component: <Logo variant="full" size="xl" /> },
    { id: 'icon', label: 'Icon Only', component: <Logo variant="icon" size="xl" /> },
    { id: 'stacked', label: 'Stacked Version', component: <Logo variant="stacked" size="lg" /> },
    { id: 'small', label: 'Small Size', component: <Logo variant="full" size="sm" /> },
    { id: 'with-tagline', label: 'With Tagline', component: <Logo variant="full" size="lg" showTagline /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Ceuki India Pvt Ltd{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Brand Identity
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Professional logo system for modern e-commerce branding
          </p>
        </div>

        {/* Main Logo Display */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="flex items-center justify-center mb-8">
              <Logo variant="full" size="xl" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Primary Logo</h2>
              <p className="text-gray-600">Full horizontal version with gradient text</p>
            </div>
          </div>
        </div>

        {/* Logo Variations Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Logo Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {variations.map((variation) => (
              <div
                key={variation.id}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center h-32 mb-6">
                  {variation.component}
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{variation.label}</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 mx-auto">
                    <Download className="w-4 h-4" />
                    Download SVG
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Theme Versions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Dark Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
              <div className="flex items-center justify-center h-32 mb-6">
                <Logo variant="full" theme="dark" size="lg" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">Dark Background</h3>
                <p className="text-sm text-gray-400">With gradient text effect</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl shadow-lg p-8 border border-blue-700">
              <div className="flex items-center justify-center h-32 mb-6">
                <Logo variant="stacked" theme="dark" size="lg" showTagline />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">Colored Background</h3>
                <p className="text-sm text-gray-300">Stacked with tagline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Icon Sizes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Icon Sizes</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-end justify-around flex-wrap gap-8">
              <div className="text-center">
                <LogoMark size={24} />
                <p className="text-sm text-gray-600 mt-2">24px</p>
              </div>
              <div className="text-center">
                <LogoMark size={32} />
                <p className="text-sm text-gray-600 mt-2">32px</p>
              </div>
              <div className="text-center">
                <LogoMark size={48} />
                <p className="text-sm text-gray-600 mt-2">48px</p>
              </div>
              <div className="text-center">
                <LogoMark size={64} />
                <p className="text-sm text-gray-600 mt-2">64px</p>
              </div>
              <div className="text-center">
                <LogoMark size={96} />
                <p className="text-sm text-gray-600 mt-2">96px</p>
              </div>
              <div className="text-center">
                <LogoMark size={128} />
                <p className="text-sm text-gray-600 mt-2">128px</p>
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-32 bg-[#2563EB]" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Primary Blue</h3>
                <div className="flex items-center justify-between">
                  <code className="text-sm text-gray-600">#2563EB</code>
                  <button
                    onClick={() => copyToClipboard('#2563EB', 'blue')}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {copiedItem === 'blue' ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-32 bg-[#3B82F6]" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Mid Blue</h3>
                <div className="flex items-center justify-between">
                  <code className="text-sm text-gray-600">#3B82F6</code>
                  <button
                    onClick={() => copyToClipboard('#3B82F6', 'mid-blue')}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {copiedItem === 'mid-blue' ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-32 bg-[#38BDF8]" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Cyan Accent</h3>
                <div className="flex items-center justify-between">
                  <code className="text-sm text-gray-600">#38BDF8</code>
                  <button
                    onClick={() => copyToClipboard('#38BDF8', 'cyan')}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {copiedItem === 'cyan' ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-32 bg-[#F97316]" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Orange Accent</h3>
                <div className="flex items-center justify-between">
                  <code className="text-sm text-gray-600">#F97316</code>
                  <button
                    onClick={() => copyToClipboard('#F97316', 'orange')}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {copiedItem === 'orange' ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Do's</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Maintain clear space around the logo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Use on white or dark backgrounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Scale proportionally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Use official color palette</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl text-red-600">×</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Don'ts</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">×</span>
                  <span>Don't distort or stretch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">×</span>
                  <span>Don't change colors arbitrarily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">×</span>
                  <span>Don't add effects or shadows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">×</span>
                  <span>Don't use on busy backgrounds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Typography</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Font: Inter</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Bold (Logo)</p>
                  <p className="text-4xl font-bold">Ceuki India Pvt Ltd — Grow Your Business</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Semibold (Headings)</p>
                  <p className="text-2xl font-semibold">Transform Your E-commerce Journey</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Regular (Body)</p>
                  <p className="text-lg">Professional e-commerce management platform for modern businesses.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Font Family:</strong> Inter (Google Fonts)<br />
                <strong>Weights:</strong> 400 (Regular), 600 (Semibold), 700 (Bold)<br />
                <strong>Available at:</strong> fonts.google.com/specimen/Inter
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
