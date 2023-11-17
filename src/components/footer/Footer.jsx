import css from "./Footer.module.css";
import { Link } from "react-router-dom";

import {
  RiLoginCircleFill,
  RiFacebookCircleLine,
  RiTwitterLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className={css.wrapper}>
      <hr />
      <h6>Footer descrption</h6>
      <div className={css.cfooter}>
        <div className={css.block}>
          <h4>Images source</h4>
          <ul>
            <li>
              <a href="https://www.freepik.com/free-psd/bag-left-side_26050654.htm#query=shopping%20bag&position=48&from_view=search&track=ais&uuid=10646739-0d21-4454-9a47-79b298aca889">
                Image by qalebstudio
              </a>{" "}
              on Freepik
            </li>
            <li>
              <a href="https://www.freepik.com/free-photo/cheerful-satisfied-customer-holding-shopping-bags_8132438.htm#page=2&query=shopping%20bag&position=3&from_view=search&track=ais&uuid=fdc34a00-edf6-4527-9ee8-b8ee4af7d2c5">
                Image by pch.vector
              </a>{" "}
              on Freepik
            </li>
            <li>
              <a href="https://www.freepik.com/free-photo/stunned-afro-american-woman-looks-with-scared-speechless-expression_13086705.htm">
                Image by wayhomestudio
              </a>{" "}
              on Freepik
            </li>
            <li>
              <a href="https://storyset.com/online">
                Online illustrations by Storyset
              </a>
            </li>
            <li>
              <a href="https://www.pexels.com/photo/gel-pen-on-ruled-paper-64779/">
                {" "}
                Photo by Free Photos.cc:
              </a>
            </li>
            <li>
              <a href="https://www.pexels.com/photo/photo-of-people-near-wooden-table-3184418/">
                Photo by pexels
              </a>
            </li>
          </ul>
        </div>
        <div className={css.block}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          laudantium corrupti laborum illo incidunt velit consequatur aut,
          maxime inventore.
        </div>
        <div className={css.social}>
          <Link to="https://www.facebook.com/LouisMrcVops">
            {" "}
            <RiFacebookCircleLine size={30} />
          </Link>
          <Link to="https://github.com/LlMrc">
            {" "}
            <RiGithubFill size={30} />
          </Link>
          <Link to="https://twitter.com/LouisMcLeonard1">
            <RiTwitterLine size={30} />
          </Link>
          <Link to="">
            {" "}
            <RiLoginCircleFill size={30} />
          </Link>
          <Link to="https://www.linkedin.com/in/louis-marc-leonard-a57a13192/">
            {" "}
            <RiLinkedinBoxFill size={30} />
          </Link>
        </div>
      </div>
      <p>
        Copyright <span>© 2023 Design by Masha+. </span>
      </p>
    </div>
  );
};

export default Footer;
