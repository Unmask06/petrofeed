import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MessageSquare, X, MessageCircle } from 'lucide-react'
import { COMPANY } from '../data/content'

export function FloatingQuickContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-40 md:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="mb-3 flex flex-col items-end gap-2"
          >
            {/* WhatsApp */}
            <a
              href={COMPANY.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-emerald-900/20 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Direct Phone */}
            <a
              href={`tel:${COMPANY.contact.phoneTel}`}
              aria-label="Direct Phone Call"
              className="flex items-center gap-2.5 rounded-full bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-900/20 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              <span>Call ({COMPANY.contact.phoneDisplay})</span>
            </a>

            {/* Direct Email */}
            <a
              href={`mailto:${COMPANY.contact.email}`}
              aria-label="Direct Email"
              className="flex items-center gap-2.5 rounded-full bg-slate-800 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-slate-900/20 active:scale-95"
            >
              <Mail className="h-4 w-4" />
              <span>Send Email</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main trigger button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close quick contact' : 'Open quick contact options'}
        className="flex h-13 w-13 items-center justify-center rounded-full bg-brand-600 text-white shadow-xl shadow-brand-900/30 transition-transform active:scale-90"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-400" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}
