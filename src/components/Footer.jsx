import { Link } from 'react-router-dom'
import { useSite } from '../hooks/useSite'
import { Logo } from './Logo'

const year = new Date().getFullYear()

export function Footer() {
  const { content } = useSite()
  const { company } = content
  const phone = company.phone.replace(/[^\d+]/g, '')

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p className="footer-tagline">{company.tagline}</p>
          <p className="footer-muted">{company.baseline}</p>
        </div>
        <div>
          <p className="footer-label">Navigation</p>
          <ul className="footer-links">
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/demarche">Démarche</Link></li>
            <li><Link to="/realisations">Réalisations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <ul className="footer-links">
            <li>{company.address}</li>
            <li><a href={`tel:${phone}`}>{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {year} {company.name}. Tous droits réservés.</p>
        <p>{company.category}</p>
      </div>
    </footer>
  )
}
