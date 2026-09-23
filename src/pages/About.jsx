import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AboutSystemVisual from '../components/about/AboutSystemVisual.jsx'
import SolutionIcon from '../components/home/SolutionIcon.jsx'
import { principles, values } from '../data/about.js'
import { metrics, industries } from '../data/home.js'
import './About.css'

export default function About() {
  useEffect(() => {
    const description = document.querySelector('meta[name="description"]')
    if (!description) return
    const previous = description.content
    description.content = 'Learn how Nexora Solutions helps Malaysian businesses simplify technology through practical IT services, secure infrastructure and long-term support.'
    return () => { description.content = previous }
  }, [])

  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-page-heading">
        <div className="container">
          <p className="eyebrow">ABOUT NEXORA</p>
          <div className="about-hero-grid">
            <div className="about-hero-copy"><h1 id="about-page-heading">Technology should make business simpler, not more complicated.</h1><p>Nexora Solutions helps Malaysian businesses build practical, secure and scalable technology environments designed around the way they actually work.</p></div>
            <AboutSystemVisual />
          </div>
          <p className="about-hero-statement"><span aria-hidden="true" />Practical solutions. Clear guidance. Long-term partnership.</p>
        </div>
      </section>

      <section className="section about-story" aria-labelledby="about-story-heading">
        <div className="container about-editorial-grid">
          <div><p className="eyebrow">OUR STORY</p><h2 id="about-story-heading">We start with the business, then build the technology around it.</h2></div>
          <div className="about-story-copy"><p className="about-intro">Nexora Solutions was created around a simple idea: technology should support the way a business works, not force the business to work around technology.</p><p>We work with growing organisations to understand their operations, challenges and goals before recommending the systems, infrastructure and services that fit their needs.</p><p>From day-to-day IT support to cloud, cybersecurity and infrastructure projects, our approach remains practical — reduce unnecessary complexity, strengthen reliability and create technology foundations that can grow with the business.</p></div>
        </div>
      </section>

      <section className="section about-approach" aria-labelledby="about-approach-heading">
        <div className="container"><p className="eyebrow">OUR APPROACH</p><h2 id="about-approach-heading">Technology with a clear purpose.</h2>
          <ol className="about-principles">{principles.map(({ title, description }, index) => <li key={title}><span className="about-principle-number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
        </div>
      </section>

      <section className="section about-values" aria-labelledby="about-values-heading">
        <div className="container"><div className="about-values-heading"><p className="eyebrow">WHAT WE VALUE</p><h2 id="about-values-heading">The principles behind how we work.</h2></div>
          <div className="about-values-grid">{values.map(({ icon, title, description }) => <article key={title}><SolutionIcon name={icon} /><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="section about-snapshot" aria-labelledby="about-snapshot-heading">
        <div className="container about-editorial-grid"><div><p className="eyebrow">NEXORA AT A GLANCE</p><h2 id="about-snapshot-heading">Experience built around dependable technology.</h2><p className="about-disclosure">Illustrative figures for this fictional portfolio template; not independently verified business results.</p></div>
          <dl className="about-metrics">{metrics.map(({ value, label }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </div>
      </section>

      <section className="section about-clients" aria-labelledby="about-clients-heading">
        <div className="container about-editorial-grid"><div><p className="eyebrow">WHO WE WORK WITH</p><h2 id="about-clients-heading">Built for businesses that depend on technology.</h2></div><div><p className="about-clients-copy">From growing SMEs to established operational teams, Nexora supports organisations where reliable technology is essential to everyday work.</p><ul className="about-industry-list">{industries.map(({ name }) => <li key={name}><span aria-hidden="true" />{name}</li>)}</ul><Link className="button button-secondary" to="/services">Explore Our Services <span aria-hidden="true">→</span></Link></div></div>
      </section>

      <section className="section about-final-cta" aria-labelledby="about-cta-heading">
        <div className="container"><p className="eyebrow">ABOUT YOUR NEXT STEP</p><h2 id="about-cta-heading">Looking for a technology partner that understands your business?</h2><p>Tell us where you are today and where you're trying to go. We'll help you identify the technology that can support the journey.</p><div className="about-cta-actions"><Link className="button button-primary" to="/contact">Get a Free Consultation <span aria-hidden="true">→</span></Link><Link className="button button-secondary" to="/services">Explore Our Services <span aria-hidden="true">→</span></Link></div></div>
      </section>
    </div>
  )
}
