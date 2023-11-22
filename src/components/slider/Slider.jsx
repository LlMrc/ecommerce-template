import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { ProductsData } from "../../data/products";
//import swiper styles
const Slider = () => {
  const SliderProducts = ProductsData.slice(0, 4);

  const { shopItem, addToCart } = useContext(ShopContext);

  return (
    <div className="sub-hero">
      <span className="title">
        <div>Best sellers !!!</div>
      </span>
      <div className="s-container">
        <Swiper
          breakpoints={{
            640: { slidesPerView: 3 },
            0: { slidePrevClass: 1 },
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
          {SliderProducts.map((item) => {
            const itemsAmount = shopItem[item.id];
            return (
              <SwiperSlide key={item.img}>
                <div className="left-s">
                  <div className="name">
                    <span>{item.name}</span>
                    <span>{item.detail}</span>
                  </div>

                  <span>{item.price}$</span>
                  <div
                    className="price"
                    onClick={() => {
                      addToCart(item.id);
                    }}
                  >
                    Shop now {itemsAmount > 0 && <> ({itemsAmount})</>}
                  </div>
                </div>
                <img src={item.img} alt="product image" className="img-p" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
