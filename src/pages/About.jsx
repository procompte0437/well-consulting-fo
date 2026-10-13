import { PageHero } from '../components/PageHero'
import { SectionTitle } from '../components/SectionTitle'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

export function About() {
  const { content } = useSite()
  const { company, values } = content
  usePageTitle('À propos')

  const identity = [
    ['Dénomination', company.name],
    ['Nature', company.nature],
    ['Activités principales', company.activities],
    ['Secteur', company.sector],
    ['Adresse', company.address],
  ]

  return (
    <>
      <PageHero
        index="01"
        kicker="Qui sommes-nous"
        title="À propos de WELL-CONSULTING"
        text={company.tagline}
      />
      <section className="section">
        <div className="wrap prose">
          <p className="lead-dark">{company.about}</p>
          <p>{company.method}</p>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap split">
          <SectionTitle index="01" kicker="Vision" title="La technologie comme levier accessible." text={company.vision} />
          <dl className="identity">
            {identity.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
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
    </>
  )
}
