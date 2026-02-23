# UX Changes Log

## Audit Summary
This pass focused on full-site responsiveness, perceived performance, and user flow polish for mobile-first browsing.

## UX Issues Found
1. All route pages were loaded eagerly, increasing initial JS cost.
2. Many images rendered without lazy loading/async decoding, causing heavy first paint and extra bandwidth use.
3. Mobile cart/wishlist item actions felt cramped and hard to tap.
4. Drawer opened over the page while background could still scroll.
5. Focus states for keyboard users were weak/inconsistent.
6. Touch devices still received hover transforms, causing visual jitter.
7. Footer copyright year was static.

## Implemented Changes

### Performance / Lightweight
- Added route-level code splitting with `React.lazy` + `Suspense` in `src/App.jsx`.
- Added lazy-loading and async decoding to product/media images across:
  - `src/App.jsx`
  - `src/pages/HomePage.jsx`
  - `src/pages/BlogListPage.jsx`
  - `src/pages/BlogPostPage.jsx`
  - `src/pages/ProductDetailPage.jsx`
  - `src/pages/CartPage.jsx`
  - `src/pages/WishlistPage.jsx`
  - `src/pages/CheckoutPage.jsx`
  - `src/pages/ReviewsPage.jsx`
  - `src/components/layout/Footer.jsx`
- Kept first visible hero/gallery frames high-priority where needed; deferred non-critical media.

### Responsiveness / Usability
- Improved mobile product browsing with tighter card/grid behavior (`<=720px`).
- Improved drawer/cart/wishlist action layout on mobile (stacked controls, better tap targets).
- Added word-wrapping safeguards for long product names in compact layouts.
- Added overflow protection for main page container to prevent horizontal clipping issues.

### Accessibility / Interaction Quality
- Added consistent `:focus-visible` styles for links, buttons, and form controls.
- Disabled hover-only transforms on touch devices (`@media (hover: none)`).
- Added drawer body scroll lock while open in `src/components/layout/Drawer.jsx`.

### Content/Trust Polish
- Footer year now uses current year dynamically in `src/components/layout/Footer.jsx`.

## Remaining High-Impact Recommendation
- Product image files are still large. Converting assets to optimized WebP/AVIF and serving resized variants will significantly improve mobile speed and Core Web Vitals.
