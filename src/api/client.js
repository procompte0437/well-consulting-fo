const base = import.meta.env.VITE_API_URL || ''

export async function fetchContent() {
  const response = await fetch(`${base}/api/content`, {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    throw new Error('Contenu indisponible')
  }

  return response.json()
}

export async function sendContact(payload) {
  const response = await fetch(`${base}/api/contacts`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const firstError = data.errors ? Object.values(data.errors).flat()[0] : data.message
    throw new Error(firstError || 'Envoi impossible pour le moment.')
  }

  return data
}
