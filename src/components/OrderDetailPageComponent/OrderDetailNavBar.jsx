import React from 'react'
import './OrderDetailNavBar.css'
import Ucard_logo from '../../assets/ucardlogoicon.svg'
import { Link } from 'react-router-dom'


const OrderDetailNavBar = () => {
    return (
    <div>
        <section className="navbar">
            <div className="logo">
                <Link to='./'>
                    <a href=""><img src={Ucard_logo}/></a>
                </Link>
            </div>
            
            <div className="link-container">
                <Link to='./'>Home</Link>
                <Link to='/transaction-history'>Transaction History </Link>
                <Link to='./support'>Contact Support</Link>
            </div>
        </section>
    </div>
)
}

export default OrderDetailNavBar
