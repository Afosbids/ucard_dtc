import React from 'react'
import OrderDetailFooter from '../../components/OrderDetailPageComponent/OrderDetailFooter'
import OrderDetailForm from '../../components/OrderDetailPageComponent/OrderDetailForm'
import OrderDetailNavBar from '../../components/OrderDetailPageComponent/OrderDetailNavBar'
import OrderDetailProcess from '../../components/OrderDetailPageComponent/OrderDetailProcess'
import WrongOrderDetailHeading from '../../components/WrongOrderDetailHeading/WrongOrderDetailHeading'
import './WrongOrderDetailPage.css'

const WrongOrderDetailPage = () => {
  return (
      <div>
          <OrderDetailNavBar />
          <OrderDetailProcess />
          <WrongOrderDetailHeading />
          <OrderDetailForm />
          <OrderDetailFooter />
      </div>
    )
}

export default WrongOrderDetailPage

