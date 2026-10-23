import { Link, useLocation } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

export function Legal() {
  const { pathname } = useLocation()
  const { content } = useSite()
  const { company } = content
  const privacy = pathname.includes('confidentialite')
  usePageTitle(privacy ? 'Politique de confidentialité' : 'Conditions générales d’utilisation')

  return (
    <>
      <PageHero
        kicker={company.name}
        title={privacy ? 'Politique de confidentialité' : 'Conditions générales d’utilisation'}
        text={privacy
          ? 'Comment les informations que vous nous transmettez sont utilisées.'
          : 'Les conditions d’usage de ce site.'}
      />
      <section className="section">
        <div className="wrap prose">
          {privacy ? <Privacy company={company} /> : <Terms company={company} />}
          <p>
            <Link className="text-link" to="/contact">Nous contacter</Link>
          </p>
        </div>
      </section>
    </>
  )
}

function Terms({ company }) {
  return (
    <>
      <p className="lead-dark">
        Ce site présente {company.name}, ses missions et un moyen de demander un devis ou d’envoyer un message.
      </p>
      <p>
        Les textes décrivent l’activité de l’entreprise. Un devis ou un engagement de réalisation ne vaut qu’après échange et accord écrit sur le périmètre, les délais et le prix.
      </p>
      <p>
        Les contenus du site (textes, logo, visuels) sont destinés à la présentation de {company.name}. Toute reprise suppose un accord préalable.
      </p>
      <p>{company.hosting_note}</p>
    </>
  )
}

function Privacy({ company }) {
  return (
    <>
      <p className="lead-dark">
        Les messages envoyés depuis les formulaires (contact, candidature, newsletter) sont enregistrés pour vous répondre.
      </p>
      <p>
        Les informations demandées sont votre nom, votre adresse e-mail et le contenu du message. Le téléphone et l’organisation sont facultatifs. Ces données ne sont pas vendues et ne sont pas transmises à un service de publicité.
      </p>
      <p>
        Le bandeau cookies mémorise uniquement votre choix dans ce navigateur. {company.name} n’utilise pas de cookies de suivi.
      </p>
      <p>
        Pour accéder à un message que vous avez envoyé, le corriger ou demander sa suppression, écrivez à {company.email}.
      </p>
    </>
  )
}
