import { Link } from 'react-router-dom'
import logoWhite from '../../assets/walkline-logo-white.jpeg'

const Footer = ({ footer }) => {
  const year = new Date().getFullYear()
  const seen = new Set()
  const columns = (footer?.columns ?? [])
    .map((column) => {
      const links = (column?.links ?? []).filter((link) => {
        const label = String(link?.label ?? '').trim()
        const to = String(link?.to ?? '').trim()
        if (!label || !to) {
          return false
        }
        const key = `${to}|${label.toLowerCase()}`
        if (seen.has(key)) {
          return false
        }
        seen.add(key)
        return true
      })

      return {
        ...column,
        links,
      }
    })
    .filter((column) => column.links.length)

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-top">
        <div>
          <div className="logo footer-logo">
            <img className="logo-image" src={logoWhite} alt="Walkline" loading="lazy" decoding="async" />
          </div>
          <p className="muted">
            Walkline delivers premium wallets and keychains built for everyday
            carry.
          </p>
        </div>
        <div className="footer-grid">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="footer-title">{column.title}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={`${link.to}-${link.label}`}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>{year} Walkline. All rights reserved.</span>
        <span>Pakistan</span>
      </div>
    </footer>
  )
}

export default Footer
