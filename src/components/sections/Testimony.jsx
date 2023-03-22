import React from 'react'
import TestimonyCard from './TestimonyCard';
import {Swiper, SwiperSlide} from "swiper/react";
import Avataui from '../../images/logos/avata.jpg';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from 'swiper';

const Testimony = () => {
    const testimonycontent = "While we don't claim to be the best in tech-driven innovation in the country, we are always striving to give out our best";
  return (
    <div className='py-6 testimony' id="testimony">
      <div className='container box'>
          
            <div className='flex gap-3 spc-btw'>
                <div className='w-50'>
                <h3 className='txt-primary text-500 size-1 border-lit-right sm'>Testimonial</h3>
                    <h3 className='text-600 txt-black size-2'>What Our Clients Say About Us</h3>
                </div>
                <div className='w-50'>
                    <p className='txt-black'>
                        {testimonycontent}
                    </p>
                </div>
            </div>

            <div className='testimony-card mobile myt-2 p-2'>
            <Swiper navigation={true} slidesPerView={1} modules={[Navigation]} className="mySwiper">
              <SwiperSlide>
                <TestimonyCard imagecrd={Avataui} user="Alao Yinusa" rank="Propriator" content="Having a school can cause one to originally believe in the existence of depression. But with Q-Sales school portal product, everything becomes so interesting."/>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonyCard imagecrd={Avataui} user="Sa'ad Sidiq" rank="Founder/CEO" content="Thank you Q-Sales. Your service is second to none. I will put you on my top diary."/>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonyCard imagecrd={Avataui} user="Meenaf Ibrahim" rank="Director" content="I thought to myself after your service - that perhaps I've been living behind the business trend without using your software. Many thanks!"/>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonyCard imagecrd={Avataui} user="Yinka Ismail" rank="MD/CEO" content="Q-Sales cleared my skepticality when you shown in time and delivered outrightly beyond my expectation. I had to pay more for compensation. Thanks a lot Q-Sales."/>
              </SwiperSlide>
                </Swiper>
            </div>

            <div className='testimony-card desktop myt-2 p-2'>
            <Swiper navigation={true} slidesPerView={2} modules={[Navigation]} className="mySwiper">
              <SwiperSlide>
                <TestimonyCard imagecrd={Avataui} user="Alao Yinusa" rank="Propriator" content="Having a school can cause one to originally believe in the existence of depression. But with Q-Sales school portal product, everything becomes so interesting."/>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonyCard imagecrd={Avataui} user="Sa'ad Sidiq" rank="Founder/CEO" content="Thank you Q-Sales. Your service is second to none. I will put you on my top diary."/>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonyCard imagecrd={Avataui} user="Meenaf Ibrahim" rank="Director" content="I thought to myself after your service - that perhaps I've been living behind the business trend without using your software. Many thanks!"/>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonyCard imagecrd={Avataui} user="Yinka Ismail" rank="MD/CEO" content="Q-Sales cleared my skepticality when you shown in time and delivered outrightly beyond my expectation. I had to pay more for compensation. Thanks a lot Q-Sales."/>
              </SwiperSlide>
                </Swiper>
            </div>

      </div>
    </div>
  )
}

export default Testimony
