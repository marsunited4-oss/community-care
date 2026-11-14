import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { services } from '../data/services'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function SectionTitle({ eyebrow, title, center = false }) {
  return (
    <div className={`section-title ${center ? 'section-title--center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
    </div>
  )
}

export function PageBanner({ title, image, crumbs = [] }) {
  return (
    <section className="banner">
      <div className="banner__photo" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <img src="/logos/logo-mark-white.svg" alt="" className="banner__ring" aria-hidden="true" />
      <div className="container banner__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <ChevronRight size={14} aria-hidden="true" />
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export function ServiceCard({ service }) {
  const num = String(services.indexOf(service) + 1).padStart(2, '0')
  return (
    <article className="service-card">
      <div className="service-card__media">
        <img src={service.image} alt="" loading="lazy" />
      </div>
      <div className="service-card__body">
        <span className="service-card__num" aria-hidden="true">
          {num}
        </span>
        <h3>
          <Link to={`/services/${service.slug}`} className="service-card__link">
            {service.title}
          </Link>
        </h3>
        <p>{service.excerpt}</p>
        <span className="service-card__more" aria-hidden="true">
          Learn more <ArrowRight size={16} />
        </span>
      </div>
    </article>
  )
}

export function CTA() {
  return (
    <section className="section section--cta">
      <div className="container">
        <div className="cta">
          <img src="/logos/logo-mark-white.svg" alt="" className="cta__ring" aria-hidden="true" />
          <div className="cta__text">
            <h2>Finding the right care shouldn’t feel overwhelming.</h2>
            <p>
              Whether you’re seeking support for yourself or someone you love, Community Care Circle is here to
              listen, guide, and walk alongside you.
            </p>
          </div>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--primary">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
