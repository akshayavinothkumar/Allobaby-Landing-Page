import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Baby,
  HeartPulse,
  Activity,
  AlertTriangle,
  Bot,
  Calendar,
  Video,
  MessageCircle,
  Volume2,
  Leaf,
  Wifi,
  Sparkles,
  ChevronDown,
} from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations.js'

const features = [
  {
    icon: Baby,
    name: 'Pregnancy Monitoring',
    what: 'Comprehensive tracking of your entire pregnancy journey from conception through delivery.',
    how: 'Log symptoms, milestones, trimester progress, and daily wellness data. The app visualizes your pregnancy timeline with week-by-week development insights and personalized checklists.',
    benefits: 'Stay organized, never miss important milestones, and maintain a complete health record your doctor can review during consultations.',
  },
  {
    icon: HeartPulse,
    name: 'Fetal Health Monitoring',
    what: 'Dedicated tools to monitor fetal movement, growth indicators, and developmental milestones.',
    how: 'Record kick counts, track fetal heart rate data from connected devices, and receive trimester-specific fetal development updates powered by medical guidelines.',
    benefits: 'Early awareness of changes in fetal activity helps detect potential concerns sooner and provides reassurance during anxious moments.',
  },
  {
    icon: Activity,
    name: 'Vital Sign Tracking',
    what: 'Continuous monitoring of heart rate, blood pressure, glucose levels, and other critical health metrics.',
    how: 'Manually log vitals or sync with compatible health devices. Data is charted over time with trend analysis and normal-range indicators for each trimester.',
    benefits: 'Build a reliable health history, spot concerning patterns early, and share accurate data with your healthcare provider instantly.',
  },
  {
    icon: AlertTriangle,
    name: 'AI-Powered Risk Alerts',
    what: 'Intelligent early warning system that identifies potential health risks before they become emergencies.',
    how: 'Machine learning models analyze your vital trends, symptom logs, and medical history to flag anomalies. You and your doctor receive prioritized alerts with recommended actions.',
    benefits: 'Transform reactive healthcare into proactive protection — catching risks when intervention is most effective.',
  },
  {
    icon: Bot,
    name: 'Allobot AI Assistant',
    what: 'Your personal AI companion for pregnancy questions, wellness tips, and daily maternal guidance.',
    how: 'Chat naturally with Allobot about nutrition, exercise, symptoms, and emotional wellness. It provides evidence-based answers tailored to your trimester, health profile, and preferences.',
    benefits: 'Get instant, reliable answers 24/7 without waiting for appointments — reducing anxiety and empowering informed decisions.',
  },
  {
    icon: Calendar,
    name: 'Appointment Scheduling',
    what: 'Effortless management of prenatal checkups, tests, and specialist visits.',
    how: 'Book appointments with connected healthcare providers, receive smart reminders, sync with your calendar, and get pre-visit preparation checklists based on appointment type.',
    benefits: 'Never miss a critical checkup, arrive prepared, and maintain consistent antenatal care throughout your pregnancy.',
  },
  {
    icon: Video,
    name: 'Doctor Video Consultation',
    what: 'Secure, high-quality video consultations with gynecologists and maternal health specialists.',
    how: 'Connect face-to-face with your doctor from home. Share live vitals, review health charts together, and receive prescriptions or referrals — all within the app.',
    benefits: 'Access expert medical advice without travel, waiting rooms, or disrupting your daily routine — especially valuable for high-risk pregnancies.',
  },
  {
    icon: MessageCircle,
    name: 'Healthcare Chat Support',
    what: 'Direct messaging with your care team for non-urgent questions and follow-ups.',
    how: 'Send messages, images, and health reports to your assigned healthcare providers. Receive responses with full conversation history preserved for continuity of care.',
    benefits: 'Maintain an open line of communication with your medical team between visits for greater confidence and faster resolution of concerns.',
  },
  {
    icon: Volume2,
    name: 'Baby Cry Detection AI',
    what: 'Intelligent cry analysis that helps parents understand what their newborn needs.',
    how: 'The AI listens to and categorizes cry patterns — distinguishing hunger, discomfort, tiredness, and pain signals — then suggests appropriate responses based on context.',
    benefits: 'New parents gain confidence in caring for their newborn, reduce stress during sleepless nights, and respond more effectively to their baby\'s needs.',
  },
  {
    icon: Leaf,
    name: 'Wellness Recommendations',
    what: 'Personalized nutrition, exercise, sleep, and mental wellness guidance for every stage.',
    how: 'Based on your trimester, health data, and preferences, AlloBaby delivers daily wellness tips, meal suggestions, safe exercise routines, and mindfulness exercises.',
    benefits: 'Maintain optimal health for you and your baby with guidance that adapts as your body and needs evolve throughout pregnancy.',
  },
  {
    icon: Wifi,
    name: 'Remote Care Access',
    what: 'Full maternal healthcare capabilities regardless of your location.',
    how: 'Whether at home, traveling, or in areas with limited clinic access, AlloBaby ensures continuous monitoring, doctor connectivity, and emergency escalation pathways remain active.',
    benefits: 'Geography no longer limits quality care — mothers everywhere deserve the same level of protection and support.',
  },
  {
    icon: Sparkles,
    name: 'Personalized Insights',
    what: 'Deep, individualized health analytics that go beyond generic pregnancy advice.',
    how: 'Your unique health profile, lifestyle, medical history, and real-time data combine to generate insights specific to you — from risk assessments to lifestyle optimizations.',
    benefits: 'Experience care that truly understands you, not one-size-fits-all recommendations that ignore your individual circumstances.',
  },
]

function FeatureCard({ feature, index }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = feature.icon

  return (
    <motion.article
      variants={fadeInUp}
      custom={index * 0.03}
      className="rounded-2xl border border-primary/10 bg-white card-shadow transition-all hover:card-shadow-hover"
    >
      <button
        type="button"
        className="flex w-full items-start gap-4 p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-2xl"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={`feature-detail-${index}`}
      >
        <div className="rounded-xl gradient-primary p-3 shrink-0">
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-text">{feature.name}</h3>
            <ChevronDown
              className={`h-5 w-5 text-primary shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{feature.what}</p>
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            id={`feature-detail-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-primary/10 px-6 pb-6 pt-4 space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">What It Does</h4>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{feature.what}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">How It Works</h4>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{feature.how}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-success">Benefits</h4>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{feature.benefits}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="features-heading"
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
            Core Features
          </span>
          <h2
            id="features-heading"
            className="mt-3 text-3xl font-bold text-text sm:text-4xl lg:text-5xl"
          >
            Everything You Need for a Healthier Pregnancy
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            AlloBaby brings together monitoring, AI intelligence, and healthcare connectivity
            in one comprehensive platform. Tap any feature to explore how it works and why
            it matters for your journey.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-5 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.name} feature={feature} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
