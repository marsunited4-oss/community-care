import Seo from '../components/Seo'
import { BookOpen, Check, Handshake, Megaphone, ShieldCheck, Stethoscope, TrendingUp } from 'lucide-react'
import { CTA, PageBanner, SectionTitle } from '../components/Shared'
import { Field, FormCard } from '../components/Form'

// Placeholder copy, to be replaced once the partner network model is finalised.

const benefits = [
  { icon: TrendingUp, title: 'Proven Care Model', text: 'Launch with a co-designed, trauma-informed service model that is already supporting participants in NSW.' },
  { icon: BookOpen, title: 'Training & Onboarding', text: 'Comprehensive training for you and your team, covering NDIS requirements, service delivery and business operations.' },
  { icon: ShieldCheck, title: 'Compliance Support', text: 'Policies, procedures and guidance aligned with the NDIS Practice Standards to help you meet registration requirements.' },
  { icon: Stethoscope, title: 'Clinical Governance', text: 'Access to Registered Nurse-led clinical oversight, frameworks and ongoing advice.' },
  { icon: Megaphone, title: 'Brand & Marketing', text: 'A trusted brand, website presence and local marketing support to help you connect with participants.' },
  { icon: Handshake, title: 'Ongoing Partnership', text: 'Regular check-ins, a network of fellow partners and a head office team that is invested in your success.' },
]

const lookingFor = [
  'A genuine passion for disability support and community care',
  'Experience in healthcare, disability, aged care or business management (preferred)',
  'Strong values of empowerment, respect, inclusion and authenticity',
  'A commitment to culturally responsive, person-centred support',
  'The ability to lead and grow a local team',
]

const steps = [
  { title: 'Enquire', text: 'Complete the enquiry form below and our partner network team will contact you for an initial conversation.' },
  { title: 'Discovery meeting', text: 'Meet our leadership team, learn about the model and discuss your goals and preferred territory.' },
  { title: 'Review & approval', text: 'Receive the partner information pack, complete due diligence and finalise your agreement.' },
  { title: 'Training & launch', text: 'Complete onboarding and training, then launch your Community Care Circle in your local community.' },
]

const faqs = [
  { q: 'Do I need experience in the disability sector?', a: 'Not necessarily. Experience in healthcare or business is helpful, but our training program is designed to support partners from a range of backgrounds.' },
  { q: 'Which areas are available?', a: 'Territories are being finalised. Let us know your preferred location in the enquiry form and we will discuss availability with you.' },
  { q: 'What is the investment required?', a: 'Investment details, including fees and estimated set-up costs, are provided in our partner information pack after the discovery meeting.' },
]

export default function PartnerNetwork() {
  return (
    <>
      <Seo title="Community Care Circle Partner Network"
        description="Join the Community Care Circle Partner Network. Community Care Circle is a Registered NDIS provider in NSW."
      />
      <PageBanner title="Community Care Circle Partner Network" image="/images/keys.jpg" crumbs={[{ label: 'Partner Network' }]} />

      <section className="section section--sm">
        <div className="container">
          <h2>Join the Community Care Circle Partner Network</h2>
          <p className="measure">
            Community Care Circle is a Registered NDIS provider in NSW, and we are growing. We are looking
            for passionate partners to bring our trauma-informed, culturally responsive model of NDIS support to more
            communities across Australia. As a partner, you will run your own business while being backed by a
            proven model, a trusted brand and an experienced team.
          </p>
          <div className="btn-row">
            <a href="#partner-form" className="btn btn--primary">
              Enquire Now
            </a>
            <a href="#partner-faq" className="btn btn--outline">
              Read the FAQs
            </a>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionTitle eyebrow="Why Partner With Us" title="What You Get as a Partner" center />
          <div className="value-grid value-grid--3">
            {benefits.map(({ icon: I, title, text }) => (
              <div key={title} className="value value--card">
                <span className="icon-circle">
                  <I size={26} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionTitle title="Who We Are Looking For" />
            <p>We are looking for partners who share our values and want to make a real difference:</p>
            <ul className="check-list">
              {lookingFor.map((p) => (
                <li key={p}>
                  <Check size={18} aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <img src="/images/team-meeting.jpg" alt="A team meeting around a table" className="rounded-img" />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionTitle eyebrow="How It Works" title="Your Path to Joining the Network" center />
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="steps__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="partner-faq">
        <div className="container prose">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f) => (
            <div key={f.q} className="faq">
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tint" id="partner-form">
        <div className="container">
          <FormCard
            title="Partner Network Enquiry Form"
            intro="Interested in joining the Community Care Circle Partner Network? Tell us a little about yourself and we will be in touch."
            submitLabel="Send Enquiry"
            successTitle="Thank you for your interest!"
            successText="Our partner network team will contact you within 2 business days."
          >
            <Field label="First Name" name="firstName" required autoComplete="given-name" />
            <Field label="Last Name" name="lastName" required autoComplete="family-name" />
            <Field label="Email Address" name="email" type="email" required autoComplete="email" />
            <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" />
            <Field label="Preferred Location / Territory" name="territory" required />
            <Field label="Available Investment" name="investment" as="select" required defaultValue="">
              <option value="" disabled>
                Select a range
              </option>
              <option>Under $50,000</option>
              <option>$50,000 to $100,000</option>
              <option>$100,000 to $200,000</option>
              <option>Over $200,000</option>
            </Field>
            <Field label="Relevant experience" name="experience" as="textarea" rows={4} full />
            <Field label="Message" name="message" as="textarea" rows={4} full />
          </FormCard>
        </div>
      </section>

      <CTA />
    </>
  )
}
