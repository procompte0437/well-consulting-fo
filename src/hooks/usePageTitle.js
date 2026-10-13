import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} · WELL-CONSULTING`
      : 'WELL-CONSULTING · Des idées aux solutions.'
  }, [title])
}
