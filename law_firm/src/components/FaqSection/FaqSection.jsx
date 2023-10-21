import React, { useEffect, useState } from "react";
import styles from "./FaqSection.module.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import AccordionIcon from "../../assets/accordionIcon.png";
import { fetchFaqData } from "../Api/Api";

const FaqSection = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    setFaqData(fetchFaqData);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftContainer}>
        <h4 className={styles.leftTitle}>FAQ</h4>
        <h4 className={styles.leftPara}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.{" "}
        </h4>
      </div>
      <div className={styles.rightContainer}>
        <h6 className={styles.rightTitle}>
          Do I need a personal injury report?
        </h6>
        <p className={styles.rightPara}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </p>

        <div className={styles.accordionContainer}>
          {faqData &&
            faqData.map((item) => {
              return (
                <>
                  <div className={styles.divider}></div>
                  <Accordion
                    sx={{
                      width: "539px",
                      backgroundColor:"transparent",
                      color: "white",
                      borderWidth: "0",
                    }}
                  >
                    <AccordionSummary
                    sx={{
                        backgroundColor:"transparent",
                        borderWidth: "0",
                   }}
                      expandIcon={
                        <div className={styles.accordionIcon}>
                          <img src={AccordionIcon} alt="" />
                        </div>
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <p className={styles.question}>{item.question}</p>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                         backgroundColor:"transparent",
                         borderWidth: "0",
                    }}>
                      <p className={styles.answer}>
                       {item.answer}
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
