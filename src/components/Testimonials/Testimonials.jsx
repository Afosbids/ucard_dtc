import React from 'react'
import './Testimonials.css'
import PrevArrow from '../../assets/previousarrow.svg'
import NextArrow from '../../assets/nextarrow.svg'
import TestimonialImage from '../../assets/testimonialimage.svg'
import QuoteIcon from '../../assets/testimonialquoteicon.svg'

const Testimonials = () => {
  return (
    <div className='testimonial-section-container home-container'>
      <div className='testimonial-section-left'>
        <h2>Our Testimonials</h2>
        <p>See what our customers are saying about us, as we
          standout and make bills payment easy for our customers</p>


        <div className='testimonial-arrows' >
          <div className='testimonial-prev-arrow'>
            <img src={PrevArrow} alt="" />
          </div>

          <div className='testimonial-next-arrow'>
            <img src={NextArrow} alt="" />
          </div>
        </div>
      </div>


      <div className="testimonial-section-right">
        <div className="testimonial-card testimonial-card2">
          <div className='testimonial-image-card-header'>
            <img src={TestimonialImage} alt="" />
            <div>
              <h2>Oghenemaro O</h2>
              <p>Consultant at Techx</p>
            </div>
          </div>

          <p>Had really great experience with cabletv payment, service is really good and everything is just awesome. Great recommendations for new people trying to subscribe in sierra Leone. Awesome!</p>
        </div>

        <div className='testimonial-quote-icon'>
          <img src={QuoteIcon} alt="" />
          <img src={QuoteIcon} alt="" />
        </div>

        <div className="testimonial-card testimonial-card3">
          <div className='testimonial-image-card-header'>
            <img src={TestimonialImage} alt="" />
            <div>
              <h2>Oghenemaro O</h2>
              <p>Consultant at Techx</p>
            </div>
          </div>

          <p>Had really great experience with cabletv payment, service is really good and everything is just awesome. Great recommendations for new people trying to subscribe in sierra Leone. Awesome!</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials