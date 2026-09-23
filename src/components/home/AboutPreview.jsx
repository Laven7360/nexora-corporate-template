import { Link } from 'react-router-dom'

export default function AboutPreview() {
  return (
    <section className="section home-about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="operations-visual" role="img" aria-label="A connected foundation of infrastructure, security and cloud supports your people, workflows and business operations.">
          <div className="operations-caption"><span>NEXORA / CONNECTED FOUNDATIONS</span><span aria-hidden="true">↗</span></div>
          <div className="operations-business"><span>BUILT AROUND WHAT MATTERS</span><strong>Your everyday operations</strong><div><span>People</span><span>Workflows</span><span>Growth</span></div></div>
          <div className="operations-connectors" aria-hidden="true"><i /><i /><i /></div>
          <div className="operations-layers"><span>Cloud</span><span>Security</span><span>Infrastructure</span></div>
          <div className="operations-foundation"><span aria-hidden="true">✓</span> One dependable technology foundation</div>
          <p>LESS COMPLEXITY. MORE POSSIBILITY.</p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">ABOUT NEXORA</p>
          <h2 id="about-heading" className="home-heading">Technology built around your business.</h2>
          <p className="home-lead">Good technology starts with understanding how your business works.</p>
          <p>We help Malaysian businesses work more effectively with practical, secure and scalable IT solutions. By understanding your needs first, we reduce complexity and make technology easier to manage.</p>
          <p>From reliable implementation to ongoing guidance, we’re here to be a long-term technology partner as your business grows.</p>
          <Link className="text-link" to="/about">Discover Our Company <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  )
}
