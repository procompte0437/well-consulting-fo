import { useState } from 'react'

const STORAGE_KEY = 'well-consulting-cookie-choice'

export function CookieNotice() {
  const [visible, setVisible] = useState(() => localStorage.getItem(STORAGE_KEY) !== 'ok')
  const [more, setMore] = useState(false)

  if (!visible) return null

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'ok')
    setVisible(false)
  }

  return (
    <aside className="cookie" aria-label="Information sur les cookies">
      <div className="wrap cookie-inner">
        <div>
          <p className="cookie-title">Ce site web utilise des cookies</p>
          <p>
            Ce bandeau mémorise uniquement votre choix dans ce navigateur. WELL-CONSULTING n’utilise pas de cookies de suivi.
          </p>
          {more ? (
            <p>
              Le bouton Ok enregistre ce choix sur votre appareil afin de ne plus afficher le message. Aucune donnée n’est transmise à un service tiers.
            </p>
          ) : null}
        </div>
        <div className="cookie-actions">
          <button type="button" className="btn btn-blue" onClick={accept}>Ok</button>
          <button type="button" className="btn btn-line" onClick={() => setMore((value) => !value)}>
            {more ? 'Réduire' : 'En savoir plus'}
          </button>
        </div>
      </div>
    </aside>
  )
}
