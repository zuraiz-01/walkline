import { useEffect, useState } from 'react'
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import logoBlack from './assets/walkline-logo-black.jpeg'
import logoWhite from './assets/walkline-logo-white.jpeg'
import './App.css'

const withBase = (value) => {
  if (!value) {
    return value
  }
  if (/^https?:\/\//i.test(value)) {
    return value
  }
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${value.replace(/^\\//, '')}`
}

const fallbackCatalog = {
  brand: 'Walkline',
  announcement: [
    'Welcome to Walkline',
    'Wallets and keychains for everyday carry',
    'Free shipping over Rs. 10000.',
  ],
  nav: [
    { label: 'Wallets', to: '/collections/wallets' },
    { label: 'Keychains', to: '/collections/keychains' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Track Order', to: '/track-order' },
  ],
  hero: {
    kicker: 'Walkline Studio',
    title: 'Premium wallets and keychains for everyday carry.',
    description:
      'Full-grain leather, clean stitching, and durable hardware built for your daily essentials.',
    primaryCta: { label: 'Shop Wallets', to: '/collections/wallets' },
    secondaryCta: { label: 'Explore Keychains', to: '/collections/keychains' },
    highlights: ['Full-grain leather', 'Precision stitching', 'Everyday carry'],
    image: '/images/hero-wallet.jpg',
    tiles: [
      { tag: 'SAVE 10%', title: 'Travel Wallets', copy: 'Limited time offer.' },
      { tag: 'NEW DROP', title: 'Keychain Series', copy: 'Minimal hardware, bold finish.' },
    ],
  },
  categories: [
    {
      title: 'Leather Wallets',
      image: '/images/category-wallets.jpg',
      to: '/collections/wallets',
    },
    {
      title: 'Slim Card Holders',
      image: '/images/category-cardholders.jpg',
      to: '/collections/wallets',
    },
    {
      title: 'Travel Wallets',
      image: '/images/category-travel.jpg',
      to: '/collections/wallets',
    },
    {
      title: 'Keychains',
      image: '/images/category-keychains.jpg',
      to: '/collections/keychains',
    },
  ],
  products: [
    {
      name: 'Classic Leather Wallet - Black',
      price: 'Rs.2,450.00',
      compareAt: 'Rs.3,200.00',
      tag: 'Save 25%',
      image: '/images/products/wallet-classic.jpg',
      hoverImage: '/images/products/wallet-classic.jpg',
    },
    {
      name: 'Slim Card Holder - Tan',
      price: 'Rs.1,550.00',
      compareAt: 'Rs.2,100.00',
      tag: 'New',
      image: '/images/products/wallet-slim.jpg',
      hoverImage: '/images/products/wallet-slim.jpg',
    },
    {
      name: 'Bifold Wallet - Walnut',
      price: 'Rs.2,799.00',
      compareAt: 'Rs.3,800.00',
      tag: 'Best seller',
      image: '/images/products/wallet-bifold.jpg',
      hoverImage: '/images/products/wallet-bifold.jpg',
    },
    {
      name: 'Zip Coin Wallet - Espresso',
      price: 'Rs.1,350.00',
      compareAt: 'Rs.1,900.00',
      tag: 'Sale',
      image: '/images/products/wallet-zip.jpg',
      hoverImage: '/images/products/wallet-zip.jpg',
    },
    {
      name: 'Travel Wallet - Mocha',
      price: 'Rs.3,200.00',
      compareAt: 'Rs.4,200.00',
      tag: 'Trending',
      image: '/images/products/wallet-travel.jpg',
      hoverImage: '/images/products/wallet-travel.jpg',
    },
    {
      name: 'Minimalist Wallet - Grey',
      price: 'Rs.1,950.00',
      compareAt: 'Rs.2,600.00',
      tag: 'Restock',
      image: '/images/products/wallet-minimal.jpg',
      hoverImage: '/images/products/wallet-minimal.jpg',
    },
    {
      name: 'Braided Leather Keychain - Black',
      price: 'Rs.850.00',
      compareAt: 'Rs.1,200.00',
      tag: 'New',
      image: '/images/products/keychain-braided.jpg',
      hoverImage: '/images/products/keychain-braided.jpg',
    },
    {
      name: 'Metal Keychain Loop - Gunmetal',
      price: 'Rs.650.00',
      compareAt: 'Rs.900.00',
      tag: 'Sale',
      image: '/images/products/keychain-metal.jpg',
      hoverImage: '/images/products/keychain-metal.jpg',
    },
  ],
  promos: [
    {
      tag: 'SAVE 10%',
      title: 'Wallet Essentials',
      copy: 'Limited-time pricing on daily carry staples.',
      image: '/images/promo-wallet.jpg',
    },
    {
      tag: 'NEW IN',
      title: 'Keychain Atelier',
      copy: 'Fresh hardware finishes and minimal straps.',
      image: '/images/promo-keychain.jpg',
    },
    {
      tag: 'SIGNATURE',
      title: 'Everyday Carry',
      copy: 'Clean lines and premium leather texture.',
      image: '/images/promo-everyday.jpg',
    },
  ],
  trending: [
    {
      name: 'Travel Wallet - Mocha',
      price: 'Rs.3,200.00',
      compareAt: 'Rs.4,200.00',
      tag: 'Hot',
      image: '/images/products/wallet-travel.jpg',
      hoverImage: '/images/products/wallet-travel.jpg',
    },
    {
      name: 'Classic Leather Wallet - Black',
      price: 'Rs.2,450.00',
      compareAt: 'Rs.3,200.00',
      tag: 'Trending',
      image: '/images/products/wallet-classic.jpg',
      hoverImage: '/images/products/wallet-classic.jpg',
    },
    {
      name: 'Braided Leather Keychain - Black',
      price: 'Rs.850.00',
      compareAt: 'Rs.1,200.00',
      tag: 'Restock',
      image: '/images/products/keychain-braided.jpg',
      hoverImage: '/images/products/keychain-braided.jpg',
    },
    {
      name: 'Minimalist Wallet - Grey',
      price: 'Rs.1,950.00',
      compareAt: 'Rs.2,600.00',
      tag: 'Sale',
      image: '/images/products/wallet-minimal.jpg',
      hoverImage: '/images/products/wallet-minimal.jpg',
    },
  ],
  marquee: ['Leather Wallets', 'Keychains', 'Everyday Carry', 'Handcrafted'],
  testimonials: [
    {
      quote:
        'The leather feels premium and the stitching is super clean. Worth it.',
      name: 'Hania A.',
      title: 'Karachi',
    },
    {
      quote: 'Wallet feels solid and the finish looks sharp.',
      name: 'Saad R.',
      title: 'Lahore',
    },
    {
      quote: 'Love the keychain hardware and the smooth leather strap.',
      name: 'Maham I.',
      title: 'Islamabad',
    },
  ],
  story: {
    title:
      'Timeless design, premium leather, and smooth edges. Essentials you carry every day.',
    image: '/images/story-leather.jpg',
  },
  newsletter: {
    title: 'Get new wallet drops and keychain launches first.',
    copy: 'Join the Walkline list for releases, restocks, and offers.',
  },
  footer: {
    columns: [
      {
        title: 'Shop',
        links: [
          { label: 'Wallets', to: '/collections/wallets' },
          { label: 'Keychains', to: '/collections/keychains' },
          { label: 'Best Selling', to: '/' },
          { label: 'Trending', to: '/' },
        ],
      },
      {
        title: 'Help',
        links: [
          { label: 'Track Order', to: '/track-order' },
          { label: 'Shipping', to: '/contact' },
          { label: 'Returns', to: '/contact' },
          { label: 'Contact', to: '/contact' },
        ],
      },
      {
        title: 'About',
        links: [
          { label: 'About Us', to: '/about' },
          { label: 'Reviews', to: '/reviews' },
          { label: 'Care Guide', to: '/about' },
          { label: 'Careers', to: '/about' },
        ],
      },
      {
        title: 'Social',
        links: [
          { label: 'Instagram', to: '/contact' },
          { label: 'Facebook', to: '/contact' },
          { label: 'TikTok', to: '/contact' },
          { label: 'YouTube', to: '/contact' },
        ],
      },
    ],
  },
}

const collectionDetails = {
  wallets: {
    title: 'Wallets',
    description: 'Premium leather wallets built for daily essentials and travel.',
  },
  keychains: {
    title: 'Keychains',
    description: 'Minimalist keychains with durable hardware and clean lines.',
  },
}

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

const Header = ({ nav }) => (
  <header className="site-header">
    <div className="header-inner">
      <Link className="logo-link" to="/" aria-label="Walkline home">
        <img className="logo-image" src={logoBlack} alt="Walkline" />
      </Link>
      <nav className="nav-links" aria-label="Primary">
        {nav.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <button className="icon-button" type="button" aria-label="Search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M11 18a7 7 0 1 1 5.44-2.57l4.06 4.07-1.41 1.41-4.07-4.06A6.98 6.98 0 0 1 11 18Zm0-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="icon-button" type="button" aria-label="Account">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.87 0-7 2.02-7 4.5V20h14v-1.5c0-2.48-3.13-4.5-7-4.5Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="icon-button" type="button" aria-label="Cart">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 7h14l-1.5 9.5a2 2 0 0 1-2 1.5H9.5a2 2 0 0 1-2-1.5L6 7Zm2.2-3h7.6l1 2H7.2l1-2Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="menu-button" type="button">
          Menu
        </button>
      </div>
    </div>
  </header>
)

const Footer = ({ footer }) => (
  <footer className="site-footer" id="footer">
    <div className="footer-top">
      <div>
        <div className="logo footer-logo">
          <img className="logo-image" src={logoWhite} alt="Walkline" />
        </div>
        <p className="muted">
          Walkline delivers premium wallets and keychains built for everyday
          carry.
        </p>
      </div>
      <div className="footer-grid">
        {footer.columns.map((column) => (
          <div key={column.title}>
            <p className="footer-title">{column.title}</p>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="footer-bottom">
      <span>2025 Walkline. All rights reserved.</span>
      <span>Pakistan</span>
    </div>
  </footer>
)

const HomePage = ({ catalog }) => (
  <>
    <section className="hero">
      <div className="hero-content">
        <p className="kicker">{catalog.hero.kicker}</p>
        <h1>{catalog.hero.title}</h1>
        <p className="hero-description">{catalog.hero.description}</p>
        <div className="hero-actions">
          <Link className="button" to={catalog.hero.primaryCta.to}>
            {catalog.hero.primaryCta.label}
          </Link>
          <Link className="button ghost" to={catalog.hero.secondaryCta.to}>
            {catalog.hero.secondaryCta.label}
          </Link>
        </div>
        <div className="hero-highlights">
          {catalog.hero.highlights.map((item) => (
            <span key={item} className="hero-pill">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image">
          <img src={withBase(catalog.hero.image)} alt="Walkline featured" />
        </div>
        <div className="hero-tiles">
          {catalog.hero.tiles.map((tile, index) => (
            <div
              key={tile.title}
              className="hero-tile fade-up"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <span className="hero-tile-tag">{tile.tag}</span>
              <p className="hero-tile-title">{tile.title}</p>
              <span className="hero-tile-copy">{tile.copy}</span>
            </div>
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
        <Link className="text-link" to="/collections/wallets">
          View all
        </Link>
      </div>
      <div className="category-grid">
        {catalog.categories.map((category, index) => (
          <Link
            key={category.title}
            className="category-card fade-up"
            to={category.to}
            style={{ '--delay': `${index * 0.08}s` }}
          >
            <img src={withBase(category.image)} alt={category.title} />
            <span className="category-label">{category.title}</span>
          </Link>
        ))}
      </div>
    </section>

    <section className="section" id="best-selling">
      <div className="section-header">
        <div>
          <p className="section-kicker">Best Selling</p>
          <h2>Best Selling</h2>
        </div>
        <Link className="text-link" to="/collections/wallets">
          See collection
        </Link>
      </div>
      <div className="product-grid">
        {catalog.products.map((product, index) => (
          <article
            key={product.name}
            className="product-card fade-up"
            style={{ '--delay': `${index * 0.05}s` }}
          >
            <div className="product-media">
              <img
                className="primary"
                src={withBase(product.image)}
                alt={product.name}
              />
              <img
                className="secondary"
                src={withBase(product.hoverImage)}
                alt={`${product.name} alternate`}
              />
              <span className="badge">{product.tag}</span>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="product-price">
                <span className="current">{product.price}</span>
                <span className="compare">{product.compareAt}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="section promo-section">
      <div className="promo-grid">
        {catalog.promos.map((promo, index) => (
          <article
            key={promo.title}
            className="promo-card fade-up"
            style={{ '--delay': `${index * 0.08}s` }}
          >
            <img src={withBase(promo.image)} alt={promo.title} />
            <div className="promo-overlay" />
            <div className="promo-content">
              <span className="promo-tag">{promo.tag}</span>
              <h3>{promo.title}</h3>
              <p>{promo.copy}</p>
              <Link className="text-link inverse" to="/collections/wallets">
                Shop now
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="section" id="trending">
      <div className="section-header">
        <div>
          <p className="section-kicker">Trending</p>
          <h2>Trending Essentials</h2>
        </div>
        <Link className="text-link" to="/collections/wallets">
          View all
        </Link>
      </div>
      <div className="product-grid scroll-grid">
        {catalog.trending.map((product, index) => (
          <article
            key={product.name}
            className="product-card fade-up"
            style={{ '--delay': `${index * 0.05}s` }}
          >
            <div className="product-media">
              <img
                className="primary"
                src={withBase(product.image)}
                alt={product.name}
              />
              <img
                className="secondary"
                src={withBase(product.hoverImage)}
                alt={`${product.name} alternate`}
              />
              <span className="badge">{product.tag}</span>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="product-price">
                <span className="current">{product.price}</span>
                <span className="compare">{product.compareAt}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="marquee-section">
      <div className="marquee-track">
        {[...catalog.marquee, ...catalog.marquee].map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </section>

    <section className="section story" id="story">
      <div className="story-media">
        <img src={withBase(catalog.story.image)} alt="Walkline story" />
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
        <form
          className="newsletter-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <input type="email" placeholder="Email address" required />
          <button className="button" type="submit">
            Notify me
          </button>
        </form>
      </div>
    </section>
  </>
)

const CollectionPage = ({ catalog }) => {
  const { slug } = useParams()
  const details = collectionDetails[slug] || {
    title: 'Collection',
    description:
      'Signature leather goods and accessories curated by Walkline.',
  }

  return (
    <>
      <section className="page-hero">
        <div>
          <p className="kicker">Walkline {details.title}</p>
          <h1>{details.title}</h1>
          <p className="hero-description">{details.description}</p>
          <Link className="button" to="/contact">
            Ask about materials
          </Link>
        </div>
        <div className="page-hero-card">
          <span className="pill">Signature drop</span>
          <h3>Drop updates</h3>
          <p>Fresh colors and leather finishes every month.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-header">
          <div>
            <p className="section-kicker">Featured</p>
            <h2>Best Picks</h2>
          </div>
          <Link className="text-link" to="/contact">
            Need help?
          </Link>
        </div>
        <div className="product-grid">
          {catalog.products.map((product, index) => (
            <article
              key={product.name}
              className="product-card fade-up"
              style={{ '--delay': `${index * 0.05}s` }}
            >
              <div className="product-media">
                <img
                  className="primary"
                  src={withBase(product.image)}
                  alt={product.name}
                />
                <img
                  className="secondary"
                  src={withBase(product.hoverImage)}
                  alt={`${product.name} alternate`}
                />
                <span className="badge">{product.tag}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-price">
                  <span className="current">{product.price}</span>
                  <span className="compare">{product.compareAt}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

const AboutPage = () => (
  <>
    <section className="page-hero">
      <div>
        <p className="kicker">About Walkline</p>
        <h1>Crafted leather goods for daily essentials.</h1>
        <p className="hero-description">
          Walkline blends premium leather with clean, minimal construction for
          everyday carry pieces.
        </p>
        <Link className="button" to="/collections/wallets">
          Shop the collection
        </Link>
      </div>
      <div className="page-hero-card">
        <span className="pill">Since 2024</span>
        <h3>Walkline DNA</h3>
        <p>Minimal design, durable hardware, and timeless finishes.</p>
      </div>
    </section>
    <section className="section">
      <div className="info-grid">
        <div className="info-card">
          <h3>Premium Leather</h3>
          <p>Full-grain leather with a smooth, natural finish.</p>
        </div>
        <div className="info-card">
          <h3>Precision Stitching</h3>
          <p>Clean edges and reinforced seams built for daily use.</p>
        </div>
        <div className="info-card">
          <h3>Locally Crafted</h3>
          <p>Designed and finished in Pakistan with attention to detail.</p>
        </div>
      </div>
    </section>
  </>
)

const ReviewsPage = ({ catalog }) => (
  <>
    <section className="page-hero">
      <div>
        <p className="kicker">Reviews</p>
        <h1>Customers speak for Walkline.</h1>
        <p className="hero-description">
          Real feedback from customers who carry Walkline every day.
        </p>
        <Link className="button" to="/contact">
          Share your review
        </Link>
      </div>
      <div className="page-hero-card">
        <span className="pill">4.9 / 5</span>
        <h3>Average rating</h3>
        <p>Based on verified customer feedback and repeat orders.</p>
      </div>
    </section>
    <section className="section">
      <div className="testimonial-grid">
        {catalog.testimonials.map((review) => (
          <article key={review.name} className="testimonial-card">
            <p className="testimonial-quote">"{review.quote}"</p>
            <div className="testimonial-author">
              <strong>{review.name}</strong>
              <span>{review.title}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
)

const ContactPage = () => (
  <>
    <section className="page-hero">
      <div>
        <p className="kicker">Contact</p>
        <h1>Let’s talk Walkline.</h1>
        <p className="hero-description">
          Reach out for materials, custom orders, or collaborations.
        </p>
        <Link className="button" to="/track-order">
          Track an order
        </Link>
      </div>
      <div className="page-hero-card">
        <span className="pill">Support</span>
        <h3>help@walkline.com</h3>
        <p>Reply within 24 hours on business days.</p>
      </div>
    </section>
    <section className="section">
      <div className="info-grid">
        <div className="info-card">
          <h3>Studio</h3>
          <p>Gulberg, Lahore, Pakistan</p>
        </div>
        <div className="info-card">
          <h3>Phone</h3>
          <p>+92 300 0000000</p>
        </div>
        <div className="info-card">
          <h3>Hours</h3>
          <p>Mon - Sat, 10:00 AM - 7:00 PM</p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="form-card">
        <h2>Send a message</h2>
        <p className="helper-text">
          We will get back to you with order, materials, or collaboration
          details.
        </p>
        <form className="form-grid" onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Email address" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required />
          <button className="button" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  </>
)

const TrackOrderPage = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('Your order is being prepared. Tracking details will be shared soon.')
  }

  return (
    <>
      <section className="page-hero">
        <div>
          <p className="kicker">Track Order</p>
          <h1>Track your Walkline shipment.</h1>
          <p className="hero-description">
            Enter your order number and email to see the latest update.
          </p>
        </div>
        <div className="page-hero-card">
          <span className="pill">Need help?</span>
          <h3>support@walkline.com</h3>
          <p>We respond within 24 hours for all tracking queries.</p>
        </div>
      </section>
      <section className="section">
        <div className="form-card">
          <h2>Order lookup</h2>
          <form className="form-grid" onSubmit={handleSubmit}>
            <input type="text" placeholder="Order number" required />
            <input type="email" placeholder="Email address" required />
            <button className="button" type="submit">
              Track order
            </button>
          </form>
          {status ? <p className="status-card">{status}</p> : null}
        </div>
      </section>
    </>
  )
}

const NotFoundPage = () => (
  <section className="page-hero">
    <div>
      <p className="kicker">404</p>
      <h1>Page not found.</h1>
      <p className="hero-description">
        The page you are looking for does not exist. Try the wallets page.
      </p>
      <Link className="button" to="/collections/wallets">
        Go to wallets
      </Link>
    </div>
    <div className="page-hero-card">
      <span className="pill">Walkline</span>
      <h3>Everyday carry</h3>
      <p>Check the latest drops in the shop.</p>
    </div>
  </section>
)

function App() {
  const [catalog, setCatalog] = useState(fallbackCatalog)

  useEffect(() => {
    let cancelled = false

    fetch('/api/catalog')
      .then((response) => {
        if (!response.ok) {
          return null
        }
        return response.json()
      })
      .then((data) => {
        if (!cancelled && data) {
          setCatalog(data)
        }
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="page">
      <ScrollToTop />
      <div className="announcement">
        <div className="announcement-track">
          {[...catalog.announcement, ...catalog.announcement].map((item, index) => (
            <div className="announcement-item" key={`${item}-${index}`}>
              <span>{item}</span>
              <span className="announcement-dot" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      <Header nav={catalog.nav} />

      <main className="page-main">
        <Routes>
          <Route path="/" element={<HomePage catalog={catalog} />} />
          <Route
            path="/collections/:slug"
            element={<CollectionPage catalog={catalog} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage catalog={catalog} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer footer={catalog.footer} />
    </div>
  )
}

export default App
