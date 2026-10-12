import React from 'react'

export function Logo({ variant = 'dark', showSub = true, className = '' }) {
  const isDark = variant === 'dark'
  const textColor = isDark ? 'text-ink' : 'text-white'
  const subColor = isDark ? 'text-slate-500' : 'text-slate-300'

  return (
    <a href="#" className={`group inline-flex items-center gap-3 ${className}`}>
      <span className="relative flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-1.5 shadow-md shadow-brand-900/10 transition-transform duration-300 group-hover:scale-105">
        <img
          src={`${import.meta.env.BASE_URL}logo-mark.jpeg`}
          alt="PetroFeed Mark"
          className="h-full w-full object-contain invert brightness-200"
        />
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg sm:text-xl font-bold tracking-tight ${textColor}`}>
          Petro<span className="text-brand-600">Feed</span>
        </span>
        {showSub && (
          <span
            className={`mt-1 font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] ${subColor} hidden min-[360px]:block`}
          >
            Engineering &amp; Consultancy
          </span>
        )}
      </span>
    </a>
  )
}
