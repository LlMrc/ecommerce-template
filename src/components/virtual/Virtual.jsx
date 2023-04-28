
import css from './Virtual.module.css'
import Shade from '../../assets/shade.png'
 import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'




const Virtual = () => {

  return (
    <div className={css.virtualbox}>
      <div className={css.divider} />
    <div className={css.virtual}>
   
     <div className={css.left}>
      <span>Virtual Try-on</span>
      <span>Never by the wrong shade again</span>
      <span>Try now</span>
      <img src={Shade} alt="" />
     </div>

    
      <div className={css.wrapper}>
      <div className={css.right}>
      <ReactCompareImage  rightImage={After}
      leftImage={Before}/>
     </div>
      </div>
    
    </div>
    </div>
  )
}

export default Virtual