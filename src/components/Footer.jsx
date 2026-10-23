import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sendContact } from '../api/client'
import { useSite } from '../hooks/useSite'
import { Logo } from './Logo'

const year = new Date().getFullYear()

export function Footer() {
  const { content } = useSite()
  const { company, services } = content

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo />
        </div>
        <div>
          <p className="footer-label">Entreprise</p>
          <ul className="footer-links">
            <li><Link to="/a-propos">À propos de nous</Link></li>
            <li><Link to="/services">Nos services</Link></li>
            <li><Link to="/realisations">Nos réalisations</Link></li>
            <li><Link to="/demarche">Notre démarche</Link></li>
            <li><Link to="/realisations">Nos références</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-label">Services</p>
          <ul className="footer-links">
            {services.map((service) => (
              <li key={service.number}>
                <Link to={`/services#service-${service.number}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-label">Support</p>
          <ul className="footer-links">
            <li><Link to="/contact">Nous contacter</Link></li>
            <li><Link to="/espace-client">Espace client</Link></li>
            <li><Link to="/contact">Obtenir un devis</Link></li>
            <li><Link to="/nous-rejoindre">Nous rejoindre</Link></li>
          </ul>
        </div>
        <Newsletter />
      </div>
      <div className="wrap footer-end">
        <p className="footer-copy">Copyright © {company.name} {year} | Tous droits réservés</p>
        <p className="footer-legal">
          <Link to="/conditions">Conditions générales d’utilisation</Link>
          <span aria-hidden="true">|</span>
          <Link to="/confidentialite">Politique de confidentialité</Link>
        </p>
      </div>
    </footer>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  async function onSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    setFeedback('')

    try {
      const result = await sendContact({
        name: 'Abonné newsletter',
        email,
        subject: 'Inscription à la newsletter',
        message: 'Je souhaite recevoir les actualités et les conseils de WELL-CONSULTING.',
        website: '',
      })
      setStatus('success')
      setFeedback(result.message)
      setEmail('')
    } catch (error) {
      setStatus('error')
      setFeedback(error.message)
    }
  }

  return (
    <form className="news-form" onSubmit={onSubmit}>
      <p className="footer-label">Restons connectés !</p>
      <p>
        Inscrivez-vous pour recevoir nos actualités et des conseils utiles pour vos projets numériques.
      </p>
      {feedback ? (
        <p className={status === 'error' ? 'form-error' : 'form-success'} role="status">{feedback}</p>
      ) : null}
      <label className="sr-only" htmlFor="newsletter-email">Votre adresse mail</label>
      <input
        id="newsletter-email"
        type="email"
        required
        maxLength={180}
        autoComplete="email"
        placeholder="Votre adresse mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button className="btn btn-blue" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi…' : 'S’abonner'}
      </button>
    </form>
  )
}
