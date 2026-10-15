import React, { useState } from 'react'
import { MapPin, Phone, Globe2 } from 'lucide-react'
import { COMPANY } from '../data/content'
import mapData from '../data/regional-map.json'

// Country-level label anchors, not office coordinates.
const locations = {
  IN: { mapCode: 'IND', x: 528, y: 216, labelX: 574, labelY: 186 },
  OM: { mapCode: 'OMN', x: 264, y: 230, labelX: 315, labelY: 280 },
  QA: { mapCode: 'QAT', x: 194, y: 176, labelX: 128, labelY: 128 },
  AE: { mapCode: 'ARE', x: 230, y: 190, labelX: 326, labelY: 180 },
  SG: { mapCode: 'SGP', x: 826, y: 464, labelX: 742, labelY: 420 },
}
const coverageCodes = new Set(Object.values(locations).map(location => location.mapCode))

export function Presence() {
  const [selectedCode, setSelectedCode] = useState('IN')
  const selectedCountry = COMPANY.regions.find(region => region.code === selectedCode)
  const selectedMapCode = locations[selectedCode].mapCode

  return (
    <section id="presence" className="section relative border-y border-slate-200/60 bg-slate-50/70">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <span className="eyebrow">Regional Network</span>
          <h2 className="h-section mt-4 font-bold">
            Delivering across{' '}
            <span className="text-brand-600">India, the Gulf &amp; Southeast Asia.</span>
          </h2>
          <p className="lead mt-4 text-slate-600">
            Our regional network brings engineering expertise, local responsiveness, and cross-border collaboration to every engagement.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
          <figure className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-br from-brand-50/80 via-slate-50 to-white">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 pt-6 sm:px-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-700">
                <Globe2 aria-hidden="true" className="h-4 w-4" />
                Connected across regions
              </span>
              <span className="rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600">
                5 countries
              </span>
            </div>
            <svg
              viewBox="0 65 924 460"
              role="img"
              aria-labelledby="presence-map-title presence-map-description"
              className="block h-auto max-h-[420px] w-full"
            >
              <title id="presence-map-title">PetroFeed regional presence: {selectedCountry.country} selected; Tamil Nadu highlighted</title>
              <desc id="presence-map-description">
                India, Oman, Qatar, the United Arab Emirates, and Singapore are highlighted in blue. Tamil Nadu is highlighted in teal within India, with Chennai marked as the office city. Use the country buttons below to explore each region.
              </desc>
              <g fill="#dce5ee" stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round" fillRule="evenodd">
                {mapData.countries.filter(country => !coverageCodes.has(country.code)).map(country => (
                  <path key={country.code} d={country.path} />
                ))}
              </g>
              <g stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" fillRule="evenodd">
                {mapData.countries.filter(country => coverageCodes.has(country.code)).map(country => (
                  <path key={country.code} d={country.path} fill={country.code === selectedMapCode ? '#0b5cab' : '#84b9f3'} />
                ))}
              </g>
              <path d={mapData.tamilNadu.path} fill="#0d9488" stroke="#ffffff" strokeWidth="1.3" strokeLinejoin="round" fillRule="evenodd" />
              {COMPANY.regions.map(region => {
                const location = locations[region.code]
                const active = selectedCode === region.code
                return (
                  <g key={region.code} aria-hidden="true">
                    <path d={`M${location.x},${location.y}L${location.labelX},${location.labelY}`} fill="none" stroke={active ? '#0b5cab' : '#6986a3'} strokeWidth="1.5" />
                    <circle cx={location.x} cy={location.y} r={active ? 13 : 8} fill="#ffffff" fillOpacity="0.8" />
                    <circle cx={location.x} cy={location.y} r={active ? 7 : 4.5} fill={active ? '#0b5cab' : '#4c94e6'} stroke="#ffffff" strokeWidth="1.5" />
                    <text x={location.labelX} y={location.labelY - 9} textAnchor="middle" fontSize="22" fontWeight={active ? '700' : '600'} fill={active ? '#0a4a8a' : '#425d78'} stroke="#f8fafc" strokeWidth="5" paintOrder="stroke" className="hidden sm:block">
                      {region.country}
                    </text>
                    <text x={location.labelX} y={location.labelY - 10} textAnchor="middle" fontSize="30" fontWeight="700" fill={active ? '#0a4a8a' : '#425d78'} stroke="#f8fafc" strokeWidth="5" paintOrder="stroke" className="sm:hidden">
                      {region.code === 'AE' ? 'UAE' : region.code}
                    </text>
                  </g>
                )
              })}
              <g aria-hidden="true">
                <path d="M543.2,323L590,348L650,348" fill="none" stroke="#0d9488" strokeWidth="1.8" />
                <circle cx="543.2" cy="323" r="7" fill="#ffffff" />
                <circle cx="543.2" cy="323" r="4" fill="#0d9488" />
                <text x="650" y="337" textAnchor="middle" fontSize="26" fontWeight="700" fill="#0f766e" stroke="#f8fafc" strokeWidth="5" paintOrder="stroke">Tamil Nadu</text>
                <text x="650" y="371" textAnchor="middle" fontSize="21" fill="#425d78" stroke="#f8fafc" strokeWidth="4" paintOrder="stroke">Chennai office</text>
              </g>
            </svg>
            <figcaption className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 pb-5 text-xs text-slate-500 sm:px-8">
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-brand-600" />Selected region</span>
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-brand-300" />Regional presence</span>
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-teal-600" />Tamil Nadu</span>
            </figcaption>
          </figure>

          <div className="p-5 sm:p-8">
            <div className="region-selector flex flex-wrap gap-2" role="group" aria-label="Select a country">
              {COMPANY.regions.map(region => (
                <button
                  key={region.code}
                  type="button"
                  aria-pressed={selectedCode === region.code}
                  aria-controls={`region-details-${region.code}`}
                  onClick={() => setSelectedCode(region.code)}
                  className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${selectedCode === region.code ? 'border-brand-600 bg-brand-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700'}`}
                >
                  {region.country}
                </button>
              ))}
            </div>
            <div className="mt-6 border-t border-slate-100 pt-6" aria-live="polite">
              {COMPANY.regions.map(region => (
                <section key={region.code} id={`region-details-${region.code}`} hidden={selectedCode !== region.code} className="region-details" aria-labelledby={`region-heading-${region.code}`}>
                  <div className="grid gap-5 md:grid-cols-2 md:gap-10">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{region.code} / Regional network</p>
                      <h3 id={`region-heading-${region.code}`} className="mt-2 font-display text-2xl font-bold text-ink">{region.country}</h3>
                      <p className="mt-1 text-sm text-slate-600">{region.hub}</p>
                    </div>
                    {region.address && (
                      <div className="border-l-2 border-brand-100 pl-4">
                        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500"><MapPin aria-hidden="true" className="h-4 w-4 text-brand-600" />Chennai office</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{region.address}</p>
                        {region.phones?.map(phone => (
                          <a key={phone.tel} href={`tel:${phone.tel}`} className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"><Phone aria-hidden="true" className="h-4 w-4" />{phone.display}</a>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
          <noscript><style>{'.region-selector { display: none; } .region-details[hidden] { display: block; margin-top: 1.5rem; }'}</style></noscript>
        </div>
      </div>
    </section>
  )
}
