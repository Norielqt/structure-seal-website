import { motion } from 'framer-motion'
import { WHY } from '../data'
import SectionLabel from './SectionLabel'

export default function Why() {
  return (
    <section id="why" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel title="Why StructureSeal" />
            <h2 className="font-display text-4xl font-800 text-ink leading-tight tracking-tight lg:text-5xl text-balance">
              Why clients choose us.
            </h2>
            <p className="mt-6 text-ink-2 leading-relaxed max-w-sm">
              Three things we do not compromise on, from the first call
              to the final coat.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-blue-dark transition-colors"
            >
              Talk to us about your project
              <span>&#8594;</span>
            </a>
          </div>

          <div className="space-y-4">
            {WHY.map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-bg rounded-lg border border-border p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-bold text-blue bg-blue-light rounded px-1.5 py-0.5 shrink-0 mt-0.5">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="font-display font-700 text-ink text-lg leading-tight">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink-2 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
