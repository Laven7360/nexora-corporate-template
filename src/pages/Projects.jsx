import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CaseStudy from '../components/projects/CaseStudy.jsx'
import { ProjectsHeroVisual } from '../components/projects/ProjectVisuals.jsx'
import { caseStudies, projectProcess, projectPrinciples } from '../data/projects.js'
import './Projects.css'

export default function Projects() {
  useEffect(() => {
    const description = document.querySelector('meta[name="description"]')
    if (!description) return
    const previous = description.content
    description.content = 'Explore illustrative Nexora Solutions technology projects across cloud, infrastructure, cybersecurity, networking and business systems.'
    return () => { description.content = previous }
  }, [])

  return (
    <div className="projects-page">
      <section className="section projects-hero" aria-labelledby="projects-page-heading"><div className="container projects-hero-grid"><div><p className="eyebrow">SELECTED PROJECTS</p><h1 id="projects-page-heading">Technology applied to real business challenges.</h1><p className="projects-hero-copy">Explore examples of how practical technology solutions can improve reliability, security, connectivity and day-to-day operations.</p></div><ProjectsHeroVisual /></div></section>
      <section className="projects-selected" aria-labelledby="projects-selected-heading"><div className="container projects-selected-intro"><div><p className="eyebrow">SELECTED WORK</p><h2 id="projects-selected-heading">Different challenges.<br />Practical solutions.</h2></div><div><p>Every organisation has different requirements. These examples show how Nexora’s services can come together around operational needs, from modernising infrastructure to connecting everyday workflows.</p><p className="projects-disclosure">Illustrative case studies created for this portfolio template. All organisations and outcomes are fictional.</p></div></div>{caseStudies.map((project, index) => <CaseStudy key={project.id} project={project} index={index} />)}</section>
      <section className="section projects-method" aria-labelledby="projects-method-heading"><div className="container"><div className="projects-method-intro"><div><p className="eyebrow">FROM CHALLENGE TO OUTCOME</p><h2 id="projects-method-heading">Good technology projects start with the problem, not the product.</h2></div><p>Nexora begins by understanding what is getting in the way of the business before deciding which technologies or services should be involved.</p></div><ol className="projects-method-flow">{projectProcess.map((step, index) => <li key={step}><span className="projects-method-index" aria-hidden="true">0{index + 1}</span><span>{step}</span>{index < projectProcess.length - 1 && <span className="projects-flow-arrow" aria-hidden="true">→</span>}</li>)}</ol></div></section>
      <section className="section projects-principles" aria-labelledby="projects-principles-heading"><div className="container projects-principles-grid"><div><p className="eyebrow">WHAT GUIDES THE WORK</p><h2 id="projects-principles-heading">Built around practical outcomes.</h2></div><ol>{projectPrinciples.map(({ title, description }, index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></div></section>
      <section className="section projects-cta" aria-labelledby="projects-cta-heading"><div className="container projects-cta-inner"><div><p className="eyebrow">YOUR NEXT PROJECT</p><h2 id="projects-cta-heading">Have a technology challenge in mind?</h2><p>Tell us what you are trying to improve. We’ll help you identify a practical way forward.</p></div><div className="projects-cta-actions"><Link className="button button-primary" to="/contact">Talk to Our Team <span aria-hidden="true">→</span></Link><Link className="button button-secondary" to="/services">Explore Our Services <span aria-hidden="true">→</span></Link></div></div></section>
    </div>
  )
}
