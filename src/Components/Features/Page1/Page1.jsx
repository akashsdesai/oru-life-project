import React from 'react'
import styles from './Page.module.css'
import { ParallaxLayer } from '@react-spring/parallax'
import mobile from '../../../Assets/mobile1.png'
import card from '../../../Assets/card1.png'
import coin from '../../../Assets/coins.png'
import defender from '../../../Assets/defender.png'
import vector from '../../../Assets/Vector.png'
import towel from '../../../Assets/towel.png'
import bucket from '../../../Assets/bucket.png'
import tiltPhone from '../../../Assets/tiltphone.png'

export default function Page1() {
  
  return ( 
    <div className={styles.page} >
      <ParallaxLayer
        offset={0} 
        speed={1}
        factor={5}
        className={styles.bg} 
      /> 
      <ParallaxLayer
        offset={1}
        speed={1}
        className={styles.container1}
      >
        <div className={styles.one}  >
          <p>You're spending a <span className={styles.dark}>significant amount on car expenses</span>, such as insurance and maintenance.</p>
          <div className={styles.mobile}>
            <img src={card} className={styles.card} />
            <img src={mobile} className={styles.phone} />
            <ParallaxLayer
              speed={1.5}
              offset={1}
              
            >
              <img src={defender} className={styles.defender} />
              <img src={coin} className={styles.coin} />
            </ParallaxLayer>
{/*             <ParallaxLayer
              speed={1.5}
              offset={1} 
            >
              
            </ParallaxLayer> */}
          </div>
        </div> 
      </ParallaxLayer> 
      <ParallaxLayer
         offset={1}
         speed={1}
         className={styles.container2}
      >
        <div className={styles.two}>
          <p>and your <span className={styles.dark}>local society cleaner harms</span> your car, not helps.</p>
          <div className={styles.vector}>
            <img src={vector} className={styles.object2} />
            <ParallaxLayer 
              speed={0.5}
              offset={1}
              className={styles.clean}
            >
              <img src={towel} className={styles.towel} />
              <img src={bucket} className={styles.bucket} />
            </ParallaxLayer>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
         offset={1}
         speed={2} 
         className={styles.container3}
      >
        <div className={styles.three}>
          <div className={styles.left}>
            <p>Your everyday car cleaning matters more than you think.</p>
            <p className={styles.bottom}>It's time to <span className={styles.dark}>upgrade your car's daily care with ORU.</span></p>
          </div>
          <div>
            <ParallaxLayer
               offset={1}  
               speed={2} 
            >
              <img src={tiltPhone} className={styles.tiltPhone} />
            </ParallaxLayer>
          </div>
        </div>
      </ParallaxLayer>
    </div>
    
  )
}