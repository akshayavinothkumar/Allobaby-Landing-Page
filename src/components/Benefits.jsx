import { motion } from 'framer-motion'
import { Heart, Users, Stethoscope, Baby } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations.js'

const benefitGroups = [
  {
    icon: Heart,
    title: 'Benefits for Mothers',
    color: 'from-primary/10 to-primary-light/20',
    iconColor: 'text-primary',
    items: [
      {
        title: 'Peace of Mind, Always',
        text: 'Continuous monitoring and AI alerts mean you never wonder alone — potential concerns are identified and addressed early.',
      },
      {
        title: 'Personalized Guidance',
        text: 'Receive trimester-specific advice on nutrition, exercise, and wellness tailored to your unique health profile and preferences.',
      },
      {
        title: 'Convenient Doctor Access',
        text: 'Consult with gynecologists via video or chat without leaving home, saving time and reducing exposure risks.',
      },
      {
        title: 'Complete Health Records',
        text: 'Every vital sign, symptom, and milestone is logged and organized — ready to share with your care team at any time.',
      },
    ],
  },
  {
    icon: Users,
    title: 'Benefits for Families',
    color: 'from-accent/10 to-accent/5',
    iconColor: 'text-accent',
    items: [
      {
        title: 'Partner Involvement',
        text: 'Partners can stay connected to the pregnancy journey, receive updates, and support mothers with shared visibility.',
      },
      {
        title: 'Reduced Family Anxiety',
        text: 'When mothers are monitored and supported, the entire family benefits from reduced stress and greater confidence.',
      },
      {
        title: 'Coordinated Care',
        text: 'Family members and caregivers access the same trusted information, ensuring everyone is aligned on health decisions.',
      },
      {
        title: 'Postpartum Transition',
        text: 'Baby cry detection and newborn tracking help the whole family adapt confidently to life with a new baby.',
      },
    ],
  },
  {
    icon: Stethoscope,
    title: 'Benefits for Healthcare Providers',
    color: 'from-success/10 to-success/5',
    iconColor: 'text-success',
    items: [
      {
        title: 'Remote Patient Monitoring',
        text: 'Doctors access real-time patient vitals and trends between visits, enabling proactive intervention for high-risk cases.',
      },
      {
        title: 'AI-Assisted Triage',
        text: 'Prioritized risk alerts help clinicians focus attention on patients who need it most, improving care efficiency.',
      },
      {
        title: 'Virtual Consultation Ready',
        text: 'Conduct secure video consultations with full access to patient health data during the session.',
      },
      {
        title: 'Better Clinical Outcomes',
        text: 'Early detection and continuous engagement lead to fewer emergencies and improved maternal and neonatal outcomes.',
      },
    ],
  },
  {
    icon: Baby,
    title: 'Benefits for Newborn Care',
    color: 'from-primary-light/30 to-section',
    iconColor: 'text-primary',
    items: [
      {
        title: 'Intelligent Cry Analysis',
        text: 'AI-powered cry detection helps parents understand and respond to their newborn\'s needs more effectively.',
      },
      {
        title: 'Seamless Transition',
        text: 'Move from pregnancy tracking to postpartum and newborn care without switching platforms or losing health history.',
      },
      {
        title: 'Pediatric Connectivity',
        text: 'Share newborn health data with pediatricians for informed early-care decisions and developmental monitoring.',
      },
      {
        title: 'Recovery Tracking',
        text: 'Monitor maternal postpartum recovery alongside newborn health for comprehensive family wellness.',
      },
    ],
  },
]

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-section py-20 sm:py-28"
      aria-labelledby="benefits-heading"
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
            Benefits
          </span>
          <h2
            id="benefits-heading"
            className="mt-3 text-3xl font-bold text-text sm:text-4xl lg:text-5xl"
          >
            Care That Reaches Everyone
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            AlloBaby creates value across the entire maternal care ecosystem — from mothers
            and families to doctors and newborns.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {benefitGroups.map((group, gi) => (
            <motion.article
              key={group.title}
              variants={fadeInUp}
              custom={gi * 0.1}
              className={`rounded-3xl bg-gradient-to-br ${group.color} p-8`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 card-shadow">
                  <group.icon className={`h-6 w-6 ${group.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-text">{group.title}</h3>
              </div>

              <ul className="mt-6 space-y-5" role="list">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <h4 className="font-semibold text-text">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.text}</p>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
