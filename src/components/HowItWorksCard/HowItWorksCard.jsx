import React from 'react'
import './HowItWorksCard.css'

const HowItWorksCard = ({ image, text, numbering }) => {
    return (
        <div className='hiw-card'>
            <div className="hiw-numbering">{numbering}</div>
            <p>{text}</p>

            <div className="hiw-image">

                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default HowItWorksCard