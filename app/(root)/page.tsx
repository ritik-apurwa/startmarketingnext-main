import AwardSection from "@/components/designs/AwardSection";
import Counter from "@/components/designs/Counter";
import Hero from "@/components/designs/Hero";
import IndustryExperienceCarousel from "@/components/designs/homecarousel/IndustryCorousel";
import LogoCarousel from "@/components/designs/homecarousel/LogoCarousel";
import ServiceCorousel from "@/components/designs/homecarousel/ServiceCarosel";
import TestimonialsCarousel from "@/components/designs/homecarousel/TesimonialsCorousel";
import Partner from "@/components/designs/Partner";
import TermsAndServiceSection from "@/components/designs/TermsAndSevices";
import React from "react";

const page = () => {
  return (
    <section className="">
      <section id="Home">
        <Hero />
      </section>
      <section>
        <Counter />
      </section>
      <section>
        <IndustryExperienceCarousel />
      </section>
      <section>
        <Partner />
      </section>
      <section>
        <TestimonialsCarousel />
      </section>
      <section>
        <AwardSection />
      </section>
      <section>
        <ServiceCorousel />
      </section>
      <section>
        <TermsAndServiceSection />
      </section>
      <section id="Logos">
        <LogoCarousel />
      </section>
    </section>
  );
};

export default page;
