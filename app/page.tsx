import React from 'react'
import Hero from './components/hero'
import ProductPage from './components/[id]'
import ShopPage from './components/shop'
import AboutPage from './components/about'
import ContactPage from './components/contact'
import CartPage from './components/cart'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutPage />
      <CartPage />
      {/* <ProductPage /> */}
      <ShopPage />
      <ContactPage />
    </div>
  )
}

export default HomePage