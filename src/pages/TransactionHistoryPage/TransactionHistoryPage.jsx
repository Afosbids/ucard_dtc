import React, { useState } from 'react'
import TransactionSuccessfulModal from '../../components/TransactionSuccessfulModal/TransactionSuccessfulModal'
import './TransactionHistoryPage.css'

const TransactionHistoryPage = () => {
    const [showModal, setShowModal] = useState(false)
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
                    <button onClick={() => setShowModal(true)}>Submit</button>
                    {showModal && (
                        <div onClick={() => setShowModal(false)}>
                            <Modal>
                                <TransactionSuccessfulModal showModal={showModal} />
                            </Modal>
                        </div>
                    )}
                </div>
        </div>

    )
}


function Modal({ children }) {
    return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px' }}>
            {children}
            </div>
        </div>
        );
    }

export default TransactionHistoryPage