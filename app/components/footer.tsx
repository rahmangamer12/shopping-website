// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Company Information */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Company Logo" width={150} height={40} />
          </Link>
          <p className="text-gray-400">
            Your shopping destination for high-quality products, designed with love and care.
          </p>
          <p className="text-gray-500">© 2024 YourCompany. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shopping" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-bold text-white">Customer Support</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/support-center" className="hover:underline">
                Support Center
              </Link>
            </li>
            <li>
              <Link href="/shipping-policy" className="hover:underline">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link href="/return-policy" className="hover:underline">
                Return Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-bold text-white">Subscribe to Our Newsletter</h3>
          <p className="mt-2 text-gray-400">
            Get the latest updates and offers directly in your inbox.
          </p>
          <form className="mt-4 flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <h4 className="text-lg font-bold text-white">Follow Us</h4>
        <div className="mt-4 flex justify-center space-x-6">
          <Link href="https://www.linkedin.com/in/muhammadahmadjawad/" passHref className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://github.com/muhammadahmad1857" passHref className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.youtube.com/@code-with-ahmad2009" passHref className="text-gray-400 hover:text-white transition-colors">
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
