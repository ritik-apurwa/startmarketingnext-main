import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title:
    "Star Marketing - Web Apps, SaaS, Logo & Design, Social Marketing, Web Provider",
  description:
    "Star Marketing offers comprehensive services including web app development, SaaS solutions, logo and design, social marketing, and web provider services.",
  keywords:
    "Star Marketing, web app development, SaaS, logo design, graphic design, social marketing, web provider, digital marketing, branding, online marketing",
  openGraph: {
    title:
      "Star Marketing - Your Partner in Web Apps, SaaS, Logo & Design, and Social Marketing",
    description:
      "Discover Star Marketing's full range of services, including web app development, SaaS solutions, logo and design, social marketing, and more.",
    type: "website",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Star Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@StarMarketing",
    title:
      "Star Marketing - Web Apps, SaaS, Logo & Design, Social Marketing, Web Provider",
    description:
      "Star Marketing offers comprehensive services including web app development, SaaS solutions, logo and design, social marketing, and web provider services.",
    images: "https://yourwebsite.com/twitter-image.jpg",
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background  font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
