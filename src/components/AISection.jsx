import { motion } from 'framer-motion'
import { Bot, TrendingUp, Lightbulb, Bell, Zap, Shield } from 'lucide-react'
import { fadeInUp, staggerContainer, slideInLeft } from '../utils/animations.js'

const aiCapabilities = [
  {
    icon: Bot,
    title: 'Allobot — Your AI Companion',
    description:
      'A conversational AI assistant trained on maternal health knowledge. Ask questions about symptoms, nutrition, exercise, and emotional wellness — and receive evidence-based, trimester-aware answers instantly.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Monitoring',
    description:
      'Machine learning models continuously analyze vital sign trends, symptom patterns, and medical history to predict potential complications before they manifest clinically.',
  },
  {
    icon: Lightbulb,
    title: 'Smart Recommendations',
    description:
      'Personalized daily wellness plans adapt to your changing body, preferences, and health data — from meal suggestions to safe exercise routines and sleep optimization.',
  },
  {
    icon: Bell,
    title: 'Intelligent Alerts',
    description:
      'Not all notifications are equal. AlloBaby prioritizes alerts by clinical urgency, ensuring you and your doctor respond to what matters most, when it matters most.',
  },
]

const stats = [
  { value: '24/7', label: 'AI Availability' },
  { value: 'Real-time', label: 'Risk Analysis' },
  { value: '100%', label: 'Personalized' },
  { value: 'Secure', label: 'Data Processing' },
]

export default function AISection() {
  return (
    <section
      id="ai"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
      aria-labelledby="ai-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(142,108,255,0.08)_0%,_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,154,0.08)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInLeft}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent">
              <Zap className="h-4 w-4" aria-hidden="true" />
              AI Advantage
            </span>
            <h2
              id="ai-heading"
              className="mt-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl"
            >
              Intelligence That{' '}
              <span className="text-gradient">Protects & Empowers</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              AlloBaby&apos;s AI engine doesn&apos;t just collect data — it understands patterns,
              predicts risks, and delivers actionable insights that transform how mothers
              experience pregnancy care. Meet Allobot, your always-available maternal health
              intelligence.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-accent/10 bg-section/80 p-4 text-center backdrop-blur-sm"
                >
                  <div className="text-lg font-extrabold text-accent">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-success/20 bg-success/5 p-4">
              <Shield className="h-5 w-5 text-success shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-600">
                All AI processing follows strict privacy protocols. Your health data is encrypted
                and never shared without your explicit consent.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {aiCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                variants={fadeInUp}
                custom={i * 0.1}
                className="group rounded-2xl border border-accent/10 bg-white p-6 card-shadow transition-all hover:border-accent/30 hover:card-shadow-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 p-3 transition-transform group-hover:scale-110">
                    <cap.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">{cap.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
