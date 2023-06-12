import React from 'react'
import styles from '../styles/HeroSection.module.css'
import Wave from '../../public/svg/curves/Wave'

function HeroSection() {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['details']}>
          <h1 className={styles['details-heading']}>Sai Seva Samithi</h1>
          <p className={styles['details-description']}>
            Extending a helping hand. We provide food and medicines to those in
            hospitals, ensuring no one goes hungry or lacks vital care.{' '}
            <span className="pc-only inline-block">
              Join us in making a difference today. Together, we can bring hope
              and support to those who need it most.
            </span>
          </p>
        </div>
        <div className={styles['banner-image']}>
          <img src="images/banner-image (3).jpg" alt="banner" />
        </div>
        <Wave />
      </div>
    </>
  )
}

export default HeroSection
