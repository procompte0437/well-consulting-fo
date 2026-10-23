import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ServiceGlyph } from '../components/ServiceGlyph'
import { serviceGlyphs, serviceItems } from '../content/serviceItems'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

export function Services() {
  const { content } = useSite()
  const { company, services, realizations } = content
  const [opened, setOpened] = useState(null)
  usePageTitle('Services')

  return (
    <>
      <section className="svc-hero" aria-label="Nos services">
        <div className="wrap">
          <div className="svc-hero-panel">
            <div className="svc-diamonds" aria-hidden="true">
              {services.map((service) => (
                <span className="diamond" key={service.number}>
                  <ServiceGlyph name={serviceGlyphs[service.number] || 'code'} />
                </span>
              ))}
            </div>
            <h1>Nos services</h1>
          </div>
        </div>
      </section>

      <section className="svc-intro">
        <div className="wrap">
          <h2>Découvrez nos services</h2>
          <span className="brush" aria-hidden="true" />
          <p>
            Nous concevons des solutions numériques adaptées à votre activité, pour vous accompagner
            dans la digitalisation de vos processus. Quel que soit votre secteur, nous mettons
            l’expertise de {company.name} au service de la réussite de vos projets.
          </p>
          <div className="offers">
            {services.map((service) => {
              const items = serviceItems[service.number] || [service.description]
              const isOpen = opened === service.number
              return (
                <article className="offer" id={`service-${service.number}`} key={service.number}>
                  <div className="offer-top">
                    <span className="diamond">
                      <ServiceGlyph name={serviceGlyphs[service.number] || 'code'} />
                    </span>
                    <span className="offer-notch" aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <div className="offer-body">
                    <ul>
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {isOpen ? <p className="offer-detail">{service.description}</p> : null}
                    <button
                      type="button"
                      className="btn btn-gold"
                      aria-expanded={isOpen}
                      onClick={() => setOpened(isOpen ? null : service.number)}
                    >
                      {isOpen ? 'Réduire' : 'Découvrir'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="wrap">
          <h2>Ils nous font confiance</h2>
          <span className="brush" aria-hidden="true" />
          <p>
            Des organisations nous confient la conception et le développement de leurs outils.
            Cette confiance reflète la qualité du suivi et notre capacité à répondre à leurs
            attentes, de l’expression du besoin jusqu’à la prise en main.
          </p>
          <div className="ref-grid">
            {realizations.map((project) => (
              <article className="ref-card" key={project.client}>
                <strong>{project.client}</strong>
                <span>{project.title}</span>
              </article>
            ))}
          </div>
          <Link className="btn btn-gold" to="/realisations">Voir plus de références</Link>
        </div>
      </section>

      <section className="project-band">
        <div className="wrap project-band-inner">
          <div>
            <h2>Vous avez un projet informatique&nbsp;?</h2>
            <p>
              Expliquez-nous votre projet en quelques mots. Nous vous répondons avec un avis et une estimation.
            </p>
            <Link className="btn btn-gold" to="/contact">Demander un devis</Link>
          </div>
          <img src="/hero/reunion.jpg" alt="Équipe en réunion autour d’un projet" />
        </div>
      </section>
    </>
  )
}
