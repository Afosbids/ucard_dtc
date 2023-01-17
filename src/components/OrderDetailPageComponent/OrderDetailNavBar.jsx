import React from 'react'
import './OrderDetailNavBar.css'
import Ucard_logo from '../../assets/ucardlogoicon.svg'

const OrderDetailNavBar = () => {
    return (
    <div>
        <section className="navbar">
            <div className="logo">
                <a href=""><img src={Ucard_logo}/></a>
            </div>
            
            <div className="link-container">
                <a>Home</a>
                <a>Transaction History</a>
                <a>Contact Support</a>
            </div>
        </section>
    </div>
)
}

export default OrderDetailNavBar
