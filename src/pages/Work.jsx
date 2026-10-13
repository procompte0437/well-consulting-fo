import { PageHero } from '../components/PageHero'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

export function Work() {
  const { content } = useSite()
  const { company, realizations, project_types: projectTypes } = content
  usePageTitle('Réalisations')

  return (
    <>
      <PageHero
        index="09"
        kicker="Notre positionnement"
        title="Un partenaire technologique de bout en bout"
        text={company.positioning}
      />
      <section className="section">
        <div className="wrap points">
          {company.points.map((point) => (
            <article key={point}>
              <h2>{point}</h2>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap stack">
          <header className="section-head">
            <p className="kicker">08 · Nos réalisations</p>
            <h2>Référence récente</h2>
          </header>
          {realizations.map((project) => (
            <article className="case case-page" key={project.client}>
              <div>
                <p className="case-client">Client : {project.client}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
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
          ))}
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <header className="section-head">
            <p className="kicker">07 · Terrains d’action</p>
            <h2>Des projets internes, commerciaux, institutionnels ou entrepreneuriaux.</h2>
          </header>
          <ol className="plain-list">
            {projectTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
