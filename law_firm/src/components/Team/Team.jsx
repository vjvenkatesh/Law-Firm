import React from 'react'

import styles from './Team.module.css'

import {fetchTeamData} from '../Api/Api.js'
const Team = () => {

  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>

        </div>
        <div className={styles.teams}>

        </div>
    </div>
  )
}

export default Team