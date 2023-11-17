import React, { useContext } from "react";
import style from "./shopping.module.css";

import { ShopContext } from "../../context/shop-context";
import { ProductsData } from "../../data/products";
import ShoppingCard from "../shopping_card/shoppingCard";

const ShoppingList = () => {
  const { shopItem, isOpen, toggle, getTotalAmount } = useContext(ShopContext);

  const totalAmount = getTotalAmount();

  return (
    <div id={isOpen ? "" : style.open} className={style.wrapper}>
      <p onClick={() => toggle()}>x</p>

      <div className={style.itemCard}>
        {ProductsData.map((product) => {
          if (shopItem[product.id] !== 0) {
            return (
              <div key={product.id}>
                <ShoppingCard data={product} />
              </div>
            );
          }
        })}
      </div>
      <div className={style.footer}>
        <div className={style.total}>
          <span>Total</span>
          <span>${totalAmount}</span>
        </div>
        <div className={style.buynow}>
          <button>Continue Shopping</button>
          <button>Sheckout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
