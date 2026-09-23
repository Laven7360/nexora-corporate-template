import { Link } from 'react-router-dom'
import { services } from '../../data/home.js'
import SolutionIcon from './SolutionIcon.jsx'

export default function ServicesPreview() {
  return (
    <section className="section home-services" aria-labelledby="services-heading">
      <div className="container">
        <div className="home-section-header">
          <div><p className="eyebrow">WHAT WE DO</p><h2 id="services-heading" className="home-heading">Technology solutions designed to move businesses forward.</h2></div>
          <p className="home-section-intro">End-to-end technology services that bring your systems, people and operations together, with room to grow.</p>
        </div>
        <div className="services-editorial">
          {services.map(({ icon, title, description }, index) => (
            <article className="service-item" key={title}>
              <div className="service-item-top"><SolutionIcon name={icon} /><span>0{index + 1}</span></div>
              <h3>{title}</h3><p>{description}</p>
              <Link className="text-link" to="/services" aria-label={`Learn more about ${title}`}>Learn More <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
        <div className="services-bottom"><span>One partner. Expertise across your technology landscape.</span><Link className="button button-secondary" to="/services">View All Services <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  )
}
