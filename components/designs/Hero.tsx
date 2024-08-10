"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCamera,
  FaCloud,
  FaCode,
  FaHashtag,
  FaMobile,
  FaPaintBrush,
} from "react-icons/fa";
import { IconType } from "react-icons";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

interface BannerServiceInterface {
  title: string;
  icon: IconType;
}

const BannerServices: BannerServiceInterface[] = [
  { title: "Web Development", icon: FaCode },
  { title: "App Development", icon: FaMobile },
  { title: "Social Media Marketing", icon: FaHashtag },
  { title: "Graphics Design", icon: FaPaintBrush },
  { title: "Product Photography", icon: FaCamera },
  { title: "SaaS Development", icon: FaCloud },
];

interface AnimatedTextProps {
  services: BannerServiceInterface[];
}

const AnimatedText = memo(({ services }: AnimatedTextProps) => {
  const [currentService, setCurrentService] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTyping = useCallback(() => {
    const fullText = services[currentService].title;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === "") {
      setTimeout(() => {
        setIsDeleting(false);
        setCurrentService((prev) => (prev + 1) % services.length);
      }, pauseDuration / 2);
    } else {
      setTimeout(
        () =>
          setText(
            fullText.substring(
              0,
              isDeleting ? text.length - 1 : text.length + 1
            )
          ),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }
  }, [text, isDeleting, currentService, services]);

  useEffect(() => {
    handleTyping();
  }, [handleTyping]);

  const Icon = services[currentService].icon;

  return (
    <div className="flex items-center justify-center space-x-4">
      <Icon className="text-2xl sm:text-5xl lg:text-6xl transition-opacity duration-500" />
      <span className="text-xl sm:text-4xl lg:text-5xl font-bold">
        {text}
        <span className="inline-block animate-blink">|</span>
      </span>
    </div>
  );
});

AnimatedText.displayName = "AnimatedText";

const HeroBannerNavigation = memo(() => (
  <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
    <SignedIn>
      <Button
        asChild
        variant="outline"
        className="text-white bg-transparent rounded-full"
        size="default"
      >
        <SignOutButton />
      </Button>
    </SignedIn>
   
      <SignedOut>
        <Button
          asChild
          variant="outline"
          className="text-white bg-transparent rounded-full"
          size="default"
        >
          <SignInButton />
        </Button>
      </SignedOut>
  

    <Link
      href="/contact"
      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-white hover:border-white hover:border-2 transition duration-300 ease-in-out"
    >
      Contact Us
    </Link>
  </div>
));

HeroBannerNavigation.displayName = "HeroBannerNavigation";
import Banner from "@/public/heroimages/bannerImg.jpg";
import { Button } from "../ui/button";
import { useStoreUserEffect } from "../providers/auth-status";

const Hero = () => {
  const { isAdmin, isAuthenticated, isLoading } = useStoreUserEffect();
  return (
    <div className="relative w-full h-[calc(100vh-10px)] min-h-screen overflow-hidden">
      <Image
        src={Banner} // Replace with your actual banner image path
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="banner"
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAJLQNkx/P3ZQAAAABJRU5ErkJggg=="
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <section className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-slideDown">
            Star Marketing
          </h1>
          <AnimatedText services={BannerServices} />
          <p className="text-xl sm:text-2xl lg:text-3xl mt-4 animate-slideUp">
            We simplify the digital transformation journeys of businesses
            through smart and innovative software solutions.
          </p>
        </div>

        <HeroBannerNavigation />
      </section>
    </div>
  );
};

export default Hero;
