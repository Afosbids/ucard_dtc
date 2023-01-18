import React from 'react'
import OrderDetailNavBar from '../../components/OrderDetailPageComponent/OrderDetailNavBar'
import PaymentOptionDesc from '../../components/PaymentOptionDetailComponent/PaymentOptionDesc'
import PaymentOrderDetail from '../../components/PaymentOptionDetailComponent/PaymentOrderDetail'

const PaymentOptionDetail = () => {
    return (
        <div>
            <OrderDetailNavBar />
            <PaymentOptionDesc />
            <PaymentOrderDetail />
        </div>
    )
}

export default PaymentOptionDetail
