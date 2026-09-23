import { Link } from 'react-router-dom'
import Brand from './Brand.jsx'
import { navigation, services } from '../data/navigation.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-company">
          <Brand />
          <p className="footer-tagline">Technology that moves<br />your business forward.</p>
          <p>Practical technology expertise for Malaysian SMEs and growing businesses.</p>
          <span className="location-label"><span aria-hidden="true">◉</span> Kuala Lumpur, Malaysia</span>
        </div>
        <nav aria-label="Footer navigation">
          <h2>Company</h2>
          <ul>{navigation.map(({ to, label }) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Services">
          <h2>Our expertise</h2>
          <ul>{services.map((service) => <li key={service}><Link to="/services">{service}</Link></li>)}</ul>
        </nav>
        <div className="footer-contact">
          <h2>Let’s talk</h2>
          <p>Good technology starts with<br />a conversation.</p>
          <a href="mailto:s.lavenraj2002@gmail.com">s.lavenraj2002@gmail.com</a>
          <p className="phone-placeholder"><a href="tel:+60167938894">+60 16-793 8894</a></p>
          <Link className="whatsapp-link" to="/contact" aria-label="WhatsApp enquiry placeholder — go to Contact">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8 8.6 8.6 0 0 1-3.5-.8L4 20l1.2-4.3A8 8 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.6" /><path d="M9 8c0 3.5 2 5.5 5.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            WhatsApp enquiry <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Nexora Solutions Sdn. Bhd. All rights reserved.</p>
        <p>Fictional company · Portfolio template</p>
      </div>
    </footer>
  )
}

