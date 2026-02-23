import { ProductCard } from '../components/common'
import { SeoHead } from '../components/seo'
import { productKey, withBase } from '../utils/shop'

const WishlistPage = ({
  wishlist,
  productIndex,
  showcaseProducts,
  onAddToCart,
  onToggleWishlist,
  wishlistKeys,
  onRemove,
  onCloseDrawer,
}) => (
  <section className="section page-section">
    <SeoHead
      title="Your Wishlist | Walkline"
      description="Saved Walkline wallets and keychains in your wishlist."
    />

    <div className="section-header">
      <div>
        <p className="section-kicker">Wishlist</p>
        <h2>Your wishlist</h2>
      </div>
    </div>

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
                    onClick={() => product && onAddToCart(product)}
                    disabled={!product}
                  >
                    Add to cart
                  </button>
                  <button type="button" className="text-link" onClick={() => onRemove(name)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    ) : (
      <div className="page-hero-card">
        <h3>Wishlist is empty</h3>
        <p className="muted">Tap the heart on any product to save it.</p>
        <button className="button" type="button" onClick={onCloseDrawer}>
          Browse products
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

export default WishlistPage




