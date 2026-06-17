import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Challenge from '../components/Challenge.jsx'
import About from '../components/About.jsx'
import Features from '../components/Features.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Screenshots from '../components/Screenshots.jsx'
import Benefits from '../components/Benefits.jsx'
import AISection from '../components/AISection.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import DownloadCTA from '../components/DownloadCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Challenge />
        <About />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Benefits />
        <AISection />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
