import React from 'react'
import styles from './SubscripeSection.module.css';
const SubscripeSection = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <h5 className={styles.title}> Subscribe Our Newsletter</h5>
          <div className={styles.textSection}>
            <input type="text" className={styles.firstInput} placeholder='Name:'/>
            <input type="text" className={styles.secondInput} placeholder='Enter your Email'/>
            <button className={styles.button}>SEND</button>
          </div>
        </div>
    </div>
  )
}

export default SubscripeSection