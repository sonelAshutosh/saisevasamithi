import React from 'react'
import Link from 'next/link'
import styles from '../styles/Details.module.css'
import Food from '../../public/svg/Food'
import Medicine from '../../public/svg/Medicine'
import Education from '../../public/svg/Education'

function Details() {
  return (
    <>
      <div className={styles['details-support']}>
        <div className={styles['details-support-title']}>
          <h2>Our Activities</h2>
        </div>
        <div className={styles['details-support-body']}>
          <div className={styles['details-support-card']}>
            <div className={styles['details-support-card-icon']}>
              <Food />
            </div>
            <div className={styles['details-support-card-title']}>
              Food Distribution
            </div>
            <div className={styles['details-support-card-description']}>
              As part of our commitment to combat hunger, we organize regular
              food distribution d rives in local communities and hospitals. Our
              dedicated volunteers collect and distribute nutritious meals to
              individuals and families who are struggling to meet their basic
              nutritional needs.
            </div>
          </div>
          <div className={styles['details-support-card']}>
            <div className={styles['details-support-card-icon']}>
              <Medicine />
            </div>
            <div className={styles['details-support-card-title']}>
              Medical Assistance
            </div>
            <div className={styles['details-support-card-description']}>
              We understand the importance of access to proper healthcare. Sai
              Seva Samithi collaborates with hospitals and medical professionals
              to offer essential medical assistance to those in need.
            </div>
          </div>
          <div className={styles['details-support-card']}>
            <div className={styles['details-support-card-icon']}>
              <Education />
            </div>
            <div className={styles['details-support-card-title']}>
              Awareness and Education
            </div>
            <div className={styles['details-support-card-description']}>
              In addition to direct assistance, we believe in the power of
              education and awareness to create long-lasting change. Sai Seva
              Samithi conducts workshops, seminars, and awareness campaigns on
              various health and social issues.
            </div>
          </div>
        </div>
        <div className={styles['details-support-buttons']}>
          <Link href="/donate">{/* <Button text="Donate"></Button> */}</Link>
          <Link href="/contact-us">
            {/* <Button text="Become a Volunteer"></Button> */}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Details
