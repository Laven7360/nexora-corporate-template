import { useEffect, useRef, useState } from 'react'
import { serviceOptions, validateEnquiry } from './enquiry.js'

export default function EnquiryForm() {
  const [errors, setErrors] = useState({})
  const [complete, setComplete] = useState(false)
  const statusRef = useRef(null)
  useEffect(() => { if (complete) statusRef.current?.focus() }, [complete])

  function handleSubmit(event) {
    event.preventDefault()
    setComplete(false)
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form))
    const nextErrors = validateEnquiry(values)
    setErrors(nextErrors)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      form.elements.namedItem(firstError)?.focus()
      return
    }
    // Integration point: connect an approved form service here before enabling live delivery.
    // Demo mode deliberately makes no network request and retains fields only in this page.
    setComplete(true)
  }

  const validationProps = name => ({
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `enquiry-${name}-error` : undefined,
  })

  return (
    <form id="contact-form" className="contact-form" noValidate onSubmit={handleSubmit} aria-labelledby="contact-form-heading" aria-describedby="contact-demo-note" onChange={() => { if (complete) setComplete(false) }}>
      <div className="contact-form-heading"><h3 id="contact-form-heading">Tell us how we can help.</h3><p>Fields marked * are required.</p></div>
      <p id="contact-demo-note" className="contact-form-note">Demo form — submissions are not sent or stored.</p>
      <div className="contact-form-grid">
        <div className="contact-field"><label htmlFor="enquiry-name">Name <span aria-hidden="true">*</span></label><input id="enquiry-name" name="name" autoComplete="name" required maxLength={100} {...validationProps('name')} />{errors.name && <p className="contact-error" id="enquiry-name-error">{errors.name}</p>}</div>
        <div className="contact-field"><label htmlFor="enquiry-company">Company</label><input id="enquiry-company" name="company" autoComplete="organization" maxLength={150} /></div>
        <div className="contact-field"><label htmlFor="enquiry-email">Work Email <span aria-hidden="true">*</span></label><input id="enquiry-email" name="email" type="email" autoComplete="email" required maxLength={254} {...validationProps('email')} />{errors.email && <p className="contact-error" id="enquiry-email-error">{errors.email}</p>}</div>
        <div className="contact-field"><label htmlFor="enquiry-phone">Phone</label><input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} /></div>
        <div className="contact-field contact-field-wide"><label htmlFor="enquiry-service">What can we help with? <span aria-hidden="true">*</span></label><select id="enquiry-service" name="service" required defaultValue="" {...validationProps('service')}><option value="" disabled>Select a service</option>{serviceOptions.map(service => <option key={service} value={service}>{service}</option>)}</select>{errors.service && <p className="contact-error" id="enquiry-service-error">{errors.service}</p>}</div>
        <div className="contact-field contact-field-wide"><label htmlFor="enquiry-requirements">Tell us about your requirements <span aria-hidden="true">*</span></label><textarea id="enquiry-requirements" name="requirements" required rows={5} maxLength={5000} placeholder="Tell us what you're trying to improve, any current challenges, and anything else that would help us understand your requirements." {...validationProps('requirements')} />{errors.requirements && <p className="contact-error" id="enquiry-requirements-error">{errors.requirements}</p>}</div>
      </div>
      {Object.keys(errors).length > 0 && <p role="alert" className="contact-error-summary">Please check the highlighted fields. Nothing has been sent.</p>}
      <button className="button button-primary" type="submit">Send Enquiry <span aria-hidden="true">→</span></button>
      <div className="contact-form-status" role="status" aria-live="polite">{complete && <p ref={statusRef} tabIndex={-1}>Demo complete — your enquiry passed validation. No message was sent or saved. Your entries remain here for review.</p>}</div>
    </form>
  )
}
