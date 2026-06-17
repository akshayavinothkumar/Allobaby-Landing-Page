import { motion } from 'framer-motion'
import { Download, Shield, Smartphone, QrCode } from 'lucide-react'
import { fadeInUp } from '../utils/animations.js'

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden py-20 sm:py-28"
      aria-labelledby="download-heading"
    >
      <div className="absolute inset-0 gradient-primary opacity-95" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.15)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
        >
          <h2
            id="download-heading"
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Start Your Safer Pregnancy Journey Today
          </h2>
          <p className="mt-6 text-lg text-white/85 leading-relaxed">
            Download AlloBaby and join thousands of mothers who trust AI-powered monitoring,
            doctor connectivity, and personalized guidance for a healthier pregnancy.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-text shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            whileHover={{ y: -2 }}
            aria-label="Download AlloBaby on Google Play"
          >
            <Download className="h-6 w-6 text-primary" aria-hidden="true" />
            <div className="text-left">
              <div className="text-xs text-gray-500">Get it on</div>
              <div className="text-lg font-bold">Google Play</div>
            </div>
          </motion.a>

          <div
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 text-white backdrop-blur-sm cursor-not-allowed"
            aria-label="Apple App Store — Coming Soon"
          >
            <Smartphone className="h-6 w-6" aria-hidden="true" />
            <div className="text-left">
              <div className="text-xs text-white/70">Coming Soon</div>
              <div className="text-lg font-bold">App Store</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex h-36 w-36 items-center justify-center rounded-2xl border-2 border-dashed border-white/40 bg-white/10 backdrop-blur-sm">
            <div className="text-center">
              <QrCode className="mx-auto h-12 w-12 text-white/60" aria-hidden="true" />
              <span className="mt-2 block text-xs text-white/60">QR Code</span>
            </div>
          </div>

          <div className="max-w-sm text-center sm:text-left">
            <p className="text-sm text-white/80 leading-relaxed">
              Scan the QR code with your phone camera to download AlloBaby instantly.
              Replace this placeholder with your actual app download QR code.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 sm:justify-start text-sm text-white/70">
              <Shield className="h-4 w-4" aria-hidden="true" />
              Trusted, secure, and mother-approved
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-10 text-center text-sm text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Free to download · No credit card required · Android available now
        </motion.p>
      </div>
    </section>
  )
}
