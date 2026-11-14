import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { ArrowRight, Ear, ShieldCheck, Sprout, Users } from 'lucide-react'
import { REGISTERED, story, teamIntro, values, valuesIntro } from '../data/site'
import { services } from '../data/services'
import ValueIcon from '../components/ValueIcon'
import NdisBadge from '../components/NdisBadge'
import TeamGrid from '../components/TeamGrid'
import { CTA, SectionTitle, ServiceCard } from '../components/Shared'

const principles = [
  { icon: Ear, label: 'We listen first.' },
  { icon: Users, label: 'We build together.' },
  { icon: ShieldCheck, label: 'We act with integrity.' },
  { icon: Sprout, label: 'We strengthen independence.' },
]

export default function Home() {
  return (
    <>
      <Seo
        description="Community Care Circle is a Registered NDIS provider in NSW, offering trauma-informed, culturally responsive NDIS support from Westmead. Your Voice. Your Choice. Your Circle."
      />
      {/* Hero */}
      <section className="hero">
        <div className="hero__photo" style={{ backgroundImage: 'url(/images/hero-hands.jpg)' }} aria-hidden="true" />
        <img src="/logos/logo-mark-white.svg" alt="" className="hero__ring" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__badge">
            <NdisBadge />
            <span>{REGISTERED}</span>
          </div>
          <h1>
            Your Voice. Your Choice. <span className="accent">Your Circle.</span>
          </h1>
          <p className="hero__lead">
            {story.intro[0]} {story.intro[1]}
          </p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn--primary">
              Contact us
            </Link>
            <Link to="/services" className="btn btn--outline-light">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="highlights" aria-label="How we work">
        <ul className="container highlights__bar">
          {principles.map(({ icon: I, label }) => (
            <li key={label}>
              <span className="icon-tile">
                <I size={22} aria-hidden="true" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container two-col two-col--reverse">
          <div>
            <SectionTitle eyebrow="Get to Know Us" title="Our Story" />
            {story.body.slice(0, 2).map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Link to="/about" className="btn btn--primary">
              More About Us
            </Link>
          </div>
          <div className="framed-img framed-img--right">
            <img src="/images/group-circle.jpg" alt="A group of people talking together in a circle" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--tint">
        <div className="container">
          <div className="heading-row">
            <SectionTitle title="Our Services" />
            <Link to="/services" className="btn btn--outline">
              View all our services <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="service-grid">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container two-col">
          <div className="framed-img">
            <img src="/images/support-chat.jpg" alt="Two women talking and smiling together" />
          </div>
          <div>
            <SectionTitle title="Our Values" />
            <p>{valuesIntro}</p>
            <ul className="icon-list">
              {values.map((v) => (
                <li key={v.title}>
                  <ValueIcon name={v.title} size={44} />
                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--tint">
        <div className="container">
          <SectionTitle title="Meet the Team" />
          <p className="measure team-intro">{teamIntro}</p>
          <TeamGrid />
        </div>
      </section>

      <CTA />
    </>
  )
}
