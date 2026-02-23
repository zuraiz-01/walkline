import { Link } from 'react-router-dom'
import { SeoHead } from '../components/seo'

const NotFoundPage = () => (
  <>
    <section className="page-hero">
      <SeoHead
        title="Page Not Found | Walkline"
        description="The page you requested is not available. Browse wallets and keychains on Walkline Pakistan."
      />

      <div>
        <p className="kicker">404</p>
        <h1>Page not found.</h1>
        <p className="hero-description">
          The page you are looking for does not exist. Try the wallets page.
        </p>
        <Link className="button" to="/wallets">
          Go to wallets
        </Link>
      </div>
      <div className="page-hero-card">
        <span className="pill">Walkline</span>
        <h3>Everyday carry</h3>
        <p>Check the latest drops in the shop.</p>
      </div>
    </section>
  </>
)

export default NotFoundPage

