import React, { Component } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "../../Styles/carou.css"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


class Carousel extends Component {
  state = {
      slidesArray : []
  }

  componentDidMount = async  () => {
    const response = await fetch("https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details",
    {
        method : "GET" , 
        headers: {
            "Content-Type": "Application/json",
          }
    })
    const carouselDetails = await response.json()
    this.setState({
        slidesArray : carouselDetails.Details
    })  
  }
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
      {this.state.slidesArray.map((slide, index)=> {      
            return <SwiperSlide key={index} >
               <img id="swiper-image" src={slide.ImageUrl} alt={`Slide ${index}`}/>
           </SwiperSlide>
        })}
    </Swiper>
         {/* <Swiper  
         id="main" 
         navigation 
         pagination 
         spaceBetween={0} 
         slidesPerView={1}
         >
        {this.state.slidesArray.map((slide, index)=> {      
            return <SwiperSlide key={index} >
               <img id="swiper-image" src={slide.ImageUrl} alt={`Slide ${index}`}/>
           </SwiperSlide>
        })}
         </Swiper> */}
     </>
    )
  }
}

export default Carousel
