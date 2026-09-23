import SolutionIcon from '../home/SolutionIcon.jsx'

export function ProjectsHeroVisual() {
  const areas = [{ name: 'Infrastructure', icon: 'network' }, { name: 'Cloud', icon: 'cloud' }, { name: 'Security', icon: 'shield' }, { name: 'Systems', icon: 'systems' }]
  return (
    <div className="projects-hero-visual" role="img" aria-label="Infrastructure, cloud, security and systems connect to practical business outcomes.">
      <span className="projects-visual-caption">FROM COMPLEXITY TO CLARITY</span>
      <div className="projects-outcome-map" aria-hidden="true"><div className="projects-map-inputs">{areas.map(({ name, icon }) => <div key={name}><SolutionIcon name={icon} /><span>{name}</span></div>)}</div><div className="projects-map-result"><span>THE COMMON GOAL</span><strong>Business{' '}<br />outcomes</strong><i /><span>Reliable. Secure. Connected.</span></div></div>
    </div>
  )
}

export function CaseStudyVisual({ project }) {
  return (
    <div className={`projects-study-visual projects-diagram-${project.id}`} aria-hidden="true">
      <div className="projects-diagram-heading"><SolutionIcon name={project.icon} /><span>{project.diagram[0]}</span></div>
      <svg className="projects-technical-drawing" viewBox="0 0 360 150" fill="none" stroke="currentColor" strokeWidth="1.5">
        {project.id === 'cloud' && <><path d="M80 104h200M110 104v24m140-24v24M180 88v16" /><path d="M150 84h64a19 19 0 0 0 0-38 31 31 0 0 0-58-9 24 24 0 0 0-6 47Z" /><rect x="95" y="128" width="30" height="13" /><rect x="235" y="128" width="30" height="13" /><path d="m172 65 8-8 8 8m-8-8v21" /></>}
        {project.id === 'network' && <><path d="M80 40h100v70h100M180 40h100M80 110h100" /><circle cx="180" cy="75" r="18" fill="var(--color-surface)" /><circle cx="180" cy="75" r="6" />{[[60,25],[260,25],[60,95],[260,95]].map(([x,y]) => <g key={`${x}-${y}`}><rect x={x} y={y} width="40" height="30" /><path d={`M${x+8} ${y+10}h24m-24 10h14`} /></g>)}</>}
        {project.id === 'security' && <><rect x="68" y="18" width="224" height="114" rx="5" strokeDasharray="4 5" /><rect x="95" y="36" width="170" height="78" rx="4" /><path d="m180 43 27 11v22c0 17-27 31-27 31s-27-14-27-31V54l27-11Z" /><path d="m168 74 9 9 17-20M110 64h22m-22 15h22m96-15h22m-22 15h22" /></>}
        {project.id === 'systems' && <><path d="M92 75h48m80 0h48m-149-5 7 5-7 5m120-10 7 5-7 5" /><rect x="28" y="48" width="64" height="54" /><rect x="140" y="38" width="80" height="74" /><rect x="268" y="48" width="64" height="54" /><path d="M42 63h36m-36 12h26m-26 12h18M157 57h46m-46 16h46m-46 16h30M282 63h36m-36 12h26m-26 12h18" /></>}
      </svg>
      <div className="projects-diagram-labels">{project.diagram.slice(1).map(label => <span key={label}>{label}</span>)}</div>
    </div>
  )
}
