import React from 'react'
import './OrderDetailPage.css'
import OrderDetailNavBar from '../../components/OrderDetailPageComponent/OrderDetailNavBar'
import OrderDetailProcess from '../../components/OrderDetailPageComponent/OrderDetailProcess'
import OrderDetailHeading from '../../components/OrderDetailPageComponent/OrderDetailHeading'
import OrderDetailForm from '../../components/OrderDetailPageComponent/OrderDetailForm'
import OrderDetailFooter from '../../components/OrderDetailPageComponent/OrderDetailFooter'
import PaymentOptionDetailModal from '../../components/PaymentOptionDetailModal/PaymentOptionDetailModal'

const OrderDetailPage = () => {
    return (
    <div>
        <OrderDetailProcess />
        <OrderDetailHeading />
        <OrderDetailForm />
        {/* <PaymentOptionDetailModal /> */}
    </div>
)
}

export default OrderDetailPage

