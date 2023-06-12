import React, { useEffect, useRef } from 'react'
import styles from '../styles/Information.module.css'
import People from '../../public/svg/People'
import Location from '../../public/svg/Location'
import User from '../../public/svg/User'
import Hand from '../../public/svg/Hand'
import Wave2 from '../../public/svg/curves/Wave2'
import Wave3 from '../../public/svg/curves/Wave3'
import { useMotionValue, useInView, useSpring } from 'framer-motion'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])
  useEffect(() => {
    springValue.on(
      'change',
      (latest) => {
        if (ref.current && latest.toFixed(0) <= value)
          ref.current.textContent = latest.toFixed(0)
      },
      [springValue, value]
    )
  })

  return <span ref={ref} className={styles['animated-number']}></span>
}

function Information() {
  return (
    <div className={styles['info-container']}>
      <Wave2 />
      <div className={styles['info-details']}>
        <User />
        <div className={styles['number-container']}>
          <AnimatedNumbers value={100} />
          <span className={styles['animated-number']}>&nbsp;+</span>
        </div>
        <h4>Happy People</h4>
      </div>
      <div className={styles['info-details']}>
        <Location />
        <div className={styles['number-container']}>
          <AnimatedNumbers value={2} />
          <span className={styles['animated-number']}>&nbsp;+</span>
        </div>
        <h4>Location</h4>
      </div>
      <div className={styles['info-details']}>
        <People />
        <div className={styles['number-container']}>
          <AnimatedNumbers value={20} />
          <span className={styles['animated-number']}>&nbsp;+</span>
        </div>
        <h4>Staff</h4>
      </div>
      <div className={styles['info-details']}>
        <i className="fa-solid fa-hand-holding-hand"></i>
        <Hand />
        <div className={styles['number-container']}>
          <AnimatedNumbers value={5} />
          <span className={styles['animated-number']}>&nbsp;+</span>
        </div>
        <h4>Volunteers</h4>
      </div>
    </div>
  )
}

export default Information
