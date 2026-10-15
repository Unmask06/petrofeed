import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  Copy,
  MessageCircle,
} from 'lucide-react'
import { COMPANY, MARKETS, CORE_SERVICES } from '../data/content'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Consultancy',
    market: 'Oil & Gas',
    message: '',
  })
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Inquiry: ${formData.service} (${formData.market}) - from ${formData.name || 'Website Visitor'}`
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'N/A'}\n` +
        `Service Required: ${formData.service}\n` +
        `Industry / Market: ${formData.market}\n\n` +
        `Project / Inquiry Details:\n${formData.message}\n`
    )
    window.location.href = `mailto:${COMPANY.contact.email}?subject=${subject}&body=${body}`
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(COMPANY.contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section relative bg-white">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <span className="eyebrow">Connect With Us</span>
          <h2 className="h-section mt-4 font-bold">
            Let&apos;s discuss your next{' '}
            <span className="text-brand-600">engineering challenge.</span>
          </h2>
          <p className="lead mt-4 text-slate-600">
            Reach out to our team or submit your project scope below.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Direct contact cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email card */}
            <div className="flex items-start justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${COMPANY.contact.email}`}
                    className="mt-1 block text-base font-bold text-ink hover:text-brand-600"
                  >
                    {COMPANY.contact.email}
                  </a>
                  <p className="text-xs text-slate-500">Inquiries answered within 24 hours</p>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-brand-600"
                title="Copy to clipboard"
              >
                {copied ? (
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Combined phone and WhatsApp card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Call or WhatsApp
              </p>
              <p className="mt-1 text-base font-bold text-ink">
                {COMPANY.contact.phoneDisplay}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:${COMPANY.contact.phoneTel}`}
                  aria-label={`Call PetroFeed at ${COMPANY.contact.phoneDisplay}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  <Phone aria-hidden="true" className="h-5 w-5" />
                  <span>Call</span>
                </a>
                <a
                  href={COMPANY.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with PetroFeed on WhatsApp (opens in a new tab)"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  <MessageCircle aria-hidden="true" className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200/80 bg-slate-50/60 p-8 shadow-sm md:p-10"
            >
              <h3 className="font-display text-xl font-bold text-ink">
                Submit an Inquiry
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                This will prepare an email directly addressed to our engineering desk.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-base sm:text-sm text-ink placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-base sm:text-sm text-ink placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 ..."
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-base sm:text-sm text-ink placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="market"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Industry / Market
                  </label>
                  <select
                    id="market"
                    name="market"
                    value={formData.market}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-base sm:text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  >
                    {MARKETS.map((m) => (
                      <option key={m.id} value={m.name}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Required Service Discipline
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-base sm:text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  >
                    {CORE_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Special Services (HAZOP / SIL / Optimization)">
                      Special Services (HAZOP, SIL, Optimization, Modeling)
                    </option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Project Details / Scope *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your assignment, facility location, and desired timeline..."
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-base sm:text-sm text-ink placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
              >
                <span>Compose Email to PetroFeed</span>
                <Send className="h-4 w-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
