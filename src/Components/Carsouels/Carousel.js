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
    const[navigation,setNavigation]=useState(false);
        useEffect(()=>{
            setNavigation({
                prevEl: prevRef.current,
                nextEl: nextRef.current
            });
        },[]);
    return(
        <div className={styles.carouselContainer}>
            <div ref={prevRef}>
                <LeftNavButton />
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                navigation={navigation}
                loop={false}
                // onInit={(swiper)=>{
                //     swiper.params.navigation.prevEl =".swiper-button-prev-custom";
                //     swiper.params.navigation.nextEl = ".swiper-button-next-custom";
                //     swiper.navigation.init();
                //     swiper.navigation.update();
                // }}
                breakpoints={breakpoints}
                className={styles.swiper}
            >
                {data.map((item)=>(
                    <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
                ))}
            </Swiper>
          <div ref={nextRef}>
                <RightNavButton/>
          </div>  
        
    </div>
 )

}
export default Carousel;