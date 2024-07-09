import React from "react";
import {
  termsOfServiceContent,
  termsOfServiceContentInterface,
} from "@/public";

const TermsAndServiceSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold leading-tight">
            Terms and Services
          </h2>
          <p className="text-lg mt-4">
            Explore our comprehensive terms and services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {termsOfServiceContent.map(
            (
              {
                content,
                icon: Icon,
                section,
                note,
                points,
              }: termsOfServiceContentInterface,
              index
            ) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-3xl text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold">{section}</h3>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">{content}</p>
                {points && (
                  <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                    {points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
                {note && <p className="text-sm text-gray-500 italic">{note}</p>}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TermsAndServiceSection;
