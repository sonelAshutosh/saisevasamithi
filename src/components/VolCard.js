import React from 'react'
import styles from '../styles/VolCard.module.css'

function VolCard({ img, name }) {
  return (
    <div className={`${styles['card-container']} shadow`}>
      <div className={styles['card-image']}>
        <img src={img} />
      </div>
      <div className={styles['card-title']}>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default VolCard
