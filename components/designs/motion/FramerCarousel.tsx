import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { industryExperience, industryExperienceInterface } from "@/public";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function IndustryExperienceSection() {
  return (
    <section className="container relative  justify-center items-center flex flex-col  mx-auto px-4 pt-12 pb-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Industry Experience
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent>
          {industryExperience.map(
            ({
              id,
              image,
              title,
              description,
            }: industryExperienceInterface) => (
              <CarouselItem
                key={id}
                className="sm:basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="border-2 border-black min-h-90 h-96">
                  <div className="flex flex-col items-center justify-center p-6">
                    <Image
                      src={image}
                      alt={title}
                      width={200}
                      height={200}
                      className="mb-4 rounded-lg h-auto w-full max-h-60 min-h-60 object-cover"
                      placeholder="blur"
                    />
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm px-8 text-center">{description}</p>
                  </div>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <div className="absolute  -bottom-24 flex justify-center items-center  w-full h-20 ">
          <div className="flex justify-center   gap-2 max-w-40 ">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </Carousel>
      <div className="flex justify-center mt-28">
        <Button className="flex items-center gap-2">
          Learn More <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
