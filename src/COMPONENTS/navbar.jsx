import React from "react";
import { VscListFlat } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const NavbarHeader = () => {
  const categories = [
    { label: "Gadgets", src: "/Images/cat-1.jpg" },
    { label: "Smart Watch", src: "/Images/cat-2.jpg" },
    { label: "Headphone", src: "/Images/cat-3.jpg" },
    { label: "Smart Phones", src: "/Images/cat-4.jpg" },
    { label: "MacBook", src: "/Images/cat-5.jpg" },
    { label: "Earbuds Bose", src: "/Images/cat-6.jpg" },
    { label: "Smart Speakers", src: "/Images/cat-7.jpg" },
    { label: "Accessories", src: "/Images/cat-8.jpg" },
  ];
  return (
    <section className="bg-[#146cda]">
      <div className="container mx-auto p-3">
        <nav className="flex justify-center">
          <div className="flex items-center gap-[45px] py-1">
            <VscListFlat size={25} className="text-white font-black" />
            <div className="relative group">
              <p className="bg-[#146cda] text-white flex items-center gap-[5px] font-bold uppercase cursor-pointer">
                Browse All Category <IoIosArrowDown />
              </p>

              <div className="absolute left-[-20px] top-full mt-4 w-65 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-1000 z-50">
                <ul className="text-black py-2 text-sm font-medium space-y-1">
                  <li className="px-4 py-1 cursor-pointer hover:bg-gray-100">
                    <div className="relative w-full">
                      <p className="text-sm font-medium">Android TV</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px]"></div>
                    </div>
                  </li>
                  <li className="px-4 py-1 cursor-pointer hover:bg-gray-100">
                    <div className="relative w-full">
                      <p className="text-sm font-medium">Apple Ipad</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px]"></div>
                    </div>
                  </li>
                  <li className="px-4 py-1 cursor-pointer hover:bg-gray-100">
                    <div className="relative w-full">
                      <p className="text-sm font-medium">Accessories</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px]"></div>
                    </div>
                  </li>
                  <li className="px-4 py-1 cursor-pointer hover:bg-gray-100">
                    <div className="relative w-full">
                      <p className="text-sm font-medium">Game Controller</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px]"></div>
                    </div>
                  </li>
                  <li className="px-4 py-1 cursor-pointer hover:bg-gray-100">
                    <div className="relative w-full">
                      <p className="text-sm font-medium">Headphone</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px]"></div>
                    </div>
                  </li>
                  <li className="px-4 py-1 cursor-pointer hover:bg-gray-100">
                    <div className="relative w-full">
                      <p className="text-sm font-medium">Smart Watch</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px]"></div>
                    </div>
                  </li>
                  <li className="px-4 py-1 cursor-pointer hover:bg-gray-100">
                    <div className="relative w-full">
                      <p className="text-sm font-medium">Convertible Laptops</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px]"></div>
                    </div>
                  </li>
                  <li className="px-4 py-1 cursor-pointer hover:bg-gray-100">
                    <div className="relative w-full">
                      <p className="text-sm font-medium">MacBook</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px]"></div>
                    </div>
                  </li>
                  <li className="px-4 mb-2 hover:bg-gray-100 cursor-pointer">
                    Adapter Plug
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <p className="flex items-center gap-[5px] text-white font-bold uppercase cursor-pointer">
                Phones
                <IoIosArrowDown />
              </p>

              <div className="absolute left-[-370px] top-full mt-4 w-[1370px] bg-[#ededed] shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-2000 z-50">
                <div className="flex justify-around gap-[20px]">
                  <div className="">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="font-bold mb-4 uppercase">
                        Smart Devices
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Wireless Printer</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Game Controller</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Headphone</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Smart Phones</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Smart Watch</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Speakers</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Personal Computer</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">MacBook</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="font-bold mb-4 uppercase">
                        Laptop & Computers
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="">Apple Ipad</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="">Smart Watch</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="">Basic Phones</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="">Accessories</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="">Gadgets</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="">Feature Phones</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="">Convertible Laptops</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="">Ultraportable Laptops</a>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <h4 className="font-bold mb-2">Featured Products</h4>
                    <div className="space-y-2 flex flex-col text-sm text-gray-700 gap-4">
                      <div className="flex justify-between gap-4">
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src="/Images/asset-7.jpeg"
                      alt="banner"
                      className="w-full h-[260px] object-cover rounded-md"
                    />
                    <div className="absolute top-5 left-4 text-black">
                      <p className="font-semibold text-md">Weekend Discount</p>
                      <p className="font-bold text-xl">Latest Phones</p>
                      <p className="text-[#146cda] font-bold text-md mt-1">
                        {" "}
                        From $199.00{" "}
                      </p>
                      <button className="mt-2 text-md underline">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <p className="flex items-center gap-[5px] text-white font-bold uppercase cursor-pointer">
                Categories
                <IoIosArrowDown />
              </p>

              <div className="absolute left-[-510px] top-full mt-4 w-[1370px] bg-[#ededed] shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-2000 z-50">
                <div className="flex justify-around gap-[20px]">
                  <div className="">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="font-bold mb-4 uppercase">
                        Chargers & Cables
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Adapter Plug</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Bettery Chargers</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">USB Type Cable</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">USB-C Charger</a>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="font-bold mb-4 mt-4 uppercase">
                        Products
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Best Sellers</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">New Products</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Prices Drop</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Sitemap</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="font-bold mb-4 uppercase">TV & Speaker</li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Home Theatre Systems</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Party Speakers</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Android TV</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">TV & Audio Accessories</a>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="font-bold mb-4 mt-4 uppercase">Pages</li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Legal Notice</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Contact Us</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Secure Payment</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Delivery</a>
                      </li>
                    </ul>
                  </div>

                  {/* <div className="text-center">
                    <h4 className="font-bold mb-2">Featured Products</h4>
                    <div className="space-y-2 flex flex-col text-sm text-gray-700 gap-4">
                      <div className="flex justify-between gap-4">
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="grid grid-cols-4 gap-y-8 gap-x-4 justify-items-center py-10">
                    {categories.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-md">
                          <Image
                            src={item.src}
                            alt={item.label}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <p className="text-sm font-medium text-center mt-2">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative">
                    <img
                      src="/Images/asset-7.jpeg"
                      alt="banner"
                      className="w-full h-[260px] object-cover rounded-md"
                    />
                    <div className="absolute top-5 left-4 text-black">
                      <p className="font-semibold text-md">Weekend Discount</p>
                      <p className="font-bold text-xl">Latest Phones</p>
                      <p className="text-[#146cda] font-bold text-md mt-1">
                        {" "}
                        From $199.00{" "}
                      </p>
                      <button className="mt-2 text-md underline">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <select
              defaultValue=""
              className="bg-[#146cda] text-white font-bold uppercase"
            >
              <option value="English">Accessories</option>
              <option value="Hindi">Hindi</option>
              <option value="Gujarati">Gujarati</option>
              <option value="German">German</option>
              <option value="Sanskrit">Sanskrit</option>
            </select>
            <select
              defaultValue=""
              className="bg-[#146cda] text-white font-bold uppercase"
            >
              <option value="English">Products</option>
              <option value="Hindi">Hindi</option>
              <option value="Gujarati">Gujarati</option>
              <option value="German">German</option>
              <option value="Sanskrit">Sanskrit</option>
            </select>
            <p className="uppercase text-white font-bold">MacBook</p>
            <p className="uppercase text-white font-bold">Contact us</p>
            <p className="uppercase text-white font-bold">Blog</p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavbarHeader;
