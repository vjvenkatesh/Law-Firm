import React, { useEffect, useState } from "react";

import styles from "./ClientFeedback.module.css";
import Carousel from "../Carousel/Carousel";
import ClientFeedbackCard from "../ClientFeedbackCard/ClientFeedbackCard";
import { fetchClientReview } from "../Api/Api";
import CarouselLeftNavigation from "../Carousel/CarouselLeftNavigation";
import CarouselRightNavigation from "../Carousel/CarouselRightNavigation";

const ClientFeedback = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    setReviewData(fetchClientReview);
  }, []);

  return (
    <div className={styles.cardsWrapper}>
      <Carousel
        data={reviewData}
        renderComponent={(reviewData) => (
          <ClientFeedbackCard data={reviewData} />
        )}
      />
    </div>
  );
};

export default ClientFeedback;
