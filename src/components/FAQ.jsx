import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { fadeInUp } from '../utils/animations.js'

const faqs = [
  {
    question: 'Is AlloBaby free?',
    answer:
      'AlloBaby offers a free tier with essential pregnancy tracking, Allobot AI assistance, and basic health logging. Premium features including advanced AI risk analysis, doctor video consultations, and priority healthcare chat are available through affordable subscription plans. Download the app to explore all available options.',
  },
  {
    question: 'How does AI monitoring work?',
    answer:
      'AlloBaby\'s AI engine continuously analyzes your logged vitals, symptoms, fetal movements, and medical history. Machine learning models identify patterns and anomalies, comparing your data against clinically validated benchmarks. When potential risks are detected, you and your connected healthcare provider receive prioritized alerts with recommended next steps.',
  },
  {
    question: 'Is my health data secure?',
    answer:
      'Absolutely. AlloBaby employs end-to-end encryption, secure cloud storage, and strict access controls to protect your health information. We follow industry-standard privacy protocols and never share your data with third parties without your explicit consent. You maintain full control over what information is shared with your doctors.',
  },
  {
    question: 'Can I talk to doctors through the app?',
    answer:
      'Yes. AlloBaby enables direct communication with your healthcare providers through secure chat messaging and high-quality video consultations. You can share health reports, vitals, and concerns in real time, and receive medical guidance without visiting a clinic.',
  },
  {
    question: 'How do appointments work?',
    answer:
      'Browse available slots from connected healthcare providers, book appointments directly in the app, and receive smart reminders with pre-visit preparation checklists. You can reschedule, cancel, or switch to video consultation seamlessly. All appointment history is preserved in your health timeline.',
  },
  {
    question: 'What is Allobot?',
    answer:
      'Allobot is AlloBaby\'s AI assistant — a conversational companion trained on maternal health knowledge. Ask questions about nutrition, symptoms, exercise, emotional wellness, and trimester-specific concerns. Allobot provides evidence-based, personalized answers available 24 hours a day, 7 days a week.',
  },
  {
    question: 'How does baby cry detection work?',
    answer:
      'After delivery, AlloBaby\'s cry detection AI listens to and analyzes your newborn\'s cry patterns. It categorizes cries into types such as hunger, discomfort, tiredness, and pain signals, then suggests appropriate responses. This feature helps new parents — especially first-timers — care for their baby with greater confidence.',
  },
  {
    question: 'Can partners use the app?',
    answer:
      'Yes. Partners and family members can be invited to connect with a mother\'s AlloBaby profile. They receive relevant updates, can view shared health milestones, and stay informed throughout the pregnancy and postpartum journey — fostering a supportive family environment.',
  },
  {
    question: 'Does it work remotely?',
    answer:
      'AlloBaby is designed for remote care. Whether you\'re at home, traveling, or in an area with limited clinic access, you can log vitals, chat with Allobot, consult doctors via video, and receive AI alerts — as long as you have an internet connection.',
  },
  {
    question: 'Is the app available on Android?',
    answer:
      'Yes. AlloBaby is currently available for download on Google Play for Android devices. Search for "AlloBaby" or use the download button on this page to get started immediately.',
  },
  {
    question: 'Will iOS be available?',
    answer:
      'An iOS version of AlloBaby is actively in development and will be available on the Apple App Store soon. Register your interest through the app or sign up for notifications on this page to be alerted when the iOS release goes live.',
  },
  {
    question: 'Is my information private?',
    answer:
      'Your privacy is fundamental to AlloBaby. All personal and health data is encrypted at rest and in transit. We comply with applicable healthcare data regulations, provide transparent privacy controls, and allow you to delete your data at any time. Read our Privacy Policy for complete details.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-primary/10 last:border-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-lg"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-semibold text-text pr-4">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-section py-20 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-bold text-text sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Everything you need to know about AlloBaby. Can&apos;t find your answer?
            Contact our support team anytime.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 rounded-3xl bg-white p-6 sm:p-8 card-shadow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          <div className="mb-6 flex items-center gap-3 border-b border-primary/10 pb-4">
            <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-gray-600">
              {faqs.length} questions answered
            </span>
          </div>

          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
