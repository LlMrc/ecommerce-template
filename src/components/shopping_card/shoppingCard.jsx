import React, { useContext } from "react";
import style from "./shoppingCard.module.css";
import { ShopContext } from "../../context/shop-context";

const ShoppingCard = (props) => {
  const { id, price, detail, name, img } = props.data;
  const { shopItem, addToCart, removeFromCard } = useContext(ShopContext);
  return (
    <div className={style.wrapper}>
      <img src={img} alt={name} width={70} height={90} />
      <div className={style.description}>
        <div>{detail}</div>
        <div>${price}</div>
        <div className={style.btngroup}>
          <div onClick={() => removeFromCard(id)} className={style.decrease}>
            -
          </div>

          <h6>{shopItem[id]}</h6>
          <div onClick={() => addToCart(id)} className={style.increase}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
