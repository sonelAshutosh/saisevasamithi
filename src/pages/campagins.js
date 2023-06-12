import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import styles from '../styles/Campagins.module.css'

function campagins() {
  return (
    <div className={styles['campagins-container']}>
      <Carousel
        showArrows={true}
        onChange={Carousel.onChange}
        onClickItem={Carousel.onClickItem}
        onClickThumb={Carousel.onClickThumb}
      >
        <div>
          <img className={styles['image']} src="/images/gallery.jpg" />
          <p className={styles['legend']}>Legend 1</p>
        </div>
        <div>
          <img className={styles['image']} src="/images/gallery.jpg" />
          <p className={styles['legend']}>Legend 2</p>
        </div>
        <div>
          <img className={styles['image']} src="/images/gallery.jpg" />
          <p className={styles['legend']}>Legend 3</p>
        </div>
        <div>
          <img className={styles['image']} src="/images/gallery.jpg" />
          <p className={styles['legend']}>Legend 4</p>
        </div>
        <div>
          <img className={styles['image']} src="/images/gallery.jpg" />
          <p className={styles['legend']}>Legend 5</p>
        </div>
        <div>
          <img className={styles['image']} src="/images/gallery.jpg" />
          <p className={styles['legend']}>Legend 6</p>
        </div>
      </Carousel>
    </div>
  )
}

export default campagins
