import React from 'react'
import styles from './contact.module.css'
import Amazon from '../../assets/amazon.jpg'
const Contact = () => {
  return (
    <>
     <div className={styles.wrapper}>
      <h1>Contact form</h1>
          <form  >
            <div className={styles.right}>
              <h2>Let's get in touch 👋</h2>
              <p> Sed nam deserunt eos ea ipsum excepturi quidem possimus? Nesciunt, adipisci. Beatae adipisci deleniti illo corrupti harum.</p>

              {/* input fields */}
               <div className={styles.contact}>

                <div>
                  <label htmlFor='name'>Name</label>
                  <input type='text' name='name' placeholder='Enter your name'/>
                </div>

                {/* email  */}
                 <div>
                  <label htmlFor='email'>Email</label>
                  <input type='email' name='email' placeholder='Enter your email'/>
                </div>

                  <div>
                  <label htmlFor='country'>Country</label>
                  <select name='country'>
                   <option>United States</option>
                   <option>United Kingdom</option>
                   <option>Germany</option>
                   <option>Spain</option>
                    <option>Italia</option>
                  </select>
                
                </div>

               </div>

                <div className={styles.checkBox}>
                  <label htmlFor='term'>Terms of service</label>
                  <input type='checkbox' name='terms'/>
                      <p> Beatae adipisci deleniti illo corrupti harum. cum eum quae?</p>
                </div>
           
               <button type='submit'> Contact us now</button>

            </div>


             <div className={styles.left}>
                  
      {/* Photo by Amina Filkins: https://www.pexels.com/photo/crop-faceless-person-turning-shop-signboard-hanging-on-glass-wall-5414061/ */}
         <img src={Amazon}  alt="amazon"/>
            
     </div>
          </form>
     </div>



   
    </>
  )
}

export default Contact