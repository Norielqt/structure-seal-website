import { useEffect, useRef, useState } from 'react'
import { GALLERY } from '../data'
import SectionLabel from './SectionLabel'

type Item = (typeof GALLERY)[number]

function Tile({ item }: { item: Item }) {
  const [imgOk, setImgOk] = useState(true)

  return (
    <figure className="relative shrink-0 w-48 aspect-[4/3] overflow-hidden rounded-lg border border-border group/tile sm:w-64 lg:w-80">
      {imgOk ? (
        <img
          src={item.src}
          alt={item.caption}
          onError={() => setImgOk(false)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/tile:scale-[1.04]"
        />
      ) : (
        <div className="w-full h-full bg-surface-2 flex items-center justify-center">
          <span className="text-xs font-semibold uppercase tracking-label text-ink-3">Photo coming</span>
        </div>
      )}
    </figure>
  )
}

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)

  // Measure the exact width of one copy and set the CSS variable so the
  // animation always translates by precisely one slot — no more off-by-a-gap jumps.
  useEffect(() => {
    const measure = () => {
      if (!copyRef.current) return
      const w = copyRef.current.getBoundingClientRect().width
      trackRef.current?.style.setProperty('--marquee-w', `${w}px`)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section id="work" className="bg-bg py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-12">
        <SectionLabel title="Our work" />
        <h2 className="font-display text-3xl font-800 text-ink leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Recent projects.
        </h2>
      </div>

      <div className="relative group">
        {/* Outer track — the element that animates */}
        <div
          ref={trackRef}
          className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ '--marquee-w': '50%' } as React.CSSProperties}
        >
          {/* Copy A — measured to get exact slot width */}
          <div ref={copyRef} className="flex gap-4 shrink-0">
            {GALLERY.map((item) => (
              <Tile key={item.src} item={item} />
            ))}
          </div>

          {/* Copy B — identical, provides seamless continuation */}
          <div className="flex gap-4 shrink-0">
            {GALLERY.map((item) => (
              <Tile key={`${item.src}-b`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
