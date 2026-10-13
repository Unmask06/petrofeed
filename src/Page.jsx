import React from 'react'
import { AnimatePresence } from 'framer-motion'
import App from './App.jsx'

// Keep the first render visible in static HTML and during hydration.
export function Page() {
  return <AnimatePresence initial={false}><App /></AnimatePresence>
}
