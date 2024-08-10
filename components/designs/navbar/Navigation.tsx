"use client";

import { NavLinks, NavigationProps } from "@/public";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimationVisible } from "../motion/AnimationHeight";
import SocialIcon, { SocialIconInterface, socialIcons } from "./SocialIcon";
import Link from "next/link";
import { useStoreUserEffect } from "@/components/providers/auth-status";
// Update this import path as needed

interface NavigationComponentProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation = ({ isOpen, setIsOpen }: NavigationComponentProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  return (
    <nav className="flex flex-col text-white space-y-4">
      {NavLinks.map((link) => (
        <div key={link.id} className="relative">
          {link.links ? (
            <>
              <button
                onClick={toggleDropdown}
                className={`text-left w-full flex justify-between items-center ${
                  pathname.startsWith(link.path) ? "font-bold" : "font-normal"
                } hover:text-gray-600 transition-colors`}
              >
                {link.label}
                {dropdownOpen ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <AnimationVisible
                isOpen={dropdownOpen}
                id={`dropdown-${link.id}`}
              >
                <div className="mt-2 ml-4  flex flex-col space-y-2">
                  {link.links.map((subLink, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigation(subLink.path)}
                      className={`text-left ${
                        pathname === subLink.path ? "font-bold" : "font-normal"
                      } hover:text-gray-600 transition-colors`}
                    >
                      {subLink.title}
                    </button>
                  ))}
                </div>
              </AnimationVisible>
            </>
          ) : (
            <button
              onClick={() => handleNavigation(link.path)}
              className={`text-left text-white ${
                pathname === link.path ? "font-bold" : "font-normal"
              } hover:text-gray-600 transition-colors`}
            >
              {link.label}
            </button>
          )}
        </div>
      ))}

     
      <div className="border-2 border-black/20 rounded-md w-full h-14 py-2">
        <div className="  grid grid-cols-4 items-center h-full">
          {socialIcons.map(
            ({ icon: Icon, link, name }: SocialIconInterface) => {
              return (
                <Link
                  href={link}
                  key={name}
                  className="flex items-center justify-center"
                >
                  <Icon size={22} className="" />
                </Link>
              );
            }
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
