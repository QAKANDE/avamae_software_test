import React, { Component } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../../Styles/Home/carou.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Carousel extends Component {
  state = {};

  render() {
    return (
      <>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {this.props.data.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  id="swiper-image"
                  src={slide.ImageUrl}
                  alt={`Slide ${index}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  }
}

export default Carousel;
