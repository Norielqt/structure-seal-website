import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQS } from '../data'
import SectionLabel from './SectionLabel'

const ease = [0.25, 0.1, 0.25, 1] as const

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-6 mb-10 lg:mb-14">
          <div className="lg:col-span-6">
            <SectionLabel title="FAQ" />
            <h2 className="font-display text-3xl font-800 text-ink leading-tight tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Frequently asked questions.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="text-ink-2 leading-relaxed">
              Got a question we haven't answered? Call us on{' '}
              <a href="tel:1300699799" className="font-semibold text-blue hover:underline">
                1300 699 799
              </a>{' '}
              or send us a message.
            </p>
          </div>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-5 text-left group"
              >
                <span className="font-display text-base font-700 text-ink group-hover:text-blue transition-colors sm:text-lg">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-ink-3 transition-all duration-200 ${
                    open === i ? 'bg-blue border-blue text-white rotate-45' : 'group-hover:border-blue group-hover:text-blue'
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-ink-2 leading-relaxed max-w-2xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
