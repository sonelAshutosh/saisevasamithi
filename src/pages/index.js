import React, { useRef } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HeroSection from '@/components/HeroSection'
import Details from '@/components/Details'
import Information from '@/components/Information'
import KnowAbout from '@/components/KnowAbout'
import Volunteers from '@/components/Volunteers'
import Wave3 from '../../public/svg/curves/Wave3'
import Wave4 from '../../public/svg/curves/Wave3'

function Home() {
  return (
    <>
      <HeroSection />
      <Details />
      <Information />
      <KnowAbout />

      <div className={styles['message']}>
        <div className={styles['message-title']}>
          <h1 className="pc-only">
            Help us continue to reach more children with safety, support and
            recovery
          </h1>
          <h1 className="mobile-only">Help us Reach More People</h1>
          <Link href="/donate">
            <button className={`${styles['btn']} shadow`}>Donate Now</button>
          </Link>
        </div>
        <div className={styles['message-image']}>
          <img src="images/banner-image-2.jpg" alt="message" />
        </div>
        {/* <Wave3 /> */}
      </div>

      <Volunteers />
    </>
  )
}

export default Home
