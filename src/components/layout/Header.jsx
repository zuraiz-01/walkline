import { Link, NavLink } from 'react-router-dom'
import logoBlack from '../../assets/walkline-logo-black.png'
import HeartIcon from '../common/HeartIcon'

const Header = ({
  nav,
  cartCount,
  wishlistCount,
  onOpenSearch,
  onOpenCart,
  onOpenWishlist,
  onOpenMenu,
}) => (
  <header className="site-header">
    <div className="header-inner">
      <Link className="logo-link" to="/" aria-label="Walkline home">
        <img className="logo-image" src={logoBlack} alt="Walkline" />
        <span className="logo-text">Walkline</span>
      </Link>
      <nav className="nav-links" aria-label="Primary">
        {nav.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <button className="icon-button" type="button" aria-label="Search" onClick={onOpenSearch}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M11 18a7 7 0 1 1 5.44-2.57l4.06 4.07-1.41 1.41-4.07-4.06A6.98 6.98 0 0 1 11 18Zm0-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="icon-button hide-mobile" type="button" aria-label="Account">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.87 0-7 2.02-7 4.5V20h14v-1.5c0-2.48-3.13-4.5-7-4.5Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          className="icon-button"
          type="button"
          aria-label="Wishlist"
          onClick={onOpenWishlist}
        >
          <HeartIcon filled={wishlistCount > 0} />
          {wishlistCount > 0 ? (
            <span className="icon-badge" aria-label={`${wishlistCount} items in wishlist`}>
              {wishlistCount}
            </span>
          ) : null}
        </button>
        <button
          className="icon-button"
          type="button"
          aria-label="Cart"
          onClick={onOpenCart}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 7h14l-1.5 9.5a2 2 0 0 1-2 1.5H9.5a2 2 0 0 1-2-1.5L6 7Zm2.2-3h7.6l1 2H7.2l1-2Z"
              fill="currentColor"
            />
          </svg>
          {cartCount > 0 ? (
            <span className="icon-badge" aria-label={`${cartCount} items in cart`}>
              {cartCount}
            </span>
          ) : null}
        </button>
        <button className="menu-button" type="button" onClick={onOpenMenu} aria-label="Open menu">
          Menu
        </button>
      </div>
    </div>
  </header>
)

export default Header
