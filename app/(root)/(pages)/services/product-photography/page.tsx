"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { productphoto1, ProductPhotographyArray, ProductPhotographyContentInterface } from "@/public";
import HeroBanner from "@/components/designs/HeroBanner";

const ProductShowcasePanel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from index 1 to skip HeroSection

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === ProductPhotographyArray.length - 1 ? 1 : prevIndex + 1
    );
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 1 ? ProductPhotographyArray.length - 1 : prevIndex - 1
    );
  };

  const currentProduct = ProductPhotographyArray[currentIndex];

  return (
    <section className="bg-gray-50 py-12">
      <HeroBanner
        imageSrc={productphoto1}
        buttonText="Explore Products"
        heroHeading={ProductPhotographyArray[0].title}
        heroPara={ProductPhotographyArray[0].content}
        path="/products"
      />

      <div className="container mx-auto max-w-7xl px-4 mt-16">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              {currentProduct.image && (
                <Image
                  src={currentProduct.image}
                  width={500}
                  height={500}
                  alt={currentProduct.title || 'Product image'}
                  className="rounded-lg shadow-md"
                />
              )}
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">{currentProduct.title}</h2>
              <p className="text-gray-700 mb-6">{currentProduct.content}</p>
              {currentProduct.points && (
                <div className="grid grid-cols-2 gap-4">
                  {currentProduct.points.map((point, idx) => (
                    <Image
                      key={idx}
                      src={point}
                      width={200}
                      height={200}
                      alt={`Gallery image ${idx + 1}`}
                      className="rounded-lg shadow-sm"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevProduct}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProduct}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcasePanel;