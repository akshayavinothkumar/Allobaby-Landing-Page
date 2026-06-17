import { motion } from 'framer-motion'
import {
  Download,
  UserPlus,
  Activity,
  Brain,
  Stethoscope,
  Baby,
  Calendar,
  Heart,
} from 'lucide-react'
import { fadeInUp } from '../utils/animations.js'

const steps = [
  {
    icon: Download,
    step: 1,
    title: 'Download AlloBaby',
    description: 'Get the app from Google Play and install it on your smartphone in seconds.',
  },
  {
    icon: UserPlus,
    step: 2,
    title: 'Create Profile',
    description: 'Set up your maternal health profile with due date, medical history, and preferences.',
  },
  {
    icon: Activity,
    step: 3,
    title: 'Track Pregnancy Health',
    description: 'Log vitals, symptoms, fetal movements, and daily wellness data effortlessly.',
  },
  {
    icon: Brain,
    step: 4,
    title: 'Receive AI Insights',
    description: 'Allobot analyzes your data and delivers personalized recommendations and alerts.',
  },
  {
    icon: Stethoscope,
    step: 5,
    title: 'Connect With Doctors',
    description: 'Link with your healthcare provider for remote monitoring and consultations.',
  },
  {
    icon: Baby,
    step: 6,
    title: 'Monitor Baby Development',
    description: 'Track fetal health milestones and receive trimester-specific development updates.',
  },
  {
    icon: Calendar,
    step: 7,
    title: 'Manage Appointments',
    description: 'Schedule, remind, and prepare for every prenatal checkup and test.',
  },
  {
    icon: Heart,
    step: 8,
    title: 'Continue Postpartum Support',
    description: 'Transition seamlessly to newborn care with cry detection and recovery tracking.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-section py-20 sm:py-28"
      aria-labelledby="how-it-works-heading"
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
            How It Works
          </span>
          <h2
            id="how-it-works-heading"
            className="mt-3 text-3xl font-bold text-text sm:text-4xl lg:text-5xl"
          >
            Your Journey With AlloBaby
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            From download to delivery and beyond — a simple, guided path to smarter maternal care.
          </p>
        </motion.div>

        <div className="relative mt-16 max-w-3xl mx-auto">
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-light sm:left-1/2 sm:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-8" role="list">
            {steps.map((item, i) => {
              const Icon = item.icon
              const isEven = i % 2 === 0

              return (
                <motion.li
                  key={item.step}
                  className={`relative flex items-center gap-6 sm:gap-0 ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeInUp}
                  custom={i * 0.08}
                >
                  <div className={`flex-1 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div
                      className={`rounded-2xl bg-white p-6 card-shadow ml-14 sm:ml-0 ${
                        isEven ? '' : ''
                      }`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Step {item.step}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-text">{item.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full gradient-primary shadow-lg z-10"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <div className="hidden flex-1 sm:block" aria-hidden="true" />
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
