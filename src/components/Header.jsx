import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { contact, nav, socials } from '../data/site'
import { services } from '../data/services'
import { BrandIcon } from './Icon'

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Community Care Circle home page">
      <img src="/logos/logo-mark.svg" alt="" />
      <span>
        <strong>Community</strong>
        <em>Care Circle</em>
      </span>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__left">
            <span>
              <MapPin size={15} aria-hidden="true" /> {contact.address}
            </span>
            <a href={`mailto:${contact.email}`}>
              <Mail size={15} aria-hidden="true" /> {contact.email}
            </a>
          </div>
          <div className="topbar__right">
            {contact.phones.map((ph) => (
              <a key={ph.href} href={ph.href} className="topbar__phone">
                <Phone size={15} aria-hidden="true" /> {ph.label}
              </a>
            ))}
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="topbar__social">
                <BrandIcon name={s.name} size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <Logo />

          <nav className="nav" aria-label="Main">
            {nav.map((item) =>
              item.to === '/services' ? (
                <div className="nav__item nav__item--dropdown" key={item.to}>
                  <NavLink to={item.to} className="nav__link">
                    {item.label} <ChevronDown size={15} aria-hidden="true" />
                  </NavLink>
                  <ul className="dropdown">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`}>{s.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} end={item.to === '/'} className="nav__link">
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <Link to="/contact" className="btn btn--primary header__btn">
            Book Appointment
          </Link>

          <button
            className="menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div className={`drawer ${open ? 'drawer--open' : ''}`} onClick={close}>
        <nav className="drawer__panel" onClick={(e) => e.stopPropagation()} aria-label="Mobile">
          {nav.map((item) =>
            item.to === '/services' ? (
              <details key={item.to} className="drawer__group">
                <summary className="drawer__link">
                  {item.label} <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <ul>
                  <li>
                    <Link to="/services" onClick={close}>
                      All services
                    </Link>
                  </li>
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} onClick={close}>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className="drawer__link" onClick={close}>
                {item.label}
              </NavLink>
            ),
          )}
          <Link to="/contact" className="btn btn--primary btn--block" onClick={close}>
            Book Appointment
          </Link>
          {contact.phones.map((ph) => (
            <a key={ph.href} href={ph.href} className="drawer__phone">
              <Phone size={18} aria-hidden="true" /> {ph.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
