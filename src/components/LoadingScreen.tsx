import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    let intervalId: number

    intervalId = window.setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(intervalId)
          return prev
        }
        return Math.min(prev + Math.random() * 10, 90)
      })
    }, 120)

    const onLoad = () => {
      clearInterval(intervalId)
      setProgress(100)
      setTimeout(() => {
        setVisible(false)
        document.body.style.overflow = ''
      }, 500)
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
    }

    return () => {
      clearInterval(intervalId)
      window.removeEventListener('load', onLoad)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          <div className="flex items-center gap-2.5 mb-8">
            <img
              src="/logo-mark.png"
              alt=""
              className="h-8 w-auto"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <span className="font-display text-lg font-700 tracking-tight text-ink">
              Structure<span className="text-blue">Seal</span>
            </span>
          </div>

          <div className="w-48 h-[2px] bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
