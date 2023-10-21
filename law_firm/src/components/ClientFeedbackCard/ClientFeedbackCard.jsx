import React from "react";
import styles from "./ClientFeedbackCard.module.css";
const ClientFeedbackCard = ({ data }) => {
  const { image, name, position, review } = data;
  return (
    <div className={styles.wrapper}>
      <img
        src={image}
        alt="album"
        style={{ width: "105px", height: "102px" }}
      />
      <div className={styles.client}>
      <p className={styles.name}>{name}</p>

      <p className={styles.position}>{position}</p>
      </div>
      <p className={styles.review}> {review}</p>
    </div>
  );
};

export default ClientFeedbackCard;
