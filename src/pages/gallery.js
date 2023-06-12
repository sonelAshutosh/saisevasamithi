import React from 'react'
import styles from '../styles/Gallery.module.css'

function Gallery() {
  return (
    <div className={styles['gallery-container']}>
      <div className={styles['image']}>
        <img src="/images/gallery.jpg" alt="images" />
      </div>
      <div className={styles['image']}>
        <img src="/images/gallery.jpg" alt="images" />
      </div>
      <div className={styles['image']}>
        <img src="/images/gallery.jpg" alt="images" />
      </div>
      <div className={styles['image']}>
        <img src="/images/gallery.jpg" alt="images" />
      </div>
      <div className={styles['image']}>
        <img src="/images/gallery.jpg" alt="images" />
      </div>
      <div className={styles['image']}>
        <img src="/images/gallery.jpg" alt="images" />
      </div>
      <div className={styles['image']}>
        <img src="/images/gallery.jpg" alt="images" />
      </div>
    </div>
  )
}

export default Gallery
