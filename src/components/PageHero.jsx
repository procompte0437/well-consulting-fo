export function PageHero({ index, kicker, title, text }) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-inner">
        <p className="kicker light">
          {index} · {kicker}
        </p>
        <h1>{title}</h1>
        {text ? <p className="lead">{text}</p> : null}
      </div>
    </section>
  )
}
