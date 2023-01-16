import React from 'react'
import './HowItWorks.css'
import '../HowItWorksCard/HowItWorksCard'
import HowItWorksCard from '../HowItWorksCard/HowItWorksCard'
import PayNowButton from '../../assets/paynowbutton.svg'
import CableType from '../../assets/cabletypeimage.svg'
import DecoderNumber from '../../assets/decodernumberimage.svg'
import PackageType from '../../assets/packagetypeimage.svg'
import PaymentOption from '../../assets/paymentoptionimage.svg'
import MakePayment from '../../assets/makepaymentimage.svg'

const HowItWorks = () => {
    return (
        <section className='how-it-works-container home-container'>
            <h1>How Cable TV Subscription Works ? </h1>

            <div className="hiw-items">
                <div className="hiw-first-child">

                    <HowItWorksCard image={PayNowButton} text='Click on Pay Now Button' numbering={1} />
                </div>

                <div className="hiw-second-child">

                    <HowItWorksCard image={CableType} text='Select Cable TV Type' numbering={2} />

                </div>
            </div>

            <div className="hiw-items">
                <div className="hiw-first-child">

                     <HowItWorksCard image={DecoderNumber} text='Provide Decoder Number' numbering={3} />
                </div>

                <div className="hiw-second-child">

                    <HowItWorksCard image={PackageType} text='Select Package Type' numbering={4} />

                </div>
            </div>

            <div className="hiw-items">
                <div className="hiw-first-child">

                    <HowItWorksCard image={PaymentOption} text='Select Payment Option' numbering={5} />
                </div>

                <div className="hiw-second-child">

                    <HowItWorksCard image={MakePayment} text='Make Payment' numbering={6} />

                </div>
            </div>


        </section>
    )
}

export default HowItWorks