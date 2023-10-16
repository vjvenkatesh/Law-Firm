import React from "react";
import styles from "./AreaSection.module.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
const AreaSection = () => {
  return (
    <div className={styles.areaWrapper}>
      <h3 className={styles.areaTitle}>Area Of Practices</h3>
      <div className={styles.areaImageWrapper}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img src={image1} alt="areaImage" />
            <p className={styles.imageText}>BUSINESS LAW</p>
          </div>

          <div className={styles.imageContainer}>
            <img src={image2} alt="areaImage" />
            <p className={styles.imageText}>Partnership LAW</p>
          </div>
        </div>



        <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
            <img src={image3} alt="areaImage" />
            <p className={styles.imageText}>REAL ESTATE LAW</p>
          </div>

          <div className={styles.imageContainer}>
            <img src={image4} alt="areaImage" />
            <p className={styles.imageText}>BUSINESS LAW</p>
          </div>
        </div>


        <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
            <img src={image5} alt="areaImage" />
            <p className={styles.imageText}>LANDLORD DISPUTES</p>
          </div>

          <div className={styles.imageContainer}>
            <img src={image6} alt="areaImage" />
            <p className={styles.imageText}>ELDER ABUSE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaSection;
