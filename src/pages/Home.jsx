import { Link } from 'react-router-dom'
import MetricsSection from '../components/home/MetricsSection.jsx'
import AboutPreview from '../components/home/AboutPreview.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import WhyNexora from '../components/home/WhyNexora.jsx'
import IndustriesSection from '../components/home/IndustriesSection.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import TestimonialsSection from '../components/home/TestimonialsSection.jsx'
import FinalCTA from '../components/home/FinalCTA.jsx'
import '../components/home/home.css'

function TechIcon({ type }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {type === 'cloud' && <path d="M9 24h15a6 6 0 0 0 0-12 8 8 0 0 0-15-2 7 7 0 0 0 0 14Z" />}
      {type === 'shield' && <><path d="m16 3 11 5v8c0 6-11 13-11 13S5 22 5 16V8l11-5Z" /><path d="m11 16 3 3 7-7" /></>}
      {type === 'network' && <><rect x="10" y="3" width="12" height="8" rx="1" /><path d="M16 11v7M6 23v-5h20v5" /><rect x="2" y="23" width="8" height="6" rx="1" /><rect x="22" y="23" width="8" height="6" rx="1" /></>}
    </svg>
  )
}

export default function Home() {
  return (
    <>
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span />Technology Solutions for Modern Businesses</p>
          <h1 id="hero-heading">Smart Technology.<br /><span>Stronger Business.</span></h1>
          <p className="hero-description">Practical IT solutions that help Malaysian businesses operate securely, efficiently and confidently.</p>
          <div className="hero-actions">
            <Link to="/services" className="button button-primary">Explore Our Solutions <span aria-hidden="true">↗</span></Link>
            <Link to="/contact" className="button button-secondary">Talk to Our Team <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-trust">
            <span className="trust-icon"><TechIcon type="shield" /></span>
            <p>Trusted technology partner for<br /><strong>growing Malaysian businesses</strong></p>
          </div>
        </div>
        <div className="technology-visual" role="img" aria-label="Cloud, security and infrastructure connected around your business">
          <div className="visual-orbit orbit-outer" /><div className="visual-orbit orbit-inner" />
          <span className="visual-label">CONNECTED BY DESIGN</span>
          <div className="connection-lines" aria-hidden="true">
            <span className="ecosystem-connector connector-cloud" />
            <span className="ecosystem-connector connector-security" />
            <span className="ecosystem-connector connector-network" />
          </div>
          <div className="tech-card cloud-card"><span className="tech-icon"><TechIcon type="cloud" /></span><div><span className="card-kicker">STAY CONNECTED</span><strong>Cloud solutions</strong><span className="card-detail">Built to grow with you</span></div><i className="status-dot" /></div>
          <div className="business-core"><span className="core-symbol" aria-hidden="true"><span /><span /><span /></span><span className="core-kicker">AT THE CENTRE</span><strong>Your business.</strong><span>Connected. Protected. Ready.</span></div>
          <div className="tech-card security-card"><span className="tech-icon teal"><TechIcon type="shield" /></span><div><span className="card-kicker">MOVE WITH CONFIDENCE</span><strong>Security first</strong><span className="card-detail">Protection at every layer</span></div></div>
          <div className="tech-card network-card"><span className="tech-icon"><TechIcon type="network" /></span><div><span className="card-kicker">A STRONG FOUNDATION</span><strong>Reliable infrastructure</strong><span className="card-detail">Ready for what’s next</span></div></div>
          <span className="visual-coordinate">PEOPLE. SYSTEMS. POSSIBILITIES.</span>
          <span className="orbit-node node-one" /><span className="orbit-node node-two" />
        </div>
      </div>
    </section>
    <MetricsSection />
    <AboutPreview />
    <ServicesPreview />
    <WhyNexora />
    <IndustriesSection />
    <FeaturedProjects />
    <TestimonialsSection />
    <FinalCTA />
    </>
  )
}

