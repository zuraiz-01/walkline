import { Link } from 'react-router-dom'
import { SeoHead } from '../components/seo'

const AboutPage = () => (
  <>
    <SeoHead
      title="About Walkline | Leather Wallets and Keychains Pakistan"
      description="Learn about Walkline, a Pakistan-focused brand for premium wallets and keychains with durable materials and practical everyday design."
    />

    <section className="page-hero">
      <div>
        <p className="kicker">About Walkline</p>
        <h1>Crafted leather goods for daily essentials.</h1>
        <p className="hero-description">
          Walkline blends premium leather with clean, minimal construction for
          everyday carry pieces.
        </p>
        <Link className="button" to="/wallets">
          Shop the collection
        </Link>
      </div>
      <div className="page-hero-card">
        <span className="pill">Since 2024</span>
        <h3>Walkline DNA</h3>
        <p>Minimal design, durable hardware, and timeless finishes.</p>
      </div>
    </section>
    <section className="section">
      <div className="info-grid">
        <div className="info-card">
          <h3>Premium Leather</h3>
          <p>Full-grain leather with a smooth, natural finish.</p>
        </div>
        <div className="info-card">
          <h3>Precision Stitching</h3>
          <p>Clean edges and reinforced seams built for daily use.</p>
        </div>
        <div className="info-card">
          <h3>Locally Crafted</h3>
          <p>Designed and finished in Pakistan with attention to detail.</p>
        </div>
      </div>
    </section>
  </>
)

export default AboutPage

