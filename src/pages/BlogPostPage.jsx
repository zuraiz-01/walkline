import { Link, useParams } from 'react-router-dom'
import { SeoHead } from '../components/seo'
import { blogPostIndex } from '../data/blogPosts'
import { productImagePool } from '../utils/productImages'
import { withBase } from '../utils/shop'

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
  if (slug.includes('digital')) {
    return productImagePool.walletBrown
  }
  return productImagePool.walletCroc
}

const BlogPostPage = () => {
  const { slug } = useParams()
  const post = blogPostIndex[slug || '']

  if (!post) {
    return (
      <section className="section page-section">
        <SeoHead
          title="Blog Post Not Found | Walkline"
          description="The requested blog post could not be found."
        />
        <div className="page-hero-card">
          <h2>Post not found</h2>
          <p className="muted">The article link is no longer active.</p>
          <div className="hero-actions">
            <Link className="button" to="/blog">
              View all blog posts
            </Link>
            <Link className="button ghost" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Walkline',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Walkline',
    },
    description: post.metaDescription,
  }

  return (
    <>
      <SeoHead title={post.metaTitle} description={post.metaDescription} structuredData={articleSchema} />

      <section className="section page-hero blog-post-hero">
        <div>
          <p className="kicker">Walkline Blog</p>
          <h1>{post.title}</h1>
          <p className="hero-description">{post.intro}</p>
        </div>
        <div className="blog-post-hero-media">
          <div className="blog-post-cover">
            <img src={withBase(resolveBlogImage(post.slug))} alt={post.title} loading="eager" decoding="async" fetchPriority="high" />
          </div>
          <div className="page-hero-card">
            <span className="pill">Published</span>
            <h3>{post.publishedAt}</h3>
            <p>Practical guidance for Pakistan audience.</p>
          </div>
        </div>
      </section>

      <section className="section blog-article-section">
        <article className="blog-article">
          {post.sections.map((section) => (
            <section key={section.heading} className="blog-article-block">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.heading}-${index}`}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>
      </section>

      <section className="section blog-related-section">
        <div className="seo-card">
          <h2>Related Links</h2>
          <ul className="seo-list">
            {post.related.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default BlogPostPage


