import React from 'react'
import OrderDetailNavBar from '../../components/OrderDetailPageComponent/OrderDetailNavBar'
import OrderSummaryHeader from '../../components/OrderSummaryComponent/OrderSummaryHeader'
import OrderSummaryProcess from '../../components/OrderSummaryComponent/OrderSummaryProcess'
import OrderSummary from '../../components/OrderSummaryComponent/OrderSummary'
import OrderDetailFooter from '../../components/OrderDetailPageComponent/OrderDetailFooter'

const OrderSummaryPage = () => {
    return (
        <div>
            <OrderDetailNavBar />
            <OrderSummaryProcess />
            <OrderSummaryHeader />
            <OrderSummary />
            <OrderDetailFooter />
        </div>
    )
}
export default OrderSummaryPage