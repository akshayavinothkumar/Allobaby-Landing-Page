import { Heart, Mail, Phone, MapPin, Share2, Globe, MessageCircle, Rss, ExternalLink } from 'lucide-react'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Download', href: '#download' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms and Conditions', href: '#' },
  { label: 'Support', href: '#' },
]

const socialLinks = [
  { icon: Share2, label: 'Facebook', href: '#' },
  { icon: MessageCircle, label: 'Twitter', href: '#' },
  { icon: Globe, label: 'Instagram', href: '#' },
  { icon: ExternalLink, label: 'LinkedIn', href: '#' },
  { icon: Rss, label: 'YouTube', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-text text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2" aria-label="AlloBaby home">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
                <Heart className="h-5 w-5 text-white" fill="white" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold">
                Allo<span className="text-primary">Baby</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              AI-powered maternal healthcare platform supporting mothers through pregnancy
              and early childcare with continuous monitoring, doctor connectivity, and
              personalized guidance.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              Part of the SaveMom maternal care ecosystem.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              <li>
                <a
                  href="mailto:support@allobaby.in"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-light"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  support@allobaby.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+911800000000"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-light"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  +91 1800-000-0000
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
            </ul>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Legal
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-gray-400 transition-colors hover:bg-primary hover:text-white"
                  aria-label={`Follow AlloBaby on ${label}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-gray-400 leading-relaxed">
                AlloBaby is committed to making motherhood safer through technology.
                Join our community of mothers, families, and healthcare professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {year} AlloBaby. All rights reserved. A maternal healthcare initiative.
          </p>
        </div>
      </div>
    </footer>
  )
}
