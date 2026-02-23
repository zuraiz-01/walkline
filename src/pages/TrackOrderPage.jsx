import { useState } from 'react'
import { ProductCard } from '../components/common'
import { SeoHead } from '../components/seo'
import { productKey } from '../utils/shop'

const TrackOrderPage = ({ showcaseProducts, onAddToCart, onToggleWishlist, wishlistKeys }) => {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('Your order is being prepared. Tracking details will be shared soon.')
  }

  return (
    <>
      <SeoHead
        title="Track Order | Walkline Pakistan"
        description="Track your Walkline order status for wallet and keychain deliveries across Pakistan."
      />

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

      {showcaseProducts?.length ? (
        <section className="section checkout-recommend-section">
          <div className="section-header">
            <div>
              <p className="section-kicker">Want Something To Order?</p>
              <h2>Shop Popular Picks</h2>
            </div>
          </div>
          <div className="product-grid">
            {showcaseProducts.map((product, index) => (
              <ProductCard
                key={productKey(product)}
                product={product}
                index={index}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlisted={Boolean(wishlistKeys?.has?.(productKey(product)))}
              />
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}

export default TrackOrderPage

