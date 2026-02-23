import { Link } from 'react-router-dom'

const SeoBreadcrumbs = ({ items }) => (
  <nav className="seo-breadcrumb" aria-label="Breadcrumb">
    <ol>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <li key={`${item.label}-${index}`}>
            {item.to && !isLast ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
            {!isLast ? <span className="seo-separator">/</span> : null}
          </li>
        )
      })}
    </ol>
  </nav>
)

export default SeoBreadcrumbs
