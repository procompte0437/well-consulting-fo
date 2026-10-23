import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

export function Contact() {
  const { content } = useSite()
  const { company } = content
  const phone = company.phone.replace(/[^\d+]/g, '')
  usePageTitle('Contact')

  return (
    <>
      <PageHero
        kicker={company.name}
        title="Obtenir un devis"
        text="Décrivez votre projet : nature, délais et contexte. Nous revenons vers vous avec un avis et une estimation."
      />
      <section className="section section-tint">
        <div className="wrap contact-layout">
          <ContactForm />
          <aside className="contact-card">
            <div>
              <p className="kicker">Adresse</p>
              <p>{company.address}</p>
            </div>
            <div>
              <p className="kicker">Téléphone</p>
              <p><a href={`tel:${phone}`}>{company.phone}</a></p>
            </div>
            <div>
              <p className="kicker">E-mail</p>
              <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
