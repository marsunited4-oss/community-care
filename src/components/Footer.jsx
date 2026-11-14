import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contact, nav, REGISTERED, socials, tagline } from '../data/site'
import { services } from '../data/services'
import { BrandIcon } from './Icon'
import NdisBadge from './NdisBadge'

const year = new Date().getFullYear()

export default function Footer() {
  const contactItems = [
    ...contact.phones.map((ph) => ({ icon: Phone, label: ph.label, href: ph.href })),
    { icon: Mail, label: contact.email },
    { icon: MapPin, label: contact.address, href: contact.mapsHref },
  ]

  return (
    <>
    <section className="acknowledge" aria-label="Acknowledgement of Country">
      <div className="container acknowledge__inner">
        <img src="/logos/acknowledgement.png" alt="" width="200" height="120" />
        <p>
          Community Care Circle acknowledges the Traditional Custodians of Country throughout Australia and their
          ongoing connection to land, waters and community. We pay our respects to Aboriginal and Torres Strait
          Islander peoples, their cultures, and Elders past, present and emerging.
        </p>
      </div>
    </section>
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__logos">
          <span className="footer__logo">
            <img src="/logos/logo-full.svg" alt="Community Care Circle" />
          </span>
          <NdisBadge />
        </div>
        <p className="footer__tagline">{tagline}</p>
      </div>

      <div className="container footer__grid">
        <div className="footer__about">
          <h2 className="footer__heading">About us</h2>
          <p>
            We are a trauma-informed, culturally responsive NDIS provider committed to building safe, respectful, and
            empowering support environments.
          </p>
          <p>{REGISTERED}.</p>
          <div className="footer__social">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                <BrandIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer__heading">Quick links</h2>
          <ul className="footer__list">
            {nav.slice(1).map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__services">
          <h2 className="footer__heading">Our services</h2>
          <ul className="footer__list footer__list--cols">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__heading">Get in touch</h2>
          <ul className="footer__contact">
            {contactItems.map(({ icon: I, label, href }) => (
              <li key={label}>
                <I size={18} aria-hidden="true" />
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {year} Community Care Circle. All rights reserved. ABN {contact.abn}
          </p>
          <ul className="footer__legal">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Use</Link>
            </li>
          </ul>
          <p className="footer__credit">
            Developed by{' '}
            <a href="https://koonji.com/" target="_blank" rel="noreferrer">
              Koonji Infotech
            </a>
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}
