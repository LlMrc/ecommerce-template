import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Slider.css'
 import {SliderProducts} from "../../data/products";
//import swiper styles
const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
      breakpoints={{
        640: {slidesPerView: 3},
        0: {slidePrevClass: 1}
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
     navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        loop={true}
      >

     
      {SliderProducts.map((item,  )=>(
            
                <SwiperSlide key={item.img}>
                <div className="left-s">
                  <div className="name">
                    <span>{item.name}</span>
                    <span>{item.detail}</span>
                  </div>
    
                  <span>{item.price}$</span>
                  <div>Shop now</div>
                </div>
                <img src={item.img} alt="product image" className="img-p" />
              </SwiperSlide>
))}
      </Swiper>
    </div>
  );
};

export default Slider;
