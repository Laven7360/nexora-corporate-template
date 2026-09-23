import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import EnquiryForm from '../components/contact/EnquiryForm.jsx'
import WhatsAppDemo from '../components/contact/WhatsAppDemo.jsx'
import { enquirySteps, quickPaths } from '../data/contact.js'
import './Contact.css'

export default function Contact() {
  useEffect(() => {
    const description = document.querySelector('meta[name="description"]')
    if (!description) return
    const previous = description.content
    description.content = 'Start a conversation with Nexora Solutions about managed IT, cloud, cybersecurity and business technology. Explore contact options and a demo enquiry form for this fictional Malaysian corporate template.'
    return () => { description.content = previous }
  }, [])

  return (
    <div className="contact-page">
      <section className="section contact-hero" aria-labelledby="contact-page-heading"><div className="container contact-hero-grid"><div><p className="eyebrow">LET’S TALK</p><h1 id="contact-page-heading">Let’s talk about<br />what your business needs.</h1><p>Whether you need help with day-to-day IT operations, cloud, cybersecurity, infrastructure or business systems, tell us what you're trying to improve.</p></div><div className="contact-conversation-visual" role="img" aria-label="Your business and its challenges are the starting point for a conversation."><span>EVERY CONVERSATION STARTS WITH YOU</span><div aria-hidden="true"><span>Your business</span><i /><span>Challenge</span><i /><strong>Let’s talk <span>↗</span></strong></div></div></div></section>
      <section className="section contact-enquiry" aria-labelledby="contact-enquiry-heading"><div className="container contact-enquiry-grid"><div className="contact-details"><p className="eyebrow">GET IN TOUCH</p><h2 id="contact-enquiry-heading">Start a conversation.</h2><p className="contact-intro">Tell us a little about your business and what you need help with. We'll use the information to understand your enquiry and determine the most practical next step.</p><dl className="contact-methods"><div><dt>Email</dt><dd><a href="mailto:s.lavenraj2002@gmail.com">s.lavenraj2002@gmail.com</a></dd></div><div><dt>Phone</dt><dd><a href="tel:+60167938894">+60 16-793 8894</a></dd></div><div><dt>Location</dt><dd>Kuala Lumpur, Malaysia</dd></div></dl><WhatsAppDemo id="contact-whatsapp-details">WhatsApp enquiry</WhatsAppDemo></div><EnquiryForm /></div></section>
      <section className="section contact-next" aria-labelledby="contact-next-heading"><div className="container"><p className="eyebrow">WHAT HAPPENS NEXT</p><h2 id="contact-next-heading">A straightforward next step.</h2><p className="contact-process-note">Here’s what you can expect after getting in touch.</p><ol className="contact-process">{enquirySteps.map(({ title, description }, index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></div></section>
      <section className="section contact-paths" aria-labelledby="contact-paths-heading"><div className="container"><div className="contact-paths-intro"><div><p className="eyebrow">HOW CAN WE HELP?</p><h2 id="contact-paths-heading">Start with what you know.</h2></div><p>You don't need to know the exact technology or service you need. Start with the problem you're trying to solve.</p></div><div className="contact-path-list">{quickPaths.map(({ title, label, to }) => <article key={title}><h3>{title}</h3>{to.startsWith('#') ? <a href={to}>{label} <span aria-hidden="true">→</span></a> : <Link to={to}>{label} <span aria-hidden="true">→</span></Link>}</article>)}</div></div></section>
      <section className="section contact-final" aria-labelledby="contact-final-heading"><div className="container contact-final-grid"><div><p className="eyebrow">LET’S FIND A WAY FORWARD</p><h2 id="contact-final-heading">Good technology starts<br />with a conversation.</h2><p>Tell us what's getting in the way, what you're planning, or what you want technology to do better.</p><div className="contact-final-actions"><a className="button button-primary" href="#contact-form">Talk to Our Team <span aria-hidden="true">→</span></a><WhatsAppDemo id="contact-whatsapp-final">WhatsApp Enquiry</WhatsAppDemo></div></div><div className="contact-location"><svg viewBox="0 0 200 130" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 35h160M20 65h160M20 95h160M40 15v100M70 15v100m60-100v100m30-100v100" opacity=".25" /><path d="M100 102s30-32 30-52a30 30 0 0 0-60 0c0 20 30 52 30 52Z" fill="var(--color-surface)" /><circle cx="100" cy="50" r="10" /></svg><span>Kuala Lumpur, Malaysia</span><p>Supporting Malaysian SMEs<br />and growing businesses.</p></div></div></section>
    </div>
  )
}
