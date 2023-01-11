import React from 'react'
import './HomeFooter.css'
import UCARDLOGO from '../../assets/ucardlogoicon.svg'


const HomeFooter = () => {
  return (
    <div className='home-container home-footer-container'>
      <div className="footer-left-section">
        <img src={UCARDLOGO} alt="" />
        <h2>Renew Dstv, and other CableTV Subscriptions,
          Pay Bills and do more with Ucard</h2>

        <p>© Copyright Ucard 2023. All right reserved. Terms of Service   |   Privacy Policy</p>
      </div>

      <div className="footer-middle-section">
        <h2>Services</h2>
        <ul>
          <li>TV Subscriptions</li>
          <li>Bills Payment </li>
          <li>Airtime and Data Recharge</li>
        </ul>
      </div>

      <div className="footer-right-section">
      <h2>Help</h2>
        <ul>
          <li>Contact Us</li>
          <li>How it Works</li>
        </ul>
      </div>
    </div>
  )
}

export default HomeFooter