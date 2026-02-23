import { memo } from 'react'
import { Link } from 'react-router-dom'
import HeartIcon from './HeartIcon'
import { toProductPath, withBase } from '../../utils/shop'
import { getProductGallery } from '../../utils/productImages'

const isKeychainProduct = (product) => /keychain/i.test(product?.name || '')

const ProductCard = ({
  product,
  index = 0,
  onAddToCart = () => {},
  onToggleWishlist = () => {},
  wishlisted = false,
  variant = 'auto',
}) => {
  const cardVariant = variant === 'auto'
    ? (isKeychainProduct(product) ? 'compact' : 'standard')
    : variant
  const gallery = getProductGallery(product)
  const primaryImage = gallery[0] ?? product?.image ?? ''
  const secondaryImage = gallery[1] ?? product?.hoverImage ?? ''
  const showSecondary = Boolean(secondaryImage && secondaryImage !== primaryImage)

  return (
    <article
      className={`product-card product-card--${cardVariant} fade-up`}
      style={{ '--delay': `${index * 0.05}s` }}
    >
      <div className="product-media">
        <Link
          className="product-media-link"
          to={toProductPath(product)}
          aria-label={product?.name || 'Product'}
        >
          {primaryImage ? (
            <>
              <img
                className="product-media-img primary"
                src={withBase(primaryImage)}
                alt={product?.name || 'Product image'}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'low'}
              />
              {showSecondary ? (
                <img
                  className="product-media-img secondary"
                  src={withBase(secondaryImage)}
                  alt={`${product?.name || 'Product'} alternate view`}
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
              ) : null}
            </>
          ) : (
            <div className="product-media-placeholder" aria-hidden="true" />
          )}
        </Link>
        {product?.tag ? <span className="badge">{product.tag}</span> : null}
        <button
          className={`wishlist-button ${wishlisted ? 'active' : ''}`}
          type="button"
          onClick={() => onToggleWishlist(product)}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <HeartIcon filled={wishlisted} />
        </button>
      </div>

      <div className="product-info">
        <p className="product-kind">{isKeychainProduct(product) ? 'Keychain' : 'Wallet'}</p>
        <h3>
          <Link className="product-title-link" to={toProductPath(product)}>
            {product?.name}
          </Link>
        </h3>
        <div className="product-price">
          <span className="current">{product?.price}</span>
          {product?.compareAt ? <span className="compare">{product.compareAt}</span> : null}
        </div>

        <div className="product-actions">
          <button className="button small" type="button" onClick={() => onAddToCart(product)}>
            Add to cart
          </button>
          <Link className="text-link product-details-link" to={toProductPath(product)}>
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default memo(ProductCard)
