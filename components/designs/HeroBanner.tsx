import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HeroBannerProps {
  imageSrc: StaticImageData;
  heroHeading: string | undefined;
  heroPara: string | undefined;
  buttonText: string;
  path: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  imageSrc,
  heroHeading,
  heroPara,
  buttonText,
  path,
}) => {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] max-h-[800px] overflow-hidden">
      <div className="size-full">
        <Image
          src={imageSrc} // Replace with your actual banner image path
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="banner"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAJLQNkx/P3ZQAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="absolute inset-0 min-h-full min-w-full bg-black bg-opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          {heroHeading}
        </h1>
        <p className="text-xl max-w-2xl mb-8 animate-fade-in-delay">
          {heroPara}
        </p>
        <Link
          href={path}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
