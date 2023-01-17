import React from 'react'
import './OrderDetailPage.css'
// import OrderDetailNavBar from '../../components/OrderDetailPageComponent/OrderDetailNavBar'
// import OrderDetailProcess from '../../components/OrderDetailPageComponent/OrderDetailProcess'
// import OrderDetailHeading from '../../components/OrderDetailPageComponent/OrderDetailHeading'
// import OrderDetailForm from '../../components/OrderDetailPageComponent/OrderDetailForm'
// import OrderDetailFooter from '../../components/OrderDetailPageComponent/OrderDetailFooter'
import PaymentOptionDetailModal from '../../components/PaymentOptionDetailModal/PaymentOptionDetailModal'

const OrderDetailPage = () => {
    return (
    <div>
        {/* <OrderDetailNavBar />
        <OrderDetailProcess />
        <OrderDetailHeading />
        <OrderDetailForm />
        <OrderDetailFooter /> */}
        <PaymentOptionDetailModal />
    </div>
)
}

export default OrderDetailPage

