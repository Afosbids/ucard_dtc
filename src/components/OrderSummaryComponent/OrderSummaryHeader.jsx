import React from 'react'
import Dstv_logo from '../../assets/image 5.svg'
import './OrderSummaryHeader.css'

const OrderSummaryHeader = () => {
    return (
        <div>
            <section className="order_summary_session">
                <div className="order_summary_header">
                    <img src={Dstv_logo} />
                    <h1>Dstv Subscription</h1>
                    
                </div>
            </section>
        </div>
    )
}

export default OrderSummaryHeader


