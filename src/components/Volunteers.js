import React from 'react'
import Link from 'next/link'
import styles from '../styles/Volunteers.module.css'
import VolCard from './VolCard'

function Volunteers() {
  return (
    <>
      <div className={styles['volunteers-container']}>
        <h1>Meet our Volunteers</h1>
        <div className={styles['volunteers-card-container']}>
          <VolCard img="/images/profile-img.jpg" name="name" />
          <VolCard img="/images/profile-img.jpg" name="name" />
          <VolCard img="/images/profile-img.jpg" name="name" />
        </div>
        {/* <div className={styles['volunteers-grid']}>
          <div className={styles['volunteer']}>
            <h3>Name</h3>
            <img src="./images/profile-img.jpg" alt="profile-pic" />
          </div>
          <div className={styles['volunteer']}>
            <h3>Name</h3>
            <img src="./images/profile-img.jpg" alt="profile-pic" />
          </div>
          <div className={styles['volunteer']}>
            <h3>Name</h3>
            <img src="./images/profile-img.jpg" alt="profile-pic" />
          </div>
        </div> */}
      </div>
      <div className={styles['become-a-volunteer-container']}>
        <div className={`${styles['become-a-volunteer']} shadow`}>
          <p>You want to become a</p>
          <h1>Volunteer</h1>
          <div className={`${styles['become-a-volunteer-text']} pc-only`}>
            We believe that until and unless members of the civil society are
            involved actively in the process of change and development, nothing
            can happen. Be a part of it.
          </div>

          <Link href="/contact-us">
            {/* <Button text="Join with us"></Button> */}
          </Link>
        </div>
        <div className={styles['become-a-volunteer-image']}>
          <img src="images/banner-image-3.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Volunteers
