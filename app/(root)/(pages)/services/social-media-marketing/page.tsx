import React from 'react';
import { MarketingArray, MarketingArrayInterface, services } from '@/public';
import Image from 'next/image';
import HeroBanner from '@/components/designs/HeroBanner';

const SocialMarketingSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
        <HeroBanner
        imageSrc={services[4].image}
        buttonText="Get Started"
        heroHeading={services[4].title}
        heroPara={services[4].description}
        path="/contact"
      />
      <div className="container mx-auto max-w-7xl px-4">
        {MarketingArray.map((item: MarketingArrayInterface, index) => (
          <div key={index} className="mb-12">
            {item.section === "HeroSection" && (
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                <p className="text-lg text-gray-700 mb-6">{item.content}</p>
                {item.image && (
                  <div className="flex justify-center">
                    <Image src={item.image} height={500} width={500} alt='dfd' className="rounded-lg shadow-lg" />
                  </div>
                )}
              </div>
            )}
            {item.section !== "HeroSection" && (
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
                {item.image && (
                  <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0">
                    <Image src={item.image} alt="dfd" height={400} width={600} className="w-full rounded-lg shadow-lg" />
                  </div>
                )}
                <div className="md:w-1/2">
                  {item.title && <h2 className="text-3xl font-bold mb-4">{item.title}</h2>}
                  <p className="text-gray-700 mb-4">{item.content}</p>
                  {item.points && (
                    <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                      {item.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialMarketingSection;


