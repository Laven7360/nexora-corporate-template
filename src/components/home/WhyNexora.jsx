import { reasons } from '../../data/home.js'
import SolutionIcon from './SolutionIcon.jsx'

export default function WhyNexora() {
  return (
    <section className="section home-why" aria-labelledby="why-heading">
      <div className="container why-grid">
        <div className="why-intro"><p className="eyebrow">WHY NEXORA</p><h2 id="why-heading" className="home-heading">A technology partner focused on what matters.</h2><p>From everyday IT operations to long-term transformation, we stay focused on technology that delivers practical business value.</p><div className="why-signature"><span aria-hidden="true" />Your business comes first.</div></div>
        <div className="why-reasons">{reasons.map(({ icon, title, description }) => <article key={title}><SolutionIcon name={icon} /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </div>
    </section>
  )
}
