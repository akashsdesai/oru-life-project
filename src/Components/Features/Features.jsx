import React, { forwardRef } from 'react'
import styles from './Features.module.css'
import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'
import { ParallaxLayer } from '@react-spring/parallax'


 function Features() {
  return (
    <section id='features' className={styles.features} >
      <ParallaxLayer>
        <Page1 />
      </ParallaxLayer>
      <ParallaxLayer >
        <Page2 />
      </ParallaxLayer>
    </section>
  )
}

export default Features;