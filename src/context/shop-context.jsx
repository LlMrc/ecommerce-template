import React, { createContext, useState } from "react";
import { ProductsData } from "../data/products";

export const ShopContext = createContext(null);

const getDefaultCard = () => {
  let cart = {};
  for (let i = 1; i < ProductsData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [shopItem, setShopItem] = useState(getDefaultCard());
  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [search, setSearch] = useState("");

  // get total Amount

  const getTotalAmount = () => {
    let total = 0;
    for (const item in shopItem) {
      if (shopItem[item] > 0) {
        let itemInfo = ProductsData.find(
          (product) => product.id === Number(item)
        );
        total += shopItem[item] * itemInfo.price;
      }
    }
    return total;
  };

  // Handle Drawer
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  //remove item
  const removeFromCard = (itemId) => {
    setShopItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //Add item
  const addToCart = (itemId) => {
    setShopItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const contextValue = {
    shopItem,
    isOpen,
    search,
    isFocus,
    setIsFocus,
    setSearch,
    toggle,
    removeFromCard,
    getTotalAmount,
    addToCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
