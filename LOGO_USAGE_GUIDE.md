# EcomHub Logo & Brand Identity Guide

## 🎨 Logo Overview

The EcomHub logo is a modern, professional tech startup identity designed to reflect e-commerce growth and business scaling. It combines a shopping cart with an upward arrow and growth graph elements.

## 📦 Logo Variations

### 1. Primary Logo (Full Horizontal)
```tsx
<Logo variant="full" size="md" />
```
**Use Case:** Website header, email signatures, presentations
**Background:** White or light backgrounds

### 2. Icon Only
```tsx
<Logo variant="icon" size="md" />
// or
<LogoMark size={40} />
```
**Use Case:** App icons, favicons, social media profile pictures
**Minimum Size:** 24px

### 3. Stacked Version
```tsx
<Logo variant="stacked" size="lg" showTagline />
```
**Use Case:** Square spaces, mobile apps, business cards
**Best For:** Vertical layouts

### 4. Dark Theme
```tsx
<Logo variant="full" theme="dark" size="md" />
```
**Use Case:** Dark backgrounds, presentations, marketing materials
**Background:** Dark gray (#1F2937) or darker

## 🎨 Brand Colors

### Primary Gradient
- **Start:** #2563EB (Blue 600)
- **Middle:** #3B82F6 (Blue 500)  
- **End:** #38BDF8 (Cyan 400)

### Accent Color
- **Orange:** #F97316 (Orange 500)
- **Orange Light:** #FB923C (Orange 400)

### Usage
```css
/* Gradient Background */
background: linear-gradient(to right, #2563EB, #3B82F6, #38BDF8);

/* Text Gradient */
background: linear-gradient(to right, #2563EB, #38BDF8);
-webkit-background-clip: text;
color: transparent;
```

## 📐 Size Guidelines

### Standard Sizes
- **Small (sm):** Icon 24px, Text 18px - Navbar, buttons
- **Medium (md):** Icon 32px, Text 24px - Default usage
- **Large (lg):** Icon 40px, Text 30px - Hero sections
- **Extra Large (xl):** Icon 56px, Text 48px - Marketing materials

### Minimum Sizes
- **Full Logo:** Minimum width 120px
- **Icon Only:** Minimum 24px × 24px
- **Stacked:** Minimum height 80px

## 🎯 Clear Space

Maintain clear space equal to the height of the icon around all sides of the logo.

## ✅ Do's

- ✓ Use official color palette
- ✓ Maintain proportions when scaling
- ✓ Use on white or dark backgrounds
- ✓ Use gradient text for brand name
- ✓ Keep icon and text properly aligned

## ❌ Don'ts

- ✗ Don't distort or stretch the logo
- ✗ Don't change colors arbitrarily
- ✗ Don't add drop shadows or effects
- ✗ Don't use on busy or patterned backgrounds
- ✗ Don't rotate or skew the logo
- ✗ Don't rearrange logo elements

## 📱 Responsive Usage

### Desktop (1024px+)
```tsx
<Logo variant="full" size="lg" />
```

### Tablet (768px - 1023px)
```tsx
<Logo variant="full" size="md" />
```

### Mobile (< 768px)
```tsx
<Logo variant="icon" size="sm" />
// or
<Logo variant="full" size="sm" />
```

## 🎨 Typography

### Primary Font: Inter
- **Logo:** Inter Bold (700)
- **Headings:** Inter Semibold (600)
- **Body:** Inter Regular (400)

### Font Pairing
```tsx
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

## 📄 File Formats

### Vector (Recommended)
- **SVG:** Scalable, best for web and digital
- **AI/EPS:** Adobe Illustrator, best for print

### Raster
- **PNG:** Transparent backgrounds, web usage
  - @1x: Standard resolution
  - @2x: Retina displays
  - @3x: High-DPI screens

## 🌐 Web Implementation

### React Component
```tsx
import { Logo } from './components/Logo';

function Header() {
  return (
    <header>
      <Logo variant="full" size="md" />
    </header>
  );
}
```

### Direct SVG
```tsx
import { LogoMark } from './components/Logo';

<LogoMark size={48} className="custom-class" />
```

## 🎯 Use Cases by Context

### Website Header/Navbar
```tsx
<Logo variant="full" size="sm" />
```

### Hero Section
```tsx
<Logo variant="stacked" size="xl" showTagline />
```

### Footer
```tsx
<Logo variant="full" theme="dark" size="md" />
```

### Email Signature
```tsx
<Logo variant="full" size="sm" />
```

### Social Media Profile
```tsx
<LogoMark size={400} /> // Square format
```

### App Icon (iOS/Android)
```tsx
<LogoMark size={1024} /> // Export as PNG
```

### Favicon
```tsx
<LogoMark size={32} /> // 32×32px
<LogoMark size={16} /> // 16×16px
```

## 🎨 Background Compatibility

### Light Backgrounds
- White (#FFFFFF)
- Light Gray (#F9FAFB, #F3F4F6)
- Light Blue (#EFF6FF, #DBEAFE)

### Dark Backgrounds
- Dark Gray (#1F2937, #111827)
- Navy Blue (#1E3A8A)
- Black (#000000)

### Colored Backgrounds
Use white version of logo or theme="dark" variant

## 📊 Marketing Materials

### Business Cards
- Front: Full logo, top left
- Back: Icon or stacked version

### Letterhead
- Top left: Full logo (medium size)
- Footer: Small icon with contact info

### Presentations
- Title slide: Stacked logo, centered, extra large
- Other slides: Icon or small logo, top corner

### Social Media
- Profile Picture: Icon only (square)
- Cover Photo: Full logo on branded background
- Posts: Logo with tagline

## 🔄 Brand Consistency

### Always use:
1. Official logo files (never recreate)
2. Official color palette
3. Inter font family
4. Proper spacing and alignment

### Quick Checklist:
- [ ] Using official logo file
- [ ] Correct size for medium
- [ ] Proper clear space maintained
- [ ] Colors unchanged from brand palette
- [ ] Background provides good contrast
- [ ] Logo is not distorted

## 📞 Support

For questions about logo usage or custom requirements:
- Email: brand@ecomhub.com
- Visit: /brand page for interactive showcase
- Download: Complete brand kit from website

---

**Last Updated:** March 19, 2026
**Version:** 1.0.0
**Design:** Modern Tech Startup Identity
**Inspiration:** Shopify, Razorpay, Zoho-level branding
