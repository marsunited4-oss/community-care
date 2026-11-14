import Seo from '../components/Seo'
import { REGISTERED, story, teamIntro, values, valuesIntro } from '../data/site'
import ValueIcon from '../components/ValueIcon'
import NdisBadge from '../components/NdisBadge'
import TeamGrid from '../components/TeamGrid'
import { CTA, PageBanner, SectionTitle } from '../components/Shared'

export default function About() {
  return (
    <>
      <Seo title="About Us"
        description="Meet Community Care Circle, a Registered NDIS provider in NSW. Read our story, our values and meet the team behind our trauma-informed, culturally responsive support."
      />
      <PageBanner title="About Us" image="/images/support-chat.jpg" crumbs={[{ label: 'About Us' }]} />

      <section className="section">
        <div className="container two-col two-col--top">
          <div>
            <SectionTitle eyebrow="Get to Know Us" title="Our Story" />
            <p className="lead">
              {story.intro[0]} {story.intro[1]}
            </p>
            {story.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="about-side">
            <div className="framed-img framed-img--right">
              <img src="/images/park-reading.jpg" alt="Two young people reading together in a park, one using a wheelchair" />
            </div>
            <div className="registered">
              <NdisBadge />
              <p>{REGISTERED}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container statement">
          <ul>
            {story.more.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="statement__closing">
            {story.closing[0]}
            <br />
            {story.closing[1]}
          </p>
        </div>
      </section>

      <section className="section" id="values">
        <div className="container">
          <SectionTitle title="Our Values" center />
          <p className="measure center-text">{valuesIntro}</p>
          <div className="value-grid">
            {values.map((v) => (
              <div key={v.title} className="value">
                <ValueIcon name={v.title} size={60} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="team">
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
