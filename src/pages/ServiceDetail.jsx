import Seo from '../components/Seo'
import { Link, NavLink, useParams } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { faqs, getService, services } from '../data/services'
import { contact } from '../data/site'
import { CTA, PageBanner } from '../components/Shared'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <NotFound />

  return (
    <>
      <Seo title={`${service.title} in NSW`} description={service.excerpt} image={service.image} />
      <PageBanner
        title={service.title}
        image={service.image}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />

      <section className="section">
        <div className="container detail">
          <article className="detail__main prose">
            <img src={service.image} alt="" className="rounded-img detail__img" />

            <h2>{service.heading}</h2>
            {service.body.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <h3>{service.listHeading}</h3>
            <ul>
              {service.inclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>{service.extraHeading}</h3>
            <p>{service.extraText}</p>

            <h3>Frequently Asked Questions</h3>
            {faqs(service).map((f) => (
              <div key={f.q} className="faq">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}

            <Link to="/contact" className="btn btn--primary">
              Book Now
            </Link>
          </article>

          <aside className="detail__aside">
            <nav className="side-card" aria-label="Other services">
              <h2>Other Services</h2>
              <ul>
                {services.map((s, i) => (
                  <li key={s.slug}>
                    <NavLink to={`/services/${s.slug}`}>
                      <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="side-card side-card--contact">
              <h2>Contact Us</h2>
              <p>Need disability support? Reach out to us any time.</p>
              {contact.phones.map((ph) => (
                <a key={ph.href} href={ph.href} className="pill-link">
                  <span>
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  {ph.label}
                </a>
              ))}
              <Link to="/contact" className="pill-link">
                <span>
                  <Mail size={18} aria-hidden="true" />
                </span>
                Email us
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  )
}
