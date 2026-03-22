import { Logo, LogoMark } from './Logo';

export function LogoExamples() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Ceuki India Pvt Ltd Logo Showcase
          </h1>
          <p className="text-xl text-gray-600">
            Professional tech startup branding - Shopify/Razorpay level quality
          </p>
        </div>

        {/* Size Variations */}
        <section className="bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Size Variations</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-32 text-sm text-gray-600 font-medium">Extra Large</div>
              <Logo variant="full" size="xl" />
            </div>
            <div className="flex items-center gap-6">
              <div className="w-32 text-sm text-gray-600 font-medium">Large</div>
              <Logo variant="full" size="lg" />
            </div>
            <div className="flex items-center gap-6">
              <div className="w-32 text-sm text-gray-600 font-medium">Medium</div>
              <Logo variant="full" size="md" />
            </div>
            <div className="flex items-center gap-6">
              <div className="w-32 text-sm text-gray-600 font-medium">Small</div>
              <Logo variant="full" size="sm" />
            </div>
          </div>
        </section>

        {/* Layout Variations */}
        <section className="bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Layout Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <Logo variant="full" size="lg" />
              <p className="mt-4 text-sm text-gray-600">Horizontal (Full)</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <Logo variant="icon" size="lg" />
              <p className="mt-4 text-sm text-gray-600">Icon Only</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <Logo variant="stacked" size="md" />
              <p className="mt-4 text-sm text-gray-600">Stacked</p>
            </div>
          </div>
        </section>

        {/* Theme Variations */}
        <section className="bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Background Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Light Theme */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-12">
              <Logo variant="full" size="lg" />
              <p className="mt-6 text-sm text-gray-600 font-medium">Light Background</p>
            </div>
            
            {/* Dark Theme */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12">
              <Logo variant="full" theme="dark" size="lg" />
              <p className="mt-6 text-sm text-gray-300 font-medium">Dark Background</p>
            </div>

            {/* Blue Background */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12">
              <Logo variant="full" theme="dark" size="lg" />
              <p className="mt-6 text-sm text-blue-100 font-medium">Blue Background</p>
            </div>

            {/* Brand accent (royal blue → orange) */}
            <div className="bg-gradient-to-br from-blue-700 to-orange-500 rounded-2xl p-12">
              <Logo variant="stacked" theme="dark" size="md" showTagline />
              <p className="mt-6 text-sm text-orange-50 font-medium">Blue → orange gradient (stacked)</p>
            </div>
          </div>
        </section>

        {/* Icon Sizes */}
        <section className="bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Icon Scaling</h2>
          <div className="flex items-end justify-around flex-wrap gap-8">
            <div className="text-center">
              <LogoMark size={16} />
              <p className="text-xs text-gray-600 mt-2">16px</p>
            </div>
            <div className="text-center">
              <LogoMark size={24} />
              <p className="text-xs text-gray-600 mt-2">24px</p>
            </div>
            <div className="text-center">
              <LogoMark size={32} />
              <p className="text-xs text-gray-600 mt-2">32px</p>
            </div>
            <div className="text-center">
              <LogoMark size={48} />
              <p className="text-xs text-gray-600 mt-2">48px</p>
            </div>
            <div className="text-center">
              <LogoMark size={64} />
              <p className="text-xs text-gray-600 mt-2">64px</p>
            </div>
            <div className="text-center">
              <LogoMark size={96} />
              <p className="text-xs text-gray-600 mt-2">96px</p>
            </div>
            <div className="text-center">
              <LogoMark size={128} />
              <p className="text-xs text-gray-600 mt-2">128px</p>
            </div>
          </div>
        </section>

        {/* Real-World Usage Examples */}
        <section className="bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Real-World Usage</h2>
          
          {/* Navbar Example */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-3 font-medium">Website Navigation Bar</p>
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between">
              <Logo variant="full" size="sm" />
              <div className="flex items-center gap-6">
                <span className="text-sm text-gray-600">Home</span>
                <span className="text-sm text-gray-600">Services</span>
                <span className="text-sm text-gray-600">Contact</span>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-sm rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Hero Section Example */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-3 font-medium">Hero Section</p>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-12 text-center">
              <Logo variant="stacked" size="xl" showTagline />
              <p className="mt-6 text-gray-600 max-w-md mx-auto">
                Transform your e-commerce business with our all-in-one platform
              </p>
            </div>
          </div>

          {/* Footer Example */}
          <div>
            <p className="text-sm text-gray-600 mb-3 font-medium">Website Footer</p>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8">
              <Logo variant="full" theme="dark" size="md" />
              <div className="mt-4 flex gap-8 text-sm text-gray-400">
                <span>About</span>
                <span>Services</span>
                <span>Contact</span>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Brand Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-24 bg-[#2563EB] rounded-xl shadow-lg mb-3" />
              <p className="font-bold text-gray-900">#2563EB</p>
              <p className="text-sm text-gray-600">Primary Blue</p>
            </div>
            <div className="text-center">
              <div className="h-24 bg-[#3B82F6] rounded-xl shadow-lg mb-3" />
              <p className="font-bold text-gray-900">#3B82F6</p>
              <p className="text-sm text-gray-600">Mid Blue</p>
            </div>
            <div className="text-center">
              <div className="h-24 bg-[#38BDF8] rounded-xl shadow-lg mb-3" />
              <p className="font-bold text-gray-900">#38BDF8</p>
              <p className="text-sm text-gray-600">Cyan Accent</p>
            </div>
            <div className="text-center">
              <div className="h-24 bg-[#F97316] rounded-xl shadow-lg mb-3" />
              <p className="font-bold text-gray-900">#F97316</p>
              <p className="text-sm text-gray-600">Orange Accent</p>
            </div>
          </div>
        </section>

        {/* Usage Tips */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 shadow-lg text-white">
          <h2 className="text-3xl font-bold mb-6">Quick Usage Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">✓ Do's</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Maintain clear space around logo</li>
                <li>• Use official color palette</li>
                <li>• Scale proportionally</li>
                <li>• Use gradient text effect</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">✗ Don'ts</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Don't distort or stretch</li>
                <li>• Don't change colors</li>
                <li>• Don't add effects/shadows</li>
                <li>• Don't rotate or skew</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
