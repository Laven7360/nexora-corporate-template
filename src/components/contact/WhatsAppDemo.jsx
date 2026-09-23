import { useState } from 'react'

export default function WhatsAppDemo({ id, children }) {
  const [shown, setShown] = useState(false)
  return (
    <div className="contact-whatsapp">
      <button className="contact-whatsapp-button" type="button" aria-controls={id} aria-expanded={shown} onClick={() => setShown(!shown)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8 8.6 8.6 0 0 1-3.5-.8L4 20l1.2-4.3A8 8 0 1 1 20 11.5Z" /><path d="M9 8c0 3.5 2 5.5 5.5 6" strokeLinecap="round" /></svg>{children}<span aria-hidden="true">↗</span></button>
      <div id={id} role="status">{shown && <p>Demo only — no WhatsApp number is connected. You can try the <a href="#contact-form">demo enquiry form</a> instead; nothing will be sent.</p>}</div>
    </div>
  )
}
