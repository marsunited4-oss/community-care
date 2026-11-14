import Seo from '../components/Seo'
import { services } from '../data/services'
import { CTA, PageBanner, SectionTitle, ServiceCard } from '../components/Shared'

export default function Services() {
  return (
    <>
      <Seo title="Our NDIS Services"
        description="Explore our NDIS services in NSW, including personal care, household tasks, community participation, support coordination, community nursing care and more."
      />
      <PageBanner title="Our Services" image="/images/participant-smile.jpg" crumbs={[{ label: 'Services' }]} />

      <section className="section">
        <div className="container">
          <div className="split-head">
            <SectionTitle eyebrow="Our NDIS Services in NSW" title="Quality Care, Co-Designed Support" />
            <p>
              Community Care Circle offers a range of NDIS services, from everyday personal care to Registered
              Nurse-led clinical support. Select one of our services below to learn what is included and how we can
              help.
            </p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
