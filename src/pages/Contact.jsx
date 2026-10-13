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
        index="Contact"
        kicker={company.name}
        title="Parlons de votre projet."
        text={company.tagline}
      />
      <section className="section">
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
