import React from "react";
import {
  services,
  SectionNames,
  GraphicsDesignContentInterface2,
  GraphicsDesignArray2,
} from "@/public";
import HeroBanner from "@/components/designs/HeroBanner";
import Image from "next/image";

const GraphicsDesignSection: React.FC = () => {
  // Function to filter sections by section name
  const filterSectionsByName = (
    sectionName: SectionNames
  ): GraphicsDesignContentInterface2[] => {
    return GraphicsDesignArray2.filter((item) => item.section === sectionName);
  };

  // Component for sections with images
  const ImageSection = ({
    title,
    image,
    content,
  }: GraphicsDesignContentInterface2) => {
    return (
      <div
        key={title}
        className="section bg-white rounded-lg shadow-md overflow-hidden"
      >
        {image && (
          <div className="h-auto w-full p-3">
            <Image
              src={image}
              alt={title}
              className="object-cover rounded-md aspect-video object-center"
              layout="responsive"
              height={400}
              width={400}
            />
          </div>
        )}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {title}
          </h2>
          {content && <p className="text-gray-600">{content}</p>}
        </div>
      </div>
    );
  };

  // Component for sections with points
  const PointsSection = ({
    title,
    points,
  }: GraphicsDesignContentInterface2) => {
    return (
      <div
        key={title}
        className="section bg-gray-100 rounded-lg shadow-md overflow-hidden"
      >
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {title}
          </h2>
          {points && (
            <ul className="text-gray-600 list-disc list-inside">
              {points.map((point, index) => (
                <li key={index} className="mt-2">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-50 min-h-screen gap-y-6 pb-6 flex flex-col">
      <div className="min-h-screen flex items-center">
        <HeroBanner
          imageSrc={services[3].image}
          buttonText="Get Started"
          heroHeading={services[3].title}
          heroPara={services[3].description}
          path="/contact"
        />
      </div>

      {/* Sections with images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filterSectionsByName("LogoDesign").map((item) => (
          <ImageSection key={item.title} {...item} />
        ))}
        {filterSectionsByName("PackagingDesign").map((item) => (
          <ImageSection key={item.title} {...item} />
        ))}
        {filterSectionsByName("BrandIdentity").map((item) => (
          <ImageSection key={item.title} {...item} />
        ))}
      </div>

      {/* Sections with points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {filterSectionsByName("WhyChooseUs").map((item) => (
          <PointsSection key={item.title} {...item} />
        ))}
        {filterSectionsByName("HowWeWork").map((item) => (
          <PointsSection key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default GraphicsDesignSection;
