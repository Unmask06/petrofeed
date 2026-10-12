import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Award, Users2, Shield } from 'lucide-react'
import { COMPANY } from '../data/content'

export function About() {
  const pillars = [
    {
      icon: Award,
      title: 'Technical Depth',
      desc: COMPANY.differentiator,
    },
    {
      icon: Shield,
      title: 'Safe-Economic Delivery',
      desc: COMPANY.deliveryPromise,
    },
    {
      icon: Users2,
      title: 'Customer-Centric',
      desc: COMPANY.values.commitment,
    },
  ]

  return (
    <section id="about" className="section relative bg-slate-50/60 border-y border-slate-200/60">
      <div className="container-fluid">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="eyebrow">About PetroFeed</span>
            <h2 className="h-section mt-4 font-bold">
              Integrated engineering consulting with{' '}
              <span className="text-gradient">proven insight.</span>
            </h2>
            <p className="lead mt-6 text-slate-600">
              {COMPANY.summary}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {COMPANY.differentiator}
            </p>

            <div className="mt-8 space-y-3">
              {[
                'Full asset management services across the lifecycle',
                'Design, detailed engineering & procurement capability',
                'Safe-economic solutions tailored for rapid deployment',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-500" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pillars column */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
