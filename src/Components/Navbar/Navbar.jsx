import React, { useRef, useState } from 'react'
import styles from './Navbar.module.css'
import hamMenu from '../../Assets/hamburger.png'
import close from '../../Assets/close.png'

export default function Navbar(){
  const [ham, setHam]=useState(false)
  return (
    <nav>
      <div className={styles.mid}>
        <a href='/'><p>ORU</p></a>
      </div>
      <img src={ham ? close : hamMenu} alt='menu' onClick={()=>setHam(!ham)} />
      <div className={`${styles.navigator} ${ham && styles.show}`}>
        <div className={styles.left}>
          <ul>
            <li ><a href="#features">Features</a></li> 
            <a href='#rewards'><li>Rewards</li></a>
            <a href='#work'><li>How it works</li></a>
          </ul>
        </div>
        <div className={styles.right}>
          <ul>
            <a href='#why'><li>Why us?</li></a>
            <a href='#pricing'><li>Pricing</li></a>
            <a href='#download'><li>Download Now</li></a>
          </ul>
        </div>
      </div>
    </nav>
  )
}