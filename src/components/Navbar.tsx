import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  ['Home', '#top'],
  ['Services', '#systems'],
  ['Our work', '#work'],
  ['FAQs', '#faq'],
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled || menuOpen
          ? 'bg-white border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <a href="#top" onClick={close} className="flex items-center gap-2.5">
          <img
            src="/logo-mark.png"
            alt=""
            className="h-8 w-auto"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <span className="font-display text-lg font-700 tracking-tight text-ink">
            Structure<span className="text-blue">Seal</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={close}
            className="hidden md:inline-flex rounded-md bg-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
          >
            Get a quote
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block h-0.5 w-5 bg-ink rounded-full transition-all duration-200 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink rounded-full transition-all duration-200 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink rounded-full transition-all duration-200 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-white border-t border-border"
          >
            <nav className="flex flex-col px-6 pb-4 pt-2">
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={close}
                  className="flex items-center py-4 text-base font-medium text-ink border-b border-border last:border-0 hover:text-blue transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={close}
                className="mt-4 rounded-md bg-blue px-6 py-3 text-sm font-semibold text-white text-center transition-colors hover:bg-blue-dark"
              >
                Get a free quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
