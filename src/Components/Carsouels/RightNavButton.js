import React,{forwardRef} from "react";
import rightArrow from "../../assests/right-Carousel.svg";
import styles from "./rightNavBar.module.css";

const RightNavButton=forwardRef((props,ref)=>(
    <div ref={ref} className={`swiper-button-next-custom ${styles.swiperButton} `}>
        <img src={rightArrow} alt="right " />
    </div>
))
export default RightNavButton;