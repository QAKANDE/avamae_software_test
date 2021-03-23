import React, { Component } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../../Styles/Mobile/Carou.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class MobileCarou extends Component {
  state = { slidesArray: [] };

  componentDidMount = async () => {
    const response = await fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details",
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    const carouselDetails = await response.json();
    this.setState({
      slidesArray: carouselDetails.Details,
    });
  };
  render() {
    return (
      <>
        <div id="carousel-wrapper">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {this.state.slidesArray.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="mobile-carousel-image-container">
                    <img
                      id="swiper-image"
                      src={slide.ImageUrl}
                      alt={`Slide ${index}`}
                    />
                    <div className="mobile-carousel-text-wrapper">
                      <h2>Lorem ipsum dolor </h2>
                      <p>Quem vide tincidun</p>
                      <button id="mobile-carousel-button">
                        <Link
                          to="/mobile-contact-us"
                          id="mobile-carousel-btn-link"
                        >
                          Contact us
                        </Link>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </>
    );
  }
}

export default MobileCarou;
