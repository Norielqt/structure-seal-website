import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as const

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen bg-white flex flex-col pt-20"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue" />

      <div className="flex-1 flex flex-col mx-auto w-full max-w-7xl px-6 py-8 lg:px-10 lg:py-14">

        {/* Main grid — expands to fill available viewport height */}
        <div className="flex-1 grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* Left — headline + description + CTAs, vertically centred */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="text-sm font-semibold uppercase tracking-label text-blue mb-6"
            >
              Sydney Flooring and Waterproofing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
              className="font-display text-4xl font-800 leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl text-balance"
            >
              Epoxy floors and waterproofing that last.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease }}
              className="mt-6 text-lg text-ink-2 leading-relaxed max-w-md"
            >
              We install flooring and waterproofing systems for homes, businesses
              and industry across Sydney. We show you exactly how each service
              works before we start.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#systems"
                className="rounded-md bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
              >
                See our services
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-2"
              >
                Get a free quote
              </a>
            </motion.div>
          </div>

          {/* Right — hero image, fills full column height */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="rounded-xl overflow-hidden shadow-lg border border-border min-h-[240px] sm:min-h-[360px] lg:min-h-0"
          >
            <img
              src="/hero-image.png"
              alt="StructureSeal epoxy flooring and waterproofing"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

        {/* Stats — anchored at bottom of hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-10 pt-8 border-t border-border"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ['25+', 'Years of experience'],
              ['50+', 'Projects completed'],
              ['75+', 'Satisfied clients'],
              ['100+', 'Certifications attained'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-3xl font-800 text-ink">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-label text-ink-3">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
