import React from 'react'
import './HomeNav.css'
import UCARDLOGO from '../../assets/ucardlogoicon.svg'
import { Link } from 'react-router-dom'
const HomeNav = () => {
    return (
        <section className='home-container'>

            <div className="home-nav">
                <img src={UCARDLOGO} alt="" />
                <ul className='home-nav-links'>
                    <li><Link to='/transaction-history'>Transaction History </Link></li>
                    <li><Link to='./support'>Contact Support</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default HomeNav