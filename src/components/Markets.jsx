import React from 'react'
import { motion } from 'framer-motion'
import {
  Flame,
  Factory,
  Zap,
  FlaskConical,
  GitCommitHorizontal,
  HeartPulse,
  Wheat,
} from 'lucide-react'
import { MARKETS } from '../data/content'

const iconMap = {
  Flame,
  Factory,
  Zap,
  FlaskConical,
  GitCommitHorizontal,
  HeartPulse,
  Wheat,
}

export function Markets() {
  return (
    <section id="markets" className="section relative bg-white">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <span className="eyebrow">Sectors We Serve</span>
          <h2 className="h-section mt-4 font-bold">
            Targeted solutions across{' '}
            <span className="text-gradient">high-criticality markets.</span>
          </h2>
          <p className="lead mt-4 text-slate-600">
            Our deep technical insights span critical process, energy, and infrastructure industries worldwide.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MARKETS.map((market, i) => {
            const Icon = iconMap[market.icon] || Flame
            const isFeatured = i === 0

            return (
              <motion.div
                key={market.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isFeatured
                    ? 'border-brand-300 bg-gradient-to-br from-brand-50/70 to-white hover:border-brand-500 sm:col-span-2 lg:col-span-1'
                    : 'border-slate-200/80 bg-white hover:border-brand-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                      {market.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-ink">
                    {market.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {market.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                    PetroFeed Domain
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
