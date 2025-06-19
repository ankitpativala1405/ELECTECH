import React from "react";
import { VscListFlat } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

const NavbarHeader = () => {
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
                      <li>Wireless Printer</li>
                      <li>Game Controller</li>
                      <li>Headphone</li>
                      <li>Smart Phones</li>
                      <li>Smart Watch</li>
                      <li>Speakers</li>
                      <li>Personal Computer</li>
                      <li>MacBook</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="font-bold mb-4 uppercase">
                        Laptop & Computers
                      </li>
                      <li>Apple Ipad</li>
                      <li>Smart Watch</li>
                      <li>Basic Phones</li>
                      <li>Accessories</li>
                      <li>Gadgets</li>
                      <li>Feature Phones</li>
                      <li>Convertible Laptops</li>
                      <li>Ultraportable Laptops</li>
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
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src="/Images/asset-7.jpeg"
                      alt="banner"
                      className="w-full h-[250px] object-cover rounded-md"
                    />
                    <div className="absolute top-5 left-4 text-black">
                      <p className="font-semibold text-sm">Weekend Discount</p>
                      <p className="font-bold text-lg">Latest Phones</p>
                      <p className="text-[#146cda] font-bold text-sm mt-1">
                        From $199.00
                      </p>
                      <button className="mt-2 text-sm underline">
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
              <option value="English">Categories</option>
              <option value="Hindi">Hindi</option>
              <option value="Gujarati">Gujarati</option>
              <option value="German">German</option>
              <option value="Sanskrit">Sanskrit</option>
            </select>
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
