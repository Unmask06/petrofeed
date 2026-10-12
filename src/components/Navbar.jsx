import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone, Mail, MessageCircle } from 'lucide-react'
import { Logo } from './Logo'
import { NAV_LINKS, COMPANY } from '../data/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-5'
        }`}
      >
        <div className="container-fluid">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 ${
              scrolled
                ? 'bg-white/90 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5 backdrop-blur-md'
                : 'bg-white/70 ring-1 ring-slate-900/5 backdrop-blur-sm'
            }`}
          >
            <Logo />

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-brand-600"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-slate-950 text-white md:hidden"
          >
            <div className="container-fluid flex items-center justify-between py-5">
              <Logo variant="light" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="container-fluid flex flex-1 flex-col justify-between py-10">
              <motion.div
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.06 } },
                }}
                className="flex flex-col gap-5"
              >
                {NAV_LINKS.map((link) => (
                  <motion.a
                    key={link.href}
                    variants={{
                      closed: { opacity: 0, x: -20 },
                      open: { opacity: 1, x: 0 },
                    }}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl font-bold tracking-tight text-white/90 hover:text-accent-400"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>

              <div className="space-y-4 border-t border-white/10 pt-6">
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-accent-400" />
                  {COMPANY.contact.email}
                </a>
                <a
                  href={`tel:${COMPANY.contact.phoneTel}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-accent-400" />
                  {COMPANY.contact.phoneDisplay}
                </a>
                <a
                  href={COMPANY.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-emerald-400 hover:text-emerald-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
