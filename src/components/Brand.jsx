import { Link } from 'react-router-dom'

export default function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Nexora Solutions home">
      <svg className="brand-mark" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M5 29V7h7l12 15V7h7v22h-7L12 14v15H5Z" fill="currentColor" />
        <path d="M24 7h7v7h-7z" fill="#28b7be" />
      </svg>
      <span>nexora<span className="brand-subtitle">SOLUTIONS</span></span>
    </Link>
  )
}
