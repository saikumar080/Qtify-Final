import React, { useRef} from "react";
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
    return(
        <div className={styles.carouselContainer}>
            <div ref={prevRef}>
                <LeftNavButton />
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                navigation={{
                    prevEl:prevRef.current,
                    nextEl: nextRef.current
                }}
                onBeforeInit={(swiper)=>{
                    swiper.params.navigation.prevEl=prevRef.current;
                    swiper.params.navigation.nextEl=nextRef.current;
                }}
                slidesPerView={6}
                slidesPerGroup={6}
                breakpoints={{
                0:{
                    slidesPerView:1.2,
                    slidesPerGroup:1.2
                },    
                350: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                // spaceBetween: 12,
            },
            600: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                //spaceBetween: 16,
            },
            960: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                //spaceBetween: 20,
            },
            1280: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                //spaceBetween: 24,
            },
          }}

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