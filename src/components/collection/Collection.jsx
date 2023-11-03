import React from 'react';
import styles from './collection.module.css';


const Collection = ({img, title, details, price}) => {
  return (
     <div className={styles.cardWrapper}>
        <div className={styles.cardImg}>
          <img src={img} alt={title}/>
        </div>
        <div className={styles.description}>
         <h4>{title}</h4>
         <p>{details}</p>
         <div className={styles.prices}>
          <h4> Price: ${price}</h4>
          <button>Buy now</button>
         </div>
        </div>
      </div>
  )
}

export default Collection