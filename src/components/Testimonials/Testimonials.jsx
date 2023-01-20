import React from 'react'
import './Testimonials.css'
import PrevArrow from '../../assets/previousarrow.svg'
import NextArrow from '../../assets/nextarrow.svg'
import TestimonialImage from '../../assets/testimonialimage.svg'
import QuoteIcon from '../../assets/testimonialquoteicon.svg'
import { nextSlide, prevSlide, dotSlide } from '../../features/slices/sliderSlice'
import { useSelector, useDispatch } from 'react-redux'
import { testimonialData } from '../../dummydata/testimonialdata'

const Testimonials = () => {

  const slideIndex = useSelector((state) => state.slider.value)
  const dispatch = useDispatch()
  console.log("sliderIndex", slideIndex)


  return (
    <div className='testimonial-section-container home-container'>

<div className='testimonial-section-left'>
              <h2>Our Testimonials</h2>
              <p>See what our customers are saying about us, as we
                standout and make bills payment easy for our customers</p>


              <div className='testimonial-arrows' >
                <div
                  onClick={() => dispatch(prevSlide(slideIndex - 1))}
                  className='testimonial-prev-arrow'>
                  <img src={PrevArrow} alt="" />
                </div>

                <div
                  onClick={() => dispatch(nextSlide(slideIndex + 1))}
                  className='testimonial-next-arrow'>
                  <img src={NextArrow} alt="" />
                </div>
              </div>
            </div>
      {testimonialData.map((item, index) => {
        return (
          <div id='testimonial-right-container' key={item.id} className={item.id === slideIndex ? 'opaque' : 'not-opaque'}>
           {item.id === slideIndex && (
             <div id="testimonial-section-right"  >
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
  )
}

export default Testimonials