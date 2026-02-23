import { ProductCard } from '../components/common'
import { SeoHead } from '../components/seo'
import { formatRs, parseRs, productKey, withBase } from '../utils/shop'

const CartPage = ({
  cartItems,
  showcaseProducts,
  onAddToCart,
  onToggleWishlist,
  wishlistKeys,
  onSetQuantity,
  onCloseDrawer,
  onCheckout,
}) => (
  <section className="section page-section">
    <SeoHead
      title="Your Cart | Walkline"
      description="Review your selected Walkline wallets and keychains before checkout."
    />

    <div className="section-header">
      <div>
        <p className="section-kicker">Cart</p>
        <h2>Your cart</h2>
      </div>
    </div>

    {cartItems.length ? (
      <div className="checkout-layout">
        <div className="checkout-main">
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
                        onClick={() => onSetQuantity(key, quantity - 1)}
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
                        onClick={() => onSetQuantity(key, quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button type="button" className="text-link" onClick={() => onSetQuantity(key, 0)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="checkout-summary">
          <div className="summary-card">
            <h3>Order summary</h3>
            <div className="summary-row">
              <span className="muted">Items</span>
              <strong>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</strong>
            </div>
            <div className="summary-row">
              <span className="muted">Subtotal</span>
              <strong>
                {formatRs(
                  cartItems.reduce(
                    (sum, item) => sum + parseRs(item.product?.price) * item.quantity,
                    0,
                  ),
                )}
              </strong>
            </div>
            <p className="muted summary-note">Shipping and discounts calculated at checkout.</p>
            <div className="summary-actions">
              <button className="button" type="button" onClick={onCheckout}>
                Checkout
              </button>
              <button className="button ghost" type="button" onClick={onCloseDrawer}>
                Continue shopping
              </button>
            </div>
          </div>
        </aside>
      </div>
    ) : (
      <div className="page-hero-card">
        <h3>Cart is empty</h3>
        <p className="muted">Add something first, then come back to checkout.</p>
        <button className="button" type="button" onClick={onCloseDrawer}>
          Shop products
        </button>
      </div>
    )}

    {showcaseProducts?.length ? (
      <div className="checkout-recommend-section">
        <div className="section-header">
          <div>
            <p className="section-kicker">Explore More</p>
            <h2>Recommended Products</h2>
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
      </div>
    ) : null}
  </section>
)

export default CartPage



