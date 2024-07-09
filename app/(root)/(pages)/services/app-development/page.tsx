import React from "react";
import Image from "next/image";
import {
  AppBenifitsPoints,
  appimage1,
  appServiceArray,
  AppServiceInterface,
  services,
  webimage1,
} from "@/public";
import HeroBanner from "@/components/designs/HeroBanner";

const AppServiceCard: React.FC = () => {
  const introductionSection = appServiceArray.find(
    (section) => section.headerSection === "App Development"
  );
  const benefitsSection = appServiceArray.find(
    (section) =>
      section.headerSection ===
      "The Benefits of Mobile-First Web Application Design"
  );
  const otherSections = appServiceArray.filter(
    (section) =>
      section.headerSection !== "App Development" &&
      section.headerSection !==
        "The Benefits of Mobile-First Web Application Design"
  );

  return (
    <section className="bg-gray-100 py-12">
      <HeroBanner
        imageSrc={services[1].image}
        buttonText="Get Started"
        heroHeading={services[1].title}
        heroPara={services[1].description}
        path="/contact"
      />

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Benefits Section */}
          {benefitsSection && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2 text-center">
                {benefitsSection.headerSection}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {benefitsSection.serviceBenefits?.benefitPoints.map(
                  (point: AppBenifitsPoints, index: number) => (
                    <div
                      key={index}
                      className="bg-white p-5 rounded-lg shadow-md"
                    >
                      <div className="flex items-center flex-col">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 font-bold text-lg">
                          {index + 1}
                        </div>
                        <h4 className="text-lg text-center font-semibold text-gray-900">
                          {point.tag}
                        </h4>
                        <p className="text-gray-700 text-sm lg:text-base px-4 text-center">
                          {point.content}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Other Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2 text-center">
                  {section.headerSection}
                </h2>
                <p className="text-gray-700 leading-relaxed text-center">
                  {section.headerContent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppServiceCard;
