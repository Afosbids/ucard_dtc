import React from 'react'
import './ShowCase.css'
import ShowCaseImage from '../../assets/showcaseimage.svg'

const ShowCase = () => {
  return (
    <section className="home-showcase home-container">
      <div className="home-showcase-left">
        <h2>Pay for Your
          Cable TV Subscription
          in Less than 5 minutes</h2>

        <p>A platform for making payment for Cable TV
          subscriptions and bills payments.</p>

          <button>Pay Now</button>
      </div>

      <div className="home-showcase-right">
        <img src={ShowCaseImage} alt="" />
      </div>
    </section>
  )
}

export default ShowCase