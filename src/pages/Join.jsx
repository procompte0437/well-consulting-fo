import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

export function Join() {
  const { content } = useSite()
  usePageTitle('Nous rejoindre')

  return (
    <>
      <PageHero
        kicker={content.company.name}
        title="Nous rejoindre"
        text="Vous voulez concevoir des solutions utiles, au contact des clients ? Présentez-vous en quelques lignes."
      />
      <section className="section section-tint">
        <div className="wrap contact-layout">
          <ContactForm defaultSubject="Candidature" />
          <aside className="contact-card">
            <div>
              <p className="kicker">Ce que nous cherchons</p>
              <p>
                Des profils à l’aise avec l’écoute du besoin, la conception et le développement, et le suivi d’un projet jusqu’à la prise en main.
              </p>
            </div>
            <div>
              <p className="kicker">Comment candidater</p>
              <p>
                Décrivez votre parcours et le type de mission qui vous intéresse. Joignez un moyen de vous recontacter.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
