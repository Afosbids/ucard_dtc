import React from 'react'
import './CardDetailsCard.css'
import CloseIcon from '../../assets/Close.svg'
import CardType from '../../assets/cardtypelogo.svg'


const CardDetailsCard = ({onClose}) => {
    return (
            <div className='carddetailscard-container'>
                <div className="close-receipt" onClick={onClose}>
                    <img src={CloseIcon} alt="" />
                    <p>Close</p>
                </div>

                <div className="carddetailscard-items">

                    <div className="cardtypelogo">
                        <img src={CardType} alt="cardlogo" />
                    </div>

                    <label htmlFor="cardnumber">Card Number</label>
                    <input type="number" name="number" placeholder='0000 0000 0000 0000' />
                    <div className="expiry-cvv">
                        <div className='expirydate'>
                            <label htmlFor="card-expirydate">Expiry Date </label>
                            <input type="number" name="expirydate" placeholder="MM/YY" />
                        </div>

                        <div className='card-cvv'>
                            <label htmlFor="cvv">Cvv</label>
                            <input type="number" name="cvv" placeholder="123" />
                        </div>
                    </div>

                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" placeholder="14,600.00" />

                    <div className="card-details-btn">
                        <button>Pay</button>
                    </div>
                </div>
            </div>
    )
}

export default CardDetailsCard