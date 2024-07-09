"use client";

import { Logo } from "@/public";
import { MenuIcon, X, ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AnimationVisible } from "../motion/AnimationHeight";
import Navigation from "./Navigation";
import { useRouter } from "next/navigation";
import DesktopNavigationDropdown from "./DesktopNavigation";

interface DesktopNavigationProps {
  setHovered: React.Dispatch<React.SetStateAction<string | null>>;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  setHovered,
}) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    setHovered(null);
    router.push(path);
  };

  return (
    <nav className="hidden lg:flex space-x-6">
      <button
        className="flex items-center space-x-2 text-white"
        onClick={() => handleNavigation("/")}
      >
        <span>Home</span>
      </button>
      <div
        className="relative group"
        onMouseEnter={() => setHovered("services")}
        onMouseLeave={() => setHovered(null)}
      >
        <button className="flex items-center space-x-2 text-white">
          <span>Services</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>

     
        <Link href="/about" className="flex items-center space-x-2 text-white">
          <span>About</span>
        </Link>
   

      <button
        className="flex items-center space-x-2 text-white"
        onClick={() => handleNavigation("/contact")}
      >
        <span>Contact</span>
      </button>
    </nav>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const router = useRouter();

  const toggleMobileNav = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const headerVariants = {
    closed: { height: "70px" },
    open: { height: "auto" },
  };

  const handleNavigation = (path: string) => {
    setHovered(null);
    router.push(path);
  };

  return (
    <>
      <motion.header
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={headerVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed w-full z-40 backdrop-blur-md bg-black/20"
      >
        <div className="flex flex-col">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-4 px-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={Logo}
                alt="Logo"
                className="h-10 lg:h-12 w-auto"
                height={40}
                width={40}
              />
              <span className="text-xl font-bold text-white">
                Star Marketing
              </span>
            </Link>

            <DesktopNavigation setHovered={setHovered} />

            <button
              onClick={toggleMobileNav}
              className="p-2 rounded-full lg:hidden bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
          <AnimationVisible
            isOpen={isOpen}
            className="w-full p-4"
            key="navbar"
            maxHeight=""
            id="navbar"
          >
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
          </AnimationVisible>
        </div>
      </motion.header>
      <AnimatePresence>
        <DesktopNavigationDropdown
          hovered={hovered}
          setHovered={setHovered}
          handleNavigation={handleNavigation}
        />
      </AnimatePresence>
    </>
  );
};

export default Navbar;
