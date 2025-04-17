'use client'
import React, { useEffect, useState } from 'react'
import { bridgeImg } from '@/public/assets/Icon'
import Image from 'next/image'
import { motion } from 'framer-motion'
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

const cardAdvert:cardAdvert[] = [
  {
    name: "Bandra",
    desc: "Sea-facing, spacious",
    img: bridgeImg,
  },
  {
    name: "Bandra",
    desc: "Sea-facing, spacious",
    img: bridgeImg,
  },
  {
    name: "Bandra",
    desc: "Sea-facing, spacious",
    img: bridgeImg,
  },
  {
    name: "Bandra",
    desc: "Sea-facing, spacious",
    img: bridgeImg,
  }
]
const Localities = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * cardAdvert.length + 1);
      swiperRef?.slideToLoop(random);
    }, 3000)
    return () => {
      clearInterval(interval);
    }
  }, [swiperRef])


  return (
    <div className='mt-32'>
      <div className='p-10'>
        <h1 className='text-[56px]'>Localities</h1>
        <p className='text-[20px] leading-11 w-[800px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae perspiciatis doloribus distinctio temporibus</p>
      </div>
      <div className='mt-10'>
      <Swiper
        onSwiper={setSwiperRef}
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          scale: 0.9,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {cardAdvert.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={item.img}
                alt={item.name}
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute bottom-2 left-3 text-white">
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  )
}

export default Localities