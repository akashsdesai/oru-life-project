import React, { useRef, useState } from 'react'
import './App.css';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './Components/Navbar/Navbar.module.css'
import hamMenu from './Assets/hamburger.png'
import close from './Assets/close.png'


function App() {
  const [ham, setHam]=useState(false)
  const ref=useRef()
  return (
    <div className="App">
      <Parallax ref={ref} pages={20}>
        <ParallaxLayer>
          {/* <Navbar /> */}
          <nav>
            <div className={styles.mid}>
              <a href='/'><p>ORU</p></a>
            </div>
            <img src={ham ? close : hamMenu} alt='menu' onClick={()=>setHam(!ham)} />
            <div className={`${styles.navigator} ${ham && styles.show}`}>
              <div className={styles.left}>
                <ul>
                  <li onClick={()=>ref.current.scrollTo(ham? 0.75 : 1.1)} >Features</li> 
                  <li>Rewards</li>
                  <li>How it works</li>
                </ul>
              </div>
              <div className={styles.right}>
                <ul>
                  <li>Why us?</li>
                  <li>Pricing</li>
                  <li>Download Now</li>
                </ul>
              </div>
            </div>
          </nav>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Features />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
} 

export default App;
