import React from 'react'
import styles from './About.module.css'
import team from '../../assets/team.jpg'
import graph from '../../assets/graph.jpg'
const About = () => {
  return (
    <div className={styles.wrapper}>


{/* Photo by Lukas: https://www.pexels.com/photo/charts-on-black-wooden-table-669622/ */}
      <div className={styles.header}>
          <img src={graph} alt='about us'/>
      </div>
       <div className={styles.description}>
        <div>
           <h3>How we begin 📈!</h3>
          <p>Nesciunt hic te delectus, cupiditate eius nemo laudantium pariatur praesentium? Obcaecati illum, earum quo exercitationem, possimus quibusdam libero perferendis laudantium magni, odio voluptatem! Neque, aliquam sapiente quidem expedita velit molestias eligendi.</p>

        </div>
         
       {/* Photo by fauxels: https://www.pexels.com/photo/group-of-people-sitting-3184352/ */}
        <div className={styles.picture}>
         <img src={team} alt='team'/>
        </div>

      </div>
    </div>
  )
}

export default About