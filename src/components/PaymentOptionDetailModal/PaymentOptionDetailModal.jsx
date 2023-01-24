import React from 'react'
import './PaymentOptionDetailModal.css'
import Close_btn from '../../assets/Close.svg'
import Info_icon from '../../assets/Info.svg'

const PaymentOptionDetailModal = ({ closeModal }) => {
    return (
        <div className="modal_background">
            <section className="modal-container">
                <div className="modal-content">
                    <div className="close_btn_icon"><img src={Close_btn} onClick={() => closeModal(false)} /></div>
                    <img className="info_btn_icon" src={Info_icon} />
                    <h1>Are you sure you want to cancel payment ?</h1>
                    <input type="submit" value="Cancel Payment" onClick={() => closeModal(false)} />
                </div>    
            </section>
        </div>
    )
}

export default PaymentOptionDetailModal