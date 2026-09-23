# Nexora Solutions — Corporate Template

A fictional Malaysian B2B technology company portfolio template built with React, Vite, React Router and custom CSS.

## Live Demo

[View Live Demo](https://nexora-corporate-template.vercel.app/)

## Commands

- `npm install` installs dependencies.
- `npm run dev` starts the development server.
- `npm run build` creates the production build.
- `npm run preview` previews the production build.
- `npm run lint` runs Oxlint.

On Windows PowerShell with script execution disabled, use `npm.cmd` in place of `npm`.

## Current scope

The website includes complete Home, About, Services, Projects and Contact pages, with shared navigation and footer, responsive layouts, light and dark themes, page transitions, scroll-reveal effects and a consistent corporate visual identity.

## Structure

- `src/components`: shared Brand, Navbar and Footer.
- `src/components/home`: eight homepage sections, shared SVG icon component and isolated homepage styles.
- `src/data/home.js`: editable metrics, services, reasons, industries, projects, testimonials and safe WhatsApp placeholder configuration.
- `src/data/navigation.js`: navigation and service labels.
- `src/layouts/MainLayout.jsx`: shared shell, route focus and scroll handling.
- `src/pages`: complete Home, About, Services, Projects and Contact pages.
- `src/index.css`: design tokens, global styles, component styles and responsive rules.
- `src/assets`: reserved for future assets.

## Routes

`/`, `/about`, `/services`, `/projects`, `/contact` share MainLayout.

The hero and navigation CTAs link to the placeholder Services and Contact pages. Service footer links lead to `/services`. The WhatsApp enquiry is a placeholder that leads to `/contact`; it does not open a live WhatsApp conversation. The displayed contact details are s.lavenraj2002@gmail.com and +60 16-793 8894, with mailto and telephone links. The enquiry form remains a non-transmitting demo, and WhatsApp remains an unconnected placeholder.

## Design

Manrope is loaded through Google Fonts with local system fallbacks. CSS custom properties control colors, typography, spacing, container width and buttons. The layout switches to mobile navigation below 1024px and a rearranged hero illustration below 600px. Reduced-motion settings disable transitions.

## Homepage customisation

Edit the structured content in src/data/home.js. Case studies, figures and testimonials are fictional template examples; section-level notes identify the project and testimonial examples. The final WhatsApp action uses a centralised internal contact-page destination and never opens a real number.

Homepage content uses three-column service layouts on desktop, two columns on tablet and one on small screens. Metrics use two columns below 768px. Case studies become horizontal panels on tablet and stack on mobile; testimonials stack below 768px. The new section styles are isolated in src/components/home/home.css.

