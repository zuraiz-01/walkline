import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import HeartIcon from './HeartIcon'
import { toProductPath, withBase } from '../../utils/shop'

const isKeychainProduct = (product) => /keychain/i.test(product?.name || '')

const ProductCard = ({
  product,
  index = 0,
  onAddToCart = () => {},
  onToggleWishlist = () => {},
  wishlisted = false,
  variant = 'auto',
}) => {
  const [isHoveringMedia, setIsHoveringMedia] = useState(false)
  const canSwapImage = Boolean(product?.hoverImage && product?.hoverImage !== product?.image)
  const cardVariant = variant === 'auto'
    ? (isKeychainProduct(product) ? 'compact' : 'standard')
    : variant

  const imageSrc = isHoveringMedia && canSwapImage ? product.hoverImage : product.image

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
          onMouseEnter={() => setIsHoveringMedia(true)}
          onMouseLeave={() => setIsHoveringMedia(false)}
          onFocus={() => setIsHoveringMedia(true)}
          onBlur={() => setIsHoveringMedia(false)}
        >
          {imageSrc ? (
            <img
              className="product-media-img"
              src={withBase(imageSrc)}
              alt={product?.name || 'Product image'}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
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
