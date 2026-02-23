import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/common'
import { SeoHead } from '../components/seo'
import { blogPosts } from '../data/blogPosts'
import { productImagePool } from '../utils/productImages'
import { productKey, withBase } from '../utils/shop'

const resolveBlogImage = (slug) => {
  if (slug.includes('keychain')) {
    return productImagePool.keychainBrown
  }
  if (slug.includes('crypto')) {
    return productImagePool.walletBlue
  }
  if (slug.includes('urdu')) {
    return productImagePool.walletBlack
  }
  return productImagePool.walletCroc
}

const isKeychainProduct = (product) => /keychain/i.test(product?.name || '')

const HomePage = ({ catalog, onAddToCart, onToggleWishlist, wishlistKeys }) => {
  const homeCategories = [
    { title: 'Wallets', image: productImagePool.walletBlack, to: '/wallets' },
    { title: 'Keychains', image: productImagePool.keychainBlue, to: '/keychains' },
  ]

  const featuredWallets = (catalog.products || [])
    .filter((product) => !isKeychainProduct(product))
    .slice(0, 4)

  const featuredKeychains = (catalog.products || [])
    .filter((product) => isKeychainProduct(product))
    .slice(0, 4)

  const mixedProducts = [...(catalog.products || []), ...(catalog.trending || [])]
    .filter((product, index, list) => index === list.findIndex((item) => item.name === product.name))

  const promoCards = useMemo(() => {
    const walletLead = featuredWallets[0] ?? mixedProducts.find((product) => !isKeychainProduct(product)) ?? null
    const keychainLead = featuredKeychains[0] ?? mixedProducts.find((product) => isKeychainProduct(product)) ?? null
    const everydayLead = featuredWallets[1] ?? mixedProducts[1] ?? walletLead

    return [
      {
        id: 'wallet-essentials',
        tag: 'Wallets Pakistan',
        title: walletLead?.name ?? 'Leather Wallet Collection',
        copy: 'Premium leather wallets for men and women with practical daily carry layout.',
        image: walletLead?.image ?? productImagePool.walletCroc,
        to: '/wallets',
      },
      {
        id: 'keychain-studio',
        tag: 'Keychain Pakistan',
        title: keychainLead?.name ?? 'Keychain Atelier',
        copy: 'Strong hardware, clean finish, and custom-ready keychain designs in PKR range.',
        image: keychainLead?.image ?? productImagePool.keychainBlue,
        to: '/keychains',
      },
      {
        id: 'everyday-carry',
        tag: 'Everyday Carry',
        title: everydayLead?.name ?? 'Signature Carry',
        copy: 'Match your wallet and keychain for a complete, durable everyday setup.',
        image: everydayLead?.image ?? productImagePool.walletBrown,
        to: '/wallets',
      },
    ]
  }, [featuredWallets, featuredKeychains, mixedProducts])

  const heroImage = featuredWallets[0]?.image
    ?? featuredKeychains[0]?.image
    ?? mixedProducts[0]?.image
    ?? productImagePool.walletBlack

  const heroTiles = [
    {
      tag: 'Featured Wallets',
      title: featuredWallets[0]?.name ?? 'Leather Wallets',
      copy: 'Premium, practical, and priced for Pakistan buyers.',
      to: '/wallets',
    },
    {
      tag: 'Featured Keychains',
      title: featuredKeychains[0]?.name ?? 'Durable Keychains',
      copy: 'Clean hardware finish for daily carry.',
      to: '/keychains',
    },
  ]

  return (
    <>
      <SeoHead
        title="Walkline Pakistan | Premium Wallets and Keychains"
        description="Shop premium yet affordable wallets and keychains in Pakistan. Discover leather wallets, custom keychains, and everyday carry essentials in PKR."
      />

      <section className="hero">
        <div className="hero-content">
          <p className="kicker fade-up" style={{ '--delay': '0s' }}>
            {catalog.hero.kicker}
          </p>
          <h1 className="fade-up" style={{ '--delay': '0.05s' }}>
            {catalog.hero.title}
          </h1>
          <p className="hero-description fade-up" style={{ '--delay': '0.12s' }}>
            {catalog.hero.description}
          </p>
          <div className="hero-actions fade-up" style={{ '--delay': '0.18s' }}>
            <Link className="button" to={catalog.hero.primaryCta.to}>
              {catalog.hero.primaryCta.label}
            </Link>
            <Link className="button ghost" to={catalog.hero.secondaryCta.to}>
              {catalog.hero.secondaryCta.label}
            </Link>
          </div>
          <div className="hero-highlights">
            {catalog.hero.highlights.map((item, index) => (
              <span
                key={item}
                className="hero-pill fade-up"
                style={{ '--delay': `${0.24 + index * 0.05}s` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image fade-up" style={{ '--delay': '0.08s' }}>
            <img
              src={withBase(heroImage)}
              alt="Walkline featured product"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hero-tiles">
            {heroTiles.map((tile) => (
              <article key={tile.tag} className="hero-tile">
                <p className="hero-tile-tag">{tile.tag}</p>
                <p className="hero-tile-title">{tile.title}</p>
                <p className="hero-tile-copy">{tile.copy}</p>
                <Link className="text-link" to={tile.to}>
                  Shop now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="wallets">
        <div className="section-header">
          <div>
            <p className="section-kicker">Shop By Category</p>
            <h2>Shop By Category</h2>
          </div>
          <Link className="text-link" to="/wallets">
            View all
          </Link>
        </div>
        <div className="category-grid home-category-grid">
          {homeCategories.map((category, index) => (
            <Link
              key={category.title}
              className="category-card home-category-card fade-up"
              to={category.to}
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <img src={withBase(category.image)} alt={category.title} loading="lazy" decoding="async" />
              <span className="category-label">{category.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="featured-wallets">
        <div className="section-header">
          <div>
            <p className="section-kicker">Featured Wallets</p>
            <h2>Featured Wallets</h2>
            <p className="muted">
              Premium leather wallets in PKR pricing for daily office, travel, and gifting use.
            </p>
          </div>
          <Link className="text-link" to="/wallets">
            View wallets
          </Link>
        </div>
        <div className="product-grid">
          {featuredWallets.map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              index={index}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              wishlisted={wishlistKeys.has(productKey(product))}
            />
          ))}
        </div>
      </section>

      <section className="section" id="featured-keychains">
        <div className="section-header">
          <div>
            <p className="section-kicker">Featured Keychains</p>
            <h2>Featured Keychains</h2>
            <p className="muted">
              Durable keychains with clean finishes that match your wallet and everyday carry.
            </p>
          </div>
          <Link className="text-link" to="/keychains">
            View keychains
          </Link>
        </div>
        <div className="product-grid compact-keychain-grid">
          {featuredKeychains.map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              index={index}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              wishlisted={wishlistKeys.has(productKey(product))}
            />
          ))}
        </div>
      </section>

      <section className="section" id="mixed-products">
        <div className="section-header">
          <div>
            <p className="section-kicker">Mixed Collection</p>
            <h2>Wallets + Keychains</h2>
          </div>
          <Link className="text-link" to="/wallets">
            Explore all
          </Link>
        </div>
        <div className="product-grid">
          {mixedProducts.map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              index={index}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              wishlisted={wishlistKeys.has(productKey(product))}
            />
          ))}
        </div>
      </section>

      <section className="section promo-section">
        <div className="promo-grid">
          {promoCards.map((promo, index) => (
            <article
              key={promo.id}
              className="promo-card fade-up"
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <img src={withBase(promo.image)} alt={promo.title} loading="lazy" decoding="async" />
              <div className="promo-overlay" />
              <div className="promo-content">
                <span className="promo-tag">{promo.tag}</span>
                <h3>{promo.title}</h3>
                <p>{promo.copy}</p>
                <Link className="text-link inverse" to={promo.to}>
                  Shop now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section story" id="story">
        <div className="story-media">
          <img src={withBase(catalog.story.image)} alt="Walkline story" loading="lazy" decoding="async" />
          <div className="story-overlay" />
          <div className="story-content">
            <p className="section-kicker">Walkline essentials</p>
            <h2>{catalog.story.title}</h2>
            <Link className="button ghost light" to="/about">
              Explore the brand
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="blog">
        <div className="section-header">
          <div>
            <p className="section-kicker">From The Blog</p>
            <h2>Latest Blog Posts</h2>
          </div>
          <Link className="text-link" to="/blog">
            View all posts
          </Link>
        </div>
        <div className="blog-grid home-blog-grid">
          {blogPosts.slice(0, 3).map((post, index) => (
            <article key={post.slug} className="blog-card fade-up" style={{ '--delay': `${index * 0.06}s` }}>
              <div className="blog-card-media">
                <img src={withBase(resolveBlogImage(post.slug))} alt={post.title} loading="lazy" decoding="async" />
              </div>
              <div className="blog-card-body">
                <p className="section-kicker">{post.publishedAt}</p>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link className="text-link" to={`/blog/${post.slug}`}>
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="section-header">
          <div>
            <p className="section-kicker">Customer Reviews</p>
            <h2>Customers are saying</h2>
          </div>
          <Link className="text-link" to="/reviews">
            Read all
          </Link>
        </div>
        <div className="testimonial-grid">
          {catalog.testimonials.map((review, index) => (
            <article
              key={review.name}
              className="testimonial-card fade-up"
              style={{ '--delay': `${index * 0.06}s` }}
            >
              <p className="testimonial-quote">"{review.quote}"</p>
              <div className="testimonial-author">
                <strong>{review.name}</strong>
                <span>{review.title}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="newsletter">
          <div>
            <p className="section-kicker">Stay in the know</p>
            <h2>{catalog.newsletter.title}</h2>
            <p className="muted">{catalog.newsletter.copy}</p>
          </div>
          <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Email address" required />
            <button className="button" type="submit">
              Notify me
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default HomePage
