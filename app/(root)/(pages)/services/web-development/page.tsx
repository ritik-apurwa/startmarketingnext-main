import React from 'react';
import Image from 'next/image';
import { webimage1, webimage2, webimage3, webServiceArray, WebServiceSection } from '@/public';

const WebServiceCard: React.FC = () => {
  const introductionSection = webServiceArray.find(
    (section) => section.headerSection === 'Web Development'
  );
  const otherSections = webServiceArray.filter(
    (section) => section.headerSection !== 'Web Development'
  );

  return (
    <section className="bg-gray-100 py-12">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <div className="size-full">
          <Image
            src={webimage3}
            className="object-cover object-center min-h-full min-w-full"
          height={600}
          width={800}
            alt="Service Header"
            priority
          />
        </div>
        <div className="absolute inset-0 min-h-full min-w-full bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {introductionSection?.headerSection}
          </h1>
          <p className="text-xl max-w-2xl mb-8 animate-fade-in-delay">
            {introductionSection?.headerContent}
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Other Sections */}
          {otherSections.map((section, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2 text-center">
                {section.headerSection}
              </h2>
              {section.serviceBenefits?.map((benefit, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {benefit.benefitPoints.map((point, i) => (
                    <div key={i} className="bg-white p-5 rounded-lg shadow-md">
                      <div className="flex items-center flex-col">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 font-bold text-lg">
                          {i + 1}
                        </div>
                        <h4 className="text-lg text-center font-semibold text-gray-900">
                          {point.tag}
                        </h4>
                        <p className="text-gray-700 text-sm lg:text-base px-4 text-center">
                          {point.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              {section.headerContent && (
                <p className="text-gray-700 mb-6 leading-relaxed text-center">
                  {section.headerContent}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebServiceCard;
