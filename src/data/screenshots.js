/**
 * Centralized screenshot configuration.
 * Replace image files in public/screenshots/ — no React code changes needed.
 * Use the same base filename (e.g. dashboard-placeholder.png).
 */
export const SCREENSHOT_BASE = '/screenshots/'

export const screenshots = [
  {
    id: 'dashboard',
    file: 'dashboard-placeholder',
    title: 'Health Dashboard',
    description: 'Your complete pregnancy overview at a glance',
  },
  {
    id: 'monitoring',
    file: 'monitoring-placeholder',
    title: 'Vital Monitoring',
    description: 'Track heart rate, blood pressure, and glucose',
  },
  {
    id: 'ai-assistant',
    file: 'ai-assistant-placeholder',
    title: 'Allobot AI Assistant',
    description: '24/7 personalized maternal guidance',
  },
  {
    id: 'appointments',
    file: 'appointments-placeholder',
    title: 'Appointments',
    description: 'Schedule and manage doctor visits',
  },
  {
    id: 'consultation',
    file: 'consultation-placeholder',
    title: 'Video Consultation',
    description: 'Connect with doctors from home',
  },
  {
    id: 'alerts',
    file: 'alerts-placeholder',
    title: 'Risk Alerts',
    description: 'AI-powered early warning notifications',
  },
  {
    id: 'baby-monitoring',
    file: 'baby-monitoring-placeholder',
    title: 'Baby Monitoring',
    description: 'Postpartum and newborn care tracking',
  },
  {
    id: 'health-tracking',
    file: 'health-tracking-placeholder',
    title: 'Health Tracking',
    description: 'Comprehensive wellness journey logs',
  },
]

export function getScreenshotSrc(baseName, preferPng = true) {
  return `${SCREENSHOT_BASE}${baseName}.${preferPng ? 'png' : 'svg'}`
}
