import { motion } from 'framer-motion'
import {
  Download,
  Play,
  Shield,
  Activity,
  Brain,
  Users,
  Star,
} from 'lucide-react'
import ScreenshotImage from './ScreenshotImage.jsx'
import { fadeInUp, slideInRight } from '../utils/animations.js'

const floatingFeatures = [
  { icon: Activity, label: 'Vital Tracking', color: 'bg-primary/10 text-primary' },
  { icon: Brain, label: 'AI Insights', color: 'bg-accent/10 text-accent' },
  { icon: Shield, label: 'Risk Alerts', color: 'bg-success/10 text-success' },
]

const trustIndicators = [
  { icon: Users, text: 'Built for mothers & families' },
  { icon: Shield, text: 'HIPAA-ready data security' },
  { icon: Star, text: 'Doctor-connected care' },
]

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden gradient-hero pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                AI-Powered Maternal Healthcare
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.1}
            >
              Your AI-Powered{' '}
              <span className="text-gradient">Pregnancy Companion</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.2}
            >
              AlloBaby is a comprehensive maternal care platform designed for expectant
              mothers, partners, and families. Monitor your pregnancy health, receive
              AI-powered risk alerts, consult doctors remotely, and access personalized
              guidance — every step of your motherhood journey.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.3}
            >
              <motion.a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-8 py-4 text-base font-semibold text-white shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Download AlloBaby app"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Download App
              </motion.a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/30 bg-white px-8 py-4 text-base font-semibold text-primary transition-colors hover:border-primary hover:bg-section"
              >
                <Play className="h-5 w-5" aria-hidden="true" />
                See How It Works
              </a>
            </motion.div>

            <motion.ul
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6"
              role="list"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.4}
            >
              {trustIndicators.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <div className="relative mx-auto w-[280px] sm:w-[300px] lg:w-[320px]">
              <div className="rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-800 p-2 shadow-2xl">
                <div className="overflow-hidden rounded-[2rem] bg-white">
                  <ScreenshotImage
                    file="dashboard-placeholder"
                    alt="AlloBaby app dashboard showing pregnancy health overview"
                    className="h-[520px] w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute top-3 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-gray-800" aria-hidden="true" />
            </div>

            {floatingFeatures.map(({ icon: Icon, label, color }, i) => (
              <motion.div
                key={label}
                className={`absolute flex items-center gap-2 rounded-2xl bg-white px-4 py-3 card-shadow ${color} ${
                  i === 0 ? '-left-4 top-16 sm:-left-12' : i === 1 ? '-right-4 top-1/3 sm:-right-8' : '-left-2 bottom-24 sm:-left-10'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                aria-hidden="true"
              >
                <div className={`rounded-lg p-2 ${color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold text-text">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
