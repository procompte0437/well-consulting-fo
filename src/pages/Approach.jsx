import { PageHero } from '../components/PageHero'
import { SectionTitle } from '../components/SectionTitle'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

export function Approach() {
  const { content } = useSite()
  const { company, steps, phases } = content
  usePageTitle('Démarche')

  return (
    <>
      <PageHero
        kicker="Comment nous travaillons"
        title="Notre démarche"
        text={company.method}
      />
      <section className="section">
        <div className="wrap">
          <ol className="steps steps-large">
            {steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section section-dark">
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
    </>
  )
}
