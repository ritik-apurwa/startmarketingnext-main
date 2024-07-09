"use client";

import React from "react";
import { google, samsung, digitalocean } from "@/public";
import Image from "next/image";
import { motion } from "framer-motion";

const partnersArr = [
  {
    id: 1,
    img: google,
    title: "Google",
  },
  {
    id: 2,
    img: samsung,
    title: "Samsung",
  },
  {
    id: 3,
    img: digitalocean,
    title: "Digital Ocean",
  },
];

const Partner: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-screen-lg px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to collaborate with industry leaders to deliver
            exceptional solutions and drive innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {partnersArr.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 mb-4">
                <Image
                  src={partner.img}
                  alt={partner.title}
                 height={600}
                 width={800}
                  className="filter grayscale object-cover hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {partner.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
