import { Link } from 'react-router-dom'
import { whatsappContact } from '../../data/home.js'

export default function FinalCTA() {
  return (
    <section className="home-final-cta" aria-labelledby="final-cta-heading">
      <div className="container final-cta-inner">
        <div><p className="eyebrow">LET’S TAKE THE NEXT STEP</p><h2 id="final-cta-heading" className="home-heading">Ready to move your business forward?</h2><p>Tell us what you're trying to achieve. We'll help you identify the technology that can get you there.</p></div>
        <div className="final-cta-actions"><Link className="button button-primary" to="/contact">Get a Free Consultation <span aria-hidden="true">↗</span></Link><Link className="text-link" to={whatsappContact.to} aria-label="WhatsApp Our Team — contact page placeholder">{whatsappContact.label} <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  )
}
