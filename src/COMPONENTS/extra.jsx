import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

function ProductGrid({ currentIndex, productsPerPage }) {
  return (
    <div className="grid grid-cols-5 gap-4 px-4">
      {products
        .slice(currentIndex, currentIndex + productsPerPage)
        .map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src={product.imgSrc}
              alt={product.name}
              className="h-40 w-full object-cover rounded-md mb-2"
            />
            <p className="font-medium">{product.name}</p>
            <p className="text-blue-600 font-bold">{product.price}</p>
          </div>
        ))}
    </div>
  );
}

function ProductSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 5;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + productsPerPage, products.length - productsPerPage));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - productsPerPage, 0));
  };

  return (
    <section className="bg-[#146cda]">
      <div className="container mx-auto">
        <nav className="flex justify-center">
          <div className="flex items-center gap-[5px]">
            <div className="relative group">
              <p className="flex items-center gap-[5px] text-white font-bold uppercase cursor-pointer">
                Products <IoIosArrowDown />
              </p>

              <div className="absolute left-[-920px] top-full flex mt-4 w-[1480px] bg-[#ededed] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-2000 z-50">
                <div className="p-6 border-x-1 border-gray-400 max-w-[250px]">
                  <h4 className="text-lg font-bold mb-2">New Arrivals 2024</h4>
                  <p className="mb-4">
                    Fully drag and drop mega menu content. Put any amazing HTML content here. Fully drag and drop menu content.
                  </p>
                  <button className="mt-4 text-md underline text-blue-600">Shop Now</button>
                </div>

                <div className="p-6 flex-grow relative group/carousel">
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-1 border-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
                    onClick={handlePrev}
                  >
                    <MdKeyboardArrowLeft size={40} />
                  </button>

                  <ProductGrid currentIndex={currentIndex} productsPerPage={productsPerPage} />

                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-1 border-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
                    onClick={handleNext}
                  >
                    <MdOutlineKeyboardArrowRight size={40} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
