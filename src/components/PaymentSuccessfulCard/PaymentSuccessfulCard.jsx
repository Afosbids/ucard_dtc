import React from 'react'
import './PaymentSuccessfulCard.css'
import PaymentSuccessful from '../../assets/successfulcheckmark.svg'

const PaymentSuccessfulCard = () => {
    return (
        <div className='paymentsuccessfulcard-container'>
            <img src={PaymentSuccessful} alt="" />

            <h1>Payment Successful</h1>

            <p>Your payment was successful, please click button
                to download receipt</p>

            <div className="paymentsuccessful-btn">
                <button>Download Receipt</button>
            </div>
        </div>
    )
}

export default PaymentSuccessfulCard