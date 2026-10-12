import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ShieldCheck, Cpu, Globe2, Compass } from 'lucide-react'
import { COMPANY } from '../data/content'

export function Hero() {
  const highlights = [
    { icon: ShieldCheck, label: 'Asset Management', sub: 'Full lifecycle coverage' },
    { icon: Cpu, label: 'Design & Engineering', sub: 'Concept to detailed FEED' },
    { icon: Compass, label: 'Consultancy & PM', sub: 'Safe, economic delivery' },
    { icon: Globe2, label: '5 Regional Hubs', sub: 'India · Gulf · Singapore' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Blueprint background grid */}
      <div className="bg-blueprint absolute inset-0 opacity-70" />

      {/* Decorative gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-brand-400/20 to-accent-400/20 blur-3xl"
      />

      <div className="container-fluid relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow">
                {COMPANY.legalNameShort}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-display mt-5 font-bold"
            >
              Engineering{' '}
              <span className="text-gradient">optimized solutions</span> across
              energy &amp; process assets.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lead mt-6 max-w-2xl text-slate-600"
            >
              {COMPANY.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
            >
              <a
                href="#services"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#about"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-500 hover:text-brand-600"
              >
                About PetroFeed
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              <span className="text-slate-400">Regional Reach:</span>
              {COMPANY.regions.map((r, i) => (
                <span key={r.country} className="inline-flex items-center gap-2">
                  <span className="text-slate-700">{r.country}</span>
                  {i < COMPANY.regions.length - 1 && (
                    <span className="text-slate-300">·</span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Blueprint Engineering Graphic Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl border border-slate-200/80 bg-white/80 p-5 sm:p-8 shadow-xl shadow-brand-900/5 backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                    Integrated Offerings
                  </span>
                  <h3 className="text-lg font-bold text-ink">Asset Lifecycle Scope</h3>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <img
                    src="/logo-mark.jpeg"
                    alt=""
                    className="h-6 w-6 object-contain"
                  />
                </span>
              </div>

              {/* 4 Capability Cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {highlights.map((h, i) => {
                  const Icon = h.icon
                  return (
                    <div
                      key={h.label}
                      className="group rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition hover:border-brand-300 hover:bg-brand-50/40"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-600 shadow-sm">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h4 className="mt-3 text-xs font-bold text-ink">
                        {h.label}
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-500">
                        {h.sub}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Delivery banner */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-800 p-4 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-300">
                  Value Commitment
                </p>
                <p className="mt-1 text-xs leading-relaxed text-brand-100">
                  &ldquo;{COMPANY.deliveryPromise}&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
