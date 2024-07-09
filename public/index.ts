import { StaticImageData } from "next/image";

import Logo from "./heroimages/Logo.png";
import herobg from "./heroimages/hero-image.png";
import banner from "./heroimages/BannerImg2.jpg";

// Client Images
// Client Images
import client1 from "./testimonialsImg/client1.jpg";
import client2 from "./testimonialsImg/client2.jpg";
import client3 from "./testimonialsImg/client3.jpg";
import client4 from "./testimonialsImg/client4.jpg";
import client5 from "./testimonialsImg/client5.jpg";
import client6 from "./testimonialsImg/client6.jpg";
// Client Images
// Client Images

//award images
//award images

import awardimage1 from "./awardsvg/awardmedal.png";
import awardimage2 from "./awardsvg/no.1trophy.png";
import awardimage3 from "./awardsvg/ribbenaward.png";
import awardimage4 from "./awardsvg/shieldwithleaves.png";
//award images
//award images

// Industry Experience Phtos
// Industry Experience Phtos

import indExp1 from "./indExp/indExp1.jpg";
import indExp2 from "./indExp/indExp2.jpg";
import indExp3 from "./indExp/indExp3.jpg";
import indExp4 from "./indExp/indExp4.jpg";

import indExp6 from "./indExp/indExp6.jpg";

// Industry Experience Phtos
// Industry Experience Phtos

//  Parterns
//  Parterns Images

import digitalocean from "./partners/DigitalOcean.png";
import google from "./partners/Google.png";
import samsung from "./partners/SamsungKnox.png";

//  Parterns Images
//  Parterns Images

// service Images
// service Images

import serviceweb from "./serviceillustartion/app/app1.png";
import serviceapp from "./serviceillustartion/web/web2.jpg";
import servicedesign from "./serviceillustartion/graphic/graphic2.jpg";
import servicesass from "./serviceillustartion/sass/saas2.jpg";
import servicephtography from "./serviceillustartion/productsphography/digitalmarketing.png";

// service Images
// service Images

import webimage1 from "./serviceillustartion/app/app2.jpg";
import webimage2 from "./serviceillustartion/app/app3.jpg";
import webimage3 from "./serviceillustartion/app/app4.jpg";
import webimage4 from "./serviceillustartion/app/app1.png";
import appimage1 from "./serviceillustartion/web/web1.jpg";
import appimage2 from "./serviceillustartion/web/web2.jpg";
import appimage3 from "./serviceillustartion/web/web3.png";
import designimage1 from "./serviceillustartion/graphic/graphic1.jpg";
import designimage2 from "./serviceillustartion/graphic/graphic2.jpg";
import designimage3 from "./serviceillustartion/graphic/graphic3.jpg";
import designimage4 from "./serviceillustartion/graphic/graphic4.jpg";
import designimage5 from "./serviceillustartion/graphic/graphic5.jpg";
import sass1 from "./serviceillustartion/sass/saas1.jpg";
import sass2 from "./serviceillustartion/sass/saas2.jpg";
import sass3 from "./serviceillustartion/sass/saas3.jpg";
import productphoto1 from "./serviceillustartion/productsphography/productp1.jpg";
import productphoto2 from "./serviceillustartion/productsphography/productp2.jpg";
import productphoto3 from "./serviceillustartion/productsphography/productp3.jpg";
import productbanne from "./serviceillustartion/productsphography/digitalmarketing.png";
import LogoImage1 from "./Logos/LogoImage1.png";
import LogoImage2 from "./Logos/LogoImage2.png";
import LogoImage3 from "./Logos/LogoImage3.png";

import {
  FaCode,
  FaMobile,
  FaHashtag,
  FaPaintBrush,
  FaCamera,
  FaCloud,
  FaWhatsapp,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export {
  LogoImage1,
  LogoImage2,
  LogoImage3,
  Logo,
  banner,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  herobg,
  samsung,
  digitalocean,
  webimage1,
  webimage2,
  webimage3,
  webimage4,
  appimage1,
  appimage2,
  appimage3,
  designimage1,
  designimage2,
  designimage3,
  designimage4,
  designimage5,
  sass1,
  sass2,
  sass3,
  productphoto1,
  productphoto2,
  productphoto3,
  productbanne,
  google,
  serviceapp,
  servicedesign,
  servicephtography,
  servicesass,
  serviceweb,
  indExp1,
  indExp2,
  indExp3,
  indExp4,
  indExp6,
};

// hero Banner Info
// hero Banner Info

// hero Banner Info
// hero Banner Info
import { HomeIcon, SettingsIcon, InfoIcon, PhoneIcon } from "lucide-react";

interface LinkInterface {
  title: string;
  path: string;
}

// Navigation Array and Interface
// Navigation Array and Interface
// Navigation Array and Interface

export interface NavigationProps {
  id: number;
  path: string;
  label: string;
  icon?: React.ElementType;
  links?: LinkInterface[];
  isScrolled?: boolean;
}

export const NavLinks: NavigationProps[] = [
  { id: 1, label: "Home", path: "/", icon: HomeIcon },
  {
    id: 2,
    label: "Services",
    path: "/services",
    icon: SettingsIcon,
    links: [
      { title: "Web Development", path: "/services/web-development" },
      { title: "App Development", path: "/services/app-development" },
      {
        title: "Social Media Marketing",
        path: "/services/social-media-marketing",
      },
      { title: "Graphics Design", path: "/services/graphics-design" },
      { title: "Product Photography", path: "/services/product-photography" },
      { title: "SaaS Development", path: "/services/saas-development" },
    ],
  },
  { id: 3, label: "About", path: "/about", icon: InfoIcon },
  { id: 4, label: "Contact", path: "/contact", icon: PhoneIcon },
];

// Navigation Array and Interface
// Navigation Array and Interface
// Navigation Array and Interface

// Service  Array and Interface
// Service  Array and Interface
// Service  Array and Interface

export interface ServiceInterface {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}
export interface ServicenewInterface {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  path: string;
}

export const services: ServicenewInterface[] = [
  {
    id: 1,
    image: serviceapp,
    title: "Web Development",
    path: "/services/web-development",
    description:
      "We create fast, secure, and scalable websites, from corporate sites to e-commerce platforms, using the latest technologies.",
  },

  {
    id: 2,
    image: serviceweb,
    title: "App Development",
    path: "/services/app-development",
    description:
      "High-performance, feature-rich apps for iOS and Android with intuitive user experiences and robust security.",
  },
  {
    id: 3,
    image: servicesass,
    title: "Saas Development",
    path: "/services/saas-development",
    description:
      "Boost your online presence with SEO, social media, content marketing, and PPC campaigns driven by data.",
  },
  {
    id: 4,
    image: servicedesign,
    title: "Graphic Design",
    path: "/services/graphics-design",
    description:
      "Create visually stunning designs that captivate and communicate effectively with your target audience.",
  },
  {
    id: 5,
    image: servicephtography,
    title: "Social Marketing",
    path: "/services/social-media-marketing",
    description:
      "Engage your audience and drive conversions with strategic social media campaigns tailored to your brand.",
  },
  {
    id: 6,
    image: productphoto2,
    title: "Product Photography",
    path: "/services/product-photography",
    description:
      "Showcase your products with high-quality photography that highlights details and elevates your brand.",
  },
];

// Service  Array and Interface
// Service  Array and Interface
// Service  Array and Interface

// Awards and Achievment   Array and Interface
// Awards and Achievment   Array and Interface
// Awards and Achievment   Array and Interface

export const achievementData = [
  { label: "Years in Business", value: "5+" },
  { label: "Solution Experts", value: "850+" },
  { label: "Happy Clients", value: "500+" },
  { label: "Offices Worldwide", value: "2" },
];

export const AwardsContent: ServiceInterface[] = [
  {
    id: 1,
    image: awardimage1,
    title: "Experties.com",
    description: "Best Digital Marketing Agencies India ",
  },
  {
    id: 2,
    image: awardimage2,
    title: "Top Developers",
    description: "The Genuine Quality Developers",
  },
  {
    id: 3,
    image: awardimage3,
    title: "Top Eccomerce",
    description: "Top Ecommerce Development Companies",
  },
  {
    id: 4,
    image: awardimage4,
    title: "Top Companies",
    description: "Top Development Companies",
  },
];

// Awards and Achievment   Array and Interface
// Awards and Achievment   Array and Interface
// Awards and Achievment   Array and Interface

export interface ContactInfo {
  type: string;
  value: string;
}

export interface Link {
  title: string;
  path: string;
}

//  Footer Service Array and Interface
//  Footer Service Array and Interface
//  Footer Service Array and Interface

export interface FooterSection {
  label: string;
  info?: string;
  contact?: ContactInfo[];
  links?: Link[];
  text?: string;
}

export const footerContent: FooterSection[] = [
  {
    label: "Contact",
    info: "fatehpur road sikar rajasthan,",
    contact: [
      { type: "email", value: "manger@wingstarnarketing.com" },
      { type: "phone", value: "8000189694" },
      { type: "phone", value: "8209326351" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Contact", path: "/contact" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Terms and Services", path: "/terms" },
      { title: "Privacy Policy", path: "/privacy" },
    ],
  },
  {
    label: "Our Services",
    links: [
      { title: "Web Development", path: "/services/web-development" },
      { title: "App Development", path: "/services/app-development" },
      {
        title: "Social Media Marketing",
        path: "/services/social-media-marketing",
      },
      { title: "Graphics Design", path: "/services/graphics-design" },
      { title: "Product Photography", path: "/services/product-photography" },
      { title: "SaaS Development", path: "/services/saas-development" },
    ],
  },
  {
    label: "Copyright",
    text: "© 2022 Star Marketing",
  },
];

//  Footer Service Array and Interface
//  Footer Service Array and Interface
//  Footer Service Array and Interface

// types.ts
import {
  FaFileContract,
  FaHandshake,
  FaLaptopCode,
  FaPuzzlePiece,
  FaUserShield,
  FaUserCog,
  FaLink,
} from "react-icons/fa";

// terms of Service Array
// terms of Service Array

export interface termsOfServiceContentInterface {
  section: string;
  content: string;
  points?: string[];
  note?: string;
  icon: IconType;
}

export const termsOfServiceContent: termsOfServiceContentInterface[] = [
  {
    section: "Introduction",
    content:
      "Welcome to Star Marketing. These Terms of Service ('Terms') govern your use of our website and software development services.",
    icon: FaFileContract,
  },
  {
    section: "Acceptance of Terms",
    content:
      "By accessing our website and using our services, you agree to these Terms.",
    icon: FaHandshake,
  },
  {
    section: "Description of Service",
    content:
      "Star Marketing offers web software development services including Website Development, Web Application Development, Digital Marketing, SEO, and Mobile Application Development.",
    icon: FaLaptopCode,
  },
  {
    section: "New Features",
    content:
      "Any new features or tools added to the current service are also subject to these Terms of Service.",
    icon: FaPuzzlePiece,
  },
  {
    section: "Privacy Policy",
    content:
      "Our Privacy Policy explains how we collect and use your personal data.",
    icon: FaUserShield,
  },
  {
    section: "User Obligations",
    content: "Use of the service is subject to compliance with these Terms.",
    icon: FaUserCog,
  },
  {
    section: "Hyperlinking to our Content",
    content: "The following entities may hyperlink to our website:",
    points: [
      "Government agencies",
      "Search engines",
      "News organizations",
      "Online directory distributors when listing us",
      "Systemwide Accredited Businesses",
    ],
    note: "Non-profit organizations, charity shopping malls, and charity fundraising groups may not hyperlink to our website.",
    icon: FaLink,
  },
];

// terms of Service Array
// terms of Service Array

// testimonials array
// testimonials array

export const testimonials: ServiceInterface[] = [
  {
    id: 1,
    image: client1,
    title: "Shreeniwas Rawat",
    description:
      "Working with Star Marketing has been an absolute pleasure. They understood our vision perfectly and delivered a stunning website that exceeded our expectations. The team was professional, responsive, and went above and beyond to ensure we were happy with the final product. Highly recommend!",
  },

  {
    id: 2,
    image: client3,
    title: "Abdx Pvt Ltd",
    description:
      "From start to finish, the team at Star Marketing was fantastic. They communicated effectively, met all deadlines, and created a website that perfectly aligns with our brand identity. Their expertise and creativity are truly commendable. We couldn't be happier with our new site!",
  },
  {
    id: 3,
    image: client4,
    title: "Surendra Singh",
    description:
      "Star Marketing's professionalism and efficiency made the entire process of developing our website smooth and stress-free. They were always available to answer questions and provide updates. The final product is a sleek, modern website that has already received great feedback from our users.",
  },
  {
    id: 4,
    image: client5,
    title: "Saravan Haritwal",
    description:
      "We approached Star Marketing with a complex project, and they delivered innovative solutions that met all our requirements. Their support throughout the development process was fantastic, and they were always willing to make adjustments as needed. The app they developed is exactly what we needed to take our business to the next level.",
  },
  {
    id: 5,
    image: client6,
    title: "Sikandar Ali",
    description:
      "Star Marketing brought our ideas to life with their remarkable creativity and technical expertise. The website they developed for us is not only visually stunning but also highly functional and easy to navigate. Their team was attentive to our needs and delivered a product that truly represents our brand. We couldn't be more pleased!",
  },
  {
    id: 6,
    image: client2,
    title: "Sarika",
    description:
      "Star Marketing completely transformed our online presence with their app development services. The app is user-friendly, visually appealing, and packed with features that our customers love. Their attention to detail and commitment to quality is unparalleled. We're thrilled with the results!",
  },
];

// testimonials array
// testimonials array

interface AboutCommitsInterface {
  id: number;
  tag: string;
  para: string;
}

export const AboutCommits: AboutCommitsInterface[] = [
  {
    id: 1,
    tag: "Our Team:",
    para: "At Star Marketing, we believe that the true magic happens when talented individuals come together as a cohesive team. Our team is comprised of passionate marketers, creative designers, strategic thinkers, and technical wizards, all united by a shared vision of helping brands reach their full potential. With diverse backgrounds and expertise, we bring a wealth of knowledge and perspective to every project, ensuring that we deliver results that exceed expectations.",
  },
  {
    id: 2,
    tag: "Our Values:",
    para: "At the heart of everything we do are our core values: integrity, creativity, collaboration, and excellence. These values guide us in every decision we make and every action we take, both internally and externally. We believe in conducting business with honesty and transparency, in pushing the boundaries of creativity to inspire and engage audiences, in working together as a team to achieve common goals, and in striving for excellence in everything we do.",
  },
];

export interface industryExperienceInterface {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
}

export const industryExperience: industryExperienceInterface[] = [
  {
    id: 1,
    image: indExp1,
    description:
      "Extensive teamwork and collaboration experience in diverse environments.",
    title: "Teamwork Skills",
  },
  {
    id: 2,
    image: indExp2,
    description:
      "In-depth knowledge of industry-specific tools and technologies.",
    title: "Technical Expertise",
  },
  {
    id: 3,
    image: indExp3,
    description:
      "Proven track record of delivering projects on time and within budget.",
    title: "Project Management",
  },
  {
    id: 4,
    image: indExp4,
    description:
      "Strong analytical skills with a focus on problem-solving and decision-making.",
    title: "Analytical Abilities",
  },
  {
    id: 5,
    image: indExp6,
    description:
      "Adaptability to changing environments and continuous learning mindset.",
    title: "Adaptability",
  },
];

import { IconType } from "react-icons";

export interface aboutNavigationInterface {
  id: number;
  name: string;
  label: IconType;
  description: string;
  path: string;
}

export const aboutNavigation: aboutNavigationInterface[] = [
  {
    id: 1,
    name: "Whatsapp",
    label: FaWhatsapp,
    description: "Contact us on WhatsApp",
    path: "https://wa.me/message/EZRVDNWS56I3E1",
  },
  {
    id: 2,
    name: "Facebook",
    label: FaFacebook,
    description: "Follow us on Twitter",
    path: "https://www.facebook.com/Starmarketings9?mibextid=ZbWKwL",
  },
  {
    id: 3,
    name: "LinkedIn",
    label: FaLinkedinIn,
    description: "Connect with us on LinkedIn",
    path: "https://www.linkedin.com/company/star-marketings/",
  },
  {
    id: 3,
    name: "Instagram",
    label: FaInstagram,
    description: "Connect with us on LinkedIn",
    path: "https://www.instagram.com/star_marketings?igsh=MXdiank3MXVhNmZ1bQ==",
  },
];

export interface servicesNavigation {
  id: number;
  title: string;
  image: StaticImageData | string;
  path: string;
}

export const servicesNavigation: servicesNavigation[] = [
  {
    id: 1,
    image: serviceapp,
    title: "App Development",
    path: "/services/app-development",
  },
  {
    id: 2,
    image: serviceweb,
    title: "Web Development",
    path: "/services/web-development",
  },

  {
    id: 3,
    image: servicesass,
    title: "SaaS Building",
    path: "/services/saas-development",
  },
  {
    id: 4,
    image: servicedesign,
    title: "Graphic Designing",
    path: "/services/graphics-design",
  },
  {
    id: 5,
    image: servicephtography,
    path: "/services/social-media-marketing",
    title: "Social Media Marketing",
  },
  {
    id: 5,
    image: productphoto1,
    path: "/services/product-photography",
    title: "Product Photography",
  },
];
export interface AboutUsContentInterface {
  section: string;
  title?: string;
  content?: string;
  points?: string[];
}

export const AboutUsContent: AboutUsContentInterface[] = [
  {
    section: "HeroSection",
    title: "About Us",
    content:
      "Accelerating your digital experience with path-breaking innovations",
  },
  {
    section: "Mission",
    title: "Our Mission",
    content:
      "At Star Marketing, we believe that every brand has the potential to shine brilliantly in its own unique way. Founded on the principles of innovation, creativity, and dedication, we've embarked on a mission to help businesses of all sizes reach for the stars and beyond.",
  },
  {
    section: "Craftsmanship",
    title: "High-Quality Craftsmanship",
    content:
      "We are redefining the path of your growth with high-quality craftsmanship by leveraging disruptive technologies.",
  },
  {
    section: "InnovativeSolutions",
    title: "Innovative Solutions",
    content:
      "Innovative Solutions: At Star Marketing, we don't just follow trends – we set them. Our team is constantly exploring new ideas and technologies to ensure that your brand stays ahead of the curve in a rapidly evolving marketplace.",
  },
  {
    section: "TailoredApproach",
    title: "Tailored Approach",
    content:
      "We understand that every brand is unique, which is why we take a personalized approach to every project. From the initial consultation to the final deliverables, we work closely with you to understand your goals and tailor our strategies to meet your specific needs.",
  },
  {
    section: "Points",
    title: "Key Points",
    points: [
      "Proven track record of delivering results for clients",
      "Creativity at the heart of everything we do",
      "Transparent communication throughout the process",
      "Dedicated support from our professional team",
      "Years of experience in the industry",
      "Fast turnaround times without compromising quality",
    ],
  },
];

//  services Array and Interface
//  services Array and Interface

// App Service Array

export interface AppBenifitsPoints {
  tag: string;
  content: string;
}

export interface AppBenifits {
  section: string;
  benefitPoints: AppBenifitsPoints[];
}

export interface AppServiceInterface {
  headerSection: string;
  headerContent?: string;
  serviceBenefits?: AppBenifits;
}

export const appServiceArray: AppServiceInterface[] = [
  {
    headerSection: "App Development",
    headerContent:
      "In today's digital world, mobile applications are essential tools for businesses and individuals. Custom app development offers tailored solutions to address unique needs and goals, whether you're a startup or an established enterprise.",
  },
  {
    headerSection: "The Benefits of Mobile-First Web Application Design",
    serviceBenefits: {
      section: "Benefits",
      benefitPoints: [
        {
          tag: "Improved User Experience (UX)",
          content:
            "Mobile-first design creates cleaner, more intuitive interfaces, enhancing the user experience across all devices.",
        },
        {
          tag: "Faster Loading Times",
          content:
            "Prioritizing performance optimization results in lighter web pages that load quickly, benefiting all users.",
        },
        {
          tag: "Responsive Design",
          content:
            "A mobile-first approach ensures a consistent and enjoyable experience on any device.",
        },
        {
          tag: "SEO Benefits",
          content:
            "Mobile-friendly websites rank higher on search engines, boosting your site's visibility.",
        },
        {
          tag: "Increased Reach",
          content:
            "With more people using mobile devices, a mobile-first approach maximizes your reach and user base.",
        },
        {
          tag: "Enhanced Accessibility",
          content:
            "Designing for mobile encourages adherence to accessibility standards, benefiting all users.",
        },
        {
          tag: "Cost-Efficiency",
          content:
            "Focusing on core features first streamlines development and reduces costs, ensuring agility and scalability.",
        },
        {
          tag: "Competitive Advantage",
          content:
            "Delivering a superior mobile experience helps differentiate your application and attract more users.",
        },
      ],
    },
  },
  {
    headerSection: "Tailored Solutions for Every Business",
    headerContent:
      "Off-the-shelf solutions can be limiting. Custom app development brings your vision to life with a solution crafted to meet your specific requirements. From user interfaces to backend systems, everything is designed with your business objectives in mind.",
  },
  {
    headerSection: "Seamless Integration and Scalability",
    headerContent:
      "Custom apps integrate seamlessly with existing systems and processes. They can scale to accommodate growth and evolving requirements, ensuring long-term viability and flexibility.",
  },
  {
    headerSection: "Robust Security and Compliance",
    headerContent:
      "Custom app development implements robust security measures tailored to your needs, protecting user data and mitigating risks. Compliance with industry regulations ensures trust and peace of mind.",
  },
];

// Web Service Array

export interface WebBenefitPoint {
  tag: string;
  content: string;
}

export interface WebBenefits {
  section: string;
  benefitPoints: WebBenefitPoint[];
}

export interface WebServiceSection {
  headerSection: string;
  headerContent?: string;
  serviceBenefits?: WebBenefits[];
}

export const webServiceArray: WebServiceSection[] = [
  {
    headerSection: "The Significance of Web Development",
    headerContent:
      "Web development involves designing, building, and maintaining websites to ensure functionality and user-friendliness. Understanding web development is essential for businesses and aspiring developers alike.",
  },
  {
    headerSection: "Front-End Development",
    headerContent:
      "Front-end development focuses on the visible part of a website. It involves HTML, CSS, and JavaScript to create structure, layout, and interactivity, ensuring an optimal user experience.",
  },
  {
    headerSection: "Back-End Development",
    headerContent:
      "Back-end development works behind the scenes, involving server-side scripting, databases, and server management. Common languages include Python, Ruby, PHP, and Node.js.",
  },
  {
    headerSection: "Full-Stack Development",
    headerContent:
      "Full-stack developers are proficient in both front-end and back-end technologies, making them versatile and capable of handling every aspect of a website.",
  },
  {
    headerSection: "Content Management Systems (CMS)",
    headerContent:
      "CMS platforms like WordPress, Joomla, and Drupal offer user-friendly interfaces and pre-built themes, simplifying the web development process for those with limited coding knowledge.",
  },

  {
    headerSection: "SEO and Web Development",
    serviceBenefits: [
      {
        section: "SEO and Web Development",
        benefitPoints: [
          {
            tag: "Page Load Speed",
            content:
              "Faster loading pages are favored by search engines and users.",
          },
          {
            tag: "Mobile Responsiveness",
            content:
              "Websites must be mobile-friendly to rank well as mobile traffic grows.",
          },
          {
            tag: "Optimized Content",
            content:
              "Use relevant keywords and high-quality content to attract organic traffic.",
          },
          {
            tag: "Properly Structured HTML",
            content:
              "Clean, semantic HTML code is easier for search engines to understand.",
          },
          {
            tag: "User Experience",
            content:
              "A well-designed, user-friendly website encourages longer visits and lowers bounce rates.",
          },
        ],
      },
    ],
  },
];

// Saas Service Array

export const saasDevelopmentPlatformContent = [
  {
    section: "SaaS App Development",
    content:
      "Welcome to our SaaS development platform! We offer tools and services to help businesses build, deploy, and manage software applications in the cloud. Accelerate development, reduce costs, and scale effortlessly with our platform.",
  },
  {
    section: "Features",
    points: [
      {
        tag: "Scalable Infrastructure",
        content:
          "Handle increased traffic and workload without downtime with our highly scalable infrastructure.",
      },
      {
        tag: "Developer-Friendly Tools",
        content:
          "Streamline development with our range of developer-friendly tools and APIs.",
      },
      {
        tag: "Automated Deployment",
        content:
          "Deploy applications to the cloud effortlessly with our automated deployment pipelines.",
      },
      {
        tag: "Monitoring and Analytics",
        content:
          "Gain insights into application performance and usage with comprehensive monitoring and analytics.",
      },
      {
        tag: "Security and Compliance",
        content:
          "Ensure robust security and compliance with industry standards and regulations.",
      },
    ],
  },
  {
    section: "Pricing Plans",
    points: [
      {
        tag: "Basic Plan",
        content:
          "Ideal for startups and small businesses, offering essential features at an affordable price.",
      },
      {
        tag: "Pro Plan",
        content:
          "For growing businesses, includes additional features and resources to support scaling needs.",
      },
      {
        tag: "Enterprise Plan",
        content:
          "Tailored for large enterprises, offering custom solutions, dedicated support, and advanced features.",
      },
    ],
  },
  {
    section: "Getting Started",
    points: [
      {
        tag: "Sign Up",
        content: "Create an account on our platform to begin your journey.",
      },
      {
        tag: "Explore Documentation",
        content:
          "Access resources to learn more about our services and how to use them.",
      },
      {
        tag: "Support Team",
        content: "Connect with our support team for assistance and guidance.",
      },
    ],
  },
  {
    section: "Advanced Development Tools",
    points: [
      {
        tag: "Integrated Development Environment (IDE)",
        content:
          "Streamline your workflow with a powerful IDE featuring code highlighting, version control, and real-time collaboration.",
      },
      {
        tag: "CI/CD",
        content:
          "Automate build, test, and deployment processes with our CI/CD pipelines for rapid and reliable delivery.",
      },
      {
        tag: "Containerization and Orchestration",
        content:
          "Use Docker and Kubernetes to package and deploy applications efficiently.",
      },
    ],
  },
  {
    section: "Customization and Extensibility",
    points: [
      {
        tag: "Customizable Templates",
        content:
          "Kickstart projects with customizable templates and themes for a polished look.",
      },
      {
        tag: "Plugin Ecosystem",
        content:
          "Extend platform functionality with a rich ecosystem of plugins and extensions.",
      },
    ],
  },
  {
    section: "Collaboration and Team Management",
    points: [
      {
        tag: "Role-Based Access Control (RBAC)",
        content:
          "Define granular permissions to manage user roles within your organization.",
      },
      {
        tag: "Team Collaboration Features",
        content:
          "Enhance teamwork with shared workspaces, task management, and real-time messaging.",
      },
    ],
  },
  {
    section: "Educational Resources",
    points: [
      {
        tag: "Tutorials and Guides",
        content:
          "Access a comprehensive library of tutorials, guides, and documentation.",
      },
      {
        tag: "Webinars and Workshops",
        content:
          "Participate in interactive webinars and workshops hosted by industry experts.",
      },
    ],
  },
];

// graphic Content Array
// graphic Content Array

export interface GraphicsDesignContentInterface {
  section: string;
  title?: string;
  content?: string;
  image?: string | StaticImageData;
  points?: string[];
}

// Define the HeroBannerItem interface
interface HeroBannerItem {
  image: StaticImageData;
  heading: string;
  para: string;
  path: string;
}

// Define the structure of the HeroBannerArray

const HeroBannerArray: HeroBannerItem[] = [
  {
    image: serviceweb, // replace with the actual path to your image
    heading: "Web Development",
    para: "Expert solutions for web development.",
    path: "/web-development",
  },
  {
    image: serviceweb, // replace with the actual path to your image
    heading: "Mobile Development",
    para: "High-performance mobile applications.",
    path: "/mobile-development",
  },
  {
    image: serviceweb, // replace with the actual path to your image
    heading: "Mobile Development",
    para: "High-performance mobile applications.",
    path: "/mobile-development",
  },
  {
    image: serviceweb, // replace with the actual path to your image
    heading: "Mobile Development",
    para: "High-performance mobile applications.",
    path: "/mobile-development",
  },
  {
    image: serviceweb, // replace with the actual path to your image
    heading: "Mobile Development",
    para: "High-performance mobile applications.",
    path: "/mobile-development",
  },
  {
    image: serviceweb, // replace with the actual path to your image
    heading: "Mobile Development",
    para: "High-performance mobile applications.",
    path: "/mobile-development",
  },
];

import LogoDesigner from "./serviceillustartion/graphic/logoDesigner.webp";
import Packaging from "./serviceillustartion/graphic/packgingdesign.jpg";

import brandidentity from "./serviceillustartion/graphic/brandIdentity.jpg";

export interface GraphicsDesignContentInterface2 {
  section: SectionNames;
  title: string;
  content?: string;
  image?: StaticImageData;
  points?: string[];
}

// Define the section names as a union type
export type SectionNames =
  | "LogoDesign"
  | "PackagingDesign"
  | "BrandIdentity"
  | "WhyChooseUs"
  | "HowWeWork";

// Define the content array as an array of objects
export const GraphicsDesignArray2: GraphicsDesignContentInterface2[] = [
  {
    section: "LogoDesign",
    title: "Logo Design",
    content:
      "Our logo design services help businesses create memorable and impactful brand identities. We work closely with our clients to understand their vision and create logos that reflect their values and resonate with their target audience.",
    image: LogoDesigner,
  },
  {
    section: "PackagingDesign",
    title: "Packaging Design",
    content:
      "Our packaging design services focus on creating visually appealing and functional packaging solutions that enhance product appeal and attract consumers. We design packaging that stands out on the shelf and communicates the brand's message effectively.",
    image: Packaging,
  },
  {
    section: "BrandIdentity",
    title: "Brand Identity",
    content:
      "Our brand identity services encompass creating cohesive visual elements including logos, color schemes, typography, and imagery that represent the essence of a brand. We help businesses establish a strong and consistent brand identity that resonates with their target audience.",
    image: brandidentity,
  },
  {
    section: "WhyChooseUs",
    title: "Why Choose Us?",
    points: [
      "Years of experience in the industry",
      "Professional logo design",
      "Stunning graphics for social media",
      "Eye-catching marketing materials",
      "Custom illustrations and artwork",
      "Creative solutions tailored to your brand",
      "Fast turnaround times without compromising quality",
    ],
  },
  {
    section: "HowWeWork",
    title: "How We Work",
    points: [
      "Schedule a consultation with our design experts.",
      "Collaborate on your vision and goals.",
      "Sit back and watch as we bring your ideas to life!",
    ],
  },
];

// graphic Content Array
// graphic Content Array

// Marketing  Content Array
// Marketing  Content Array

export interface MarketingArrayInterface {
  section: string;
  title?: string;
  content?: string;
  image?: string | StaticImageData;
  points?: string[];
}
import whysocialmedia from "./serviceillustartion/socialmediawhy.jpg";
import socialmediaimportance from "./serviceillustartion/socialmediaimportance.jpg";

export const MarketingArray: MarketingArrayInterface[] = [
  {
    section: "HeroSection",
    title: "Star Marketing",
    image: serviceapp,
    content: "Your partner for effective social media marketing solutions.",
  },
  {
    section: "BusinessResponsibility",
    title: "The Importance of Social Media",
    content:
      "Running a business is your prime responsibility. With the increase in the number of users hanging out on various social media platforms, businesses can no longer ignore the power of these platforms to reach their customers. But the problem is that most businesses do not have the proper knowledge and the expertise to use these platforms to their full potential.",
    image: socialmediaimportance,
  },
  {
    section: "WhySocialMediaMarketing",
    title: "Why does your business need to have social media marketing?",
    content:
      "Social media plays a crucial role in affecting public opinion about your brand. That is why various brands use platforms such as Facebook, Twitter, LinkedIn, Instagram, and Snapchat to enter into an authoritative dialogue with their fans.",
    image: whysocialmedia,
    points: [
      "Successful social media marketing campaigns combine incredible storytelling and business communication with the advanced targeting capabilities of social networks to achieve business goals.",
      "Social media marketing companies develop various strategies that adequately use organic content and paid ads to reach your relevant audience.",
    ],
  },
];

// Marketing  Content Array
// Marketing  Content Array

// Product PhotoGraphy  Service Array
// Product PhotoGraphy  Service Array

// Product PhotoGraphy  Service Array
// Product PhotoGraphy  Service Array

import p1 from "./productphotography/productphotogray1.jpg";
import p2 from "./productphotography/productphotogray2.jpg";
import p3 from "./productphotography/productphotogray3.jpg";
import p4 from "./productphotography/productphotogray4.jpg";
import p5 from "./productphotography/productphotogray5.jpg";
import p6 from "./productphotography/productphotogray6.jpg";
import ppbanner from "./productphotography/productphotographybanner.jpg";
import path from "path";

export interface ProductPhotographyContentInterface {
  section: string;
  title?: string;
  content?: string;
  image?: string | StaticImageData;
  points?: StaticImageData[];
}

export const ProductPhotographyArray: ProductPhotographyContentInterface[] = [
  {
    section: "HeroSection",
    title: "Product Photography",
    content:
      "Capture the essence of your products with our professional photography services.",
    image: ppbanner,
  },
  {
    section: "ExploreDetail",
    title: "Explore Exquisite Detail",
    content:
      "Our photo shoot captures the intricate details and luxurious craftsmanship of all types of products. From the fine stitching to the premium materials used, every aspect is meticulously crafted to ensure quality and durability.",
    image: p1,
  },
  {
    section: "Versatility",
    title: "Unmatched Versatility",
    content:
      "Whether you're stepping into the boardroom or attending a special event, all types of products effortlessly complement any occasion. With its timeless design and versatile appeal, it's the perfect addition to your wardrobe.",
    image: p2,
  },
  {
    section: "ExperienceLuxury",
    title: "Experience Luxury, Feel Confidence",
    content:
      "Indulge in luxury with all types of products. As you browse through our stunning images, envision yourself adorned in elegance and sophistication. With all types of products, confidence becomes your ultimate accessory.",
    image: p3,
  },
  {
    section: "ShopCollection",
    title: "Shop the Collection",
    content:
      "Ready to elevate your style? Explore our collection of [Product Name] and discover the perfect pieces to enhance your wardrobe. Click 'Buy Now' to make these exquisite items yours today.",
    image: p4,
  },
  {
    section: "Gallery",
    title: "Gallery",
    content:
      "From sleek silhouettes to intricate details, our gallery invites you to immerse yourself in luxury. Witness the exquisite craftsmanship and premium materials that define our products.",
    image: "/path/to/gallery-image1.jpg",
    points: [p1, p2, p3, p4, p5, p6],
  },
  {
    section: "ProductPackaging",
    title: "Product Packaging",
    content:
      "At Star Marketing, we believe that every product deserves packaging as unique and captivating as the product itself. With our passion for design and commitment to excellence, we specialize in creating bespoke packaging solutions that make your products stand out on the shelf and leave a lasting impression on your customers.",
    image: p5,
  },
  {
    section: "CreativeDesign",
    title: "Creative Design",
    content:
      "Our team of experienced designers combines creativity with technical expertise to bring your vision to life. Whether you're looking for sleek and modern packaging or something whimsical and playful, we'll work with you to create a design that captures the essence of your brand and resonates with your customers.",
    image: p6,
  },
];

//  services Array and Interface
//  services Array and Interface
