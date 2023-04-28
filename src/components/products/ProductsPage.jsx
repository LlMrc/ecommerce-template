import css from './ProductsPage.module.css'
import plane from '../../assets/plane.png'
import { useState } from 'react'
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'


const ProductsPage = () => {
 const [menuProducts, setMenuPrducts] = useState(ProductsData)


 const filter = (type)=>{
  setMenuPrducts(ProductsData.filter((item)=>item.type === type))
 }
 const [parent] = useAutoAnimate()
  return (
   <div className={css.container}>
       <img src={plane} alt="" />
       <h1>Our featured products</h1>

       <div className={css.product}>
        <ul className={css.menu}>
          <li onClick={()=>setMenuPrducts(ProductsData)}>All</li>
          <li onClick={()=>filter("skin care")}>Skin care</li>
          <li onClick={()=>filter('conditioner')}>Conditioners</li>
          <li onClick={()=>filter('foundation')}>Foundation</li>
        </ul>

        <div className={css.list} ref={parent}>
            {  
              menuProducts.map((product, i)=>(
                // eslint-disable-next-line react/jsx-key
                <div className={css.products} key={i}>
                         <div className='left-s'>
                          <div className='name'>
                            <span>{product.name}</span>
                            <span>{product.detail}</span>
                            </div>
                            
                        
                            <span>{product.price}$</span>
                            <div>Shop now</div>
                         
                          </div>

                          <img src={product.img}alt="" className='img-p'/>
                         </div>
              
              ))
                
            }
        </div>
       </div>
   </div>
  )
}

export default ProductsPage