import React from "react";
import rightArrow from "../../assests/right-arrow.svg";
import styles from "./rightNavButton.module.css";

const RightNavButton=()=>(
    <div className={`swiper-button-next-custom ${styles.swiperButton} `}>
        <img src={rightArrow} alt="right" />
    </div>
)
export default RightNavButton;