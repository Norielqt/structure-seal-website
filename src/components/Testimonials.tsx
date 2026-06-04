import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TESTIMONIALS } from '../data'
import SectionLabel from './SectionLabel'

const expo = [0.16, 1, 0.3, 1] as const

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-blue fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({
  t,
  i,
}: {
  t: (typeof TESTIMONIALS)[number]
  i: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: expo, delay: i * 0.1 }}
      className="flex flex-col bg-white border border-border rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Quote mark */}
      <svg
        className="w-8 h-8 text-blue/20 mb-4 shrink-0"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M10 8C5.582 8 2 11.582 2 16v8h8v-8H6c0-2.206 1.794-4 4-4V8zm14 0c-4.418 0-8 3.582-8 8v8h8v-8h-4c0-2.206 1.794-4 4-4V8z" />
      </svg>

      {/* Quote */}
      <p className="text-ink-2 leading-relaxed text-[15px] flex-1">
        "{t.quote}"
      </p>

      {/* Divider */}
      <div className="border-t border-border mt-6 pt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-display font-700 text-ink text-sm">{t.name}</p>
          <p className="text-ink-3 text-xs mt-0.5">{t.role} · {t.location}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <StarRating count={t.rating} />
          <span className="text-[10px] font-semibold uppercase tracking-label text-blue">
            {t.service}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start end', 'start 40%'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [28, 0])

  return (
    <section className="bg-bg py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div ref={headerRef} style={{ opacity, y }} className="mb-12 lg:mb-16">
          <SectionLabel title="Client reviews" />
          <h2 className="font-display text-3xl font-800 text-ink leading-tight tracking-tight sm:text-4xl lg:text-5xl text-balance">
            What our clients say.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
