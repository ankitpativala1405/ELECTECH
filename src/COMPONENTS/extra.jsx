import React, { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import {
  FiHeart,
  FiShoppingCart,
  FiSearch,
} from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";

const Header = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleAccountDropdown = () => {
    if (showDropdown) {
      setIsAccountOpen(false);
      setTimeout(() => setShowDropdown(false), 200); // delay for fade-out
    } else {
      setShowDropdown(true);
      setTimeout(() => setIsAccountOpen(true), 10); // delay to trigger transition
    }
  };

  return (
    <>
      {/* Top Bar */}
      <header className="bg-[#171d27]">
        <div className="container mx-auto p-3">
          <div className="flex flex-col">
            <div className="flex justify-around items-center">
              <p className="font-semibold text-white">
                Tell a friend about Electech Electronics & get 30% off your next order.
              </p>
              <div className="flex justify-between items-center gap-5 text-white font-semibold">
                <div className="flex items-center gap-1">
                  <MdOutlineEmail />
                  <div className="flex items-center gap-5">
                    <p>ankitj1405@gmail.com</p>
                    <span className="text-gray-600">|</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <IoCallSharp />
                  <div className="flex items-center gap-5">
                    <p>+91 9723665181</p>
                    <span className="text-gray-600">|</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <select defaultValue="English" className="bg-[#171d27] text-white">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="German">German</option>
                    <option value="Sanskrit">Sanskrit</option>
                  </select>
                  <span className="text-gray-600">|</span>
                </div>
                <div className="flex items-center gap-1.5">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <hr className="border-t border-gray-600 w-full" />

      {/* Main Header */}
      <header className="bg-[#171d27] py-4 text-white">
        <div className="container mx-auto px-6 flex items-center justify-evenly">
          {/* Logo */}
          <img src="/Icons/asset 2.svg" alt="Logo" className="h-10" />

          {/* Search Bar */}
          <div className="flex flex-1 max-w-2xl mx-6 rounded overflow-hidden bg-white text-black">
            <div className="flex items-center px-4 py-3 border-r max-w-[150px] text-sm font-semibold text-[#171d27]">
              <select className="w-full bg-transparent outline-none">
                <option value="0">All Categories</option>
                <option value="our-store">Our Store</option>
                <option value="tv-speaker">TV & Speaker</option>
                <option value="android-tv">&nbsp;&nbsp;&nbsp;Android TV</option>
                <option value="game-controller">&nbsp;&nbsp;&nbsp;Game Controller</option>
                <option value="control-speakers">&nbsp;&nbsp;&nbsp;Control Speakers</option>
                <option value="earbuds-bose">&nbsp;&nbsp;&nbsp;Earbuds Bose</option>
                <option value="smart-devices">Smart Devices</option>
                <option value="wireless-printer">&nbsp;&nbsp;&nbsp;Wireless Printer</option>
                <option value="smart-speakers">&nbsp;&nbsp;&nbsp;Smart Speakers</option>
                <option value="android-tablet">&nbsp;&nbsp;&nbsp;Android Tablet</option>
                <option value="smart-watches">&nbsp;&nbsp;&nbsp;Smart Watches</option>
                <option value="digital-watches">&nbsp;&nbsp;&nbsp;Digital Watches</option>
                <option value="cameras-2">Cameras</option>
                <option value="digital-camera">&nbsp;&nbsp;&nbsp;Digital Camera</option>
                <option value="ip-camera">&nbsp;&nbsp;&nbsp;IP camera</option>
                <option value="point-and-shoot-camera">&nbsp;&nbsp;&nbsp;Point And Shoot Camera</option>
                <option value="phones-2">Phones</option>
                <option value="basic-phones">&nbsp;&nbsp;&nbsp;Basic Phones</option>
                <option value="feature-phones">&nbsp;&nbsp;&nbsp;Feature Phones</option>
                <option value="smart-phones-phones-2">&nbsp;&nbsp;&nbsp;Smart Phones</option>
                <option value="laptop-computers-2">Laptop & Computers</option>
                <option value="ultraportable-laptops">&nbsp;&nbsp;&nbsp;Ultraportable Laptops</option>
                <option value="apple-ipad">&nbsp;&nbsp;&nbsp;Apple Ipad</option>
                <option value="convertible-laptops">&nbsp;&nbsp;&nbsp;Convertible Laptops</option>
                <option value="personal-computers">&nbsp;&nbsp;&nbsp;Personal Computers</option>
                <option value="chargers-cables-2">Chargers & Cables</option>
                <option value="bettery-chargers">&nbsp;&nbsp;&nbsp;Bettery Chargers</option>
                <option value="usb-type-cable">&nbsp;&nbsp;&nbsp;USB Type Cable</option>
                <option value="adapter-plug">&nbsp;&nbsp;&nbsp;Adapter Plug</option>
                <option value="headphones">&nbsp;&nbsp;&nbsp;Headphones</option>
                <option value="special-offer">Special Offer</option>
              </select>
            </div>
            <input type="text" placeholder="Search Product Here..." className="flex-1 px-4 outline-none" />
            <button className="bg-[#1e73e8] px-4 flex items-center justify-center text-white">
              <FiSearch size={18} />
            </button>
          </div>

          {/* Icons Area */}
          <div className="flex items-center space-x-6">
            {/* Account */}
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleAccountDropdown}
              >
                <FaRegUser size={30} />
                <div className="text-sm leading-tight">
                  <p className="font-semibold text-[1rem]">Account</p>
                  <p className="text-xs font-semibold text-gray-300 text-[1rem]">Log in</p>
                </div>
              </div>

              {/* Dropdown */}
              {showDropdown && (
                <div
                  className={`absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50 transition-all duration-200 ${
                    isAccountOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <ul className="text-sm font-medium">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Register</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Orders</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <div className="relative flex items-center">
              <FiHeart size={30} />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {0}
              </span>
            </div>

            {/* Repeat Orders */}
            <div className="relative flex items-center">
              <BsArrowRepeat size={35} />
              <span className="absolute -top-1 -right-2 bg-blue-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {5}
              </span>
            </div>

            {/* Cart */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <FiShoppingCart size={30} />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {10}
                </span>
              </div>
              <div className="text-sm leading-tight ml-[2px]">
                <p className="font-semibold text-[0.88rem]">My Cart</p>
                <p className="text-xs font-semibold text-[0.88rem] text-gray-300">
                  $0.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
