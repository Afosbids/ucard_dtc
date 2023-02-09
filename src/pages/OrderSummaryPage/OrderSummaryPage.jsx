import React from 'react'
import OrderSummaryHeader from '../../components/OrderSummaryComponent/OrderSummaryHeader'
import OrderSummaryProcess from '../../components/OrderSummaryComponent/OrderSummaryProcess'
import OrderSummary from '../../components/OrderSummaryComponent/OrderSummary'

const OrderSummaryPage = () => {
    return (
        <div>
            <OrderSummaryProcess />
            <OrderSummaryHeader />
            <OrderSummary />
        </div>
    )
}
export default OrderSummaryPage