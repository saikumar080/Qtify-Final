import React,{forwardRef} from "react";
import rightArrow from "../../assests/right-Carousel.svg";
import styles from "./rightNavBar.module.css";

const RightNavButton=forwardRef((props,ref)=>(
    <button ref={ref} className={styles.navButton}>
        <img src={rightArrow} alt="right-arrow" />
    </button>
))
export default RightNavButton;