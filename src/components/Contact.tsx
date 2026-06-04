import { motion } from 'framer-motion'
import { CONTACT } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="bg-bg py-8 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto max-w-7xl"
      >
        {/* CTA block */}
        <div className="bg-blue rounded-xl p-10 lg:p-16 lg:flex lg:items-center lg:justify-between gap-12">
          <div className="lg:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-label text-white/70 mb-4">
              Start your project
            </p>
            <h2 className="font-display text-3xl font-800 text-white leading-tight tracking-tight lg:text-4xl">
              Tell us about your project.
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Flooring or waterproofing, home or business. We will recommend
              the right system and arrange a free assessment across{' '}
              {CONTACT.area}.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 lg:mt-0 lg:shrink-0">
            <a
              href={CONTACT.emailHref}
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue transition-colors hover:bg-blue-light text-center"
            >
              Request a free quote
            </a>
            <a
              href={CONTACT.phoneHref}
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 text-center"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pb-8 border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo-mark.png"
              alt=""
              className="h-7 w-auto"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <span className="font-display font-700 text-ink">
              Structure<span className="text-blue">Seal</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-3">
            <a href={CONTACT.phoneHref} className="hover:text-ink transition-colors">{CONTACT.phone}</a>
            <a href={CONTACT.emailHref} className="hover:text-ink transition-colors">{CONTACT.email}</a>
            <span>{CONTACT.area}</span>
          </div>

          <p className="text-xs text-ink-3">
            {CONTACT.tagline} &copy; {new Date().getFullYear()} StructureSeal
          </p>
        </footer>
      </motion.div>
    </section>
  )
}
