import React from 'react'
import './HomePage.css'
import HomeNav from '../../components/HomeNav/HomeNav'
import ShowCase from '../../components/ShowCase/ShowCase'


const HomePage = () => {
  return (
    <div>
      <HomeNav />
      <ShowCase />
    </div>
  )
}

export default HomePage