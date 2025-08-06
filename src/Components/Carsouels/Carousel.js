import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import LeftNavButton from "./LeftNavButton";
import RightNavButton from "./RightNavButton";

const Carousel = ({ data, renderItem, breakpoints }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.params) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy();  // Clear existing bindings
            swiperRef.current.navigation.init();     // Initialize with new refs
            swiperRef.current.navigation.update();   // Update navigation state
        }
    }, [data]); // Re-run if data changes

    return (
        <div className={styles.carouselContainer}>
            <div ref={prevRef} className={styles.LeftNavButton}>
                <LeftNavButton />
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper; // Save Swiper instance
                }}
                loop={false}
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
                        slidesPerView: 4,   //  Fixed to 4 for large screens
                        slidesPerGroup: 4,  //  Group slides in 4s
                        spaceBetween: 24,
                    },
                }}
                className={styles.swiper}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div ref={nextRef} className={styles.RightNavButton}>
                <RightNavButton />
            </div>
        </div>
    );
};

export default Carousel;
