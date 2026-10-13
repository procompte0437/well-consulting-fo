import { useState } from 'react'
import { sendContact } from '../api/client'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  subject: '',
  message: '',
  website: '',
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    setFeedback('')

    try {
      const result = await sendContact(form)
      setStatus('success')
      setFeedback(result.message)
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setFeedback(error.message)
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form-grid">
        <label className="field">
          <span>Nom</span>
          <input name="name" value={form.name} onChange={update} required maxLength={120} autoComplete="name" />
        </label>
        <label className="field">
          <span>E-mail</span>
          <input name="email" type="email" value={form.email} onChange={update} required maxLength={180} autoComplete="email" />
        </label>
        <label className="field">
          <span>Téléphone</span>
          <input name="phone" value={form.phone} onChange={update} maxLength={40} autoComplete="tel" />
        </label>
        <label className="field">
          <span>Organisation</span>
          <input name="organization" value={form.organization} onChange={update} maxLength={160} autoComplete="organization" />
        </label>
      </div>
      <label className="field">
        <span>Objet</span>
        <input name="subject" value={form.subject} onChange={update} required maxLength={180} />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" value={form.message} onChange={update} required minLength={10} maxLength={4000} rows={6} />
      </label>
      <label className="hp" aria-hidden="true">
        Site web
        <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} />
      </label>
      <button className="btn btn-gold" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>
      {feedback ? (
        <p className={status === 'error' ? 'form-error' : 'form-success'} role="status">
          {feedback}
        </p>
      ) : null}
    </form>
  )
}
