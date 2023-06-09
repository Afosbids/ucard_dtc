import React from 'react'
import './HomePage.css'
import HomeNav from '../../components/HomeNav/HomeNav'
import ShowCase from '../../components/ShowCase/ShowCase'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Testimonials from '../../components/Testimonials/Testimonials'
import ContactUs from '../../components/ContactUs/ContactUs'
import HomeFooter from '../../components/HomeFooter/HomeFooter'

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <HomeNav />
      <ShowCase />
      <HowItWorks />
      <Testimonials />
      <ContactUs />
      <HomeFooter />
    </div>
  )
}

export default HomePage