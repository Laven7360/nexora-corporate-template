import SolutionIcon from '../home/SolutionIcon.jsx'

export default function AboutSystemVisual() {
  return (
    <div className="about-system" role="img" aria-label="People, technology and growth connected through a shared business purpose.">
      <div className="about-system-label"><span>A CONNECTED PERSPECTIVE</span><span aria-hidden="true">↗</span></div>
      <div className="about-system-diagram" aria-hidden="true">
        <div className="about-system-axis" />
        <div className="about-system-node about-system-people"><span className="about-system-number">01 / THE STARTING POINT</span><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="16" cy="9" r="4" /><path d="M8 27v-5a8 8 0 0 1 16 0v5M6 7a4 4 0 0 0 0 8M26 7a4 4 0 0 1 0 8M3 25v-4a5 5 0 0 1 3-4m23 8v-4a5 5 0 0 0-3-4" /></svg><strong>People</strong><span>How your business works</span></div>
        <div className="about-system-purpose"><span>ONE SHARED PURPOSE</span><strong>Business, made simpler.</strong></div>
        <div className="about-system-node about-system-technology"><span className="about-system-number">02 / THE FOUNDATION</span><SolutionIcon name="network" /><strong>Technology</strong><span>Systems that work together</span></div>
        <div className="about-system-node about-system-growth"><span className="about-system-number">03 / THE POSSIBILITIES</span><SolutionIcon name="strategy" /><strong>Growth</strong><span>Ready for what comes next</span></div>
      </div>
      <p className="about-system-footnote"><span aria-hidden="true" />Connected thinking. Practical outcomes.</p>
    </div>
  )
}
