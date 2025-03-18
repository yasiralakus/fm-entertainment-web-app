import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import data from "../data.json"

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {
                data?.filter(x => x.isTrending).map(x => (
                    <SwiperSlide>
                        <div className="trending-item">
                            <img src={x.thumbnail?.trending?.large} alt="" />
                            <div className="trending-item-details">
                                <div>
                                    <p>{x.year}</p>
                                    <span></span>
                                    <img src={x.category === 'TV Series' ? './assets/icon-nav-tv-series.svg' : './assets/icon-nav-movies.svg'} alt="" />
                                    <p>{x.category}</p>
                                    <span></span>
                                    <p>{x.rating}</p>
                                </div>
                                <h1>{x.title}</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
      </Swiper>
    </>
  );
}
