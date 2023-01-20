import React from 'react'
import PaymentOptionCard from '../PaymentOptionCard/PaymentOptionCard'
import './SelectPaymentOption.css'
import { PaymentOptionData } from '../../dummydata/paymentoptiondata'

const SelectPaymentOption = () => {
  return (
    <div className="select-payment-option-container">

      <h2 className="select-payment-option-header">Select Payment Option</h2>

      <p className="select-payment-option-text">Choose a payment option to make payment</p>

      <div className='paymentoption-container'>
        {
          PaymentOptionData.map((item) => {
            return (
              <PaymentOptionCard key={item.id} icon={item.icon} header={item.header} paragraph={item.paragraph} logo={item.logo} />
            )
          })
        }
      </div>
    </div>
  )
}

export default SelectPaymentOption