import React from 'react'
import styles from './Page2.module.css'
import { ParallaxLayer } from '@react-spring/parallax'
import tiltPhone from '../../../Assets/tiltphone.png'
import FeatureCard from '../../FeatureCard/FeatureCard'
import FeatureCardData from '../../../Data/FeatureCardData/FeatureCardData.json'
import tiltPhone2 from '../../../Assets/tiltphone2.png'

export default function Page2() {
  return (
    <section>
      <ParallaxLayer 
        offset={2}
        factor={2}
        className={styles.bg} 
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        className={styles.container1}
      >
        <div className={styles.one}>
          <p>At <span className={styles.logo}>ORU</span>, we excel in <span className={styles.bold}>top-notch car cleaning</span> for all situations, including when:</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1.5}
        className={styles.container2}
      >
        <div className={styles.two}>
          <div className={styles.left}>
           <FeatureCard
            topText={FeatureCardData[0].topText}
            bottomText={FeatureCardData[0].bottomText}
           />
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <FeatureCard
              topText={FeatureCardData[1].topText}
              bottomText={FeatureCardData[1].bottomText}
            />
            </div>
            <div className={styles.bottom}>
              <FeatureCard
              topText={FeatureCardData[2].topText}
              bottomText={FeatureCardData[2].bottomText}
            />
            </div>
          </div>
        </div> 
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={2}
        className={styles.phone}
      >
         <img src={tiltPhone} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={2} 
        className={styles.container3}
      >
        <div className={styles.leftSide}>
          <div className={styles.three}>
              <p>At <span className={styles.logo}>ORU</span>, we excel in <span className={styles.bold}>top-notch car cleaning</span> for all situations, including when:</p>
          </div>
          <div className={styles.duelPhone}>
            <ParallaxLayer
              offset={3}
              speed={2}
              className={styles.rightPhone}
            >
              <img src={tiltPhone} />
            </ParallaxLayer>
            <ParallaxLayer
              offset={3}
              speed={3}
              className={styles.leftPhone}
            >
              <img src={tiltPhone2} />
            </ParallaxLayer>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.right1}>
            <FeatureCard
              topText={FeatureCardData[0].topText}
              bottomText={FeatureCardData[0].bottomText}
            />
          </div>
          <div className={styles.right2}>
              <FeatureCard
              topText={FeatureCardData[1].topText}
              bottomText={FeatureCardData[1].bottomText}
            />
          </div>
          <div className={styles.right3}>
              <FeatureCard
              topText={FeatureCardData[2].topText}
              bottomText={FeatureCardData[2].bottomText}
            />
          </div>
        </div>
      </ParallaxLayer>
    </section>
  )
}