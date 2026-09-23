import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ServicesDirectory from '../components/services/ServicesDirectory.jsx'
import { FoundationVisual, ConnectedServicesVisual } from '../components/services/ServicesVisuals.jsx'
import { process, businessNeeds } from '../data/services.js'
import './Services.css'

export default function Services() {
  useEffect(() => {
    const description = document.querySelector('meta[name="description"]')
    if (!description) return
    const previous = description.content
    description.content = 'Explore Nexora Solutions’ managed IT, cloud, cybersecurity, infrastructure, business systems and technology consulting services for growing Malaysian businesses.'
    return () => { description.content = previous }
  }, [])

  return (
    <div className="services-page">
      <section className="section services-hero" aria-labelledby="services-page-heading"><div className="container services-hero-grid"><div><p className="eyebrow">OUR SERVICES</p><h1 id="services-page-heading">Technology that works around your business.</h1><p className="services-hero-description">From everyday IT operations to cloud, security and infrastructure, Nexora brings the technology your organisation depends on into one practical, connected approach.</p></div><FoundationVisual /></div></section>
      <ServicesDirectory />
      <section className="section services-connected" aria-labelledby="services-connected-heading"><div className="container services-connected-grid"><div><p className="eyebrow">BETTER TOGETHER</p><h2 id="services-connected-heading">Technology works better when everything works together.</h2><p>Individual solutions solve individual problems. We look at how your systems, infrastructure, security and people connect so improvements in one area support the rest of your business.</p></div><ConnectedServicesVisual /></div></section>
      <section className="section services-process" aria-labelledby="services-process-heading"><div className="container"><p className="eyebrow">HOW WE WORK</p><h2 id="services-process-heading">From requirement to reliable operation.</h2><ol className="services-process-list">{process.map(({ title, description }, index) => <li key={title}><span className="services-step-number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></div></section>
      <section className="section services-fit" aria-labelledby="services-fit-heading"><div className="container services-fit-grid"><div><p className="eyebrow">WHERE WE CAN HELP</p><h2 id="services-fit-heading">When technology starts getting in the way of business.</h2><p>You may not need a complete transformation. Sometimes the right improvement starts with fixing the technology problems that create friction every day.</p></div><ul className="services-needs">{businessNeeds.map(need => <li key={need}><span aria-hidden="true">✓</span><p>{need}</p></li>)}</ul></div></section>
      <section className="section services-cta" aria-labelledby="services-cta-heading"><div className="container services-cta-inner"><div><p className="eyebrow">START A CONVERSATION</p><h2 id="services-cta-heading">Not sure which technology service you need?</h2><p>Tell us what is happening in your business. We’ll help you identify where technology can make the biggest practical difference.</p></div><div className="services-cta-actions"><Link className="button button-primary" to="/contact">Talk to Our Team <span aria-hidden="true">→</span></Link><Link className="button button-secondary" to="/projects">View Our Projects <span aria-hidden="true">→</span></Link></div></div></section>
    </div>
  )
}
