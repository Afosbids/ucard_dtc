import React, { useState } from 'react'
import OrderDetailNavBar from '../../components/OrderDetailPageComponent/OrderDetailNavBar'
import TransactionSuccessfulModal from '../../components/TransactionSuccessfulModal/TransactionSuccessfulModal'
import './TransactionHistoryPage.css'

const TransactionHistoryPage = () => {
    const [showModal, setShowModal] = useState(false)

        const openModal = () => {
            setShowModal(true);
        };
    
        const closeModal = () => {
            setShowModal(false);
        };
    return (
        <div>
            <div className="transaction_header">
                <h1>Transaction History </h1>
                <p>See history of your payments and receipts. Complete the following details to generate your transaction history </p>
            </div>
            <div className="transaction_input">
                <p>Decoder/ Smartcard Number </p>
                <input type="text" placeholder="Input your decoder number to generate history " />
            </div>
            <div className='transaction_btn'>
                <button onClick={openModal}>Submit</button>
                <TransactionSuccessfulModal showModal={showModal} closeModal={closeModal} />
            </div>
        </div>

    )
}

export default TransactionHistoryPage