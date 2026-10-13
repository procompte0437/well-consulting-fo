export function SectionTitle({ index, kicker, title, text }) {
  return (
    <header className="section-head">
      <p className="kicker">
        {index}
        {kicker ? <span> · {kicker}</span> : null}
      </p>
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </header>
  )
}
