import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { fadeInUp } from '../utils/animations.js'

const comparisonItems = [
  {
    feature: 'Continuous Health Monitoring',
    allobaby: true,
    traditional: false,
    description: 'Real-time vital tracking vs. periodic clinic visits only',
  },
  {
    feature: 'AI-Powered Risk Detection',
    allobaby: true,
    traditional: false,
    description: 'Predictive alerts vs. reactive diagnosis at appointments',
  },
  {
    feature: '24/7 AI Assistant (Allobot)',
    allobaby: true,
    traditional: false,
    description: 'Instant answers vs. waiting for doctor availability',
  },
  {
    feature: 'Doctor Video Consultations',
    allobaby: true,
    traditional: false,
    description: 'Remote expert access vs. in-person visits only',
  },
  {
    feature: 'Personalized Wellness Plans',
    allobaby: true,
    traditional: false,
    description: 'Tailored daily guidance vs. generic pamphlets',
  },
  {
    feature: 'Family & Partner Connectivity',
    allobaby: true,
    traditional: false,
    description: 'Shared journey vs. mother navigates alone',
  },
  {
    feature: 'Baby Cry Detection AI',
    allobaby: true,
    traditional: false,
    description: 'Intelligent newborn support vs. trial and error',
  },
  {
    feature: 'Basic Prenatal Checkups',
    allobaby: true,
    traditional: true,
    description: 'Both approaches include scheduled medical examinations',
  },
]

const highlights = [
  'Continuous monitoring between doctor visits',
  'AI support that learns your unique patterns',
  'Direct connectivity to healthcare professionals',
  'Remote care from anywhere, anytime',
  'Personalized guidance for every trimester',
  'Designed exclusively for maternal health',
]

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="bg-section py-20 sm:py-28"
      aria-labelledby="why-choose-heading"
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
            Why AlloBaby
          </span>
          <h2
            id="why-choose-heading"
            className="mt-3 text-3xl font-bold text-text sm:text-4xl lg:text-5xl"
          >
            Why Choose AlloBaby?
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            See how AlloBaby transforms the standard pregnancy experience into
            intelligent, connected, and proactive maternal care.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {highlights.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-text card-shadow"
            >
              <Check className="h-4 w-4 text-success" aria-hidden="true" />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 overflow-hidden rounded-3xl bg-white card-shadow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left" role="table">
              <thead>
                <tr className="border-b border-primary/10 bg-section">
                  <th className="px-6 py-4 text-sm font-semibold text-text" scope="col">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary" scope="col">
                    AlloBaby
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500" scope="col">
                    Traditional Care
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-section/50'}
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-text">{row.feature}</div>
                      <div className="mt-0.5 text-xs text-gray-500">{row.description}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.allobaby ? (
                        <Check className="mx-auto h-5 w-5 text-success" aria-label="Available" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-gray-300" aria-label="Not available" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.traditional ? (
                        <Check className="mx-auto h-5 w-5 text-gray-400" aria-label="Available" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-gray-300" aria-label="Not available" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
