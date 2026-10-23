const marks = {
  code: (
    <>
      <path d="M18 16 11 24l7 8" />
      <path d="M30 16l7 8-7 8" />
      <path d="M27 14 21 34" />
    </>
  ),
  window: (
    <>
      <rect x="10" y="12" width="28" height="22" rx="2" />
      <path d="M10 18h28" />
    </>
  ),
  nodes: (
    <>
      <rect x="8" y="18" width="10" height="10" rx="1.5" />
      <rect x="30" y="10" width="10" height="10" rx="1.5" />
      <rect x="30" y="28" width="10" height="10" rx="1.5" />
      <path d="M18 23h8M26 18l4-3M26 28l4 3" />
    </>
  ),
  clipboard: (
    <>
      <rect x="13" y="12" width="22" height="26" rx="2" />
      <path d="M19 12.5v-1.5a2.5 2.5 0 0 1 2.5-2.5h5A2.5 2.5 0 0 1 29 11v1.5" />
      <path d="M18 22h12M18 27h8" />
    </>
  ),
  bulb: (
    <>
      <path d="M24 10a9 9 0 0 0-5 16.4V30h10v-3.6A9 9 0 0 0 24 10Z" />
      <path d="M20 34h8M21 37h6" />
    </>
  ),
  refresh: (
    <>
      <path d="M16 18a9 9 0 0 1 15-3l2 2" />
      <path d="M33 11v6h-6" />
      <path d="M32 30a9 9 0 0 1-15 3l-2-2" />
      <path d="M15 37v-6h6" />
    </>
  ),
}

export function ServiceGlyph({ name }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {marks[name]}
      </g>
    </svg>
  )
}
