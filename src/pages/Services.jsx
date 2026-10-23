import { PageHero } from '../components/PageHero'
import { SectionTitle } from '../components/SectionTitle'
import { useSite } from '../hooks/useSite'
import { usePageTitle } from '../hooks/usePageTitle'

export function Services() {
  const { content } = useSite()
  const { company, services, domains, project_types: projectTypes } = content
  usePageTitle('Services')

  return (
    <>
      <PageHero
        kicker="Ce que nous faisons"
        title="Nos principales missions"
        text={company.baseline}
      />
      <section className="section">
        <div className="wrap cards">
          {services.map((service) => (
            <article className="card" id={`service-${service.number}`} key={service.number}>
              <span className="card-number">{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap">
          <SectionTitle kicker="Domaines d’intervention" title="Un large spectre d’expertises" />
          <ul className="chips">
            {domains.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <SectionTitle
            kicker="Nos terrains d’action"
            title="Types de projets accompagnés"
            text="Nous intervenons sur des projets internes, commerciaux, institutionnels ou entrepreneuriaux, notamment lorsqu’ils nécessitent la création ou l’évolution d’un outil numérique."
          />
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
