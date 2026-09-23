import { useEffect } from 'react'

// Semantic groups across the five pages, without changing approved page markup.
const groups = [
  '.metrics-list > div', '.about-grid > div', '.home-section-header', '.service-item',
  '.why-grid > div', '.industries-grid > div', '.industry-list > li', '.project-study',
  '.testimonial-heading', '.testimonial', '.final-cta-inner > div',
  '.about-editorial-grid > div', '.about-metrics > div', '.about-principles > li',
  '.about-values-heading', '.about-values-grid > article', '.about-final-cta > .container',
  '.services-directory-intro', '.services-directory-row', '.services-connected-grid > div',
  '.services-process h2', '.services-process-list > li', '.services-fit-grid > div',
  '.services-needs > li', '.services-cta-inner > div', '.projects-selected-intro > div',
  '.projects-study-heading', '.projects-study-main', '.projects-study-aside',
  '.projects-method-intro > div', '.projects-method-intro > p', '.projects-method-flow > li',
  '.projects-principles-grid > div', '.projects-principles li', '.projects-cta-inner > div',
  '.contact-enquiry-grid > div', '.contact-form', '.contact-next h2', '.contact-process > li',
  '.contact-paths-intro > div', '.contact-paths-intro > p', '.contact-path-list > article',
  '.contact-final-grid > div',
].join(',')

export default function usePageReveal(mainRef, pathname) {
  useEffect(() => {
    const main = mainRef.current
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!main || motion.matches || !('IntersectionObserver' in window)) return
    const candidates = [...main.querySelectorAll(groups)]
    // Reveal leaves only, so nested groups never wait for a hidden parent.
    const elements = candidates.filter(element => !candidates.some(other => other !== element && element.contains(other)))
    const show = element => {
      element.classList.remove('reveal-pending')
      observer.unobserve(element)
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) show(entry.target) })
    }, { rootMargin: '0px 0px 60px 0px', threshold: 0 })
    elements.forEach(element => {
      if (element.getBoundingClientRect().top <= window.innerHeight) return
      const siblings = [...element.parentElement.children].filter(child => elements.includes(child))
      element.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(element), 3) * 80}ms`)
      element.classList.add('reveal-enabled', 'reveal-pending')
      observer.observe(element)
    })
    const revealTarget = target => {
      if (!(target instanceof Element)) return
      elements.forEach(element => {
        if (element.contains(target) || target.contains(element)) {
          element.style.setProperty('--reveal-delay', '0ms')
          element.classList.remove('reveal-enabled')
          show(element)
        }
      })
    }
    const onFocus = event => revealTarget(event.target)
    const onHash = () => {
      try { revealTarget(document.getElementById(decodeURIComponent(window.location.hash.slice(1)))) } catch { /* Invalid hashes are ignored. */ }
    }
    const onMotion = () => {
      if (motion.matches) elements.forEach(element => { element.classList.remove('reveal-enabled'); show(element) })
    }
    main.addEventListener('focusin', onFocus)
    window.addEventListener('hashchange', onHash)
    motion.addEventListener('change', onMotion)
    onHash()
    return () => {
      observer.disconnect()
      main.removeEventListener('focusin', onFocus)
      window.removeEventListener('hashchange', onHash)
      motion.removeEventListener('change', onMotion)
      elements.forEach(element => {
        element.classList.remove('reveal-enabled', 'reveal-pending')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [mainRef, pathname])
}
