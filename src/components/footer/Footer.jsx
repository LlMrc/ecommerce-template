import css from "./Footer.module.css";
import { Link } from "react-router-dom";


import { RiLoginCircleFill, RiFacebookCircleLine, RiTwitterLine, RiGithubFill, RiLinkedinBoxFill} from "react-icons/ri";



const Footer = () => {
  return (
    <div className={css.wrapper}>
      <hr/>
      <h6> Footer descrption</h6>
<div className={css.cfooter}>
  <div className={css.block}>
 Ratione maxime incidunt nihil impedit ab enim repudiandae fugit, possimus libero officiis id cumque placeat illo, explicabo ad, eum quasi voluptatum ullam.
  </div>
  <div className={css.block}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium corrupti laborum illo incidunt velit consequatur aut, maxime inventore temporibus exercitationem ipsam perspiciatis quasi modi doloremque fugiat aliquid enim assumenda.
  </div>
  <div className={css.social}>
    <Link to="https://www.facebook.com/LouisMrcVops">  <RiFacebookCircleLine size={30} /></Link>
    <Link to="https://github.com/LlMrc">  <RiGithubFill size={30}/></Link>
    <Link to="https://twitter.com/LouisMcLeonard1"><RiTwitterLine size={30}/></Link>
     <Link to="">  <RiLoginCircleFill size={30}/></Link>
     <Link to="https://www.linkedin.com/in/louis-marc-leonard-a57a13192/">  <RiLinkedinBoxFill size={30}/></Link>
     
    
  </div>
</div>
<p>Copyright <span>© 2023  Design by Masha+ </span>
</p>
</div>
  );
};

export default Footer;
