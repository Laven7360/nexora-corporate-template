import { testimonials } from '../../data/home.js'

export default function TestimonialsSection() {
  return (
    <section className="section home-testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="testimonial-heading"><p className="eyebrow">CLIENT PERSPECTIVES</p><h2 id="testimonials-heading" className="home-heading">Trusted by businesses that depend on technology.</h2><p className="template-note">Demo testimonials with fictional people and companies.</p></div>
        <div className="testimonial-grid">{testimonials.map(({ quote, name, role, company, initials }) => (
          <figure className="testimonial" key={name}><span className="quote-mark" aria-hidden="true">“</span><blockquote><p>{quote}</p></blockquote><figcaption><span className="person-initials" aria-hidden="true">{initials}</span><div><strong>{name}</strong><span>{role}</span><span>{company}</span></div></figcaption></figure>
        ))}</div>
      </div>
    </section>
  )
}
