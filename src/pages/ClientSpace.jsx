import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

export function ClientSpace() {
  const { content } = useSite()
  const { company } = content
  const phone = company.phone.replace(/[^\d+]/g, '')
  usePageTitle('Espace client')

  return (
    <>
      <PageHero
        kicker="Suivi"
        title="Espace client"
        text="Pour une question sur un projet en cours, écrivez-nous ou appelez-nous. Nous reprenons l’échange avec vous directement."
      />
      <section className="section">
        <div className="wrap contact-layout">
          <div className="prose">
            <p className="lead-dark">
              L’espace client sert à joindre l’équipe qui suit votre projet : avancement, prise en main et évolutions.
            </p>
            <p>
              Indiquez le nom de votre organisation et l’objet de votre demande. Nous vous répondons avec les éléments utiles à la suite du projet.
            </p>
            <p>
              <Link className="btn btn-gold" to="/contact">Écrire à l’équipe</Link>
            </p>
          </div>
          <aside className="contact-card">
            <div>
              <p className="kicker">Téléphone</p>
              <p><a href={`tel:${phone}`}>{company.phone}</a></p>
            </div>
            <div>
              <p className="kicker">E-mail</p>
              <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
            </div>
            <div>
              <p className="kicker">Adresse</p>
              <p>{company.address}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
