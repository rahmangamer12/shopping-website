// pages/shop.tsx
import React from 'react';
import ProductCard from '../components/productcard'; // Import the reusable product card component

const ShopPage = () => {
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
    {
      id: '4',
      title: 'Flex Push Button Bomber',
      price: '$299',
      image: '/flexpush.jpeg',
    },
    {
      id: '5',
      title: 'Muscle Fit T-Shirt',
      price: '$45',
      image: '/muscle.jpeg',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10" id="shop">
      <h1 className="text-4xl font-bold text-gray-800 text-center">Shop Our Products</h1>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
