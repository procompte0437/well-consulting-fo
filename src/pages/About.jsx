import { Link } from 'react-router-dom'
import { CountUp } from '../components/CountUp'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

const portraits = Array.from({ length: 10 }, (_, index) => (
  `/equipe/${String(index + 1).padStart(2, '0')}.jpg`
))

const valueIcons = {
  Innovation: 'bulb',
  Qualité: 'badge',
  Écoute: 'chat',
  Engagement: 'check',
  Collaboration: 'people',
}

export function About() {
  const { content } = useSite()
  const { company, values, services, phases, steps, realizations } = content
  usePageTitle('À propos')

  const figures = [
    { value: String(services.length).padStart(2, '0'), label: 'Missions' },
    { value: String(phases.length).padStart(2, '0'), label: 'Phases de livraison' },
    { value: String(steps.length).padStart(2, '0'), label: 'Étapes de travail' },
    { value: '01', label: 'Interlocuteur' },
  ]

  return (
    <>
      <section className="about-intro">
        <div className="wrap about-intro-grid">
          <img src="/hero/reunion.jpg" alt="Équipe en réunion autour d’un projet" />
          <div>
            <h2>Qui sommes-nous&nbsp;?</h2>
            <p>{company.about}</p>
            <p>{company.positioning}</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="wrap">
          <h2>Nos valeurs</h2>
          <p>
            Ces valeurs orientent le travail au quotidien : comprendre le besoin, livrer une solution
            fiable et rester présents jusqu’à la prise en main.
          </p>
          <div className="value-cards">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <ValueIcon name={valueIcons[value.title] || 'bulb'} />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="wrap">
          <h2>Une équipe à l’écoute</h2>
          <p>{company.method}</p>
          <div className="team-marquee" aria-label="Portraits">
            <div className="team-track">
              {[...portraits, ...portraits].map((src, index) => (
                <img
                  key={`${src}-${index}`}
                  src={src}
                  alt=""
                />
              ))}
            </div>
          </div>
          <Link className="btn btn-gold" to="/nous-rejoindre">Nous rejoindre</Link>
        </div>
      </section>

      <section className="key-band" aria-label="Quelques chiffres clés">
        <div className="wrap">
          <h2>Quelques chiffres clés</h2>
          <p>
            Un interlocuteur unique, des missions identifiées et un projet découpé en phases,
            de l’analyse du besoin jusqu’à la mise en production.
          </p>
          <div className="key-grid">
            {figures.map((item) => (
              <article key={item.label}>
                <span className="key-circle">
                  <CountUp value={item.value} />
                </span>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="wrap">
          <h2>Ils nous font confiance</h2>
          <span className="brush" aria-hidden="true" />
          <p>
            Des organisations nous confient la conception et le développement de leurs outils,
            de l’expression du besoin jusqu’à la prise en main.
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
          <img src="/hero/ecran.jpg" alt="Écran de travail sur une solution logicielle" />
        </div>
      </section>
    </>
  )
}

function ValueIcon({ name }) {
  const marks = {
    bulb: (
      <>
        <path d="M12 3a6 6 0 0 0-3.2 11.1V16h6.4v-1.9A6 6 0 0 0 12 3Z" />
        <path d="M9.5 18.5h5M10 21h4" />
      </>
    ),
    badge: (
      <>
        <circle cx="12" cy="10" r="6" />
        <path d="m9 15-1.5 6 4.5-2.2L16.5 21 15 15" />
      </>
    ),
    chat: (
      <>
        <path d="M5 6.5h14v9H8.5L5 18.5v-12Z" />
        <path d="M8.5 10h7M8.5 13h4" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m8.5 12.2 2.4 2.4 4.6-5" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="9" r="2.4" />
        <circle cx="16" cy="9.5" r="2" />
        <path d="M4.8 18.5c.6-2.4 2.4-3.6 4.2-3.6s3.6 1.2 4.2 3.6" />
        <path d="M13.2 15.2c1.2-.4 2.5-.2 3.5.6 1 1 1.4 2.2 1.6 2.7" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {marks[name]}
      </g>
    </svg>
  )
}
