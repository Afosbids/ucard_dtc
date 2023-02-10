import React from 'react'
import CardDetailsCard from '../../components/CardDetailsCard/CardDetailsCard'
import EmailOtpCard from '../../components/EmailOtpCard/EmailOtpCard'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import PaymentSuccessfulCard from '../../components/PaymentSuccessfulCard/PaymentSuccessfulCard'
import TransactionReceipt from '../../components/TransactionReceipt/TransactionReceipt'
import WrongOrderDetailHeading from '../../components/WrongOrderDetailHeading/WrongOrderDetailHeading'
import TransactionConfirmPage from '../TransactionConfirmPage/TransactionConfirmPage'
import './TestGround.css'

const TestGround = () => {
  return (
    <div>
        <EmailOtpCard />
        <TransactionReceipt />
        <PaymentSuccessfulCard />
        <TransactionConfirmPage />
        {/* <CardDetailsCard /> */}
        
    </div>
  )
}

export default TestGround