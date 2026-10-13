import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFound() {
  usePageTitle('Page introuvable')

  return (
    <section className="page-hero">
      <div className="wrap page-hero-inner">
        <p className="kicker light">404</p>
        <h1>Cette page n’existe pas.</h1>
        <Link className="btn btn-gold" to="/">Retour à l’accueil</Link>
      </div>
    </section>
  )
}
