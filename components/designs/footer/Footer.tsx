// Footer.tsx
import React from "react";

import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FooterSection, footerContent } from "@/public";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8">
      <div className="container mx-auto w-screen max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerContent.map((section: FooterSection) => (
            <div key={section.label}>
              <h3 className="text-xl font-bold mb-4">{section.label}</h3>
              {section.info && <p className="mb-4">{section.info}</p>}
              {section.contact && (
                <ul className="mb-4">
                  {section.contact.map((contact, index) => (
                    <li key={index} className="flex items-center mb-2">
                      {contact.type === "email" ? (
                        <FaEnvelope className="mr-2" />
                      ) : (
                        <FaPhone className="mr-2" />
                      )}
                      <Link 
                        href={`${
                          contact.type === "email" ? "mailto:" : "tel:"
                        }${contact.value}`}
                      >
                        {contact.value}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {section.links && (
                <ul>
                  {section.links.map((link) => (
                    <li key={link.title} className="mb-2">
                      <Link href={link.path}>
                        <span  className="hover:underline">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {section.text && <p>{section.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
