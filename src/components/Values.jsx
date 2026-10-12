import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, HeartHandshake, Sparkles } from 'lucide-react'
import { COMPANY } from '../data/content'

export function Values() {
  return (
    <section id="values" className="section relative bg-white overflow-hidden">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <span className="eyebrow">Our Guiding Principle</span>
          <h2 className="h-section mt-4 font-bold">
            Driven by safety, accountability, and{' '}
            <span className="text-gradient">authentic values.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Vision card (Large showcase) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 p-6 sm:p-8 md:p-12 text-white shadow-xl lg:col-span-7"
          >
            {/* Background design elements */}
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/10 blur-2xl"
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-300 backdrop-blur-sm">
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>{COMPANY.vision.title}</span>
              </div>

              <blockquote className="mt-8 font-display text-2xl font-bold leading-snug sm:text-3xl md:text-4xl text-white">
                &ldquo;{COMPANY.vision.statement}&rdquo;
              </blockquote>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-brand-100/90">
                Safety and environmental stewardship are non-negotiable foundations for all engineering design, procurement oversight, and construction management we deliver.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-2xl font-bold text-accent-300">Zero</p>
                  <p className="text-xs text-brand-200">Environmental Incidents</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent-300">Zero</p>
                  <p className="text-xs text-brand-200">Harm to People &amp; Assets</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values narrative card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 sm:p-8 md:p-10 shadow-sm lg:col-span-5"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                <HeartHandshake className="h-3.5 w-3.5 text-brand-600" />
                <span>{COMPANY.values.title}</span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-ink">
                Built from the voice of our people
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {COMPANY.values.narrative}
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-600">
                  <Sparkles className="h-4 w-4 text-accent-500" />
                  <span>Our Promise</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700">
                  &ldquo;{COMPANY.values.commitment}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200/80 pt-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Culture of Accountability &amp; Integrity
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
