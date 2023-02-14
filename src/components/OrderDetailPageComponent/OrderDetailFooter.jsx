import React from 'react'
import './OrderDetailFooter.css'
import Ucard_logo from '../../assets/ucardlogoicon.svg'

const OrderDetailFooter = () => {
    return (
        <div>
            <section className="footer-section">
                <footer className="footer-group">
                    <div>
                        <img src={Ucard_logo} />
                    </div>
                    <div className="footer-link">
                        <a>Home</a>
                        <a>How it Works</a>
                        <a>Contact Us</a>
                        <a>FAQ</a>
                    </div>
                    <div className='trademark'>
                        <p>Terms of Service | Privacy Policy<span> © Copyright Ucard 2023. All right reserved.</span></p>
                    </div>    
                </footer>
            </section>
        </div>
    )
}

export default OrderDetailFooter
