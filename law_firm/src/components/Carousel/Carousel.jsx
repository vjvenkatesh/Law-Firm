import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.outWrapper}>
      <Swiper
        style={{ padding: "0px 20px " ,display:"flex",gap:"50px"}}
        initialSlide={0}
        module={[Navigation]}
        slidesPerView={3}
        spaceBetween={40}
        allowTouchMove
        className={styles.wrapper}
      >
        <Controls data={data} />
        <div className={styles.topDiv}>
          <h3 className={styles.title}>What says our happy Clients</h3>
          <div className={styles.carouselArrows}>
            <CarouselLeftNavigation />
            <CarouselRightNavigation />
          </div>
        </div>
        <div>
          {data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className={
                  index % 2 === 0 ? styles.evenSlide : styles.normalSlide
                }
              >
                {renderComponent(item)}
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
