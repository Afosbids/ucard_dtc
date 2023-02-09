import React, { useState } from 'react'
import PaymentOptionDetailModal from '../../components/PaymentOptionDetailModal/PaymentOptionDetailModal';
import PaymentOptionDesc from '../../components/PaymentOptionDetailComponent/PaymentOptionDesc'
import "./PaymentOrderDetail.css"

const PaymentOrderDetail = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <PaymentOptionDesc />
            <div className='p_o_detail_container'>
                <h2>Order Details</h2>
                <div className="payment_order_detail">
                    <div className="order_detail_left">
                        <p>Merchant</p>
                        <p>Transaction ID</p>
                        <p>Date</p>
                        <p>Amount</p>
                    </div>
                    <div className="order_detail_right">
                        <p>Ucard</p>
                        <p>OM563215789623</p>
                        <p>10/01/2023</p>
                        <p className="colored_paragraph">SLL 14,600.00</p>
                    </div>
                </div>         
            </div>
            <hr />
            <div className="p_detail_container">
                <h2>Payment Details</h2>
                <p>Get your payment code from your Orange Money app / sms </p>
                <form className="payment_form">
                    <label>Phone Number</label>
                    <input type="tel" />
                    <p>Enter your mobile number in the local format without the international prefix</p><br />
                    <label>OTP</label>
                    <input type="tel" />
                    <p>Enter your otp here </p>
                    <div className="pair_btn">
                    <input className="confirm_btn" type="submit" value="Confirm"/>
                    <input onClick={() => setShowModal(true)} className="cancel_btn" type="reset" value="Cancel"/>
                    </div>
                    {showModal && (
                        <div onClick={() => setShowModal(false)}>
                            <Modal>
                                <PaymentOptionDetailModal showModal={showModal} />
                            </Modal>
                        </div>
                    )};
                </form>
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

export default PaymentOrderDetail