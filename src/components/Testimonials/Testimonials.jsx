import React, { useState, useEffect } from 'react'
import './Testimonials.css'
import PrevArrow from '../../assets/previousarrow.svg'
import NextArrow from '../../assets/nextarrow.svg'
import TestimonialImage from '../../assets/testimonialimage.svg'
import QuoteIcon from '../../assets/testimonialquoteicon.svg'
import { nextSlide, prevSlide, dotSlide } from '../../features/slices/sliderSlice'
import { testimonialData } from '../../dummydata/testimonialdata'

const Testimonials = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  const slideLength = testimonialData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);

  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);

  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  return (
    <div className='testimonial-section-container home-container'>

      <div className='testimonial-section-left'>
        <h2>Our Testimonials</h2>
        <p>See what our customers are saying about us, as we
          standout and make bills payment easy for our customers</p>


        <div className='testimonial-arrows' >
          <div
            onClick={prevSlide}
            className='testimonial-prev-arrow'>
            <img src={PrevArrow} alt="" />
          </div>

          <div
            onClick={nextSlide}
            className='testimonial-next-arrow'>
            <img src={NextArrow} alt="" />
          </div>
        </div>
      </div>

      <div id='testimonial-right-container'  >
        {testimonialData.map((item, index) => {
          return (
            <div className='slide-container'  key={item.id}>
              {index === currentSlide && (
                  <div className={index === currentSlide ? "testimonial-section-right current" : "testimonial-section-right"}>
                    <div className="testimonial-card testimonial-card2">
                      <div className='testimonial-image-card-header'>
                        <img src={item.img} alt="" />
                        <div>
                          <h2>{item.header}</h2>
                          <p>{item.job}</p>
                        </div>
                      </div>

                      <p>{item.text}</p>
                    </div>

                    <div className='testimonial-quote-icon'>
                      <img src={QuoteIcon} alt="" />
                      <img src={QuoteIcon} alt="" />
                    </div>

                    <div className="testimonial-card testimonial-card3">
                      <div className='testimonial-image-card-header'>
                        <img src={item.img} alt="" />
                        <div>
                          <h2>{item.header}</h2>
                          <p>{item.job}</p>
                        </div>
                      </div>

                      <p>{item.text}</p>
                    </div>
                  </div>
              )}
            </div>

          )
        })}

      </div>

    </div>
  )
}

export default Testimonials