import { industries } from '../../data/home.js'

export default function IndustriesSection() {
  return (
    <section className="section home-industries" aria-labelledby="industries-heading">
      <div className="container industries-grid">
        <div><p className="eyebrow">INDUSTRIES</p><h2 id="industries-heading" className="home-heading">Technology expertise across growing industries.</h2><p className="home-section-intro">Every organisation works differently. We adapt our solutions to your operational and compliance needs.</p><div className="industry-motif" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div></div>
        <ol className="industry-list">{industries.map(({ name, detail }, index) => <li key={name}><span className="industry-number">0{index + 1}</span><div><h3>{name}</h3><p>{detail}</p></div><span className="industry-marker" aria-hidden="true">+</span></li>)}</ol>
      </div>
    </section>
  )
}
