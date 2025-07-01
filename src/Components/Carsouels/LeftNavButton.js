import React from "react";
import leftArrow from "../../assests/left-arrow.svg";
 import styles from "./leftNavButton.module.css";

const LeftNavButton=()=>(
    <div className={`swiper-button-prev-custom ${styles.button}`}>
        <img src={leftArrow} alt="left"/>
    </div>
);
export default LeftNavButton;