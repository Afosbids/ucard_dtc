import React from 'react'
import './EmailOtpCard.css'
import UCARDLOGO from '../../assets/ucardlogoicon.svg'
import Line from '../../assets/emailarealine.svg'

const EmailOtpCard = () => {
  return (
    <div className='emailotpcard-container'>
      <img className='ucard-logo' src={UCARDLOGO} alt="" />
      <div>
        <img src={Line} alt="" />
      </div>

      <div>

        <div className='otp-email-greeting'>
          <p>Hello User,</p>
          <p>Your OTP code is :</p>
        </div>
        <p className='otp-code-text'>490700</p>

        <div className='otp-email-body'>

          <p>The OTP code will be valid for 10 mins. Please do not share this code with anyone.
          </p>
          <p>If you do not recognize this activity please contact support and report immediately</p>
        </div>
      </div>

      <div className='otp-email-footer'>
        <p>Terms of Service   |   Privacy Policy</p>
        <p>© Copyright Ucard 2023. All right reserved.</p>
      </div>
    </div>
  )
}

export default EmailOtpCard