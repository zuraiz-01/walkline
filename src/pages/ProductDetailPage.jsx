import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductCard } from '../components/common'
import { SeoHead } from '../components/seo'
import { getProductGallery } from '../utils/productImages'
import { productKey, slugify, withBase } from '../utils/shop'

const ProductDetailPage = ({ catalog, onAddToCart, onToggleWishlist, wishlistKeys }) => {
  const { slug } = useParams()

  const allProducts = useMemo(() => {
    const map = new Map()
    const pool = [...(catalog?.products ?? []), ...(catalog?.trending ?? [])]
    pool.forEach((product) => {
      const key = productKey(product)
      if (key && !map.has(key)) {
        map.set(key, product)
      }
    })
    return Array.from(map.values())
  }, [catalog])

  const product = useMemo(
    () => allProducts.find((item) => slugify(item.name) === slug) ?? null,
    [allProducts, slug],
  )

  const gallery = useMemo(() => getProductGallery(product), [product])
  const galleryImages = useMemo(
    () => (gallery.length ? gallery : [product?.image].filter(Boolean)),
    [gallery, product?.image],
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const safeIndex = galleryImages.length ? Math.min(activeIndex, galleryImages.length - 1) : 0
  const activeImage = galleryImages[safeIndex] || product?.image || ''

  const relatedProducts = useMemo(() => {
    if (!product) {
      return allProducts.slice(0, 3)
    }
    return allProducts.filter((item) => productKey(item) !== productKey(product)).slice(0, 3)
  }, [allProducts, product])

  if (!product) {
    return (
      <section className="section page-section">
        <SeoHead
          title="Product Not Found | Walkline Pakistan"
          description="The product you requested is not available right now. Explore more wallets and keychains by Walkline."
        />
        <div className="page-hero-card">
          <h3>Product not found</h3>
          <p className="muted">This item might be removed or renamed. Browse our latest picks.</p>
          <Link className="button" to="/">
            Back to home
          </Link>
        </div>
      </section>
    )
  }

  const isKeychain = /keychain/i.test(product.name)
  const seoDetailText = isKeychain
    ? 'If you compare keychain design options, custom keychain Pakistan styles, and durable everyday hooks keychain builds, this piece balances premium look with practical grip and ring strength for daily carry.'
    : 'If you compare men wallets, mens wallets, wallets for men Pakistan collections, and leather wallets for men categories, this piece gives the right balance of premium finishing and practical long-term use.'

  const whyNeedTitle = isKeychain ? 'Why you need this keychain' : 'Why you need this wallet'
  const conversionTitle = isKeychain
    ? 'Make your everyday carry look complete today.'
    : 'Upgrade your pocket setup with confidence today.'
  const conversionCopy = isKeychain
    ? 'From car keys to office keys, this piece adds grip, style, and reliability. It is a practical buy that also feels gift-worthy in hand.'
    : 'From office commute to travel days, this wallet keeps essentials organized while maintaining a premium look. It is built for daily use, not shelf display.'
  const conversionPoints = isKeychain
    ? [
      'Strong ring hold and hardware finish for daily use.',
      'Compact build that fits jeans, bags, and car keys comfortably.',
      'A clean gifting option with premium look at affordable PKR pricing.',
    ]
    : [
      'Clean compartment layout for cards, cash, and daily receipts.',
      'Premium finishing that ages well with everyday handling.',
      'Great value for buyers who want branded feel without overpaying.',
    ]

  return (
    <>
      <SeoHead
        title={`${product.name} | Walkline Pakistan`}
        description={`Shop ${product.name} at ${product.price} in Pakistan. Premium finish, quality build, and affordable everyday carry from Walkline.`}
      />

      <section className="section page-section product-detail-section">
        <div className="product-detail-layout">
          <div className="product-detail-gallery">
            <div className="product-detail-preview">
              <figure className="product-detail-slide">
                <img
                  src={withBase(activeImage)}
                  alt={`${product.name} view ${safeIndex + 1}`}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </figure>
            </div>

            <div className="product-detail-thumbs" aria-label="Product image thumbnails">
              {galleryImages.map((src, index) => (
                <button
                  type="button"
                  key={`thumb-${src}-${index}`}
                  className={`product-detail-thumb ${safeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                >
                  <img src={withBase(src)} alt={`${product.name} thumbnail ${index + 1}`} loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
          </div>

          <div className="product-detail-content">
            <p className="section-kicker">Walkline Product</p>
            <h1 className="product-detail-title">{product.name}</h1>
            <div className="product-price product-detail-price">
              <span className="current">{product.price}</span>
              <span className="compare">{product.compareAt}</span>
            </div>
            <p className="muted product-detail-copy">
              Designed for daily use in Pakistan, this piece balances premium material quality with
              value pricing. Clean finish, practical format, and long-lasting hardware.
            </p>
            <ul className="product-detail-points">
              <li>4-angle product images with quick tap preview</li>
              <li>Premium craftsmanship with practical everyday carry layout</li>
              <li>Cash on delivery available nationwide in Pakistan</li>
            </ul>
            <div className="product-detail-actions">
              <button className="button" type="button" onClick={() => onAddToCart(product)}>
                Add to cart
              </button>
              <button className="button ghost" type="button" onClick={() => onToggleWishlist(product)}>
                {wishlistKeys.has(productKey(product)) ? 'Remove wishlist' : 'Save to wishlist'}
              </button>
            </div>
            <Link className="text-link" to="/contact">
              Need custom order details?
            </Link>
          </div>
        </div>
      </section>

      <section className="section product-detail-why">
        <div className="seo-card">
          <h2>{whyNeedTitle}</h2>
          <p>{seoDetailText}</p>
          <p>
            For Pakistan buyers who want premium but affordable everyday carry, this product helps
            with clean organization, durable finish, and strong long-term value. It is ideal for
            daily office use, travel use, and gift-ready packaging.
          </p>
        </div>
      </section>

      <section className="section product-detail-conversion">
        <div className="newsletter">
          <div>
            <p className="section-kicker">Ready to buy</p>
            <h2>{conversionTitle}</h2>
            <p className="muted">{conversionCopy}</p>
            <div className="product-detail-actions">
              <button className="button" type="button" onClick={() => onAddToCart(product)}>
                Add to cart now
              </button>
              <Link className="button ghost" to="/checkout">
                Go to checkout
              </Link>
            </div>
          </div>
          <article className="info-card">
            <h3>Why customers buy this quickly</h3>
            <ul className="product-detail-points">
              {conversionPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="muted">
              Cash on delivery available in Pakistan with smooth order support from Walkline.
            </p>
          </article>
        </div>
      </section>

      <section className="section product-detail-detailing">
        <div className="product-detail-info-grid">
          <article className="info-card">
            <h3>Material and Build</h3>
            <p>
              Built with premium finishing and reliable hardware, this item is made for regular use
              in Pakistan weather and daily handling.
            </p>
          </article>
          <article className="info-card">
            <h3>SEO-tailored Buying Detail</h3>
            <p>
              {isKeychain
                ? 'This matches users searching for design keychain options, metal keychain quality, leather keychain looks, and custom keychain Pakistan gift styles.'
                : 'This matches users searching for leather wallets, men wallets, wallets for women, and trusted brands of wallets for men with premium finishing.'}
            </p>
          </article>
          <article className="info-card">
            <h3>Who Should Buy</h3>
            <p>
              Buyers who want a clean premium look, reliable daily function, and affordable PKR
              pricing without compromising quality.
            </p>
          </article>
        </div>
      </section>

      {relatedProducts.length ? (
        <section className="section product-detail-related">
          <div className="section-header">
            <div>
              <p className="section-kicker">More Products</p>
              <h2>Recommended for you</h2>
            </div>
          </div>
          <div className="product-grid">
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={productKey(item)}
                product={item}
                index={index}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlisted={wishlistKeys.has(productKey(item))}
              />
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}

export default ProductDetailPage
