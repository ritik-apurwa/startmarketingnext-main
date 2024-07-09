import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface SocialIconInterface {
  name: string;
  icon: IconType;
  link: string;
}

export const socialIcons: SocialIconInterface[] = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/star_marketings?igsh=MXdiank3MXVhNmZ1bQ==",
  },
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    link: "https://wa.me/message/EZRVDNWS56I3E1",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/company/star-marketings/",
  },

  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/Starmarketings9?mibextid=ZbWKwL",
  },
];

const SocialIcon = () => {
  return (
    <div className="flexr-center hidden bg-red-400 text-black lg:flex gap-x-2 px-3 ">
     
    hello
    </div>
  );
};

export default SocialIcon;
