# VYBE E-Commerce App - React Implementation

## 📋 Project Overview

This is a complete React implementation of the VYBE e-commerce platform based on the HTML designs from `/stitch_custom_themed_online_store`. The app features a brutalist/minimalist design aesthetic with technical product focus.

## 🎨 Design System

**Color Palette:** High-Contrast Linear Commerce theme with:
- Primary: `#4800d6` (Purple)
- Surface: `#fbf9f9` (Off-white)
- On-Surface: `#1b1c1c` (Dark)
- And 40+ additional colors for surfaces, states, and variants

**Typography:** Space Grotesk font family with custom font weights
**Spacing:** 4px base unit, 16px gutter, 64px desktop margin

## 📁 File Structure Created

```
Frontend/src/
├── Components/
│   ├── Header.jsx           # Navigation header with search and cart
│   ├── Footer.jsx           # Footer with links and brand info
│   └── ProductCard.jsx      # Reusable product card component
├── Pages/
│   ├── Home.jsx             # Homepage with hero, stats, collections, arrivals
│   ├── Shop.jsx             # Shop with filters (category, price, size, material)
│   ├── Product.jsx          # Product detail page with gallery and specs
│   └── Cart.jsx             # Shopping cart with order summary
├── App.jsx                  # Main app with routing
├── index.css                # Tailwind imports & custom styles
└── main.jsx                 # React entry point with BrowserRouter

Configuration Files:
├── tailwind.config.js       # Tailwind colors, fonts, spacing config
├── vite.config.js           # Vite + React + Tailwind setup
├── package.json             # Dependencies
└── index.html               # HTML template
```

## 🔧 Components Overview

### 1. **Header Component** (`Header.jsx`)
- Sticky navigation bar
- VYBE branding with logo
- Navigation links (Shop, Collections, New Arrivals, Network)
- Search bar with specs search
- Cart button with item count
- Account/profile button
- Responsive design for mobile

### 2. **Footer Component** (`Footer.jsx`)
- Brand section with description
- Shop, Support, and Legal link sections
- Social media links
- Copyright information
- Full-width dark footer

### 3. **ProductCard Component** (`ProductCard.jsx`)
- Product image with grayscale hover effect
- Product title and price
- Specifications/details
- Add to Cart or Configure button
- Optional discount badge
- Hover animations

### 4. **Home Page** (`Home.jsx`)
- **Hero Section**: Full-height background with text overlay, CTA buttons, and slider controls
- **Stats Section**: 4-column grid showing (Latency, Material, Network, Uptime)
- **Featured Collections**: 3 collection cards with hover zoom and category info
- **New Arrivals**: 4-product grid with product cards
- **Newsletter Section**: Email signup with checkboxes for preferences
- **Data**: Hardcoded product array with images and specs

### 5. **Shop Page** (`Shop.jsx`)
- **Sidebar Filters** (300px width, desktop only):
  - Category filter with item counts
  - Price range slider
  - Size selector grid (XS-XXL)
  - Material specifications checkboxes
- **Product Grid**: 
  - Responsive (1-2-3 columns)
  - Sorting options (Latest, Price Low-High, High-Low)
  - Product count display
- **State Management**: useState for filters, category, price range, sorting
- **Filtered Display**: useMemo for performance

### 6. **Product Detail Page** (`Product.jsx`)
- **Breadcrumb Navigation**: Home > Category > Product
- **Image Gallery**: 2x2 grid of product images
- **Product Info Section**:
  - Badge and title
  - Price in USD
  - Detailed description
  - Size selector grid with availability (disabled for OOS sizes)
  - Add to Cart and Wishlist buttons
- **Expandable Sections**: Technical specs, shipping, care instructions
- **Related Products**: 4-item complementary product grid
- **State**: Selected size and expanded section tracking

### 7. **Cart Page** (`Cart.jsx`)
- **Cart Items Table**:
  - 2-column layout: items (8/12) and summary (4/12)
  - Product images, details, size, color
  - Quantity controls with +/- buttons
  - Remove item buttons with icons
  - Product reference codes
- **Order Summary**:
  - Itemized breakdown (items, shipping, tax)
  - Total calculation
  - Checkout button (primary)
  - Crypto payment option
  - Authenticity guarantee badge
- **State Management**: Cart items with quantity management

## 🚀 Key Features

✅ **Responsive Design**: Mobile, tablet, desktop breakpoints
✅ **Routing**: React Router v6 with named routes
✅ **State Management**: React hooks (useState, useMemo)
✅ **Tailwind CSS**: Utility-first styling with custom config
✅ **Brutalist Aesthetic**: Sharp corners, clean typography, high contrast
✅ **Image Optimization**: Placeholder images from Google API
✅ **Accessibility**: Semantic HTML, ARIA labels ready
✅ **Performance**: Memoized filtering, lazy loading ready

## 📱 Responsive Breakpoints

- **Mobile**: Single column layouts, hidden sidebar filters
- **Tablet**: 2-column product grids, responsive navigation
- **Desktop**: Full layout with sidebars, multi-column grids (3-4 cols)

## 🔗 Routing Map

```
/               → Home (hero, collections, new arrivals)
/shop           → Shop (products with filters)
/product/:id    → Product Detail (specs, gallery, related items)
/cart           → Shopping Cart (items + summary)
```

## 🎯 Component Integration

**Data Flow:**
1. Home displays featured collections linking to `/shop`
2. Shop shows filtered product grid
3. Product cards link to `/product/:id`
4. Product detail page shows full specs
5. Add to Cart updates cart state
6. Cart page shows items and order summary

## 💾 State Management

**Home**: Slide carousel state
**Shop**: Category, price range, size, material, sorting
**Product**: Selected size, expanded sections
**Cart**: Cart items array with quantities

Future: Context API or Redux for global cart state

## 🎨 Styling Approach

- **Tailwind CSS**: Primary utility framework
- **Custom Config**: All VYBE design tokens in tailwind.config.js
- **No CSS**: Pure Tailwind classes, no external CSS files
- **Font**: Space Grotesk imported from Google Fonts
- **Icons**: Material Symbols Outlined

## 📦 Dependencies

- React 18+
- React Router DOM v6
- Tailwind CSS 3+
- Vite (build tool)
- Material Symbols Outlined (Google Fonts)
- Space Grotesk (Google Fonts)

## 🔄 Next Steps (Optional Enhancements)

1. **Authentication**: Add login/signup pages
2. **Global State**: Implement Context API for cart persistence
3. **API Integration**: Connect to backend for real product data
4. **Payment**: Integrate Stripe/PayPal
5. **Search**: Implement full-text search functionality
6. **Filters**: Add more advanced filtering options
7. **Wishlist**: Add wish list functionality
8. **Reviews**: Add product reviews/ratings
9. **Orders**: Implement order history page
10. **Analytics**: Add Google Analytics tracking

## 🚀 Running the App

```bash
cd Frontend
npm install
npm run dev
```

Visit `http://localhost:5173` to see the app in action!

## 📸 Design Files Reference

Source designs from:
- `home_vybe_desktop/code.html` → Home page
- `shop_vybe_desktop/code.html` → Shop page
- `product_detail_vybe_desktop/code.html` → Product detail
- `your_cart_vybe_desktop/code.html` → Cart page
- `high_contrast_linear_commerce/DESIGN.md` → Design system

All HTML layouts have been converted to React components with proper state management and interactivity!
