export function PageHero({ kicker, title, text }) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-inner">
        {kicker ? <p className="kicker light">{kicker}</p> : null}
        <h1>{title}</h1>
        {text ? <p className="lead">{text}</p> : null}
      </div>
    </section>
  )
}
