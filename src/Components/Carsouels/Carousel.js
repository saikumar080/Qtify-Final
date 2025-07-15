import React, { useState,useEffect,useRef} from "react";
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
            <div ref={prevRef} className={styles.LeftNavButton}>
                <LeftNavButton />
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                navigation={navigation}
                loop={false}
                watchSlidesProgress={true}
                //  virtualTranslate={true}
                onSwiper={(swiper)=>{
                    console.log("swiper initialized with slidesPerView:",swiper.params.slidesPerView)
                    setTimeout(()=>{
                        if (swiper.params.navigation && swiper.navigation && prevRef.current && nextRef.current) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    })
                }}
                breakpoints={breakpoints || {
                0: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 12,
            },
            600: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 16,
            },
            960: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                spaceBetween: 24,
            },
          }}

        className={styles.swiper}
            >
                {data.map((item)=>(
                    <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
                ))}
            </Swiper>
          <div ref={nextRef} className={styles.RightNavButton}>
                <RightNavButton/>
          </div>  
        
    </div>
 )

}
export default Carousel;