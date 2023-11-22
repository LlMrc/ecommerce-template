import React from "react";
import style from "./filter.module.css";
import { ProductsData } from "../../data/products";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const FilterList = () => {
  const { search, isFocus } = useContext(ShopContext);

  return (
    <div>
      <table className={isFocus ? style.wrapper : style.hideTable}>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {ProductsData.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          }).map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} width={40} />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterList;
