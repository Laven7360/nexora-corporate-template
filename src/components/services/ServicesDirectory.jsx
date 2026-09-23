import { Link } from 'react-router-dom'
import SolutionIcon from '../home/SolutionIcon.jsx'
import { services } from '../../data/services.js'

export default function ServicesDirectory() {
  return (
    <section className="services-directory" aria-labelledby="services-directory-heading">
      <div className="container services-directory-intro"><p className="eyebrow">WHAT WE DO</p><h2 id="services-directory-heading">Practical expertise across your technology environment.</h2></div>
      {services.map(({ id, icon, title, description, capabilities }, index) => (
        <article className="services-directory-row" key={id} aria-labelledby={`service-${id}`}>
          <div className="container services-row-inner">
            <div className="services-row-mark"><span aria-hidden="true">0{index + 1}</span><SolutionIcon name={icon} /></div>
            <div className="services-row-copy"><h3 id={`service-${id}`}>{title}</h3><p>{description}</p><Link className="services-text-link" to="/contact" aria-label={`Discuss ${title} with our team`}>Discuss This Service <span aria-hidden="true">↗</span></Link></div>
            <div className="services-capabilities"><p>HOW WE CAN HELP</p><ul>{capabilities.map(capability => <li key={capability}><span aria-hidden="true">✓</span>{capability}</li>)}</ul></div>
          </div>
        </article>
      ))}
    </section>
  )
}
