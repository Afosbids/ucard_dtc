import React from 'react'
import './ContactUs.css'
import ContactForm from '../ContactForm/ContactForm'
import ContactUsIcon from '../../assets/contactusicon.svg'
const ContactUs = () => {
    return (
        <div className='contactus-container'>

            <div className="contactus-group-container">
                <div className='contactus-text home-container'>

                    <div className="contactus-header">
                        <h1>Contact Us</h1>
                        <img src={ContactUsIcon} alt="" />
                    </div>
                    <p>Need Help with your payment, transaction and more info about us ?
                        We Are Here For You. Fill out the form with details and our
                        friendly team is available to repond right away.</p>
                </div>

                <div className="contactusform">

                    <ContactForm />
                </div>
            </div>


            <div className='contactus-footer'>

            </div>
        </div>
    )
}

export default ContactUs