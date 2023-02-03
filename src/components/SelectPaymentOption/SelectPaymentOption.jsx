import React, { useState } from 'react'
import PaymentOptionCard from '../PaymentOptionCard/PaymentOptionCard'
import './SelectPaymentOption.css'
import { PaymentOptionData } from '../../dummydata/paymentoptiondata'
import CardDetailsCard from '../../components/CardDetailsCard/CardDetailsCard'
import Modal from '../Modal/Modal'

const SelectPaymentOption = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemId, setItemId] = useState(0)

  console.log(itemId)

  const handleClick = (event, key) => {
    // console.log(event.target)
    console.log(key)
    console.log('hello')
    setItemId(key)
    setIsModalOpen(true)
  }
  return (
    <>
      <div className="select-payment-option-container">

        <h2 className="select-payment-option-header">Select Payment Option</h2>

        <p className="select-payment-option-text">Choose a payment option to make payment</p>

        <div className='paymentoption-container'>
          {
            PaymentOptionData.map((item, key) => {
              return (
                  <PaymentOptionCard
                    onPress={(event) => handleClick(event, item.id)}
                    key={item.id} icon={item.icon} header={item.header} paragraph={item.paragraph} logo={item.logo} />

              )
            })
          }
        </div>
      </div>

      {
        itemId === 1 ?  <Modal
        isOpened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <CardDetailsCard
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>

      : ""
      }

     
      {/* <CardDetailsCard show={show} closeModal={() => setShow(false)} /> */}
    </>
  )
}

export default SelectPaymentOption