import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations.js'

const testimonials = [
  {
    type: 'Mother',
    name: 'Priya Sharma',
    location: 'Chennai, Tamil Nadu',
    trimester: 'Second Trimester',
    rating: 5,
    quote:
      'AlloBaby gave me confidence during a high-risk pregnancy. The AI alerts caught a blood pressure spike that I would have ignored, and my doctor was notified immediately. I feel supported every single day — not just during appointments.',
    avatar: 'PS',
    color: 'bg-primary/10 text-primary',
  },
  {
    type: 'Family',
    name: 'Rajesh & Ananya Patel',
    location: 'Pune, Maharashtra',
    trimester: 'Partner & Family',
    rating: 5,
    quote:
      'As a husband, I always felt helpless during my wife\'s first pregnancy. With AlloBaby, I can see her health updates, understand what\'s happening each week, and be there for her in meaningful ways. It brought our family closer together.',
    avatar: 'RP',
    color: 'bg-accent/10 text-accent',
  },
  {
    type: 'Healthcare Professional',
    name: 'Dr. Meera Krishnan',
    location: 'Gynecologist, Bengaluru',
    trimester: 'Clinical Partner',
    rating: 5,
    quote:
      'AlloBaby has transformed how I monitor my patients. I can review vitals between visits, respond to AI-flagged risks promptly, and conduct video consultations efficiently. My patients are more engaged, and outcomes have noticeably improved.',
    avatar: 'MK',
    color: 'bg-success/10 text-success',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
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
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-bold text-text sm:text-4xl lg:text-5xl"
          >
            Trusted by Mothers & Doctors
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Real stories from the AlloBaby community — mothers, families, and healthcare
            professionals who experience the difference every day.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              variants={fadeInUp}
              custom={i * 0.1}
              className="relative rounded-3xl border border-primary/10 bg-section p-8 card-shadow"
              cite="#"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/15" aria-hidden="true" />

              <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
                {t.type}
              </span>

              <p className="mt-4 text-sm leading-relaxed text-gray-700 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="mt-6 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${t.color}`}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-text">{t.name}</cite>
                  <p className="text-xs text-gray-500">{t.location}</p>
                  <p className="text-xs text-gray-400">{t.trimester}</p>
                </div>
              </footer>

              <div className="mt-4">
                <StarRating count={t.rating} />
              </div>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
