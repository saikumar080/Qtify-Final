import React,{forwardRef} from "react";
import leftArrow from "../../assests/left-Carousel.svg";
 import styles from "./leftNavButton.module.css";

const LeftNavButton=forwardRef((props, ref)=>(
    <button ref={ref} className={styles.navButton}>
        <img src={leftArrow} alt="left-arrow"/>
    </button>
));
export default LeftNavButton;