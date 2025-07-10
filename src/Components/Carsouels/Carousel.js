import React, { useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import LeftNavButton from "./LeftNavButton";
import RightNavButton from "./RightNavButton";


const Carousel=({data, renderItem, breakpoints})=>{
    const prevRef=useRef(null);
    const nextRef=useRef(null);
    const[swiperReady,setSwiperReady]=useState(false);
        useEffect(()=>{
            setSwiperReady(true);
        },[]);
    return(
        <div className={styles.carouselContainer}>
            <LeftNavButton ref={prevRef} />
            {swiperReady &&(
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                navigation={{
                    nextEl: prevRef.current,
                    prevEl:nextRef.current,
                }}
                loop={false}
                watchOverflow={true}
                onInit={(swiper)=>{
                    swiper.params.navigation.prevEl =".swiper-button-prev-custom";
                    swiper.params.navigation.nextEl = ".swiper-button-next-custom";
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                breakpoints={breakpoints}
                className={styles.swiper}
            >
                {data.map((item)=>(
                    <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
                ))}
            </Swiper>
            )}
        <RightNavButton ref={nextRef} />
    </div>
 )

}
export default Carousel;