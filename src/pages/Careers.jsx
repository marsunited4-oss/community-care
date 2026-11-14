import Seo from '../components/Seo'
import { Check } from 'lucide-react'
import { CTA, PageBanner, SectionTitle } from '../components/Shared'
import { Field, FileField, FormCard, RadioGroup } from '../components/Form'

const workPerks = [
  'A positive, inclusive and collaborative work environment',
  'Opportunities for professional growth, training and development',
  'Flexible working hours to support work-life balance',
  'Clinical guidance and support from a Registered Nurse',
  'A chance to make a meaningful difference in your community',
]

const volunteerPerks = [
  'The opportunity to give back to your community',
  'Hands-on experience in the disability support sector',
  'Flexible volunteer hours',
  'The chance to work with a caring, dedicated team',
]

export default function Careers() {
  return (
    <>
      <Seo title="Careers"
        description="Work with Community Care Circle, a Registered NDIS provider in NSW. Apply for a support worker role or volunteer with our team in Westmead."
      />
      <PageBanner title="Work With Us" image="/images/team-meeting.jpg" crumbs={[{ label: 'Careers' }]} />

      <section className="section section--sm">
        <div className="container">
          <h2>Join Our Team at Community Care Circle</h2>
          <p className="measure">
            Community Care Circle is a Registered NDIS provider in NSW. We deliver trauma-informed,
            culturally responsive support through the National Disability Insurance Scheme (NDIS) in NSW.
            We are looking for caring, reliable people who share our commitment to dignity, independence and
            inclusion.
          </p>
          <div className="btn-row">
            <a href="#career-form" className="btn btn--primary">
              Work with us
            </a>
            <a href="#volunteer-form" className="btn btn--outline">
              Volunteer with us
            </a>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container two-col">
          <div>
            <SectionTitle title="Why Work With Us?" />
            <p>
              We believe a supportive and inclusive workplace is the foundation of quality care. By joining our team,
              you will be part of a compassionate group of people committed to empowering participants and their
              families. We offer:
            </p>
            <ul className="check-list">
              {workPerks.map((p) => (
                <li key={p}>
                  <Check size={18} aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <img src="/images/group-circle.jpg" alt="Team members talking together" className="rounded-img" />
        </div>
      </section>

      <section className="section" id="career-form">
        <div className="container">
          <FormCard
            title="Career Form"
            intro="Apply today if you are passionate about making a difference and are looking for a rewarding career in disability support. We welcome experienced professionals and newcomers alike."
            submitLabel="Apply"
            successTitle="Thank you for applying!"
            successText="We have received your application and will be in touch if your experience matches our current roles."
          >
            <Field label="First Name" name="firstName" required autoComplete="given-name" />
            <Field label="Last Name" name="lastName" required autoComplete="family-name" />
            <Field label="Email Address" name="email" type="email" required autoComplete="email" />
            <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" />
            <Field label="Address" name="address" autoComplete="street-address" />
            <RadioGroup label="Access to Car" name="accessToCar" options={['Yes', 'No']} required />
            <FileField label="Resume" name="resume" required />
            <FileField label="Cover Letter" name="coverLetter" />
            <FileField label="NDIS Worker Screening Check" name="ndisWorkerScreeningCheck" required />
            <FileField label="Current First Aid and CPR Certificate" name="firstAidAndCprCertificate" required multiple />
            <FileField label="Working With Children Check" name="workingWithChildrenCheck" required />
            <FileField label="Driver Licence" name="driverLicence" multiple />
          </FormCard>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container two-col">
          <div>
            <SectionTitle title="Why Volunteer With Us?" />
            <p>Volunteering with us is a rewarding experience that offers:</p>
            <ul className="check-list">
              {volunteerPerks.map((p) => (
                <li key={p}>
                  <Check size={18} aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <img src="/images/park-reading.jpg" alt="Two young people reading together in a park, one using a wheelchair" className="rounded-img" />
        </div>
      </section>

      <section className="section" id="volunteer-form">
        <div className="container">
          <FormCard
            title="Volunteer Form"
            intro="Looking to contribute your skills and time to a meaningful cause? Our volunteers play a vital role in helping us provide the best possible support to our participants."
            submitLabel="Apply"
            successTitle="Thank you for volunteering!"
            successText="We have received your details and will contact you about upcoming volunteer opportunities."
          >
            <Field label="First Name" name="firstName" required autoComplete="given-name" />
            <Field label="Last Name" name="lastName" required autoComplete="family-name" />
            <Field label="Email Address" name="email" type="email" required autoComplete="email" />
            <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" />
            <FileField label="Resume" name="resume" required />
            <FileField label="Cover Letter" name="coverLetter" />
            <Field label="Tell us more about yourself" name="about" as="textarea" rows={5} required full />
          </FormCard>
        </div>
      </section>

      <CTA />
    </>
  )
}
