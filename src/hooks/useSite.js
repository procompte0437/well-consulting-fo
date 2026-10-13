import { useContext } from 'react'
import { SiteContext } from '../context/site-context'

export function useSite() {
  return useContext(SiteContext)
}
