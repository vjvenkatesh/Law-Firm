import React from 'react'

import styles from './Footer.module.css';

import lawLogo from '../../assets/logo.png'

import {ReactComponent as SocialIcons} from '../../assets/socialIcons.svg'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.firstContainer}>
            <img src={lawLogo} alt="logo" />
        </div>
        <div className={styles.secondContainer}>
            <div className={styles.heading}>
                <p className={styles.headingText}>Home</p>
                <p className={styles.headingText}>Attorneys</p>
                <p className={styles.headingText}>Practice Areas</p>
                <p className={styles.headingText}>About Us</p>
                <SocialIcons className={styles.socialIcon}/>
            </div>
            <div className={styles.para}>
                <p className={styles.paraText}>© 2020 Acme. All right reserved.</p>
                <p className={styles.paraText}>Privacy Policy</p>
                <p className={styles.paraText}>Terms of Service</p>
            </div>
        </div>
    </div>
  )
}

export default Footer