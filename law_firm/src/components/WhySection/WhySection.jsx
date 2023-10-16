import React from "react";
import styles from "./WhySection.module.css";

import { ReactComponent as GiftIcon } from "../../assets/giftBox.svg";

const WhySection = () => {
  return (
    <div className={styles.whyWrapper}>
      <div className={styles.whyTitle}>Why Choose us?</div>

      <div className={styles.whyContentWrapper}>
        <div className={styles.whyContents}>
        <div className={styles.whyContent}>
            <div className={styles.messageWrapper}>
              <GiftIcon />
            </div>
            <h4 className={styles.whyRate}>98% Success Rate</h4>
            <p className={styles.whySentence}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.whyBtn}>Read More</button>
          </div>
        </div>

        <div className={styles.whyContentsCenter}>
          <div className={styles.whyContent}>
            <div className={styles.messageWrapper}>
              <GiftIcon />
            </div>
            <h4 className={styles.whyRate}>100% Success Rate</h4>
            <p className={styles.whySentence}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.whyBtn}>Read More</button>
          </div>
        </div>


        <div className={styles.whyContents}>
          <div className={styles.whyContent}>
            <div className={styles.messageWrapper}>
              <GiftIcon />
            </div>
            <h4 className={styles.whyRate}>100% Success Rate</h4>
            <p className={styles.whySentence}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.whyBtn}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
