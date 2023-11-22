import css from "./ProductsPage.module.css";
import plane from "../../assets/plane.png";
import { useState, useContext } from "react";
import { ProductsData } from "../../data/products";
import { ShopContext } from "../../context/shop-context";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const ProductsPage = () => {
  const [menuProducts, setMenuPrducts] = useState(ProductsData);
  const { shopItem, addToCart, search } = useContext(ShopContext);

  const filter = (type) => {
    setMenuPrducts(ProductsData.filter((item) => item.type === type));
  };
  const [parent] = useAutoAnimate();

  return (
    <div className={css.container}>
      <img src={plane} alt="plane" />
      <h1>Our featured products</h1>

      <div className={css.product}>
        <ul className={css.menu}>
          <li onClick={() => setMenuPrducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundation</li>
        </ul>

        <div className={css.list} ref={parent}>
          {menuProducts.map((product) => {
            const itemsAmount = shopItem[product.id];
            return (
              // eslint-disable-next-line react/jsx-key
              <div className={css.products} key={product.id}>
                <div className="left-s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>

                  <span>{product.price}$</span>
                  <div onClick={() => addToCart(product.id)}>
                    Add to card{itemsAmount > 0 && <> ({itemsAmount})</>}
                  </div>
                </div>

                <img src={product.img} alt={product.name} className="img-p" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
