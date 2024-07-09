import React from "react";
import contactImgBanner from "@/public/indExp/indExp6.jpg"
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import HeroBanner from "@/components/designs/HeroBanner";

interface ContactCardProps {
  icon: React.ReactNode;
  name: string;
  children: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, name, children }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 p-6 rounded-lg transform transition-transform hover:scale-105 shadow-md">
      <div className="w-16 h-16 flex items-center justify-center bg-blue-200 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      {children}
    </div>
  );
};

const ContactCardBox = () => {
  return (
    <section className="p-6 bg-white shadow-lg rounded-lg max-w-7xl items-center mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <ContactCard
        icon={<FaPhone className="text-2xl text-blue-600" />}
        name="Phone Numbers"
      >
        <p className="text-lg">8209326351</p>
        <p className="text-lg">8000189694</p>
      </ContactCard>
      <ContactCard
        icon={<FaEnvelope className="text-2xl text-blue-600" />}
        name="Email Address"
      >
        <p className="text-lg">sohelali@wingstarnarketing.com</p>
      </ContactCard>
      <ContactCard
        icon={<FaMapMarkerAlt className="text-2xl text-blue-600" />}
        name="Location"
      >
        <p className="text-lg text-center">
          Near Power House Road, Roshanganj Mohalla, Sikar, Rajasthan 332001
        </p>
      </ContactCard>
      <Link href="https://wa.me/message/EZRVDNWS56I3E1">
        <div className="flex items-center justify-center">
          <ContactCard
            icon={<FaWhatsapp className="text-2xl text-blue-600" />}
            name="WhatsApp"
          >
            <p className="text-lg">Direct Chat on WhatsApp</p>
          </ContactCard>
        </div>
      </Link>
    </section>
  );
};

const page = () => {
  return (
    <section className="bg-gray-100">
      <HeroBanner
        imageSrc={contactImgBanner}
        heroHeading="Contact Us"
        heroPara="React out to us for any inquiries or support We are here to help"
        buttonText="Visit Home"
        path="/"
      />

      <div className="flex flex-col items-center">
        <ContactCardBox />
        <div className="w-full h-[400px] rounded-xl px-2 max-w-7xl lg:px-5 md:h-[600px] my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2135.17360975809!2d75.12955412406352!3d27.63089918940537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca576786a6641%3A0x450f964f532a504d!2sStar%20marketing!5e0!3m2!1sen!2sin!4v1720241065299!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            className="border-0 rounded-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default page;
