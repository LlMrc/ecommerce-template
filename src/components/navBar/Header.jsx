import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";

import { NavLink, Link} from "react-router-dom";
import { useState } from "react";
import Tooltip from "../tootlip/Tooltip";
import { m } from "framer-motion";





const Header = () => {
 




 const [menuOpen, setMenuOpen] = useState(true)

  return (
    <div className={css.container}>

      <div className={css.leftSide}>

        <Tooltip text={'Shop on Amazon store!'}>

          <Link to="https://www.amazon.com/">
          <div  className={css.logo}>
         <img src={logo} alt="logo" />
         <span>Amazon</span>
        </div>
        </Link>
       
        </Tooltip>

       

        <div className={css.menuBtn} onClick={()=> {
             setMenuOpen(!menuOpen)
             console.log(menuOpen)
        }}>
         <GoThreeBars size={24} />
        </div>

      </div>

    

      <div id={css.right} className={menuOpen ? `${css.open}` : ``}>
       
          <nav>
             <NavLink   to="/" onClick={()=> {
             setMenuOpen(!menuOpen)
        }}>Home</NavLink >
               <NavLink to="/new" onClick={()=> {
             setMenuOpen(!menuOpen)
        }} >New</NavLink>  
             <NavLink to="/contact" onClick={()=> {
             setMenuOpen(!menuOpen)
        }}>Contact</NavLink>     
            <NavLink to="/about" onClick={()=> {
             setMenuOpen(!menuOpen)
        }}>About us</NavLink>      
          </nav>
         

         <div className={css.rightSide} >
        <input type="text" placeholder="search" className={css.search} />
        <RiShoppingCart2Line className={css.cart} />
         </div>
      </div>

    </div>
  );
};

export default Header;
