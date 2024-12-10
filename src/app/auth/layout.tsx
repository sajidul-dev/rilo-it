import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <main className="flex grow">{children}</main>
      <Footer />
    </div>
  );
};

export default authLayout;
