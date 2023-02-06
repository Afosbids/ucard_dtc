import React from 'react'
import OrderDetailForm from '../../components/OrderDetailPageComponent/OrderDetailForm'
import OrderDetailProcess from '../../components/OrderDetailPageComponent/OrderDetailProcess'
import WrongOrderDetailHeading from '../../components/WrongOrderDetailHeading/WrongOrderDetailHeading'
import './WrongOrderDetailPage.css'

const WrongOrderDetailPage = () => {
  return (
      <div>
          <OrderDetailProcess />
          <WrongOrderDetailHeading />
          <OrderDetailForm />
      </div>
    )
}

export default WrongOrderDetailPage

