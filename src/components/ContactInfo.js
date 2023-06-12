import React from 'react'
import styles from '../styles/ContactInfo.module.css'
import Facebook from '../../public/svg/Facebook'
import Youtube from '../../public/svg/Youtube'
import Twitter from '../../public/svg/Twitter'
import Whatsapp from '../../public/svg/Whatsapp'
import Email from '../../public/svg/Email'
import Phone from '../../public/svg/Phone'
import Location from '../../public/svg/Location'
import Link from 'next/link'

function ContactInfo() {
  const facebookLink = 'https://www.facebook.com/login/'
  const youtubeLink = 'https://www.youtube.com/'
  const twitterLink = 'https://twitter.com/i/flow/login'
  const whatsappLink = 'https://api.whatsapp.com/'

  const mobileLink = 'tel:9999999999'
  const mailtoLink = 'mailto:saisevasamithi.nagaur@gmail.com'
  const locationLink =
    'https://www.google.com/maps/place/Nagaur,+Rajasthan+341001/@27.2069674,73.6832366,13z/data=!3m1!4b1!4m6!3m5!1s0x396a9170adb7a653:0x6940f47129cdaa6e!8m2!3d27.1983368!4d73.7493272!16zL20vMDVrMWcw?entry=ttu'

  return (
    <div className={styles['contact-info']}>
      <h3>CONTACT INFO</h3>
      <Link href={locationLink}>
        <div className={styles['address']}>
          <p>
            <Location />
          </p>
          <p>B-17 Pratap Nagar, Near Ambedkar Park</p>
        </div>
      </Link>
      <Link href={mobileLink}>
        <div className={styles['mobile']}>
          <p>
            <Phone />
          </p>
          <p>+91 99999 99999</p>
        </div>
      </Link>
      <Link href={mailtoLink}>
        <div className={styles['email']}>
          <p>
            <Email />
          </p>
          <p>saisevasansthan@gmail.com</p>
        </div>
      </Link>
      <div className={styles['social-media']}>
        <Link href={facebookLink} target="_blank">
          <div className={styles['facebook']}>
            <Facebook />
          </div>
        </Link>
        <Link href={youtubeLink} target="_blank">
          <div className={styles['youtube']}>
            <Youtube />
          </div>
        </Link>
        <Link href={twitterLink} target="_blank">
          <div className={styles['twitter']}>
            <Twitter />
          </div>
        </Link>
        <Link href={whatsappLink} target="_blank">
          <div className={styles['whatsapp']}>
            <Whatsapp />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ContactInfo
