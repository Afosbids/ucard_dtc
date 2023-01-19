import React from 'react'
import CableTVTypeSelection from '../../components/CableTVTypeSelection/CableTVTypeSelection'
import DstvSelection from '../../components/DstvSelection/DstvSelection'
import OrderDetailNavBar from '../../components/OrderDetailPageComponent/OrderDetailNavBar'
import './TransactionHistoryPage.css'

const TransactionHistoryPage = () => {
    return (
        <div>
            <OrderDetailNavBar />
            <div className="transaction_header">
                <h1>Transaction History </h1>
                <p>See history of your payments and receipts. Complete the following details to generate your transaction history </p>
            </div>
            <div className="transaction_input">
                <p>Decoder/ Smartcard Number </p>
                <input type="text" value="Input your decoder number to generate history " />
            </div>
            <div className='transaction_btn'>
                <button>Submit</button>
            </div>
            {/* <DstvSelection /> */}
            {/* <CableTVTypeSelection /> */}
        </div>

    )
}

export default TransactionHistoryPage