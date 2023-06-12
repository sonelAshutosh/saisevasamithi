import React from 'react'
import styles from '../styles/AboutCard.module.css'

function AboutCard(props) {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-left']}>
        <img src="images/user-icon.png" alt="user-icon" />
      </div>
      <div className={styles['card-right']}>
        <div className={styles['name']}>Name</div>
        <div className={styles['degination']}>Designation</div>
        <div className={styles['email']}>email@gmail.com</div>
        <div className={styles['mobile']}>+91 12345 79846</div>
      </div>
    </div>
  )
}

export default AboutCard
