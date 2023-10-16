import React from 'react'
import styles from './IntroSection.module.css'

const IntroSection = () => {
  return (
    <div className={styles.introWrapper}>
        <p className={styles.introLeft}>Let’s Introduce Ourself</p>
        <div className={styles.divider}></div>
        <div className={styles.introRight}>
        <h6 className={styles.paraTitle}>Criminal Lawyer</h6>
        <p className={styles.paraContent}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
        </div>
        
    </div>
  )
}

export default IntroSection