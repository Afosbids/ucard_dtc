import React from 'react'
import PaymentOptionCard from '../PaymentOptionCard/PaymentOptionCard'
import './SelectPaymentOption.css'
import { PaymentOptionData } from '../../dummydata/paymentoptiondata'

const SelectPaymentOption = () => {
  return (
    <div className='paymentoption-container'>
        {
            PaymentOptionData.map((item) => {
                return(
                    <PaymentOptionCard key={item.id} icon={item.icon} header={item.header} paragraph={item.paragraph} logo={item.logo} />
                )
            })
        }
    </div>
  )
}

export default SelectPaymentOption