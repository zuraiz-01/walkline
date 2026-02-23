import { useMemo, useState } from 'react'
import { ProductCard } from '../components/common'
import { SeoHead } from '../components/seo'
import { formatRs, parseRs, productKey, withBase } from '../utils/shop'

const CheckoutPage = ({
  cartItems,
  onPlaceOrder,
  recommendedProducts,
  onAddToCart,
  onToggleWishlist,
  wishlistKeys,
}) => {
  const [status, setStatus] = useState('')

  const subtotal = useMemo(
    () =>
      cartItems.reduce((sum, item) => sum + parseRs(item.product?.price) * item.quantity, 0),
    [cartItems],
  )

  const itemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  return (
    <section className="section page-section">
      <SeoHead
        title="Checkout | Walkline Pakistan"
        description="Complete your Walkline order for wallets and keychains with secure checkout details."
      />

      <div className="section-header">
        <div>
          <p className="section-kicker">Checkout</p>
          <h2>Checkout</h2>
        </div>
      </div>

      <div className="checkout-layout">
        <div className="checkout-main">
          <div className="form-card">
            <h3>Delivery details</h3>
            <form
              className="checkout-form"
              onSubmit={(event) => {
                event.preventDefault()
                if (!cartItems.length) {
                  setStatus('Cart is empty.')
                  return
                }
                setStatus('')
                const data = new FormData(event.currentTarget)
                onPlaceOrder({
                  name: data.get('name')?.toString() ?? '',
                  phone: data.get('phone')?.toString() ?? '',
                  address: data.get('address')?.toString() ?? '',
                  city: data.get('city')?.toString() ?? '',
                  payment: data.get('payment')?.toString() ?? 'cod',
                })
              }}
            >
              <div className="field-grid">
                <label className="field">
                  <span>Full name</span>
                  <input name="name" type="text" required />
                </label>
                <label className="field">
                  <span>Phone</span>
                  <input name="phone" type="tel" required />
                </label>
              </div>
              <label className="field">
                <span>Address</span>
                <input name="address" type="text" required />
              </label>
              <label className="field">
                <span>City</span>
                <input name="city" type="text" required />
              </label>
              <label className="field">
                <span>Payment</span>
                <select name="payment" defaultValue="cod">
                  <option value="cod">Cash on delivery</option>
                </select>
              </label>
              <button className="button" type="submit">
                Place order
              </button>
              {status ? <p className="status-card">{status}</p> : null}
            </form>
          </div>
        </div>

        <aside className="checkout-summary">
          <div className="summary-card">
            <h3>Order summary</h3>
            {cartItems.length ? (
              <div className="checkout-items-list">
                {cartItems.map(({ key, name, quantity, product }) => (
                  <div className="checkout-item" key={key}>
                    <div className="checkout-item-media">
                      {product?.image ? (
                        <img src={withBase(product.image)} alt={name} loading="lazy" decoding="async" />
                      ) : (
                        <div className="drawer-item-placeholder" aria-hidden="true" />
                      )}
                    </div>
                    <div className="checkout-item-info">
                      <strong>{name}</strong>
                      <span className="muted">Qty: {quantity}</span>
                    </div>
                    <strong>{product?.price ?? 'N/A'}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p className="muted">No items in cart.</p>
            )}
            <div className="summary-row">
              <span className="muted">Items</span>
              <strong>{itemCount}</strong>
            </div>
            <div className="summary-row">
              <span className="muted">Subtotal</span>
              <strong>{formatRs(subtotal)}</strong>
            </div>
            <p className="muted summary-note">Your order details are saved after placement.</p>
          </div>
        </aside>
      </div>

      {recommendedProducts?.length ? (
        <div className="checkout-recommend-section">
          <div className="section-header">
            <div>
              <p className="section-kicker">You May Also Like</p>
              <h2>Recommended Products</h2>
            </div>
          </div>
          <div className="product-grid">
            {recommendedProducts.map((product, index) => (
              <ProductCard
                key={productKey(product)}
                product={product}
                index={index}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlisted={wishlistKeys.has(productKey(product))}
              />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default CheckoutPage


