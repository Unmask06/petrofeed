import React from 'react'
import { ArrowUp } from 'lucide-react'
import { Logo } from './Logo'
import { COMPANY, NAV_LINKS } from '../data/content'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="container-fluid py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand info */}
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              {COMPANY.summary}
            </p>
            <p className="mt-3 text-xs text-slate-400">
              {COMPANY.legalNameFull}
            </p>
          </div>

          {/* Quick navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary & associate */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Headquarters &amp; Direct Desk
            </h4>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p>
                <span className="text-slate-400">Lead:</span> {COMPANY.contact.lead.name} ({COMPANY.contact.lead.title})
              </p>
              <p>
                <span className="text-slate-400">Email:</span>{' '}
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="text-accent-400 hover:underline"
                >
                  {COMPANY.contact.email}
                </a>
              </p>
              <p>
                <span className="text-slate-400">Phone:</span>{' '}
                <a
                  href={`tel:${COMPANY.contact.phoneTel}`}
                  className="text-white hover:underline"
                >
                  {COMPANY.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-slate-400">Footprint:</span>{' '}
                India · Oman · Qatar · UAE · Singapore
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-slate-300">India Office &amp; Operations:</p>
                <p className="leading-relaxed">{COMPANY.contact.indiaOffice.address}</p>
                <p className="text-slate-300">
                  Tel:{' '}
                  {COMPANY.contact.indiaOffice.phones.map((p, idx) => (
                    <span key={p.tel}>
                      <a href={`tel:${p.tel}`} className="text-accent-400 hover:underline">
                        {p.display}
                      </a>
                      {idx < COMPANY.contact.indiaOffice.phones.length - 1 ? ' / ' : ''}
                    </span>
                  ))}
                </p>
              </div>
              <p className="pt-2 text-xs text-slate-400">
                Associate:{' '}
                <a
                  href={COMPANY.associate.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 underline hover:text-white"
                >
                  {COMPANY.associate.name}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name} Engineering &amp; Consultancy Services. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3.5 py-1.5 text-slate-300 transition hover:border-slate-500 hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
