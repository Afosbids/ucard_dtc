import React from 'react'
import './OrderSummary.css'

const OrderSummary = () => {
    return (
        <div>
            <section>
                    <hr />
                <div className="summary-container">
                    <div className="summary-left">
                        <p>Dstv Smart Card Number</p>
                        <p>Customer Name</p>
                        <p>Bouquet Type</p>
                        <p>Phone Number</p>
                        <p>Email Address</p>
                    </div>
                    <div className="summary-right">
                        <p>70338398830</p>
                        <p>OTOBOR DANIEL OGHENEMARO</p>
                        <p>Dstv Compact Plus (14,250)</p>
                        <p>+232 8100659872</p>
                        <p>otobordaniel@outlook.com</p>
                    </div>
                </div>
                <hr />
                <div className="summary-container-2">
                    <div className="summary-bottom-left">
                            <p>Amount</p>
                            <p>Fee</p>
                            <p>Total Amount</p>
                    </div>
                    <div className="summary-bottom-right">
                            <p>SLL 14,500.00</p>
                            <p>SLL 100.00</p>
                            <p>SLL 14600.00</p>
                    </div>
                </div>
                <div className='btn-2'>
                    <button>Proceed to Make Payment</button>
                </div>
                
            </section>
        </div>
    )
}

export default OrderSummary


