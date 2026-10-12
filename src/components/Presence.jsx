import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Globe2, ExternalLink, Building2 } from 'lucide-react'
import { COMPANY } from '../data/content'

export function Presence() {
  return (
    <section id="presence" className="section relative bg-slate-50/70 border-y border-slate-200/60">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <span className="eyebrow">Regional Network</span>
          <h2 className="h-section mt-4 font-bold">
            Delivering across{' '}
            <span className="text-brand-600">India, the Gulf &amp; Southeast Asia.</span>
          </h2>
          <p className="lead mt-4 text-slate-600">
            Our multi-office footprint enables seamless execution, local responsiveness, and cross-border engineering collaboration.
          </p>
        </div>

        {/* 5 Hub cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {COMPANY.regions.map((region, i) => (
            <motion.div
              key={region.country}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-brand-400 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="font-display text-xs font-bold tracking-wider text-slate-400">
                  {region.code}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-ink">
                {region.country}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                {region.hub}
              </p>

              {region.address && (
                <div className="mt-4 border-t border-slate-100 pt-3">
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    {region.address}
                  </p>
                  {region.phones && (
                    <div className="mt-2.5 flex flex-col gap-1 text-[11px] font-semibold text-brand-600">
                      {region.phones.map((p) => (
                        <a key={p.tel} href={`tel:${p.tel}`} className="hover:underline">
                          {p.display}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-brand-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Operational Hub</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Associate Company Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm lg:p-10"
        >
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
                <Building2 className="h-3.5 w-3.5 text-brand-600" />
                <span>{COMPANY.associate.role}</span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                {COMPANY.associate.name}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                {COMPANY.associate.description}
              </p>

              <div className="mt-6">
                <a
                  href={COMPANY.associate.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  <Globe2 className="h-4 w-4" />
                  <span>{COMPANY.associate.displayUrl}</span>
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Associate Company Logo */}
            <div className="flex items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/70 p-6 lg:col-span-4">
              <img
                src={`${import.meta.env.BASE_URL}strutech-logo.png`}
                alt="StrucTech Consultancy Logo"
                className="max-h-16 w-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
