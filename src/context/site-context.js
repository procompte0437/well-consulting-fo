import { createContext } from 'react'
import { fallbackContent } from '../content/fallback'

export const SiteContext = createContext({
  content: fallbackContent,
  fromApi: false,
})
