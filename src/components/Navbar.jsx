import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Brand from './Brand.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { navigation } from '../data/navigation.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const headerRef = useRef(null)
  const { pathname } = useLocation()
  const [menuPath, setMenuPath] = useState(pathname)

  // Reset route-dependent menu state without remounting the shared header.
  if (menuPath !== pathname) {
    setMenuPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const close = () => setOpen(false)
    media.addEventListener('change', close)
    return () => media.removeEventListener('change', close)
  }, [])

  useEffect(() => {
    if (!open) return
    const dismiss = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', dismiss)
    return () => document.removeEventListener('pointerdown', dismiss)
  }, [open])

  return (
    <header className="site-header" ref={headerRef} onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
    }}>
      <div className="container navbar">
        <Brand />
        <button className="menu-toggle" type="button" ref={toggleRef}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open} aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav id="primary-navigation" className={`primary-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          <div className="nav-links">
            {navigation.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} onClick={() => {
                setOpen(false)
                toggleRef.current?.focus()
              }}>{label}</NavLink>
            ))}
          </div>
          <div className="nav-actions">
            <ThemeToggle />
            <Link className="button button-primary nav-cta" to="/contact" onClick={() => {
            setOpen(false)
            toggleRef.current?.focus()
          }}>
            Get a Free Consultation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
