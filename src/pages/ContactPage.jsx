import { Link } from 'react-router-dom'
import { SeoHead } from '../components/seo'

const ContactPage = () => (
  <>
    <SeoHead
      title="Contact Walkline | Support and Orders Pakistan"
      description="Contact Walkline for product details, custom order help, and support for wallet and keychain deliveries in Pakistan."
    />

    <section className="page-hero">
      <div>
        <p className="kicker">Contact</p>
        <h1>Let's talk Walkline.</h1>
        <p className="hero-description">
          Reach out for materials, custom orders, or collaborations.
        </p>
        <Link className="button" to="/track-order">
          Track an order
        </Link>
      </div>
      <div className="page-hero-card">
        <span className="pill">Support</span>
        <h3>help@walkline.com</h3>
        <p>Reply within 24 hours on business days.</p>
      </div>
    </section>
    <section className="section">
      <div className="info-grid">
        <div className="info-card">
          <h3>Studio</h3>
          <p>Gulberg, Lahore, Pakistan</p>
        </div>
        <div className="info-card">
          <h3>Phone</h3>
          <p>+92 300 0000000</p>
        </div>
        <div className="info-card">
          <h3>Hours</h3>
          <p>Mon - Sat, 10:00 AM - 7:00 PM</p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="form-card">
        <h2>Send a message</h2>
        <p className="helper-text">
          We will get back to you with order, materials, or collaboration
          details.
        </p>
        <form className="form-grid" onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Email address" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required />
          <button className="button" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  </>
)

export default ContactPage

