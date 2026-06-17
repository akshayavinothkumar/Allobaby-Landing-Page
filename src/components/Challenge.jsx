import { motion } from 'framer-motion'
import { AlertTriangle, Clock, HeartCrack, Brain, MapPin } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations.js'

const challenges = [
  {
    icon: Clock,
    stat: '70%',
    title: 'Delayed Risk Detection',
    description:
      'Critical pregnancy complications often go unnoticed until late trimesters, when timely intervention becomes significantly harder and outcomes worsen.',
  },
  {
    icon: MapPin,
    stat: '60%',
    title: 'Limited Healthcare Access',
    description:
      'Many expectant mothers, especially in rural and underserved areas, lack consistent access to gynecologists and continuous antenatal monitoring.',
  },
  {
    icon: Brain,
    stat: '45%',
    title: 'Pregnancy Anxiety',
    description:
      'Without reliable information and professional support, mothers experience heightened stress, uncertainty, and fear throughout their pregnancy journey.',
  },
  {
    icon: HeartCrack,
    stat: '130',
    title: 'Maternal Mortality Rate',
    description:
      'Per 100,000 live births in India — many deaths are preventable with early detection, continuous monitoring, and timely medical intervention.',
  },
  {
    icon: AlertTriangle,
    stat: '8th',
    title: 'Late-Stage Discovery',
    description:
      'Month when many high-risk conditions are first identified — far too late for optimal preventive care and proactive health management.',
  },
]

export default function Challenge() {
  return (
    <section
      id="challenge"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="challenge-heading"
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
            The Challenge
          </span>
          <h2
            id="challenge-heading"
            className="mt-3 text-3xl font-bold text-text sm:text-4xl lg:text-5xl"
          >
            Motherhood Shouldn&apos;t Come With Uncertainty
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Pregnancy is one of life&apos;s most precious journeys — yet millions of mothers
            navigate it without continuous monitoring, personalized guidance, or timely access
            to healthcare professionals. The gaps in maternal care create preventable risks
            that affect mothers, babies, and families alike.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {challenges.map((item, i) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              custom={i * 0.05}
              className={`rounded-2xl border border-primary/10 bg-section p-6 card-shadow transition-shadow hover:card-shadow-hover ${
                i === challenges.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="rounded-xl bg-primary/10 p-3">
                  <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <span className="text-3xl font-extrabold text-primary/30">{item.stat}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          className="mx-auto mt-12 max-w-2xl text-center text-base font-medium text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          AlloBaby was created to bridge these gaps — bringing continuous monitoring,
          AI-powered insights, and doctor connectivity directly to every mother&apos;s
          fingertips.
        </motion.p>
      </div>
    </section>
  )
}
