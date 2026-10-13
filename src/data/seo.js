import { COMPANY, CORE_SERVICES, SPECIAL_SERVICES } from './content.js'

export const SITE_URL = `${COMPANY.website}/`
const title = 'PetroFeed | Engineering & Consultancy Services'
const description = 'Engineering consultancy, design, procurement and project management for oil, gas, energy and process industries across India, the Gulf and Singapore.'
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]))

export function renderSeoHead() {
  const image = `${SITE_URL}logo-mark.jpeg`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}#organization`,
        name: COMPANY.name,
        legalName: COMPANY.legalNameFull,
        url: SITE_URL,
        logo: image,
        image,
        description: COMPANY.summary,
        email: COMPANY.contact.email,
        telephone: COMPANY.contact.phoneTel,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Flat No A117, A-Block, 11th Floor, Old No 13, New No 4, CTH Road, Padi',
          addressLocality: 'Chennai',
          postalCode: '600049',
          addressCountry: 'IN',
        },
        areaServed: COMPANY.regions.map(({ country }) => ({ '@type': 'Country', name: country })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Engineering and consultancy services',
          itemListElement: [...CORE_SERVICES, ...SPECIAL_SERVICES].map((service) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: service.title, description: service.short || service.desc },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        name: COMPANY.name,
        url: SITE_URL,
        publisher: { '@id': `${SITE_URL}#organization` },
        inLanguage: 'en',
      },
    ],
  }
  return [
    `<title>${escape(title)}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
    '<meta name="robots" content="index, follow" />',
    `<link rel="canonical" href="${escape(SITE_URL)}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${escape(COMPANY.name)}" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${escape(SITE_URL)}" />`,
    `<meta property="og:image" content="${escape(image)}" />`,
    '<meta property="og:image:alt" content="PetroFeed company logo" />',
    '<meta name="twitter:card" content="summary" />',
    `<meta name="twitter:title" content="${escape(title)}" />`,
    `<meta name="twitter:description" content="${escape(description)}" />`,
    `<meta name="twitter:image" content="${escape(image)}" />`,
    `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')
}
