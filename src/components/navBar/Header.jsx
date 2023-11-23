import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";
import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import Tooltip from "../tootlip/Tooltip";
import { ShopContext } from "../../context/shop-context";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const { toggle, getTotalAmount, setSearch, setIsFocus } =
    useContext(ShopContext);

  const totalAmount = getTotalAmount();

  return (
    <div className={css.container}>
      <div className={css.leftSide}>
        <Tooltip text={"Shop on Amazon store!"}>
          <Link to="https://www.amazon.com/">
            <div className={css.logo}>
              <img src={logo} alt="logo" />
              <span>Amazon</span>
            </div>
          </Link>
        </Tooltip>

        <div className={css.menuBtn}>
          <RiShoppingCart2Line
            size={24}
            className={css.cart}
            onClick={() => {
              totalAmount > 0 && toggle();
            }}
          />
          <GoThreeBars size={24} onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>

      <div id={css.right} className={menuOpen ? `${css.open}` : ``}>
        <nav>
          <NavLink
            to="/"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            About
          </NavLink>
          <input
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => setSearch(e.target.value)}
            label="Password"
            placeholder=" search"
          ></input>
        </nav>

        <div className={css.rightSide}>
          <RiShoppingCart2Line
            size={24}
            className={css.cart}
            onClick={() => {
              setMenuOpen(true);
              totalAmount > 0 && toggle();
            }}
          />
          {totalAmount > 0 && <span />}
        </div>
      </div>
    </div>
  );
};

export default Header;
