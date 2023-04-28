import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";





const Header = () => {

  const [showMenu, setShowMenu]= useState(true)
  const toggleMenu = ()=>{
    setShowMenu((showMenu)=> !showMenu)
  }

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="logo" />
        <span>Amazon</span>
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>

          <ul className={css.menu} style={{display:showMenu? 'inherit' : 'none'}}>
            <li>Collection</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
  
        <input type="text" placeholder="search" className={css.search} />
        <RiShoppingCart2Line className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
