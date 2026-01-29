import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import SkillsSection from './components/SkillsSection'
import ServiceSection from './components/ServiceSection'
import Experience from './components/Experience'
import ProfessionalExperience from './components/ProfessionalExperience'
import BrandGrid from './components/BrandGrid'
import PortfolioSection from './components/PortfolioSection'
import SkillHighlightSection from './components/SkillHighlightSection'
import TestimonialGrid from './components/TestimonialGrid'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Element } from 'react-scroll'

const App = () => {
  return (
    <div className='bg-[#050b12] '>
      <Navbar />
      <Element name="home">
      <Hero />
      </Element>
      <Element name="services">
      <Services />
      </Element>
      <Element name="about">
      <SkillsSection />
      </Element>
      <ServiceSection />
      <Experience />
      <ProfessionalExperience />
      <BrandGrid />
      <Element name="portfolio">
      <PortfolioSection />
      </Element>
      <SkillHighlightSection />
      <TestimonialGrid />
      <Element name="contact">
      <Contact />
      </Element>
      <Footer />
    </div>
  )
}

export default App