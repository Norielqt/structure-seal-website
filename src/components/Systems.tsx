import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { SYSTEMS } from '../data'
import SectionLabel from './SectionLabel'

type System = (typeof SYSTEMS)[number]

const expo = [0.16, 1, 0.3, 1] as const

function StepViewer({ sys }: { sys: System }) {
  const [active, setActive] = useState(0)
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})
  const step = sys.steps[active]

  useEffect(() => {
    sys.steps.forEach((s, i) => {
      const img = new window.Image()
      img.onload = () => setLoaded(prev => ({ ...prev, [i]: true }))
      img.src = s.image
    })
  }, [sys])

  return (
    <div className="border border-border rounded-xl overflow-hidden shadow-sm bg-white">
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
        {!loaded[active] && (
          <div className="absolute inset-0 bg-surface-2 animate-pulse" />
        )}

        <AnimatePresence mode="sync">
          <motion.img
            key={active}
            src={step.image}
            alt={step.name}
            onLoad={() => setLoaded(prev => ({ ...prev, [active]: true }))}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.55, ease: expo } }}
            exit={{ opacity: 0, scale: 0.99, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } }}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        </AnimatePresence>
      </div>

      {/* Step info */}
      <div className="px-5 pt-4 pb-3 border-t border-border min-h-[7rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: expo } }}
            exit={{ opacity: 0, y: -5, transition: { duration: 0.14, ease: [0.4, 0, 1, 1] } }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-label text-blue mb-1">
              Step {active + 1}
            </p>
            <p className="font-display text-xl font-700 text-ink leading-tight">{step.name}</p>
            <p className="mt-2 text-sm text-ink-2 leading-relaxed">{step.desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Step tab navigation */}
      <div className="px-5 pb-5 flex flex-wrap gap-2">
        {sys.steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative text-xs font-semibold px-3 py-1.5 rounded-md transition-colors duration-200 ${
              i === active
                ? 'text-white'
                : 'bg-surface-2 text-ink-2 border border-border hover:border-blue/40 hover:text-blue'
            }`}
          >
            {i === active && (
              <motion.span
                layoutId={`tab-bg-${sys.id}`}
                className="absolute inset-0 bg-blue rounded-md"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{s.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function ServiceSection({ sys }: { sys: System; i: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 15%'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const yLeft = useTransform(scrollYProgress, [0, 1], [56, 0])
  const yRight = useTransform(scrollYProgress, [0, 1], [80, 0])
  const opacityRight = useTransform(scrollYProgress, [0.08, 1], [0, 1])

  return (
    <div
      ref={ref}
      id={sys.id}
      className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-start py-10 lg:py-16 border-b border-border last:border-0"
    >
      {/* Left — sticky info panel */}
      <motion.div style={{ opacity, y: yLeft }} className="lg:sticky lg:top-28">
        <h3 className="font-display text-2xl font-800 text-ink leading-tight sm:text-3xl">{sys.name}</h3>

        <p className="mt-2 text-[10px] font-semibold uppercase tracking-label text-blue">
          {sys.traits.join(' · ')}
        </p>

        <p className="mt-5 text-ink-2 leading-relaxed">{sys.description}</p>

        <div className="mt-6">
          <p className="text-[10px] font-semibold uppercase tracking-label text-ink-3 mb-3">
            Best for
          </p>
          <div className="flex flex-wrap gap-2">
            {sys.bestFor.map(tag => (
              <span
                key={tag}
                className="text-sm text-ink-2 border border-border rounded-full px-3 py-1 bg-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right — step viewer */}
      <motion.div style={{ opacity: opacityRight, y: yRight }}>
        <StepViewer sys={sys} />
      </motion.div>
    </div>
  )
}

export default function Systems() {
  const headerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ['start end', 'start 35%'],
  })

  const headerOpacity = useTransform(headerProgress, [0, 1], [0, 1])
  const headerY = useTransform(headerProgress, [0, 1], [32, 0])

  return (
    <section id="systems" className="bg-bg py-16 lg:py-32">
      <div id="services" className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          style={{ opacity: headerOpacity, y: headerY }}
          className="mb-10 lg:mb-16"
        >
          <SectionLabel title="Our services" />
          <h2 className="font-display text-3xl font-800 text-ink leading-tight tracking-tight sm:text-4xl lg:text-5xl text-balance">
            What we do.
          </h2>
        </motion.div>

        {/* Services */}
        <div>
          {SYSTEMS.map((sys, i) => (
            <ServiceSection key={sys.id} sys={sys} i={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
