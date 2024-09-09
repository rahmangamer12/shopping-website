"use client"
import { createContext, useState, ReactNode } from 'react';

interface Product {
  id: string;
  title: string;
  price: string;
  quantity: number;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined); // Create the context

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};