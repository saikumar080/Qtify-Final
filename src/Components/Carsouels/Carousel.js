import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./carousel.module.css";
import LeftNavButton from "./LeftNavButton";
import RightNavButton from "./RightNavButton";


const Carousel=({data, renderItem, breakpoints})=>{
    return(
        <div className={styles.carouselContainer}>
            <LeftNavButton />
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                navigation={{
                    nextEl:".swiper-button-next-custom",
                    prevEl:".swiper-button-prev-custom",
                }}
                breakpoints={breakpoints}
                onInit={(swiper)=>{
                    swiper.params.navigation.prevEl =".swiper-button-prev-custom";
                    swiper.params.navigation.nextEl = ".swiper-button-next-custom";
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {data.map((item)=>(
                    <SwiperSlide key={item.id}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
           <RightNavButton />
        </div>
    )

}
export default Carousel;