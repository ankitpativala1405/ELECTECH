"use client";

import React from "react";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail, TfiPrinter } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="bg-[#141d2f] text-white pt-10 relative">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-9 border-b border-gray-700 pb-10">
        <div>
          <h3 className="font-semibold mb-2 border-b-2 border-blue-600 inline-block pb-1">
            Our Information
          </h3>
          <p className="text-sm leading-relaxed mt-3 max-w-[300px]">
            Welcome to our store, where we pride ourselves on providing
            exceptional products and unparalleled customer service. Our store is
            a haven for those who appreciate quality, style, and innovation.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-2 border-b-2 border-blue-600 inline-block pb-1">
            Products
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:underline">Prices Drop</li>
            <li className="cursor-pointer hover:underline">New Products</li>
            <li className="cursor-pointer hover:underline">Best Sellers</li>
            <li className="cursor-pointer hover:underline">Contact Us</li>
            <li className="cursor-pointer hover:underline">Sitemap</li>
            <li className="cursor-pointer hover:underline">Accessories</li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="font-semibold mb-2 border-b-2 border-blue-600 inline-block pb-1">
            Our Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:underline">Delivery</li>
            <li className="cursor-pointer hover:underline">Legal Notice</li>
            <li className="cursor-pointer hover:underline">
              Terms And Conditions Of Use
            </li>
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Secure Payment</li>
            <li className="cursor-pointer hover:underline">Stores</li>
          </ul>
        </div>

        {/* Your Account */}
        <div>
          <h3 className="font-semibold mb-2 border-b-2 border-blue-600 inline-block pb-1">
            Your Account
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:underline">Order Tracking</li>
            <li className="cursor-pointer hover:underline">Sign In</li>
            <li className="cursor-pointer hover:underline">Create Account</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-2 border-b-2 border-blue-600 inline-block pb-1">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <IoLocationOutline />
              <span>
                Demo Store
                <br />
                507-Union Trade Center
                <br />
                France
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <TfiEmail />
              <span>demo@example.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoCallOutline />
              <span>(+91) 9876-543-210</span>
            </li>
            <li className="flex items-center space-x-2">
              <TfiPrinter />
              <span>654321</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-gray-700">
        <span>© 2025 - Ecommerce software by PrestaShop™</span>
        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 border border-white rounded-full hover:bg-blue-600"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M22 12.07C22 6.52 17.52 2 12 2S2 6.52 2 12.07c0 4.755 3.438 8.69 7.94 9.38v-6.62H7.478v-2.76H9.94v-2.1c0-2.47 1.492-3.83 3.77-3.83 1.094 0 2.238.196 2.238.196v2.48h-1.27c-1.252 0-1.645.78-1.645 1.58v1.67h2.795l-.447 2.76h-2.35v6.62c4.5-.69 7.94-4.62 7.94-9.38z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X"
              className="p-2 border border-white rounded-full hover:bg-blue-600"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="p-2 border border-white rounded-full hover:bg-blue-600"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1.66 12.87c-.26.76-1.5 4.47-1.69 4.63-.28.25-.53.12-.62-.18-.12-.4-.44-1.65-.57-2.5a6.06 6.06 0 012.11-7.15c.78-.66 1.12-1.21 1.12-1.84 0-2.36-4.43-1.4-4.43 2 .01 2.76 1.99 4.77 5.15 4.77a4.8 4.8 0 003.73-1.58l-1.54-1.45a3.52 3.52 0 01-2.69 1.28c-1.16 0-1.92-.62-1.55-1.98.3-.64 1.05-1.66 1.05-2.24 0-.83-1.11-1.14-1.88-.67a5.4 5.4 0 00-1.8 2.94c-.48 1.67.46 3.5 2.04 3.5 2.43 0 4.18-3.62 3.32-6.71-1.49-5.61-11.5-4.68-11.5 2.4 0 2.98 2.21 5.45 5.24 5.45a6.23 6.23 0 004.14-1.93l-1.13-1.16z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 border border-white rounded-full hover:bg-blue-600"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm8 3a2 2 0 110 4 2 2 0 010-4zm-3 3a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            </a>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg"
              alt="American Express"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/MasterCard_Logo.svg"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="Paypal"
              className="h-6"
            />
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition ease-in-out duration-300"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
