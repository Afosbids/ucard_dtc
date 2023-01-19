import React from 'react'
import './OrderSummaryProcess.css'
import Default_icon from '../../assets/Default indicator.svg'
import Default_icon_2 from '../../assets/Default indicator_ash.svg'
import Default_line from '../../assets/Default line.svg'

const OrderSummaryProcess = () => {
    return (
    <div>
        <section className="section-1">
            <div className="section_1_top">
                <div>
                    <img src={Default_icon} />
                    <img className="dotted-line" src={Default_line} />
                    <p>Order<br/> Details</p>
                </div>
                <div>
                    <img src={Default_icon} />
                    <img className="dotted-line" src={Default_line} />
                    <p>Order<br/> Summary</p>
                </div>
                <div>
                    <img src={Default_icon_2} />
                    <img className="dotted-line" src={Default_line} />
                    <p>Payment<br/> Information</p>
                </div>
                <div>
                    <img src={Default_icon_2} />
                    <img className="dotted-line" src={Default_line} />
                    <p>Complete<br/> Order</p>
                </div>
            
                
                
            </div>
            
        </section>
    </div>
)
}

export default OrderSummaryProcess
