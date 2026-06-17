import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ScreenshotImage from './ScreenshotImage.jsx'
import { screenshots } from '../data/screenshots.js'
import { fadeInUp } from '../utils/animations.js'

function PhoneFrame({ file, title, className = '' }) {
  return (
    <div className={`mx-auto w-[200px] sm:w-[220px] ${className}`}>
      <div className="rounded-[2rem] border-[5px] border-gray-800 bg-gray-800 p-1.5 shadow-xl">
        <div className="overflow-hidden rounded-[1.5rem] bg-white">
          <ScreenshotImage
            file={file}
            alt={`AlloBaby app — ${title}`}
            className="h-[400px] w-full object-cover object-top"
          />
        </div>
      </div>
      <p className="mt-3 text-center text-sm font-medium text-gray-600">{title}</p>
    </div>
  )
}

export default function Screenshots() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % screenshots.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section
      id="screenshots"
      className="bg-white py-20 sm:py-28 overflow-hidden"
      aria-labelledby="screenshots-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            App Preview
          </span>
          <h2
            id="screenshots-heading"
            className="mt-3 text-3xl font-bold text-text sm:text-4xl lg:text-5xl"
          >
            Experience AlloBaby
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            A beautifully designed interface that makes complex healthcare simple,
            accessible, and reassuring for every mother.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mt-16 mx-auto max-w-lg" role="region" aria-label="App screenshot carousel">
          <div className="relative mx-auto w-[280px] sm:w-[300px]">
            <div className="rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-800 p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[2rem] bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ScreenshotImage
                      file={screenshots[current].file}
                      alt={`AlloBaby — ${screenshots[current].title}`}
                      className="h-[520px] w-full object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="absolute top-3 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-gray-800" aria-hidden="true" />
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-lg font-bold text-text">{screenshots[current].title}</h3>
            <p className="mt-1 text-sm text-gray-600">{screenshots[current].description}</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-primary/20 bg-white p-3 text-primary transition-colors hover:bg-section focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Screenshot navigation">
              {screenshots.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`View ${s.title}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current ? 'w-8 bg-primary' : 'w-2.5 bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="rounded-full border border-primary/20 bg-white p-3 text-primary transition-colors hover:bg-section focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          {screenshots.map((shot) => (
            <PhoneFrame key={shot.id} file={shot.file} title={shot.title} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
