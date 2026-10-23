import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CountUp } from '../components/CountUp'
import { SectionTitle } from '../components/SectionTitle'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

const SLIDE_MS = 6500

export function Home() {
  const { content } = useSite()
  const { company, services, steps, phases, domains, realizations } = content
  const project = realizations[0]
  const [slide, setSlide] = useState(0)
  const [motionOk, setMotionOk] = useState(false)
  usePageTitle('')

  const slides = [
    {
      title: company.tagline,
      text: 'Une équipe à l’écoute, pour concevoir, développer et accompagner vos projets numériques jusqu’à la prise en main.',
      image: '/hero/reunion.jpg',
      alt: 'Équipe en réunion autour d’un projet',
    },
    {
      title: 'De l’idée à la solution',
      text: company.intro,
      image: '/hero/bureau.jpg',
      alt: 'Espace de travail WELL-CONSULTING',
    },
    {
      title: 'Une expertise concrète',
      text: company.method,
      image: '/hero/ecran.jpg',
      alt: 'Écran de travail sur une solution logicielle',
    },
  ]

  const figures = [
    { value: String(services.length).padStart(2, '0'), label: 'Missions principales' },
    { value: String(phases.length).padStart(2, '0'), label: 'Phases de livraison' },
    { value: String(steps.length).padStart(2, '0'), label: 'Étapes de travail' },
    { value: '01', label: 'Interlocuteur unique' },
  ]

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setMotionOk(!media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!motionOk) return undefined
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearInterval(timer)
  }, [motionOk, slides.length])

  const current = slides[slide]

  return (
    <>
      <section className="hero" aria-roledescription="carrousel" aria-label="Présentation">
        <div className="hero-curve" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1 className="display">{current.title}</h1>
            <p className="lead">{current.text}</p>
            <div className="hero-actions">
              <Link className="btn btn-blue" to="/a-propos">En savoir plus</Link>
              <Link className="btn btn-line" to="/contact">Nous contacter</Link>
            </div>
            <div className="hero-dots" role="tablist" aria-label="Diapositives">
              {slides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={index === slide}
                  aria-label={item.title}
                  className={index === slide ? 'is-active' : ''}
                  onClick={() => setSlide(index)}
                />
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <img src={current.image} alt={current.alt} />
          </div>
        </div>
      </section>

      <section className="figures">
        <div className="wrap figures-grid">
          {figures.map((item) => (
            <div key={item.label}>
              <CountUp value={item.value} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionTitle
            kicker="Nos services"
            title="Comment pouvons-nous vous aider ?"
            text="Nous proposons un accompagnement conçu pour vos enjeux de digitalisation : du conseil jusqu’à la mise en production, quel que soit votre secteur."
          />
          <div className="cards">
            {services.map((service) => (
              <article className="card" key={service.number}>
                <span className="card-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <p className="section-more">
            <Link className="text-link" to="/services">Découvrir tous les services</Link>
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <SectionTitle
            kicker="Notre offre"
            title="Un projet livré en 4 phases"
            text="Chaque projet est découpé en phases claires et facturées de manière transparente, afin que le client sache précisément ce qui est réalisé à chaque étape."
          />
          <div className="phases">
            {phases.map((phase) => (
              <article key={phase.number}>
                <span>Phase {phase.number}</span>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </article>
            ))}
          </div>
          <p className="note">{company.hosting_note}</p>
        </div>
      </section>

      {project ? (
        <section className="section">
          <div className="wrap">
            <SectionTitle
              kicker="Ils nous font confiance"
              title="Une référence récente"
              text="Des organisations nous confient la conception et le développement de leurs outils, de l’expression du besoin jusqu’à la prise en main."
            />
            <article className="case">
              <div>
                <p className="case-client">Client : {project.client}</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <Link className="text-link" to="/realisations">Voir le détail</Link>
              </div>
              <ol>
                {project.phases.map((phase, index) => (
                  <li key={phase}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {phase}
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </section>
      ) : null}

      <section className="section section-tint">
        <div className="wrap">
          <SectionTitle
            kicker="Domaines d’intervention"
            title="Des solutions adaptées à votre métier"
            text="Applications, systèmes d’information, automatisation et pilotage : nous intervenons là où un outil numérique doit servir un usage concret."
          />
          <ul className="domains">
            {domains.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta-inner">
          <div>
            <h2>Vous avez un projet numérique ?</h2>
            <p>Décrivez-le en quelques mots. Nous vous répondons avec un avis et une estimation.</p>
          </div>
          <Link className="btn btn-gold" to="/contact">Obtenir un devis</Link>
        </div>
      </section>
    </>
  )
}
