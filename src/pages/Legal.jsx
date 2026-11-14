import Seo from '../components/Seo'
import { contact } from '../data/site'
import { CTA, PageBanner } from '../components/Shared'

// DRAFT legal copy. Please have it reviewed by Community Care Circle (and legal
// advice if needed) before launch.

const pages = {
  privacy: {
    title: 'Privacy Policy',
    description: 'How Community Care Circle collects, uses and protects your personal information.',
    sections: [
      {
        h: 'Our commitment',
        p: [
          'Community Care Circle respects your privacy. This policy explains how we handle personal information collected through this website, in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.',
        ],
      },
      {
        h: 'What we collect',
        p: [
          'We collect the information you give us when you contact us, apply for a role, volunteer or enquire about the Partner Network. This can include your name, email address, phone number, location and the details of your message or application.',
        ],
      },
      {
        h: 'How we use it',
        p: [
          'We use your information to respond to your enquiry, to assess applications, to provide and improve our services, and to meet our legal and NDIS obligations. We do not sell your personal information.',
        ],
      },
      {
        h: 'Sharing and security',
        p: [
          'We only share personal information with people who need it to help us respond to you, with service providers who support our website and email, or where the law requires it. We take reasonable steps to keep your information secure.',
        ],
      },
      {
        h: 'Access, correction and complaints',
        p: [
          'You can ask to see or correct the personal information we hold about you, or raise a privacy concern, by contacting us using the details below. If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner at oaic.gov.au.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    description: 'The terms that apply when you use the Community Care Circle website.',
    sections: [
      {
        h: 'Using this website',
        p: [
          'By using this website you agree to these terms. If you do not agree, please do not use the site.',
        ],
      },
      {
        h: 'General information only',
        p: [
          'The content on this website is general information about Community Care Circle and our services. It is not medical, legal or financial advice. Please contact us to discuss your own needs and NDIS plan.',
        ],
      },
      {
        h: 'Intellectual property',
        p: [
          'The Community Care Circle name, logos, text and images on this website belong to Community Care Circle or are used with permission. Please do not copy or reuse them without our written consent.',
        ],
      },
      {
        h: 'Links to other websites',
        p: [
          'This website may link to other websites. We are not responsible for the content or privacy practices of those sites.',
        ],
      },
      {
        h: 'Limits of liability',
        p: [
          'We work to keep this website accurate and available, but we cannot promise it will always be error free or uninterrupted. To the extent the law allows, Community Care Circle is not liable for loss arising from your use of this website.',
        ],
      },
      {
        h: 'Changes and governing law',
        p: [
          'We may update these terms from time to time. These terms are governed by the laws of NSW, Australia.',
        ],
      },
    ],
  },
}

export default function Legal({ page }) {
  const { title, description, sections } = pages[page]
  return (
    <>
      <Seo title={title} description={description} />
      <PageBanner title={title} image="/images/support-chat.jpg" crumbs={[{ label: title }]} />
      <section className="section">
        <div className="container prose">
          {sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          ))}
          <h2>Contact us</h2>
          <p>
            Community Care Circle, ABN {contact.abn}, {contact.address}. Phone {contact.phones[0].label} or{' '}
            {contact.phones[1].label}. Email {contact.email}.
          </p>
        </div>
      </section>
      <CTA />
    </>
  )
}
