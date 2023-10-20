import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import HeroSection from "../HeroSection/HeroSection";

const Navbar = () => {



  const handleButtonClick=(e)=>{
    console.log(e.target.innerText);
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Logo />
        <div className={styles.navbarSection}>
          <h4 className={styles.navbarPages}>Home</h4>
          <h4 className={styles.navbarPages}>Attorneys</h4>
          <h4 className={styles.navbarPages}>Practice Areas</h4>
          <h4 className={styles.navbarPages}>About Us</h4>
        </div>
        <Button className={styles.btn} children={"Contact Now"} handleButtonClick={handleButtonClick}/>
      </div>
      <div className={styles.herosection}>
        <HeroSection/>
      </div>
    </div>
  );
};

export default Navbar;
