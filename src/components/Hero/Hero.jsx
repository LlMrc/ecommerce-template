import HeroTage from '../../assets/hero.png'
import css from './Hero.module.css'
import {RiShoppingBagLine} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'



const Hero = () => {
  const transition = {duration:3, type: 'spring'}
  return (
    <div className={css.container}>
 {/* Left side */}
 <div className={css.h_side}>
    <span className={css.text1}>Skin Protection</span>
    <div className={css.text2}>
        <span>Trendy collection</span>
        <span>Seedly say has suitable disposal and buy. Exercice</span>
    </div>
 </div>

 {/* Middle side */}
 <div className={css.wrapper}>

<motion.div
 initial={{bottom: '2rem'}}
 whileInView={{bottom: '0'}} 
 transition={transition}
 className={css.blueCircle}/>
  <motion.img 
  transition={transition}
  initial={{bottom: '-2rem'}}
  whileInView={{bottom:'0'}}
  src={HeroTage} width={600} alt="" />

 <motion.div 
 transition={transition}
 initial={{right:'4%'}}
 whileInView={{right: '2%'}}
 className={css.cart2}>
    <RiShoppingBagLine/>
    <div className={css.signUp}>
        <span>Best Sign up offers</span>
        <BsArrowRight/>
    </div>
 </motion.div>

 </div>

 {/* right side */}
 <div className={css.h_side}>
 <div className={css.traffic}>

   <span>1.5m</span>
   <span>Monthly Traffic</span>
 </div>

 <div className={css.customers}>
   <span>100k</span>
   <span>Happy customers</span>
 </div>
 </div>
 


</div>
  )
}

export default Hero