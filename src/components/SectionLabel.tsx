import { motion } from 'framer-motion'

export default function SectionLabel({ title }: { title: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-xs font-semibold uppercase tracking-label text-blue mb-4"
    >
      {title}
    </motion.p>
  )
}
