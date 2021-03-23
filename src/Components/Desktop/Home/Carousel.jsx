import React, { Component } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../../../Styles/Home/carou.scss";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Carousel extends Component {
  state = {};

  render() {
    return (
      <>
        {this.props.data.length === 0 ? (
          <div className="loader"></div>
        ) : (
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
                  <div className="carousel-image-container">
                    <img
                      id="swiper-image"
                      src={slide.ImageUrl}
                      alt={`Slide ${index}`}
                    />
                    <div className="carousel-text-wrapper">
                      <h2>Lorem ipsum dolor </h2>
                      <p>Quem vide tincidun</p>
                      <button id="carousel-button">
                        <Link to="/contact-us" id="carousel-btn-link">
                          Contact us
                        </Link>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </>
    );
  }
}

export default Carousel;
