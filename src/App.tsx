import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import WhySection from './components/WhySection'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      <main>
        <Hero />
        <Features />
        <WhySection />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App