import { metrics } from '../../data/home.js'

export default function MetricsSection() {
  return (
    <section className="home-metrics" aria-label="Nexora in numbers">
      <div className="container">
        <dl className="metrics-list">
          {metrics.map(({ value, label }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </div>
    </section>
  )
}
