import { Link } from 'react-router-dom'
import { SectionTitle } from '../components/SectionTitle'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

export function Home() {
  const { content } = useSite()
  const { company, services, steps, phases, domains, values, realizations } = content
  const project = realizations[0]
  const phone = company.phone.replace(/[^\d+]/g, '')
  usePageTitle('')

  const heroImages = [
    '/hero/bureau.jpg',
    '/hero/ecran.jpg',
    '/hero/reunion.jpg',
    '/hero/ville.jpg',
  ]

  const figures = [
    { value: String(services.length).padStart(2, '0'), label: 'Missions principales' },
    { value: String(phases.length).padStart(2, '0'), label: 'Phases de livraison' },
    { value: String(steps.length).padStart(2, '0'), label: 'Étapes de travail' },
    { value: '01', label: 'Interlocuteur unique' },
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-slides" aria-hidden="true">
          <div className="hero-track">
            {[...heroImages, ...heroImages].map((src, index) => (
              <img key={`${src}-${index}`} src={src} alt="" />
            ))}
          </div>
        </div>
        <div className="wrap hero-grid">
          <div>
            <p className="kicker light">{company.category}</p>
            <h1 className="display">{company.tagline}</h1>
            <p className="lead">{company.intro}</p>
            <div className="hero-actions">
              <Link className="btn btn-gold" to="/contact">Parlons de votre projet</Link>
              <Link className="btn btn-line" to="/demarche">Voir notre démarche</Link>
            </div>
          </div>
          <aside className="hero-panel">
            <p className="panel-label">Coordonnées</p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={`tel:${phone}`}>{company.phone}</a>
            <p>{company.address}</p>
            <p className="panel-foot">{company.baseline}</p>
          </aside>
        </div>
      </section>

      <section className="figures">
        <div className="wrap figures-grid">
          {figures.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <SectionTitle
            index="01"
            kicker="Qui sommes-nous"
            title="Un partenaire numérique, de l’idée à la solution."
            text={company.about}
          />
          <article className="vision">
            <p className="kicker">Notre vision</p>
            <p>{company.vision}</p>
            <Link to="/a-propos">En savoir plus</Link>
          </article>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <SectionTitle
            index="02"
            kicker="Ce que nous faisons"
            title="Nos principales missions"
            text={company.method}
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
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionTitle index="03" kicker="Comment nous travaillons" title="Une démarche en six temps" />
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <SectionTitle
            index="04"
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

      <section className="section">
        <div className="wrap">
          <SectionTitle index="05" kicker="Domaines d’intervention" title="Un large spectre d’expertises" />
          <ul className="chips">
            {domains.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </div>
      </section>

      {project ? (
        <section className="section section-tint">
          <div className="wrap case">
            <div>
              <p className="kicker">08 · Nos réalisations</p>
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
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="wrap">
          <SectionTitle index="06" kicker="Ce qui nous guide" title="Nos valeurs" />
          <div className="values">
            {values.map((value) => (
              <article key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta-inner">
          <div>
            <p className="kicker light">Contactez-nous</p>
            <h2>Parlons de votre projet.</h2>
            <p>{company.tagline}</p>
          </div>
          <Link className="btn btn-gold" to="/contact">Écrire à WELL-CONSULTING</Link>
        </div>
      </section>
    </>
  )
}
