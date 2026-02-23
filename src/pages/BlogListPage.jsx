import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { SeoHead } from '../components/seo'
import { blogPosts } from '../data/blogPosts'
import { getProductGallery, productImagePool } from '../utils/productImages'
import { productKey, toProductPath, withBase } from '../utils/shop'

const resolveBlogImage = (slug) => {
  if (slug.includes('keychain')) {
    return productImagePool.keychainBrown
  }
  if (slug.includes('crypto')) {
    return productImagePool.walletBlue
  }
  if (slug.includes('urdu')) {
    return productImagePool.walletBlack
  }
  return productImagePool.walletCroc
}

const isKeychainProduct = (product) => /keychain/i.test(product?.name || '')
const isKeychainPost = (post) => /keychain|resin|holder/i.test(`${post?.slug || ''} ${post?.title || ''}`)
const uniqueValues = (items) => Array.from(new Set(items.filter(Boolean)))

const BlogListPage = ({ catalog = { products: [], trending: [] } }) => {
  const allProducts = useMemo(() => {
    const source = [...(catalog.products ?? []), ...(catalog.trending ?? [])]
    const map = new Map()
    source.forEach((product) => {
      const key = productKey(product)
      if (key && !map.has(key)) {
        map.set(key, product)
      }
    })
    return Array.from(map.values())
  }, [catalog.products, catalog.trending])

  const walletProducts = useMemo(
    () => allProducts.filter((product) => !isKeychainProduct(product)),
    [allProducts],
  )

  const keychainProducts = useMemo(
    () => allProducts.filter((product) => isKeychainProduct(product)),
    [allProducts],
  )

  const walletGallery = useMemo(
    () => uniqueValues(walletProducts.flatMap((product) => getProductGallery(product))),
    [walletProducts],
  )

  const keychainGallery = useMemo(
    () => uniqueValues(keychainProducts.flatMap((product) => getProductGallery(product))),
    [keychainProducts],
  )

  const orderedPosts = useMemo(() => {
    const walletPosts = blogPosts.filter((post) => !isKeychainPost(post))
    const keychainPosts = blogPosts.filter((post) => isKeychainPost(post))
    const merged = []
    const maxCount = Math.max(walletPosts.length, keychainPosts.length)

    for (let i = 0; i < maxCount; i += 1) {
      if (walletPosts[i]) {
        merged.push({ ...walletPosts[i], type: 'wallet' })
      }
      if (keychainPosts[i]) {
        merged.push({ ...keychainPosts[i], type: 'keychain' })
      }
    }

    return merged
  }, [])

  const postCards = useMemo(() => {
    let walletIndex = 0
    let keychainIndex = 0

    return orderedPosts.map((post, index) => {
      const isKeychain = post.type === 'keychain'
      const source = isKeychain ? keychainProducts : walletProducts
      const sourceIndex = isKeychain ? keychainIndex : walletIndex
      const featuredProduct = source.length ? source[sourceIndex % source.length] : null

      if (isKeychain) {
        keychainIndex += 1
      } else {
        walletIndex += 1
      }

      const gallery = featuredProduct ? getProductGallery(featuredProduct) : []
      const coverImage = gallery[0] || resolveBlogImage(post.slug)

      return {
        ...post,
        featuredProduct,
        gallery,
        coverImage,
        align: index % 2 === 0 ? 'left' : 'right',
      }
    })
  }, [orderedPosts, keychainProducts, walletProducts])

  return (
    <>
      <SeoHead
        title="Walkline Blog | Wallet and Keychain Guides Pakistan"
        description="Read practical guides on wallets and keychains in Pakistan, including material tips, buying advice, and accessory organization ideas."
      />

      <section className="section page-hero blog-hero blog-hero-decorated">
        <div>
          <p className="kicker">Walkline Journal</p>
          <h1>Wallet and Keychain Guides</h1>
          <p className="hero-description">
            One wallet post, one keychain post, and product-backed tips designed for buyers in Pakistan.
          </p>
        </div>
        <div className="page-hero-card blog-hero-card">
          <span className="pill">Fresh Reads</span>
          <h3>{blogPosts.length} Posts</h3>
          <p>SEO-focused content with practical buying guidance and real product coverage.</p>
        </div>
      </section>

      <section className="section blog-image-rail-section">
        <div className="section-header">
          <div>
            <p className="section-kicker">Wallet Visuals</p>
            <h2>All Wallet Product Images</h2>
          </div>
        </div>
        <div className="blog-image-rail">
          {walletGallery.map((image, index) => (
            <div key={`${image}-${index}`} className="blog-image-tile">
              <img src={withBase(image)} alt={`Wallet visual ${index + 1}`} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </section>

      <section className="section blog-image-rail-section">
        <div className="section-header">
          <div>
            <p className="section-kicker">Keychain Visuals</p>
            <h2>All Keychain Product Images</h2>
          </div>
        </div>
        <div className="blog-image-rail">
          {keychainGallery.map((image, index) => (
            <div key={`${image}-${index}`} className="blog-image-tile">
              <img src={withBase(image)} alt={`Keychain visual ${index + 1}`} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </section>

      <section className="section blog-flow-section">
        <div className="section-header">
          <div>
            <p className="section-kicker">Detailed Flow</p>
            <h2>One Card, Full Detail, Then Next</h2>
          </div>
        </div>
        <div className="blog-flow-grid">
          {postCards.map((post) => (
            <article
              key={post.slug}
              className={`blog-flow-card ${post.align === 'right' ? 'reverse' : ''}`}
            >
              <div className="blog-flow-media">
                <img src={withBase(post.coverImage)} alt={post.title} loading="lazy" decoding="async" />
                <div className="blog-flow-gallery">
                  {(post.gallery.length ? post.gallery : [post.coverImage]).slice(0, 4).map((image, idx) => (
                    <img
                      key={`${post.slug}-${idx}`}
                      src={withBase(image)}
                      alt={`${post.title} preview ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
              </div>
              <div className="blog-flow-content">
                <p className="section-kicker">
                  {post.type === 'wallet' ? 'Wallet Blog' : 'Keychain Blog'} | {post.publishedAt}
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <p className="muted">{post.intro}</p>
                <div className="blog-flow-points">
                  {post.sections.slice(0, 2).map((section) => (
                    <span key={section.heading} className="blog-flow-chip">
                      {section.heading}
                    </span>
                  ))}
                </div>
                <div className="blog-flow-actions">
                  <Link className="button small" to={`/blog/${post.slug}`}>
                    Read full post
                  </Link>
                  {post.featuredProduct ? (
                    <Link className="button ghost small" to={toProductPath(post.featuredProduct)}>
                      View product
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default BlogListPage
