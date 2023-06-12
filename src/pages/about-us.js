import React from 'react'
import styles from '../styles/About-us.module.css'
import AboutCard from '../components/AboutCard'

function AboutUs() {
  return (
    <div className={styles['about-us-container']}>
      <AboutCard />
      <AboutCard />
      <AboutCard />
    </div>
  )
}

export default AboutUs
