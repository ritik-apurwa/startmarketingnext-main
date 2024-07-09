import Footer from "@/components/designs/footer/Footer";
import Navbar from "@/components/designs/navbar/Navbar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section  className="flex flex-col  bg-[#E5E5E5] w-screen  min-h-screen">
      <div>
        <Navbar />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
}
