import React, { useEffect, useState } from "react";

import styles from "./Team.module.css";

import { fetchTeamData } from "../Api/Api.js";

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    setTeamData(fetchTeamData);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h4 className={styles.teamtitle}>Our Team</h4>
      </div>
      <div className={styles.teams}>{teamData && 
      teamData.map((item)=>{
        return (<div className={styles.teamContainer}>
            <img src={item.image} alt="" width="68px" height="68px"/>
            <div className={styles.nameContainer}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.cases}>{item.cases} Cases</p>
            </div>
            </div>)
      })}</div>
    </div>
  );
};

export default Team;




