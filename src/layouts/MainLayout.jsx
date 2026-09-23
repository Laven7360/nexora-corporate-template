import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import usePageReveal from '../hooks/usePageReveal.js'

export default function MainLayout() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)
  const mainRef = useRef(null)

  useEffect(() => {
    if (!hash) return
    let target
    try { target = document.getElementById(decodeURIComponent(hash.slice(1))) } catch { return }
    if (!target) return
    let addedTabIndex = false
    const restoreTabIndex = () => {
      if (addedTabIndex) target.removeAttribute('tabindex')
      addedTabIndex = false
    }
    const frame = requestAnimationFrame(() => {
      target.scrollIntoView({ block: 'start', behavior: 'instant' })
      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1')
        addedTabIndex = true
        target.addEventListener('blur', restoreTabIndex, { once: true })
      }
      target.focus({ preventScroll: true })
    })
    return () => {
      cancelAnimationFrame(frame)
      target.removeEventListener('blur', restoreTabIndex)
      restoreTabIndex()
    }
  }, [pathname, hash])

  useEffect(() => {
    if (previousPath.current !== pathname) {
      mainRef.current?.focus({ preventScroll: true })
      window.scrollTo({ top: 0, behavior: 'instant' })
      previousPath.current = pathname
    }
    const page = pathname === '/' ? 'Home' : pathname.slice(1).replace(/^./, (letter) => letter.toUpperCase())
    document.title = pathname === '/' ? 'Nexora Solutions | Business Technology & IT Solutions Malaysia' : pathname === '/about' ? 'About Nexora Solutions | Practical Technology for Business' : `${page} | Nexora Solutions`
  }, [pathname])

  // Measure reveal positions after route scrolling has reset the viewport.
  usePageReveal(mainRef, pathname)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main key={`page:${pathname}`} id="main-content" ref={mainRef} tabIndex={-1} className={`${pathname === '/' || pathname === '/about' ? 'page-main' : 'page-main placeholder-page container'}${hash ? '' : ' page-entrance'}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

