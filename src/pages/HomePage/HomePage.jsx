import React from 'react'
import './HomePage.css'
import HomeNav from '../../components/HomeNav/HomeNav'
import ShowCase from '../../components/ShowCase/ShowCase'
import HowItWorks from '../../components/HowItWorks/HowItWorks'

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <HomeNav />
      <ShowCase />
      <HowItWorks />
    </div>
  )
}

export default HomePage