"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { LogoImage1, LogoImage2, LogoImage3 } from "@/public";

const logos = [
  LogoImage1,
  LogoImage2,
  LogoImage3,
  LogoImage1,
  LogoImage2,
  LogoImage3,
  LogoImage1,
  LogoImage2,
  LogoImage3,
];

type PropType = {
  options?: EmblaOptionsType;
};

const LogoCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, loop: true, align: "center" },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false })]
  );
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Our Trusted Partners
        </h1>
        <p className="text-xl text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          These logos represent our valued collaborators, each contributing to
          our shared vision of innovation and excellence.
        </p>
        <div className="embla w-full py-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-5xl mx-auto">
          <div className="embla__viewport overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                >
                  <div className="h-auto p-2">
                    <div className="flex h-full w-full items-center justify-center relative  rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                      <Image
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        height={800}
                        width={800}
                        className=" h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="embla__controls flex justify-center items-center mt-6">
            <button
              className="embla__prev mr-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
              onClick={scrollPrev}
            >
              <ArrowLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              className="embla__play p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
              onClick={toggleAutoplay}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-gray-800" />
              ) : (
                <Play className="w-6 h-6 text-gray-800" />
              )}
            </button>
            <button
              className="embla__next ml-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
              onClick={scrollNext}
            >
              <ArrowRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
