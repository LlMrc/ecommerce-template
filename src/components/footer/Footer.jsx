import css from "./Footer.module.css";
import logo from "../../assets/logo.png";
import {
  // FiInbox,
  // FaPhoneAlt,
  FaLink,
  FaUsers,
} from "react-icons/fa";

import { RiLoginCircleFill } from "react-icons/ri";

import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={logo} alt="" />
          <span>Amazon</span>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Contact us</span>
            <span className={css.pngLine}>
              <GoLocation className={css.icon} />
              <span>111 north avenue Orlando, FL 32001</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Account</span>
            <span className={css.pngLine}>
              <RiLoginCircleFill className={css.icon} />
              <span>Sign in</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.details}>
            <span>Ressource</span>
            <span className={css.pngLine}>
              <FaLink className={css.icon} />
              <span>Security, privacy $ terms</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Campaingn</span>
            <span className={css.pngLine}>
              <FaUsers className={css.icon} />
              <a href="/about"></a>
              <p>About us</p>
            </span>
          </div>
        </div>

        <div className={css.copyRight}>
          <span>Copy right 2023 by Mashpa</span>
          <span>All right reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
