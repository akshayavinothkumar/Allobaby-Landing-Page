import { motion } from 'framer-motion'
import { Heart, Target, Sparkles, Globe } from 'lucide-react'
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations.js'

const pillars = [
  {
    icon: Heart,
    title: 'Mother-First Design',
    text: 'Every feature, notification, and interaction is designed around the unique needs of pregnant women and new mothers.',
  },
  {
    icon: Target,
    title: 'Proactive Care',
    text: 'We shift maternal healthcare from reactive treatment to proactive prevention through continuous monitoring and early alerts.',
  },
  {
    icon: Sparkles,
    title: 'AI-Enhanced Intelligence',
    text: 'Advanced algorithms analyze health patterns to deliver personalized recommendations and identify risks before they escalate.',
  },
  {
    icon: Globe,
    title: 'Connected Ecosystem',
    text: 'Seamlessly link mothers, partners, doctors, and caregivers in one unified platform for coordinated care.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-section py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInLeft}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About AlloBaby
            </span>
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-bold text-text sm:text-4xl"
            >
              Supporting Every Step of Motherhood
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
              <p>
                AlloBaby is an AI-powered maternal and child care platform built to support
                mothers throughout pregnancy and early childcare. Born from the vision of
                making motherhood safer, more informed, and deeply supported, AlloBaby
                combines cutting-edge technology with compassionate healthcare design.
              </p>
              <p>
                Our mission is simple yet profound: ensure every expectant mother has access
                to continuous health monitoring, timely medical guidance, and the peace of
                mind that comes from knowing experts and intelligent systems are watching
                over her and her baby — around the clock.
              </p>
              <p>
                From tracking vital signs and fetal health to scheduling appointments,
                consulting doctors via video, and receiving wellness recommendations tailored
                to each trimester — AlloBaby serves as a trusted companion that grows with
                you from the first positive test through postpartum recovery and newborn care.
              </p>
              <p>
                We believe technology should amplify human care, not replace it. That&apos;s why
                AlloBaby connects seamlessly with healthcare providers, enabling doctors to
                monitor patients remotely, respond to alerts, and deliver virtual consultations
                — creating a complete circle of care that keeps mothers safe, families
                informed, and medical professionals empowered.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInRight}
          >
            <div className="rounded-3xl bg-white p-8 card-shadow">
              <h3 className="text-xl font-bold text-text">Our Purpose</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To democratize access to quality maternal healthcare by putting intelligent
                monitoring, expert connectivity, and personalized guidance into the hands of
                every mother — regardless of where she lives or when she needs support.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-primary/10 bg-section p-4"
                  >
                    <pillar.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h4 className="mt-2 font-semibold text-text">{pillar.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{pillar.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
