"use client";
// components/Hero.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from './productcard'; // Ensure ProductCard is correctly imported

const Hero = () => {
  const [showProducts, setShowProducts] = useState(false);

  // Sample product data
  const products = [
    {
      id: '1',
      title: 'Brushed Raglan Sweatshirt',
      price: '$195',
      image: '/product1.png',
    },
    {
      id: '2',
      title: 'Cameryn Sash Tie Dress',
      price: '$545',
      image: '/product2.png',
    },
    {
      id: '3',
      title: 'Flex Sweatshirt',
      price: '$175',
      image: '/product3.png',
    },
  ];

  const handleStartShopping = () => {
    setShowProducts(true); // Show product section on click
  };

  return (
    <section className="relative bg-gray-100 py-20 lg:py-40">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        {/* Text Section */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Discover the Latest Trends in Fashion
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Upgrade your wardrobe with the finest styles and exclusive discounts. Shop now and enjoy free shipping on all orders.
          </p>
          <button
            onClick={handleStartShopping}
            className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-blue-500 transition-colors"
          >
            Start Shopping
          </button>
        </div>

        {/* Image Section */}
        <div className="relative hidden md:block">
          <Image
            src="/model.svg" // Correct image path
            alt="Fashion models"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Background Image (for mobile devices) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 md:hidden"
        style={{ backgroundImage: 'url(/hero-shopping.png)' }}
      ></div>

      {/* Product Section (Visible on button click) */}
      {showProducts && (
        <div
          className={`container mx-auto mt-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 transform ${
            showProducts ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
