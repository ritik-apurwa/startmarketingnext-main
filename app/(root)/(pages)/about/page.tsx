"use client"

import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

interface AboutUsContentItem {
  section: string;
  title: string;
  content?: string;
  points?: string[];
}

const AboutUsContent: AboutUsContentItem[] = [
  {
    section: "HeroSection",
    title: "About Us",
    content: "Accelerating your digital experience with path-breaking innovations",
  },
  {
    section: "Mission",
    title: "Our Mission",
    content: "At Star Marketing, we believe that every brand has the potential to shine brilliantly in its own unique way. Founded on the principles of innovation, creativity, and dedication, we've embarked on a mission to help businesses of all sizes reach for the stars and beyond.",
  },
  {
    section: "Craftsmanship",
    title: "High-Quality Craftsmanship",
    content: "We are redefining the path of your growth with high-quality craftsmanship by leveraging disruptive technologies.",
  },
  {
    section: "InnovativeSolutions",
    title: "Innovative Solutions",
    content: "At Star Marketing, we don't just follow trends – we set them. Our team is constantly exploring new ideas and technologies to ensure that your brand stays ahead of the curve in a rapidly evolving marketplace.",
  },
  {
    section: "TailoredApproach",
    title: "Tailored Approach",
    content: "We understand that every brand is unique, which is why we take a personalized approach to every project. From the initial consultation to the final deliverables, we work closely with you to understand your goals and tailor our strategies to meet your specific needs.",
  },
  {
    section: "Points",
    title: "Key Points",
    points: [
      "Proven track record of delivering results for clients",
      "Creativity at the heart of everything we do",
      "Transparent communication throughout the process",
      "Dedicated support from our professional team",
      "Years of experience in the industry",
      "Fast turnaround times without compromising quality",
    ],
  },
];

const AboutUsSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = useCallback((section: string) => {
    setActiveSection(prevSection => prevSection === section ? null : section);
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-bold text-center text-blue-800 mb-12"
        >
          About Star Marketing
        </motion.h1>

        {AboutUsContent.map((item) => (
          <motion.div 
            key={item.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div 
              className="flex justify-between items-center p-6 cursor-pointer"
              onClick={() => toggleSection(item.section)}
            >
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              <motion.div
                animate={{ rotate: activeSection === item.section ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-blue-500" />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {activeSection === item.section && (
                <motion.div 
                  key={`content-${item.section}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  {item.content && <p className="text-lg text-gray-700 mb-4">{item.content}</p>}
                  {item.points && (
                    <ul className="space-y-2">
                      {item.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <Star className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;