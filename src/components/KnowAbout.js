import React from 'react'
import styles from '../styles/KnowAbout.module.css'
import Link from 'next/link'

function KnowAbout() {
  return (
    <div className={styles['know-about-container']}>
      <div className={styles['left']}>
        <h1>Know About</h1>
        <div className={styles['our-mission-vision']}>
          <h3>Our Mission</h3>
          <p>
            Our mission is to alleviate hunger, provide vital healthcare
            support, and empower individuals through education and awareness.
            Sai Seva Samithi is dedicated to creating a compassionate society
            where no one is left behind, and every individual has access to
            basic necessities and the opportunity to lead a healthy, dignified
            life.
          </p>
          <Link href="/">Read More</Link>
        </div>

        <div className={styles['our-mission-vision']}>
          <h3>Our Vision</h3>
          <p>
            Our vision is to build a world where every person has access to
            food, healthcare, and opportunities for a better future. Sai Seva
            Samithi envisions a society where compassion, empathy, and equality
            prevail, and where no one is marginalized or left behind.
          </p>
          <Link href="/">Read More</Link>
        </div>
      </div>
      <div className={styles['right']}>
        <img src="/images/knowabout.jpg" alt="" className="shadow" />
        {/* <iframe
          className="embedded-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/A6Jt_fNF-Yw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </div>
    </div>
  )
}

export default KnowAbout
