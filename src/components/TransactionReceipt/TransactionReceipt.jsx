import React from 'react'
import './TransactionReceipt.css'
import UCARDLOGO from '../../assets/ucardlogoicon.svg'
import PrintIcon from '../../assets/printicon.svg'
import CloseIcon from '../../assets/Close.svg'
const TransactionReceipt = () => {
    return (
        <div className='transaction-receipt-card'>
            <div className="close-receipt">
                <img src={CloseIcon} alt="" />
                <p>Close</p>
            </div>
            <div className="transaction-receipt-header">
                <img src={UCARDLOGO} alt="" />
                <h2>Transaction Receipt</h2>
            </div>

            <hr />

            <div className="transaction-receipt-details">
                <div className="transaction-receipt-left">
                    <p>Dstv Smart Card Number</p>
                    <p>Customer Name</p>
                    <p>Transaction Type</p>
                    <p>Payment type</p>
                    <p>Phone Number</p>
                    <p>Amount</p>
                </div>

                <div className="transaction-receipt-right">
                    <p>70338398830</p>
                    <p>OTOBOR DANIEL OGHENEMARO</p>
                    <p>Dstv Compact Plus (14,250)</p>
                    <p>Card </p>
                    <p>+232 8100659872</p>
                    <p>SLL 14,500.00</p>
                </div>
            </div>


            <div className="receipt-print-btn">
                <button>
                    <img src={PrintIcon} alt="" />
                    <p>Print Receipt</p>
                </button>
            </div>

        </div>
    )
}

export default TransactionReceipt