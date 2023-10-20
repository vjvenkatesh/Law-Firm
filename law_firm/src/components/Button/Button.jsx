import React from 'react'
import styles from './Button.module.css';

const Button = ({children,handleButtonClick}) => {
  return (
    <div className={styles.container} onClick={(e)=>handleButtonClick(e)}>
        {children}
    </div>
  )
}

export default Button