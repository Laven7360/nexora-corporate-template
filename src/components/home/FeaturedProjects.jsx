import { Link } from 'react-router-dom'
import { projects } from '../../data/home.js'
import SolutionIcon from './SolutionIcon.jsx'

export default function FeaturedProjects() {
  return (
    <section className="section home-projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="home-section-header"><div><p className="eyebrow">OUR WORK</p><h2 id="projects-heading" className="home-heading">Solutions delivering measurable business impact.</h2></div><Link className="text-link" to="/projects">View Our Projects <span aria-hidden="true">↗</span></Link></div>
        <p className="template-note">Illustrative case studies created for this portfolio template. Clients and results are fictional.</p>
        <div className="project-grid">{projects.map((project, index) => (
          <article className="project-study" key={project.title}>
            <div className="project-label"><span>{project.sector}</span><span>0{index + 1}</span></div>
            <div className="project-result"><SolutionIcon name={project.icon} /><strong>{project.metric}</strong><span>{project.result}</span></div>
            <div className="project-copy"><h3>{project.title}</h3><div className="project-client"><strong>{project.client}</strong><span>{project.location}</span></div><p>{project.summary}</p></div>
          </article>
        ))}</div>
      </div>
    </section>
  )
}
