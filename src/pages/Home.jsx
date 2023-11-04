import React from 'react'
import Hero from '../components/hero/Hero.jsx'
import Slider from '../components/slider/Slider'
import Virtual from '../components/virtual/Virtual'
import ProductsPage from '../components/products/ProductsPage'
import Testimonial from '../components/testimonial/Testimonial'



const Home = () => {
  return (
    <>
    <Hero />
    <Slider />
    <Virtual />
    <ProductsPage />
    <Testimonial />
    </>
  )
}

export default Home