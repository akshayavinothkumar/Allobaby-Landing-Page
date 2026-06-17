function createPlaceholderSvg(title, subtitle, accent = '#FF6B9A') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFF7FA"/>
      <stop offset="50%" style="stop-color:#FFFFFF"/>
      <stop offset="100%" style="stop-color:#F5F0FF"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${accent}"/>
      <stop offset="100%" style="stop-color:#FFB6C1"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="1920" fill="url(#bg)"/>
  <rect x="60" y="120" width="960" height="120" rx="24" fill="white" opacity="0.9"/>
  <rect x="60" y="280" width="460" height="200" rx="20" fill="white" opacity="0.85"/>
  <rect x="560" y="280" width="460" height="200" rx="20" fill="white" opacity="0.85"/>
  <rect x="60" y="520" width="960" height="320" rx="24" fill="white" opacity="0.8"/>
  <rect x="60" y="880" width="960" height="240" rx="20" fill="white" opacity="0.75"/>
  <rect x="60" y="1160" width="300" height="300" rx="20" fill="white" opacity="0.7"/>
  <rect x="390" y="1160" width="300" height="300" rx="20" fill="white" opacity="0.7"/>
  <rect x="720" y="1160" width="300" height="300" rx="20" fill="white" opacity="0.7"/>
  <rect x="340" y="800" width="400" height="6" rx="3" fill="url(#accent)" opacity="0.6"/>
  <text x="540" y="1550" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="48" font-weight="700" fill="#1F2937">${title}</text>
  <text x="540" y="1620" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="28" fill="#6B7280">${subtitle}</text>
  <text x="540" y="1720" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="22" fill="#FF6B9A">Replace with actual screenshot</text>
  <circle cx="540" cy="1820" r="8" fill="#FF6B9A" opacity="0.5"/>
</svg>`
}

import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dir = join(__dirname, 'public', 'screenshots')
mkdirSync(dir, { recursive: true })

const placeholders = [
  { file: 'dashboard-placeholder', title: 'Dashboard', subtitle: 'Health Overview' },
  { file: 'monitoring-placeholder', title: 'Vital Monitoring', subtitle: 'Heart Rate & BP' },
  { file: 'ai-assistant-placeholder', title: 'Allobot', subtitle: 'AI Assistant' },
  { file: 'appointments-placeholder', title: 'Appointments', subtitle: 'Schedule Visits' },
  { file: 'consultation-placeholder', title: 'Video Call', subtitle: 'Doctor Consultation' },
  { file: 'alerts-placeholder', title: 'Risk Alerts', subtitle: 'AI Notifications' },
  { file: 'baby-monitoring-placeholder', title: 'Baby Care', subtitle: 'Newborn Tracking' },
  { file: 'health-tracking-placeholder', title: 'Health Log', subtitle: 'Wellness Journey' },
]

for (const p of placeholders) {
  writeFileSync(join(dir, `${p.file}.svg`), createPlaceholderSvg(p.title, p.subtitle))
  console.log(`Created ${p.file}.svg`)
}
