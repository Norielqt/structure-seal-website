import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion'
import { LAYERS } from '../data'
import SectionLabel from './SectionLabel'

const BAND_H: Record<string, number> = {
  topcoat: 22,
  buildcoat: 60,
  membrane: 36,
  primer: 22,
  substrate: 84,
}

const REVEAL = ['substrate', 'primer', 'membrane', 'buildcoat', 'topcoat']
const SEG = 0.17

function LayerBand({
  layer,
  progress,
}: {
  layer: (typeof LAYERS)[number]
  progress: MotionValue<number>
}) {
  const order = REVEAL.indexOf(layer.id)
  const start = 0.08 + order * SEG
  const end = start + SEG

  const scaleY = useTransform(progress, [start, end], [0, 1])
  const opacity = useTransform(progress, [start, start + 0.02], [0, 1])

  return (
    <div className="flex items-center gap-4 relative">
      <span className="w-6 text-right text-xs font-mono text-ink-3 shrink-0">{layer.step}</span>
      <div className="flex-1" style={{ height: BAND_H[layer.id] }}>
        <motion.div
          className="w-full h-full rounded-sm"
          style={{
            background: layer.color,
            scaleY,
            opacity,
            transformOrigin: 'bottom',
          }}
        />
      </div>
    </div>
  )
}

export default function Methodology() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const [active, setActive] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const revealed = Math.min(REVEAL.length - 1, Math.floor((v - 0.08) / SEG))
    const clamped = Math.max(0, revealed)
    setActive(LAYERS.length - 1 - clamped)
  })

  return (
    <section id="method" ref={ref} className="relative h-[320vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: diagram */}
          <div className="order-2 lg:order-1">
            <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm max-w-sm mx-auto lg:mx-0">
              <div className="border-b border-border bg-surface-2 px-5 py-3 flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-label text-ink-3">Cross section</span>
                <span className="text-xs font-semibold text-blue">Scroll to build</span>
              </div>
              <div className="p-5 space-y-1.5">
                {LAYERS.map((layer) => (
                  <LayerBand key={layer.id} layer={layer} progress={scrollYProgress} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: steps */}
          <div className="order-1 lg:order-2">
            <SectionLabel title="How it works" />
            <h2 className="font-display text-4xl font-800 text-ink leading-tight tracking-tight mb-4 lg:text-5xl">
              How a system goes down.
            </h2>
            <p className="text-ink-2 mb-8 max-w-md">
              Every lasting floor starts with what you cannot see. Scroll
              through the build from substrate to finish coat.
            </p>

            <div className="space-y-2">
              {LAYERS.map((layer, i) => {
                const isActive = active === i
                return (
                  <div
                    key={layer.id}
                    className={`flex gap-4 px-4 py-3 rounded-md border transition-all duration-250 ${
                      isActive
                        ? 'border-blue/30 bg-blue-light'
                        : 'border-transparent opacity-40'
                    }`}
                  >
                    <span
                      className="font-mono text-sm font-bold shrink-0 mt-0.5"
                      style={{ color: isActive ? layer.color : undefined }}
                    >
                      {layer.step}
                    </span>
                    <div>
                      <p className="font-semibold text-ink leading-tight">{layer.name}</p>
                      <div className={`grid transition-all duration-250 ${isActive ? 'grid-rows-[1fr] mt-1' : 'grid-rows-[0fr]'}`}>
                        <p className="text-sm text-ink-2 overflow-hidden">{layer.note}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
