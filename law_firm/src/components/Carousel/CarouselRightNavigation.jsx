import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import styles from "./Carousel.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  });
  return (
    <div>
      {isEnd === false ? (
        <div
          className={`${styles.rightNavigation} ${styles.yellowArrow}`}
          onClick={() => swiper.slideNext()}
        >
          <RightArrow />
        </div>
      ) : (
        <div className={`${styles.rightNavigation} ${styles.whiteArrow}`}>
          <RightArrow />
        </div>
      )}
    </div>
  );
};

export default CarouselRightNavigation;
