import React from 'react'
import styles from './Hero.module.css'
import bg from '../../Assets/hero.gif'
import bgmbl from '../../Assets/hero.png'

export default function Hero() {
  return (
    <section className={styles.hero} id='rewards'>
      <img src={bg} className={styles.bg}/>
      <div className={styles.mid}>
        <p className={styles.top}>
          Get a Showroom Finish Car Cleaning Every Day
        </p>
        <p className={styles.bottom}>Your Car Deserves the Best</p>
        <button>START TODAY</button>
      </div>
      
      <img src={bgmbl} className={styles.mobilebg} />
    </section>
  )
}
