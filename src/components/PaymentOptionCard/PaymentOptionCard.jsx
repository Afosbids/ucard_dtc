import React from 'react'
import './PaymentOptionCard.css'
import PayWithCard from '../../assets/paywithcardicon.svg'
import PaymentOption from '../../assets/cardtypelogo.svg'

const PaymentOptionCard = ({ icon, header, paragraph, logo }) => {
    return (
        <div className='paymentoptioncard-container'>
            <div className='paymentoptioncard-left'>
                <div>
                    <img src={icon} alt="" />
                </div>
                
                <div className="paymentoptioncard-text">
                    <h2>{header}</h2>
                    <p>{paragraph}</p>
                </div>
            </div>



            <div className='paymentoptioncard-right'>
                <img src={logo} alt="" />
            </div>

        </div>
    )
}

export default PaymentOptionCard