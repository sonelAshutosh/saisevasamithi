import React from 'react'
import styles from '../styles/Certificates.module.css'

function certificates() {
  return (
    <div>
      <div className={styles['image']}>
        <img src="/images/certificate.jpg" alt="images" />
      </div>
      <div className={styles['image']}>
        <img src="/images/certificate.jpg" alt="images" />
      </div>
      <div className={styles['image']}>
        <img src="/images/certificate.jpg" alt="images" />
      </div>
      <div className={styles['image']}>
        <img src="/images/certificate.jpg" alt="images" />
      </div>
    </div>
  )
}

export default certificates
