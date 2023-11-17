import React, { useContext } from "react";
import Hero from "../components/hero/Hero";
import Slider from "../components/slider/Slider";
import Virtual from "../components/virtual/Virtual";
import ProductsPage from "../components/products/ProductsPage";
import Testimonial from "../components/testimonial/Testimonial";
import ShoppingList from "../components/shopping/shopping_list";
import style from "./home.module.css";
import { ShopContext } from "../context/shop-context";

const Home = () => {
  const { isOpen, toggle } = useContext(ShopContext);
  return (
    <>
      <div
        onClick={() => {
          isOpen && toggle();
        }}
        className={isOpen ? style.home : ""}
      >
        <Hero />
        <Slider />
        <Virtual />
        <ProductsPage />
        <Testimonial />
      </div>

      <ShoppingList />
    </>
  );
};

export default Home;
