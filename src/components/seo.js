import * as React from "react"

const seoData = {
  "title": "Saisamarth Rajesh (Sai) Phaye | Lead Audio AI/ML Engineer",
  "description": "Lead Audio AI/ML Engineer at Logitech specializing in speech enhancement, acoustic echo cancellation, and real-time audio processing systems",
  "author": "Saisamarth Rajesh (Sai) Phaye",
  "siteUrl": "https://ssrp.github.io",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
