
import css from './Testimonial.module.css'
import hero from '../../assets/testi.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {TestimonialsData} from '../../data/testimonials'


const Testimonial = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
      <div className={css.container}>
        
        <span>Top Rate</span>
        <span>seedly say has suitable</span>
        </div>
      

      <img src={hero} alt="" />

      <div className={css.container}> 
      <span>100K</span>
      <span>Happy customers with us</span>
      </div>
    </div>
  <hr/>
 <div className={css.review}>Reviews</div>
    <div className={css.carousel}>
      <Swiper 
      className={css.tcarousel}
      slidesPerView={3}
      spaceBetween={20}
      breakpoints={{
        856:{slidesPerView: 3},
        640:{slidesPerView:2},
        0:{slidesPerView:1}
      }}
      slidesPerGroup={1}>
        {TestimonialsData.map((testimonial, i)=>(
               // eslint-disable-next-line react/jsx-key
               <SwiperSlide key={i}>
                <div className={css.testimonial}>
                  <img src={testimonial.image} alt="" />
                  <span>{testimonial.comment}</span>
                  <hr/>
                  <span>{testimonial.name}</span>
                </div>
               </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  )
}

export default Testimonial