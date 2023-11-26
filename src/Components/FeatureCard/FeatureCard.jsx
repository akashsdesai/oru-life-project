import React from 'react'
import styles from './FeatureCard.module.css'

export default function FeatureCard( props) {
  return (
    <div className={styles.card}>
      <p className={styles.topText}>{props.topText}</p>
      <p className={styles.bottomText}>{props.bottomText}</p>
    </div>
  )
}