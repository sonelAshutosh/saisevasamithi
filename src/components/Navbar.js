import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'
import Cross from '../../public/svg/Cross'
import Bars from '../../public/svg/Bars'

function Navbar() {
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
    // toggleScrolling(!menu)
  }

  const closeMobileMenu = () => {
    setMenu(false)
    // toggleScrolling(false)
  }

  const mobileLink = 'tel:9999999999'
  const mailtoLink = 'mailto:saisevasamithi.nagaur@gmail.com'

  // const toggleScrolling = (enableScrolling) => {
  //   const body = document.querySelector('body')
  //   if (enableScrolling) {
  //     body.classList.add('stop-scrolling')
  //   } else {
  //     body.classList.remove('stop-scrolling')
  //   }
  // }

  useEffect(() => {
    return () => {
      // toggleScrolling(true) // Re-enable scrolling when the component unmounts
    }
  }, [])

  return (
    <>
      <div className={styles['navbar-header']}>
        <Link href={mobileLink}>
          <div className={styles['phone-number']}>+91 99999 99999</div>
        </Link>
        <Link href={mailtoLink}>
          <div className={`${styles['email-id']} pc-only`}>
            saisevasamithi.nagaur@gmail.com
          </div>
        </Link>
        <div className={styles['donate-button']} onClick={closeMobileMenu}>
          <Link href="/donate" onClick={closeMobileMenu}>
            <button className={styles['btn']}>Donate Now</button>
          </Link>
        </div>
      </div>
      <div className={styles['navbar-footer']}>
        <div className={styles['navbar-left']}>
          <Link href="/">
            <img src="images/logo-image.jpg" alt="logo" />
          </Link>
        </div>
        <div
          className={
            menu
              ? `${styles['navbar-right']} ${styles['active']}`
              : `${styles['navbar-right']}`
          }
        >
          <ul className={styles['navbar-right-list']}>
            <Link href="/" onClick={closeMobileMenu}>
              <li>Home</li>
            </Link>
            <Link href="/campagins" onClick={closeMobileMenu}>
              <li>Campagins</li>
            </Link>
            <Link href="/certificates" onClick={closeMobileMenu}>
              <li>Certificates</li>
            </Link>
            <Link href="/gallery" onClick={closeMobileMenu}>
              <li>Gallery</li>
            </Link>
            <Link href="/about-us" onClick={closeMobileMenu}>
              <li>About Us</li>
            </Link>
            <a href="#contact-us" onClick={closeMobileMenu}>
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        <div className={styles['menu']} onClick={handleClick}>
          {menu ? <Cross /> : <Bars />}
        </div>
      </div>
    </>
  )
}

export default Navbar
