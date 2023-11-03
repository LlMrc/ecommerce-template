import React from 'react';
import styles from './new.module.css';


import collection from '../../data/collection';
import Collection from '../../components/collection/Collection';



class New extends React.Component {
  render(){
    return (


      <div className={styles.wrapper}>
        {collection.map((item, index)=>(
              <div key={index} className={styles.card}>
  <Collection img ={item.img} title = {item.title} details = {item.details} price={item.price}/>
              </div>
           
        )
     
        )}
      </div>
 
  )
  }
  
}

export default New