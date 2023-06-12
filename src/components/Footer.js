import React from 'react'
import ContactInfo from './ContactInfo'
import ThemeButton from '../components/ThemeButton'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <div id="contact-us" className={styles['footer-container']}>
      <div className={styles['footer-container-left']}>
        <div className={styles['footer-container-left-top']}>
          <div className={styles['logo-image']}>
            <Link href="/">
              <img src="images/logo-image.jpg" alt="logo" />
            </Link>
          </div>
          <div className={styles['quick-links']}>
            <h3>Quick Links</h3>
            <ul>
              <Link href="/donate">
                <li>Donate</li>
              </Link>
              <Link href="/certificates">
                <li>Certificates</li>
              </Link>
              <Link href="volunteers">
                <li>Volunteers</li>
              </Link>
              <Link href="volunteer">
                <li>Volunteer</li>
              </Link>
              <Link href="">
                <li>About</li>
              </Link>
              <a href="#contact-us">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={styles['footer-container-left-bottom']}>
          <div className={styles['theme']}>
            Select a Theme :
            <ThemeButton />
          </div>
        </div>
        <div className={styles['credits']}>
          Designed by -&nbsp;
          <span>
            <Link href="https://www.linkedin.com/in/ashutosh-s-b8b3a424a/">
              Ashutosh Sonel
            </Link>
          </span>
        </div>
      </div>
      <div className={styles['footer-container-right']}>
        <ContactInfo />
      </div>
    </div>
  )
}

export default Footer
