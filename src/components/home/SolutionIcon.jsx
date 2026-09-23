export default function SolutionIcon({ name }) {
  const paths = {
    support: <><path d="M5 17v-5a11 11 0 0 1 22 0v5M25 23v3H16" /><rect x="3" y="13" width="5" height="10" rx="2" /><rect x="24" y="13" width="5" height="10" rx="2" /></>,
    cloud: <><path d="M8 24h16a6 6 0 0 0 0-12 8 8 0 0 0-15-2 7 7 0 0 0-1 14Z" /><path d="m12 17 4-4 4 4M16 13v8" /></>,
    shield: <><path d="m16 3 11 5v8c0 6-11 13-11 13S5 22 5 16V8l11-5Z" /><path d="m11 16 3 3 7-7" /></>,
    network: <><rect x="11" y="3" width="10" height="7" rx="1" /><path d="M16 10v8M6 23v-5h20v5" /><rect x="2" y="23" width="8" height="6" rx="1" /><rect x="22" y="23" width="8" height="6" rx="1" /></>,
    systems: <><rect x="3" y="4" width="26" height="10" rx="1" /><rect x="3" y="18" width="26" height="10" rx="1" /><path d="M8 9h1m4 0h1M8 23h1m4 0h1M22 9h3m-3 14h3" /></>,
    strategy: <><path d="M4 28h24M7 23v-6m9 6V12m9 11V7M5 11l9-6 7 2 7-5" /></>,
  }
  return <svg className="solution-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
