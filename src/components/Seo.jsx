import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Final public address of the site. Update this (and index.html, robots.txt,
// sitemap.xml) if the domain changes.
export const SITE_URL = 'https://www.communitycarecircle.com.au'
const SITE_NAME = 'Community Care Circle'
const DEFAULT_TITLE = `${SITE_NAME} | Registered NDIS Provider`
const DEFAULT_IMAGE = '/images/group-circle.jpg'

// index.html ships default tags for crawlers that don't run JavaScript
// (Facebook, LinkedIn). This updates those same tags per page, so nothing is duplicated.
function setTag(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    const [, tag, key, name] = selector.match(/^(\w+)\[(\w+)="([^"]+)"\]$/)
    el = document.createElement(tag)
    el.setAttribute(key, name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export default function Seo({ title, description, image = DEFAULT_IMAGE, noindex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
    const url = SITE_URL + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''))
    const imageUrl = SITE_URL + image

    document.title = fullTitle
    setTag('meta[name="description"]', 'content', description)
    setTag('meta[name="robots"]', 'content', noindex ? 'noindex, follow' : 'index, follow')
    setTag('link[rel="canonical"]', 'href', url)
    setTag('meta[property="og:title"]', 'content', fullTitle)
    setTag('meta[property="og:description"]', 'content', description)
    setTag('meta[property="og:url"]', 'content', url)
    setTag('meta[property="og:image"]', 'content', imageUrl)
    setTag('meta[name="twitter:title"]', 'content', fullTitle)
    setTag('meta[name="twitter:description"]', 'content', description)
    setTag('meta[name="twitter:image"]', 'content', imageUrl)
  }, [title, description, image, noindex, pathname])

  return null
}
