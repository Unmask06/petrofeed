import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Compass,
  Layers,
  BarChart3,
  Truck,
  HardHat,
  Sparkles,
  Check,
  ArrowRight,
} from 'lucide-react'
import { CORE_SERVICES, SPECIAL_SERVICES } from '../data/content'

const coreIconMap = {
  consultancy: Compass,
  'design-engineering': Layers,
  'project-management': BarChart3,
  procurement: Truck,
  'construction-management': HardHat,
}

export function Services() {
  const [activeTab, setActiveTab] = useState('core') // 'core' | 'special'

  return (
    <section id="services" className="section relative bg-slate-50/70 border-y border-slate-200/60">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Comprehensive Capabilities</span>
            <h2 className="h-section mt-4 font-bold">
              Integrated services built for{' '}
              <span className="text-gradient">every project phase.</span>
            </h2>
            <p className="lead mt-4 text-slate-600">
              From initial advisory and FEED to detailed engineering, safety facilitation, and specialized optimization.
            </p>
          </div>

          {/* Fluid segment switcher */}
          <div className="grid w-full grid-cols-2 rounded-full bg-slate-200/80 p-1.5 shadow-inner sm:inline-flex sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('core')}
              className={`rounded-full px-4 py-2.5 text-center text-xs sm:text-sm font-semibold transition ${
                activeTab === 'core'
                  ? 'bg-white text-ink shadow-sm'
                  : 'text-slate-600 hover:text-ink'
              }`}
            >
              Core Engineering (5)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('special')}
              className={`inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-center text-xs sm:text-sm font-semibold transition ${
                activeTab === 'special'
                  ? 'bg-white text-ink shadow-sm'
                  : 'text-slate-600 hover:text-ink'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent-500" />
              <span>Specialized (8)</span>
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {activeTab === 'core' ? (
              <motion.div
                key="core"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {CORE_SERVICES.map((s) => {
                  const Icon = coreIconMap[s.id] || Layers
                  return (
                    <div
                      key={s.id}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition hover:border-brand-400 hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                            <Icon className="h-6 w-6" />
                          </span>
                          <span className="font-display text-sm font-bold tracking-wider text-slate-300">
                            {s.number}
                          </span>
                        </div>

                        <h3 className="mt-6 text-xl font-bold text-ink">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          {s.short}
                        </p>

                        <div className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                          {s.bullets.map((b) => (
                            <div key={b} className="flex items-start gap-2.5 text-xs text-slate-600">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-500" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-2">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 transition hover:gap-2.5 hover:text-brand-700"
                        >
                          <span>Request consultation</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            ) : (
              <motion.div
                key="special"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {SPECIAL_SERVICES.map((s) => (
                  <div
                    key={s.id}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-accent-400 hover:shadow-md"
                  >
                    <span className="inline-block rounded-full bg-accent-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-600">
                      {s.category}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
