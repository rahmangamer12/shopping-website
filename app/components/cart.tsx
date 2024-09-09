"use client"
// pages/cart.tsx
import React, { useState } from 'react';
import Image from 'next/image';

const CartPage = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'Brushed Raglan Sweatshirt',
      price: 195,
      quantity: 1,
      image: '/product1.png',
    },
    {
      id: '2',
      title: 'Cameryn Sash Tie Dress',
      price: 545,
      quantity: 2,
      image: '/product2.png',
    },
  ]);

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Update quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-800">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="mt-6 text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Cart Items */}
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border p-4 rounded-lg shadow-lg mb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="border p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">Cart Summary</h2>
              <div className="mt-4">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-lg font-semibold">${calculateTotalPrice()}</p>
              </div>

              {/* Redirect to external website like Amazon */}
              <a
                href="https://www.amazon.com" // Replace with external URL
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-500 transition-all"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
