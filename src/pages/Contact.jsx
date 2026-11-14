import Seo from '../components/Seo'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contact, contactCta } from '../data/site'
import { services } from '../data/services'
import { PageBanner } from '../components/Shared'
import { Field, FormCard } from '../components/Form'

export default function Contact() {
  return (
    <>
      <Seo title="Contact Us"
        description="Contact Community Care Circle at 24 Mons Rd, Westmead NSW 2145. Call 0402 721 058 or 0420 777 058, or email admin@communitycarecircle.com.au."
      />
      <PageBanner title="Contact Us" image="/images/support-chat.jpg" crumbs={[{ label: 'Contact Us' }]} />

      <section className="section">
        <div className="container contact">
          <div>
            <h2>Get in Touch</h2>
            {contactCta.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="contact-list">
              <li>
                <span className="icon-tile">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <div>
                  <span className="contact-list__label">Phone</span>
                  {contact.phones.map((ph) => (
                    <a key={ph.href} href={ph.href}>
                      {ph.label}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <span className="icon-tile">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div>
                  <span className="contact-list__label">Email</span>
                  <span>{contact.email}</span>
                </div>
              </li>
              <li>
                <span className="icon-tile">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div>
                  <span className="contact-list__label">Address</span>
                  <a href={contact.mapsHref} target="_blank" rel="noreferrer">
                    {contact.address}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <FormCard
            title="Send Us a Message"
            submitLabel="Send"
            successTitle="Thanks for submitting!"
            successText="We will be in touch soon."
          >
            <Field label="First Name" name="firstName" required autoComplete="given-name" />
            <Field label="Last Name" name="lastName" required autoComplete="family-name" />
            <Field label="Email" name="email" type="email" required autoComplete="email" />
            <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
            <Field label="Service of interest" name="service" as="select" defaultValue="" full>
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug}>{s.title}</option>
              ))}
              <option>Not sure yet</option>
            </Field>
            <Field label="Message" name="message" as="textarea" rows={5} required full />
          </FormCard>
        </div>
      </section>

      <section className="map">
        <iframe
          title="Map showing 24 Mons Rd, Westmead NSW"
          src="https://www.google.com/maps?q=24+Mons+Rd,+Westmead+NSW+2145&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
