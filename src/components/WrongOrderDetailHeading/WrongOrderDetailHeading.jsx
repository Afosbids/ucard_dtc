import React from 'react'
import './WrongOrderDetailHeading.css'
import Danger_icon from '../../assets/Vector (1).svg'

const WrongOrderDetailHeading = () => {
    return (
        <div>
            <section className="section-heading">
            <div className="section-2">
                <h1>Pay For your TV Subscription</h1>
                <p>Complete the following details to pay for TV Subscription</p>
            </div>
            <div className="section-3">
                <img src={Danger_icon} />
                <input type="text" value="Please check the Smartcard / IUC number and try again!" />
            </div>
            </section>
        </div>
    )
}

export default WrongOrderDetailHeading
