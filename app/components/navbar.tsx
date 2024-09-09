// components/Navbar.tsx
"use client"; // Mark this component as client-side

import React, { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi"; // Icons
import { useRouter } from "next/navigation";
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:opacity-75 transition-opacity duration-200">
            <Image
            src={require("../../public/logo2.svg")}
            alt="logo"
           width={200}     
           height={200}
           className="rounded-full w-15 h-10"
            ></Image>
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <Link href="/#shop" className="hover:text-gray-700">
            Shop
          </Link>
          <Link href="/#about" className="hover:text-gray-700">
            About
          </Link>
          <Link href="/#contact" className="hover:text-gray-700">
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search products..."
            className="border px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Cart and User Icons */}
        <div className="flex items-center space-x-4">
          {/* Shopping Cart */}
          <button
            className="relative"
            onClick={() => router.push("/cart")}
            aria-label="Shopping Cart"
          >
            <FiShoppingCart className="w-6 h-6" />
            {/* Cart item count */}
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </button>

          {/* User Profile */}
          <button
            onClick={() => router.push("/profile")}
            className="hidden md:block"
            aria-label="User Profile"
          >
            <FiUser className="w-6 h-6" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Mobile Menu"
          >
            {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <Link href="/#shop" className="hover:text-gray-700">
              Shop
            </Link>
            <Link href="/#about" className="hover:text-gray-700">
              About
            </Link>
            <Link href="/#contact" className="hover:text-gray-700">
              Contact
            </Link>

            {/* Search bar in mobile menu */}
            <input
              type="text"
              placeholder="Search products..."
              className="border px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
