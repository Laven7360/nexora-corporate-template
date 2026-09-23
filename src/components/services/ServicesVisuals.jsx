import SolutionIcon from '../home/SolutionIcon.jsx'
import { foundation, services } from '../../data/services.js'

export function FoundationVisual() {
  return (
    <div className="services-foundation" role="img" aria-label="Operations, cloud, security and infrastructure join into one connected technology foundation.">
      <p className="services-diagram-label">DESIGNED TO WORK AS ONE</p>
      <div className="services-foundation-branches" aria-hidden="true">{foundation.map(({ label, icon }) => <div key={label}><SolutionIcon name={icon} /><span>{label}</span></div>)}</div>
      <div className="services-foundation-base" aria-hidden="true"><span>ONE CONNECTED</span><strong>Technology foundation</strong></div>
    </div>
  )
}

export function ConnectedServicesVisual() {
  return (
    <div className="services-connected-visual" role="img" aria-label="All six Nexora services work together around your business.">
      <div className="services-connected-centre" aria-hidden="true"><span>AT THE CENTRE</span><strong>Your business</strong><i /></div>
      <div className="services-connected-orbit" aria-hidden="true">{services.map(({ id, title, icon }) => <div key={id}><SolutionIcon name={icon} /><span>{title}</span></div>)}</div>
    </div>
  )
}
