import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Markets } from './components/Markets'
import { Services } from './components/Services'
import { Values } from './components/Values'
import { Presence } from './components/Presence'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingQuickContact } from './components/FloatingQuickContact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-700 antialiased selection:bg-teal-200 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Markets />
        <Services />
        <Values />
        <Presence />
        <Contact />
      </main>
      <Footer />
      <FloatingQuickContact />
    </div>
  )
}
