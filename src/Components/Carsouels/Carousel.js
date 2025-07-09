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
//      useEffect(() => {
//     if (
//       typeof window !== "undefined" &&
//       prevRef.current &&
//       nextRef.current
//     ) {
//       // Force Swiper to update navigation when refs are ready
//       document.querySelector(".swiper-button-prev-custom").classList.remove("swiper-button-disabled");
//       document.querySelector(".swiper-button-next-custom").classList.remove("swiper-button-disabled");
//     }
//   }, []);
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
                {Array.isArray(data) && 
                    data.map((item)=>(
                        <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
                    ))}
            </Swiper>
        <RightNavButton ref={nextRef} />
    </div>
 )

}
export default Carousel;