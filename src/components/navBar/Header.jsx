import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";

import { NavLink } from "react-router-dom";
import { useState } from "react";





const Header = () => {

 const [menuOpen, setMenuOpen] = useState(true)

  return (
    <div className={css.container}>

      <div className={css.leftSide}>

        <div  className={css.logo}>
         <img src={logo} alt="logo" />
         <span>Amazon</span>
        </div>

        <div className={css.menuBtn} onClick={()=> {
             setMenuOpen(!menuOpen)
        }}>
         <GoThreeBars size={24} />
        </div>

      </div>

    

      <div id={css.right} className={menuOpen ? `${css.open}` : ``}>
       
          <nav>
             <NavLink   to="/">Home</NavLink>
               <NavLink to="/new">New</NavLink>  
             <NavLink to="/contact">Contact</NavLink>     
            <NavLink to="/about">About us</NavLink>      
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
