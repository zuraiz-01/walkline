import { Link, useParams } from 'react-router-dom'
import { ProductCard } from '../components/common'
import { SeoHead } from '../components/seo'
import { collectionDetails } from '../data/collections'
import { productKey } from '../utils/shop'

const CollectionPage = ({ catalog, onAddToCart, onToggleWishlist, wishlistKeys }) => {
  const { slug } = useParams()
  const details = collectionDetails[slug] || {
    title: 'Collection',
    description:
      'Signature leather goods and accessories curated by Walkline.',
  }

  return (
    <>
      <SeoHead
        title={`${details.title} in Pakistan | Walkline`}
        description={details.description}
      />

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
    </>
  )
}

export default CollectionPage

