import React from 'react'
import OrderDetailNavBar from '../../components/OrderDetailPageComponent/OrderDetailNavBar'
import './TransactionConfirmPage.css'

const TransactionConfirmPage = () => {
    return (
        <div>
            <OrderDetailNavBar />
            <div className="transaction_header">
                <h1>Transaction History </h1>
                <p>See history of your payments and receipts. Complete the following details to generate your transaction history </p>
            </div>
            <div className="transaction_input">
                <p>One Time Password(OTP) </p>
                <input type="text" value="Enter the otp sent to your mail" />
            </div>
            <div className='transaction_btn'>
                <button>Confirm</button>
            </div>
        </div>
    )
}

export default TransactionConfirmPage