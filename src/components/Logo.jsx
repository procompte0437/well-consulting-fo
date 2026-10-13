import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/" className="brand" aria-label="WELL-CONSULTING, accueil">
      <img src="/logo/logo_well-consulting.png?v=2" alt="" />
    </Link>
  )
}
