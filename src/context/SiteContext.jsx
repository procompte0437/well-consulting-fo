import { useEffect, useState } from 'react'
import { fetchContent } from '../api/client'
import { fallbackContent } from '../content/fallback'
import { SiteContext } from './site-context'

export function SiteProvider({ children }) {
  const [content, setContent] = useState(fallbackContent)
  const [fromApi, setFromApi] = useState(false)

  useEffect(() => {
    let active = true

    fetchContent()
      .then((data) => {
        if (active && data?.company) {
          setContent(data)
          setFromApi(true)
        }
      })
      .catch(() => {
        if (active) setFromApi(false)
      })

    return () => {
      active = false
    }
  }, [])

  return <SiteContext.Provider value={{ content, fromApi }}>{children}</SiteContext.Provider>
}
