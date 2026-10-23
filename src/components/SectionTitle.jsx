export function SectionTitle({ kicker, title, text }) {
  return (
    <header className="section-head">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </header>
  )
}
