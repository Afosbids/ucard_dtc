import React from 'react'
import './HomeNav.css'
import UCARDLOGO from '../../assets/ucardlogoicon.svg'

const HomeNav = () => {
    return (
        <section className='home-container'>

            <div className="home-nav">
                <img src={UCARDLOGO} alt="" />
                <ul className='home-nav-links'>
                    <li>Transaction History</li>
                    <li>Contact Support</li>
                </ul>
            </div>
        </section>
    )
}

export default HomeNav