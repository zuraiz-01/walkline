import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { buildFaqSchema } from '../../seoData'
import { productKey } from '../../utils/shop'
import { ProductCard } from '../common'
import SeoBreadcrumbs from './SeoBreadcrumbs'
import SeoHead from './SeoHead'

const SeoCategoryPage = ({
  page,
  products = [],
  sectionTitle = 'Featured Products',
  sectionLink = null,
  bottomProducts = [],
  bottomSectionTitle = 'More to Explore',
  bottomSectionLink = null,
  onAddToCart = () => {},
  onToggleWishlist = () => {},
  wishlistKeys = new Set(),
}) => {
  const faqSchema = useMemo(() => buildFaqSchema(page.faqs), [page])

  return (
    <>
      <SeoHead
        title={page.metaTitle}
        description={page.metaDescription}
        structuredData={faqSchema}
      />

      <section className="section seo-shell">
        <p className="kicker">Walkline Pakistan</p>
        <h1>{page.h1}</h1>
        <p className="hero-description seo-intro">{page.intro}</p>
        <SeoBreadcrumbs items={page.breadcrumb} />
      </section>

      {products.length ? (
        <section className="section">
          <div className="section-header">
            <div>
              <p className="section-kicker">Shop Now</p>
              <h2>{sectionTitle}</h2>
            </div>
            {sectionLink ? (
              <Link className="text-link" to={sectionLink}>
                View all
              </Link>
            ) : null}
          </div>
          <div className="product-grid seo-grid-products">
            {products.map((product, index) => (
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
        </section>
      ) : null}

      <section className="section seo-content-section">
        {page.sections.map((section) => (
          <article key={section.h2} className="seo-section-card">
            <h2>{section.h2}</h2>
            {(section.subsections || []).map((sub) => (
              <div key={sub.h3} className="seo-subsection">
                <h3>{sub.h3}</h3>
                <p>{sub.text}</p>
              </div>
            ))}
            {(section.paragraphs || []).map((paragraph, index) => (
              <p key={`${section.h2}-${index}`}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>

      <section className="section seo-grid-section">
        <div className="seo-grid">
          <article className="seo-card">
            <h2>Explore Related Collections</h2>
            <ul className="seo-list">
              {page.internalLinks.map((item) => (
                <li key={item.anchor}>
                  <Link to={item.to}>{item.anchor}</Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="seo-card">
            <h2>Popular Search Terms</h2>
            <ul className="seo-chip-list">
              {page.lsiKeywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section seo-faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="seo-faq-grid">
          {page.faqs.map((faq) => (
            <article key={faq.question} className="seo-faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {bottomProducts.length ? (
        <section className="section">
          <div className="section-header">
            <div>
              <p className="section-kicker">You May Also Like</p>
              <h2>{bottomSectionTitle}</h2>
            </div>
            {bottomSectionLink ? (
              <Link className="text-link" to={bottomSectionLink}>
                View all
              </Link>
            ) : null}
          </div>
          <div className="product-grid seo-grid-products">
            {bottomProducts.map((product, index) => (
              <ProductCard
                key={`bottom-${productKey(product)}`}
                product={product}
                index={index}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlisted={wishlistKeys.has(productKey(product))}
              />
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}

export default SeoCategoryPage
