import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { PageBanner } from '../components/Shared'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="Sorry, this page could not be found." noindex />
      <PageBanner title="Page Not Found" image="/images/park-reading.jpg" crumbs={[{ label: '404' }]} />
      <section className="section">
        <div className="container">
          <p>Sorry, we could not find the page you were looking for.</p>
          <Link to="/" className="btn btn--primary">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
