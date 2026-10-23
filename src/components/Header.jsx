import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSite } from '../hooks/useSite'
import { Logo } from './Logo'

export function Header() {
  const { pathname } = useLocation()
  const { content } = useSite()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const phone = content.company.phone.replace(/[^\d+]/g, '')

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-lock', open)
    return () => document.body.classList.remove('nav-lock')
  }, [open])

  return (
    <div className="chrome">
      <div className="topbar">
        <div className="wrap topbar-inner">
          <a href={`tel:${phone}`}>
            <PhoneIcon />
            {content.company.phone}
          </a>
          <a href={`mailto:${content.company.email}`}>
            <MailIcon />
            {content.company.email}
          </a>
          <NavLink to="/contact">
            <PinIcon />
            Nous contacter
          </NavLink>
        </div>
      </div>

      <header className={`site-header${open ? ' is-open' : ''}`}>
        <div className="wrap header-inner">
          <Logo />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
            <span />
            <span />
          </button>
          <nav id="navigation" className="nav" aria-label="Navigation principale">
            <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
              Accueil
            </NavLink>

            <div
              className={`nav-item${servicesOpen ? ' is-open' : ''}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false)
              }}
            >
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(false)}
              >
                Nos services
                <Caret />
              </NavLink>
              <div className={`dropdown${open ? ' is-open' : ''}`}>
                {content.services.map((service) => (
                  <NavLink key={service.number} to={`/services#service-${service.number}`} onClick={() => setOpen(false)}>
                    {service.title}
                  </NavLink>
                ))}
                <NavLink to="/demarche" onClick={() => setOpen(false)}>Notre démarche</NavLink>
              </div>
            </div>

            <NavLink to="/realisations" className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
              Nos réalisations
            </NavLink>
            <NavLink to="/a-propos" className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
              À propos
            </NavLink>
            <NavLink to="/contact" className="btn btn-gold nav-cta">
              Obtenir un devis
            </NavLink>
            <span className="lang" aria-label="Langue du site : français">
              <FrenchFlag />
              Français
            </span>
          </nav>
        </div>
      </header>
    </div>
  )
}

function Caret() {
  return (
    <svg className="caret" viewBox="0 0 12 8" aria-hidden="true">
      <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M7.5 3.5h2.2l1.2 3-1.6 1a12.5 12.5 0 0 0 5.2 5.2l1-1.6 3 1.2v2.2c0 .8-.6 1.6-1.5 1.7A15.5 15.5 0 0 1 5.8 5c.1-.9.9-1.5 1.7-1.5Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M4 6.5h16v11H4v-11Zm8 6.2 6.6-4.7H5.4L12 12.7Z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 3.5a6 6 0 0 0-6 6c0 4.4 6 11 6 11s6-6.6 6-11a6 6 0 0 0-6-6Zm0 8.2a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Z" />
    </svg>
  )
}

function FrenchFlag() {
  return (
    <svg className="flag" viewBox="0 0 18 12" aria-hidden="true">
      <rect width="6" height="12" fill="#0055a4" />
      <rect x="6" width="6" height="12" fill="#fff" />
      <rect x="12" width="6" height="12" fill="#ef4135" />
    </svg>
  )
}
