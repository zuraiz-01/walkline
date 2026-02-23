import { useEffect, useMemo, useState } from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { SeoCategoryPage } from './components/seo'
import { Drawer, Footer, Header, ScrollToTop } from './components/layout'
import {
  AboutPage,
  BlogListPage,
  BlogPostPage,
  CartPage,
  CheckoutPage,
  CollectionPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  ProductDetailPage,
  ReviewsPage,
  TrackOrderPage,
  WishlistPage,
} from './pages'
import { fallbackCatalog } from './data/catalog'
import { seoCategoryPages } from './seoData'
import { productKey, toProductPath, withBase } from './utils/shop'
import { applyProductImagesToCatalog } from './utils/productImages'
import './App.css'

const readStorage = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) {
      return fallback
    }
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

const writeStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Ignore quota and private mode storage errors.
  }
}

const normalizeCart = (value) => {
  if (!value || typeof value !== 'object') {
    return {}
  }

  return Object.entries(value).reduce((next, [key, entry]) => {
    if (!key) {
      return next
    }

    if (typeof entry === 'number') {
      const quantity = Math.max(0, Number(entry) || 0)
      if (quantity > 0) {
        next[key] = { quantity, product: null }
      }
      return next
    }

    if (!entry || typeof entry !== 'object') {
      return next
    }

    const quantity = Math.max(0, Number(entry.quantity) || 0)
    if (quantity <= 0) {
      return next
    }

    next[key] = {
      quantity,
      product: entry.product && typeof entry.product === 'object' ? entry.product : null,
    }
    return next
  }, {})
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const catalog = useMemo(() => applyProductImagesToCatalog(fallbackCatalog), [])
  const [cart, setCart] = useState(() => normalizeCart(readStorage('walkline.cart', {})))
  const [wishlist, setWishlist] = useState(() => readStorage('walkline.wishlist', []))
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)

  const wishlistKeys = useMemo(() => new Set(wishlist), [wishlist])
  const cartCount = useMemo(
    () =>
      Object.values(cart).reduce(
        (sum, entry) => sum + (Math.max(0, Number(entry?.quantity) || 0) || 0),
        0,
      ),
    [cart],
  )
  const wishlistCount = wishlist.length

  const navItems = useMemo(
    () => [
      { label: 'Home', to: '/' },
      { label: 'Wallets', to: '/wallets' },
      { label: 'Keychains', to: '/keychains' },
      { label: 'About', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
    [],
  )

  const allCatalogProducts = useMemo(() => {
    const map = new Map()
    const source = [...(catalog?.products ?? []), ...(catalog?.trending ?? [])]
    source.forEach((product) => {
      const key = productKey(product)
      if (key && !map.has(key)) {
        map.set(key, product)
      }
    })
    return Array.from(map.values())
  }, [catalog])

  const seoWalletProducts = useMemo(
    () =>
      allCatalogProducts
        .filter((product) => !/keychain/i.test(product?.name || '')),
    [allCatalogProducts],
  )

  const seoKeychainProducts = useMemo(
    () =>
      allCatalogProducts
        .filter((product) => /keychain/i.test(product?.name || '')),
    [allCatalogProducts],
  )

  const productIndex = useMemo(() => {
    const map = new Map()
    const products = [
      ...(catalog?.products ?? []),
      ...(catalog?.trending ?? []),
    ]
    products.forEach((product) => {
      const key = productKey(product)
      if (key && !map.has(key)) {
        map.set(key, product)
      }
    })
    return map
  }, [catalog])

  const searchableProducts = useMemo(() => {
    const source = [...(catalog?.products ?? []), ...(catalog?.trending ?? [])]
    const seen = new Set()
    const picks = []

    source.forEach((product) => {
      const key = productKey(product)
      if (!key || seen.has(key)) {
        return
      }
      seen.add(key)
      picks.push(product)
    })

    return picks
  }, [catalog])

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) {
      return searchableProducts.slice(0, 8)
    }
    return searchableProducts
      .filter((product) => {
        const haystack = [
          product?.name,
          product?.tag,
          product?.price,
        ].join(' ').toLowerCase()
        return haystack.includes(query)
      })
      .slice(0, 12)
  }, [searchQuery, searchableProducts])

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .filter(([, entry]) => Number(entry?.quantity) > 0)
      .map(([key, entry]) => {
        const fallbackProduct = productIndex.get(key) ?? null
        const storedProduct = entry?.product ?? null
        const product = fallbackProduct ?? storedProduct
        return {
          key,
          name: product?.name ?? key,
          quantity: Number(entry?.quantity) || 0,
          product,
        }
      })
  }, [cart, productIndex])

  const recommendedProducts = useMemo(() => {
    const cartKeys = new Set(cartItems.map((item) => productKey(item.product) || item.key))
    const source = [...(catalog?.trending ?? []), ...(catalog?.products ?? [])]
    const seen = new Set()
    const picks = []

    source.forEach((product) => {
      const key = productKey(product)
      if (!key || seen.has(key) || cartKeys.has(key) || picks.length >= 3) {
        return
      }
      seen.add(key)
      picks.push(product)
    })

    return picks
  }, [catalog, cartItems])

  const showcaseProducts = useMemo(() => {
    const source = [...(catalog?.trending ?? []), ...(catalog?.products ?? [])]
    const seen = new Set()
    const picks = []

    source.forEach((product) => {
      const key = productKey(product)
      if (!key || seen.has(key) || picks.length >= 4) {
        return
      }
      seen.add(key)
      picks.push(product)
    })

    return picks
  }, [catalog])

  const handleAddToCart = (product) => {
    const key = productKey(product)
    if (!key) {
      return
    }
    setCart((prev) => {
      const existing = prev[key]
      const prevQuantity = Number(existing?.quantity) || 0
      return {
        ...prev,
        [key]: {
          quantity: prevQuantity + 1,
          product: { ...(existing?.product ?? {}), ...product },
        },
      }
    })
  }

  const handleSetCartQuantity = (key, quantity) => {
    const nextQuantity = Math.max(0, Number(quantity) || 0)
    setCart((prev) => {
      const next = { ...prev }
      if (nextQuantity <= 0) {
        delete next[key]
      } else {
        next[key] = {
          quantity: nextQuantity,
          product: prev[key]?.product ?? productIndex.get(key) ?? null,
        }
      }
      return next
    })
  }

  const handlePlaceOrder = (details) => {
    writeStorage('walkline.lastOrder', {
      id: `${Date.now()}`,
      createdAt: new Date().toISOString(),
      details,
      items: cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.product?.price ?? null,
        image: item.product?.image ?? null,
      })),
    })
    setCart({})
    setIsCartOpen(false)
    navigate('/checkout/success')
  }

  const handleToggleWishlist = (product) => {
    const key = productKey(product)
    if (!key) {
      return
    }
    setWishlist((prev) => {
      const exists = prev.includes(key)
      return exists ? prev.filter((item) => item !== key) : [...prev, key]
    })
  }

  const handleRemoveFromWishlist = (name) => {
    setWishlist((prev) => prev.filter((item) => item !== name))
  }

  useEffect(() => {
    writeStorage('walkline.cart', normalizeCart(cart))
  }, [cart])

  useEffect(() => {
    writeStorage('walkline.wishlist', wishlist)
  }, [wishlist])

  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.fade-up'))
    if (!items.length) {
      return
    }

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      items.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [catalog, location.pathname])

  return (
    <div className="page">
      <ScrollToTop />
      <div className="announcement">
        <div className="announcement-track">
          {catalog.announcement.map((item, index) => (
            <div className="announcement-item" key={`${item}-${index}`}>
              <span>{item}</span>
              <span className="announcement-dot" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      <Header
        nav={navItems}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      <Drawer title="Menu" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className="mobile-nav-drawer">
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-nav-actions">
            <Link className="button" to="/cart" onClick={() => setIsMenuOpen(false)}>
              View cart
            </Link>
            <Link className="button ghost" to="/wishlist" onClick={() => setIsMenuOpen(false)}>
              Wishlist
            </Link>
          </div>
        </div>
      </Drawer>

      <Drawer
        title="Search Products"
        open={isSearchOpen}
        onClose={() => {
          setIsSearchOpen(false)
          setSearchQuery('')
        }}
      >
        <div className="search-panel">
          <label className="search-field" htmlFor="site-search-input">
            <input
              id="site-search-input"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search wallets and keychains"
              autoFocus
            />
          </label>
          <p className="muted search-hint">
            {searchQuery.trim()
              ? `Showing results for "${searchQuery.trim()}"`
              : 'Popular products'}
          </p>
          {searchResults.length ? (
            <div className="drawer-list search-results-list">
              {searchResults.map((product) => (
                <Link
                  key={productKey(product)}
                  className="drawer-item search-result-item"
                  to={toProductPath(product)}
                  onClick={() => {
                    setIsSearchOpen(false)
                    setSearchQuery('')
                  }}
                >
                  <div className="drawer-item-media">
                    {product?.image ? (
                      <img src={withBase(product.image)} alt={product.name} loading="lazy" decoding="async" />
                    ) : (
                      <div className="drawer-item-placeholder" aria-hidden="true" />
                    )}
                  </div>
                  <div className="drawer-item-info">
                    <strong>{product.name}</strong>
                    <div className="drawer-item-meta">
                      {product?.price ? <span className="muted">{product.price}</span> : null}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="muted">No product found. Try another keyword.</p>
          )}
        </div>
      </Drawer>

      <Drawer title="Cart" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        {cartItems.length ? (
          <div className="drawer-list">
            {cartItems.map(({ key, name, quantity, product }) => (
              <div className="drawer-item" key={key}>
                <div className="drawer-item-media">
                  {product?.image ? (
                    <img src={withBase(product.image)} alt={name} loading="lazy" decoding="async" />
                  ) : (
                    <div className="drawer-item-placeholder" aria-hidden="true" />
                  )}
                </div>
                <div className="drawer-item-info">
                  <strong>{name}</strong>
                  <div className="drawer-item-meta">
                    {product?.price ? <span className="muted">{product.price}</span> : null}
                  </div>
                  <div className="drawer-item-actions">
                    <div className="qty">
                      <button
                        type="button"
                        className="qty-button"
                        onClick={() => handleSetCartQuantity(key, quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="qty-value" aria-label={`Quantity ${quantity}`}>
                        {quantity}
                      </span>
                      <button
                        type="button"
                        className="qty-button"
                        onClick={() => handleSetCartQuantity(key, quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-link"
                      onClick={() => handleSetCartQuantity(key, 0)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="muted">Your cart is empty.</p>
        )}
        <div className="drawer-footer">
          <Link className="button" to="/cart" onClick={() => setIsCartOpen(false)}>
            View cart
          </Link>
          <Link className="button ghost" to="/checkout" onClick={() => setIsCartOpen(false)}>
            Checkout
          </Link>
        </div>
      </Drawer>

      <Drawer title="Wishlist" open={isWishlistOpen} onClose={() => setIsWishlistOpen(false)}>
        {wishlist.length ? (
          <div className="drawer-list">
            {wishlist.map((name) => {
              const product = productIndex.get(name) ?? null
              return (
                <div className="drawer-item" key={name}>
                  <div className="drawer-item-media">
                    {product?.image ? (
                      <img src={withBase(product.image)} alt={name} loading="lazy" decoding="async" />
                    ) : (
                      <div className="drawer-item-placeholder" aria-hidden="true" />
                    )}
                  </div>
                  <div className="drawer-item-info">
                    <strong>{name}</strong>
                    <div className="drawer-item-meta">
                      {product?.price ? <span className="muted">{product.price}</span> : null}
                    </div>
                    <div className="drawer-item-actions">
                      <button
                        type="button"
                        className="button small"
                        onClick={() => product && handleAddToCart(product)}
                        disabled={!product}
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        className="text-link"
                        onClick={() => handleRemoveFromWishlist(name)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <p className="muted">Your wishlist is empty.</p>
        )}
        <div className="drawer-footer">
          <Link className="button" to="/wishlist" onClick={() => setIsWishlistOpen(false)}>
            View wishlist
          </Link>
        </div>
      </Drawer>

      <main className="page-main">
        <Routes>
          <Route
            path="/wallets"
            element={(
              <SeoCategoryPage
                page={seoCategoryPages.wallets}
                products={seoWalletProducts}
                sectionTitle="Featured Wallets"
                sectionLink="/wallets"
                bottomProducts={seoKeychainProducts}
                bottomSectionTitle="Featured Keychains"
                bottomSectionLink="/keychains"
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistKeys={wishlistKeys}
              />
            )}
          />
          <Route
            path="/wallets/mens-wallets-pakistan"
            element={<SeoCategoryPage page={seoCategoryPages.mensWallets} />}
          />
          <Route
            path="/wallets/womens-wallets-pakistan"
            element={<SeoCategoryPage page={seoCategoryPages.womensWallets} />}
          />
          <Route
            path="/keychains"
            element={(
              <SeoCategoryPage
                page={seoCategoryPages.keychains}
                products={seoKeychainProducts}
                sectionTitle="Featured Keychains"
                sectionLink="/keychains"
                bottomProducts={seoWalletProducts}
                bottomSectionTitle="Featured Wallets"
                bottomSectionLink="/wallets"
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistKeys={wishlistKeys}
              />
            )}
          />
          <Route
            path="/keychains/custom-keychains-pakistan"
            element={<SeoCategoryPage page={seoCategoryPages.customKeychains} />}
          />
          <Route path="/blog" element={<BlogListPage catalog={catalog} />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route
            path="/"
            element={(
              <HomePage
                catalog={catalog}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistKeys={wishlistKeys}
              />
            )}
          />
          <Route
            path="/collections/:slug"
            element={(
              <CollectionPage
                catalog={catalog}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistKeys={wishlistKeys}
              />
            )}
          />
          <Route
            path="/products/:slug"
            element={(
              <ProductDetailPage
                catalog={catalog}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistKeys={wishlistKeys}
              />
            )}
          />
          <Route
            path="/cart"
            element={(
              <CartPage
                cartItems={cartItems}
                showcaseProducts={showcaseProducts}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistKeys={wishlistKeys}
                onSetQuantity={handleSetCartQuantity}
                onCheckout={() => navigate('/checkout')}
                onCloseDrawer={() => navigate('/')}
              />
            )}
          />
          <Route
            path="/wishlist"
            element={(
              <WishlistPage
                wishlist={wishlist}
                productIndex={productIndex}
                showcaseProducts={showcaseProducts}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistKeys={wishlistKeys}
                onRemove={handleRemoveFromWishlist}
                onCloseDrawer={() => navigate('/')}
              />
            )}
          />
          <Route
            path="/checkout"
            element={(
              <CheckoutPage
                cartItems={cartItems}
                onPlaceOrder={handlePlaceOrder}
                recommendedProducts={recommendedProducts}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistKeys={wishlistKeys}
              />
            )}
          />
          <Route
            path="/checkout/success"
            element={(
              <section className="section page-section">
                <div className="page-hero-card">
                  <span className="pill">Order placed</span>
                  <h3>Thank you!</h3>
                  <p className="muted">Your order has been recorded. We'll contact you soon.</p>
                  <button className="button" type="button" onClick={() => navigate('/')}>
                    Back to home
                  </button>
                </div>
              </section>
            )}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage catalog={catalog} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/track-order"
            element={(
              <TrackOrderPage
                showcaseProducts={showcaseProducts}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistKeys={wishlistKeys}
              />
            )}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer footer={catalog.footer} />
    </div>
  )
}

export default App



