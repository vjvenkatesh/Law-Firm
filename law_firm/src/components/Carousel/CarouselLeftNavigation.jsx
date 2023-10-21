import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";

import styles from "./Carousel.module.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [isBeginning, swiper, swiper.isBeginning]);

  return (
    <div>
      {isBeginning === false ? (
        <div className={`${styles.leftNavigation} ${styles.yellowArrow}`} onClick={() => swiper.slidePrev()} >
          <LeftArrow />
        </div>
      ) : (
        <div className={`${styles.leftNavigation} ${styles.whiteArrow}`}>
          <LeftArrow />
        </div>
      )}
    </div>
  );
};

export default CarouselLeftNavigation;
