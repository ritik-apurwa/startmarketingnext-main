import React from "react";
import { saasDevelopmentPlatformContent, services } from "@/public";
import Image from "next/image";
import saas1 from "@/public/serviceillustartion/sass/saas1.jpg";
import HeroBanner from "@/components/designs/HeroBanner";

const SaasCard: React.FC = () => {
  // Extract the Introduction section from starMarketingGraphicContent
  const introductionSection = saasDevelopmentPlatformContent.find(
    (section) => section.section === "SaaS App Development"
  );

  return (
    <section className="bg-gray-100 py-12">
       <HeroBanner
        imageSrc={services[2].image}
        buttonText="Get Started"
        heroHeading={services[2].title}
        heroPara={services[2].description}
        path="/contact"
      />

      {saasDevelopmentPlatformContent.map((section, index) => (
        <div key={index} className="mb-16">
          {section.section !== "Introduction" && (
            <>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2 text-center">
                {section.section}
              </h2>
              {section.content && (
                <p className="text-gray-700 mb-6 leading-relaxed text-center">
                  {section.content}
                </p>
              )}
              {section.points && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-lg shadow-md"
                    >
                      <div className="flex items-center flex-col">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 font-bold text-lg">
                          {idx + 1}
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
              )}
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default SaasCard;
