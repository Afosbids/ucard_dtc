import React from 'react'
import Success_icon from '../../assets/Shape.svg'
import './TransactionSuccessfulModal.css'

const TransactionSuccessfulModal = ({showModal, closeModal}) => {
    return (
        <div>
            {showModal && (
                    <div className='tran_success_cont' onClick={closeModal}>
                    <div className='success_icon'>
                        <img src={Success_icon} />
                        <div className='tran_body'>
                            <h1>OTP Sent Successfully</h1>
                            <p>An OTP has been sent to your mail, please review and input the otp to generate your transaction history</p>
                        </div>
                        <input className="success-btn" type="button" value="Ok" />
                    </div>
            </div>
            )}
        </div>
    )
}

export default TransactionSuccessfulModal
