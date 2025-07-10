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
            <LeftNavButton ref={prevRef} />
            
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                navigation={{
                    nextEl: prevRef.current,
                    prevEl:nextRef.current,
                }}
                onBeforeInit={(swiper)=>{
                    swiper.params.navigation.prevEl =prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                onSwiper={(swiper)=>{
                    setTimeout(()=>{
                        swiper.navigation.init();
                        swiper.navigation.update();
                    })
                }}
                breakpoints={breakpoints}
                loop={false}
                className={styles.swiper}
            >
                {data.map((item)=>(
                    <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
                ))}
            </Swiper>
           
        <RightNavButton ref={nextRef} />
    </div>
 )

}
export default Carousel;