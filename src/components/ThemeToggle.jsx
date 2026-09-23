import { useEffect, useRef, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => typeof document === 'undefined' ? 'light' : document.documentElement.dataset.theme || 'light')
  const explicitlySelected = useRef(false)
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = value => {
      document.documentElement.dataset.theme = value
      document.documentElement.style.colorScheme = value
      setTheme(value)
    }
    const systemChange = () => {
      if (explicitlySelected.current) return
      let saved
      try { saved = localStorage.getItem('nexora-theme') } catch { /* System preference still works. */ }
      if (saved !== 'light' && saved !== 'dark') apply(media.matches ? 'dark' : 'light')
    }
    const storageChange = event => {
      if (event.key === 'nexora-theme' || event.key === null) {
        explicitlySelected.current = event.newValue === 'light' || event.newValue === 'dark'
        apply(event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : media.matches ? 'dark' : 'light')
      }
    }
    media.addEventListener('change', systemChange)
    window.addEventListener('storage', storageChange)
    return () => {
      media.removeEventListener('change', systemChange)
      window.removeEventListener('storage', storageChange)
    }
  }, [])
  function toggle() {
    explicitlySelected.current = true
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    document.documentElement.style.colorScheme = next
    setTheme(next)
    try { localStorage.setItem('nexora-theme', next) } catch { /* Keep the in-session selection. */ }
  }
  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {theme === 'dark' ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></> : <path d="M20 14a8.5 8.5 0 0 1-10-10A8.5 8.5 0 1 0 20 14Z" />}
      </svg>
    </button>
  )
}
