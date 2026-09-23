import { Link } from 'react-router-dom'
import { CaseStudyVisual } from './ProjectVisuals.jsx'

export default function CaseStudy({ project, index }) {
  return (
    <article className="projects-study" aria-labelledby={`project-${project.id}`}>
      <div className="container">
        <div className="projects-study-heading"><span className="projects-study-number" aria-hidden="true">0{index + 1}</span><div><p className="eyebrow">{project.category}</p><h3 id={`project-${project.id}`}>{project.title}</h3><p className="projects-client">{project.client}</p></div></div>
        <div className="projects-study-grid">
          <div className="projects-study-main"><div className="projects-narrative"><div><h4>Challenge</h4><p>{project.challenge}</p></div><div><h4>Solution</h4><p>{project.solution}</p></div></div><div className="projects-service-labels"><h4>Services involved</h4><ul>{project.services.map(service => <li key={service}><Link to="/services">{service}<span aria-hidden="true"> ↗</span></Link></li>)}</ul></div></div>
          <div className="projects-study-aside"><CaseStudyVisual project={project} /><div className="projects-outcomes"><h4>Illustrative outcomes</h4><ul>{project.outcomes.map(outcome => <li key={outcome}><span aria-hidden="true">✓</span>{outcome}</li>)}</ul></div></div>
        </div>
      </div>
    </article>
  )
}
