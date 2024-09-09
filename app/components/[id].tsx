// pages/product/[id].tsx
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from './CartContext'; // Import CartContext

const ProductPage = () => {
    const { addToCart }:any = useContext(CartContext)!; // Add '!' to assert that it's not undefined

  // Simulating product data
  const product = {
    id: '1',
    title: 'Brushed Raglan Sweatshirt',
    price: '$195',
    description:
      'This soft and comfortable brushed raglan sweatshirt is perfect for any casual day. With a modern fit and premium quality fabric, it’s designed to keep you warm and stylish.',
    image: '/product1.png',
  };

  const relatedProducts = [
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

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 md:pl-10 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="mt-6">
            <span className="text-2xl font-semibold text-gray-900">{product.price}</span>
          </div>
          <button
            onClick={handleAddToCart} // Add to cart when clicked
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="border p-4 rounded-lg">
              <Link href={`/product/${relatedProduct.id}`}>
                <Link href={""}>
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-700">{relatedProduct.title}</h3>
                  <p className="text-gray-500">{relatedProduct.price}</p>
                </Link>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
