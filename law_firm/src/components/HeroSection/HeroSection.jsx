import React from "react";
import styles from "./HeroSection.module.css";
import { ReactComponent as MessageIcon } from "../../assets/message.svg";
import { ReactComponent as HeroImage } from "../../assets/heroImage.svg";
const HeroSection = () => {
  return (
    <div className={styles.herosection}>
      <div className={styles.heroContent}>
        <div className={styles.contentText}>
          You don’t have to Fight them Alone.
        </div>
        <div className={styles.contentText2}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </div>
        <div >
        <div className={styles.searchWrapper}>
          <div className={styles.searchText}>
            <MessageIcon className={styles.searchMessage}/>
            <input className={styles.searchInput} placeholder="Enter your eamil address"></input>
          </div>
            <div className={styles.searchBtn}>Let's Talk</div>     
        </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
