import React, { useState } from 'react'
import styles from './Tooltip.module.css'

const Tooltip = ({text, children}) => {

    const[isVisible, setIsVisible]=useState(false)
  return (
    <div className={styles.wrapper} 
    onMouseEnter={()=>setIsVisible(true)}
     onMouseLeave={()=>setIsVisible(false)}>
    {children}
        {isVisible && <div className={styles.tooltip}>{text}</div>}
        </div>
  )
}

export default Tooltip