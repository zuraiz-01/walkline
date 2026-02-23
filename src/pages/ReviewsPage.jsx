import { Link } from 'react-router-dom'
import { SeoHead } from '../components/seo'
import { productImagePool } from '../utils/productImages'
import { withBase } from '../utils/shop'

const reviewVisuals = [
  { image: productImagePool.walletBlack, label: 'Wallet Finish' },
  { image: productImagePool.keychainBrown, label: 'Keychain Build' },
  { image: productImagePool.walletBrown, label: 'Daily Carry' },
]

const reviewerAvatars = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
]

const ReviewsPage = ({ catalog }) => (
  <>
    <SeoHead
      title="Customer Reviews | Walkline Pakistan"
      description="Read verified customer reviews for Walkline wallets and keychains across Pakistan."
    />

    <section className="page-hero reviews-hero">
      <div>
        <p className="kicker">Reviews</p>
        <h1>Customers speak for Walkline.</h1>
        <p className="hero-description">
          Real feedback from customers who carry Walkline every day.
        </p>
        <Link className="button" to="/contact">
          Share your review
        </Link>
      </div>
      <div className="page-hero-card reviews-score-card">
        <span className="pill">4.9 / 5</span>
        <h3>Average rating</h3>
        <p>Based on verified customer feedback and repeat orders.</p>
      </div>
    </section>

    <section className="section reviews-gallery-section">
      <div className="reviews-gallery-grid">
        {reviewVisuals.map((item) => (
          <article key={item.label} className="reviews-gallery-card">
            <img src={withBase(item.image)} alt={item.label} loading="lazy" decoding="async" />
            <div className="reviews-gallery-overlay" />
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>

    <section className="section">
      <div className="testimonial-grid reviews-styled-grid">
        {catalog.testimonials.map((review, index) => {
          const avatar = reviewerAvatars[index % reviewerAvatars.length]
          return (
            <article key={review.name} className="testimonial-card reviews-enhanced-card">
              <div className="reviews-card-head">
                <img
                  className="reviews-avatar"
                  src={withBase(avatar)}
                  alt={`${review.name} profile`}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.title}</span>
                </div>
              </div>
              <p className="testimonial-quote">"{review.quote}"</p>
              <p className="reviews-rating" aria-label="5 star rating">5.0 / 5</p>
            </article>
          )
        })}
      </div>
    </section>
  </>
)

export default ReviewsPage


