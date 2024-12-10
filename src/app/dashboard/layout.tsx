import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SideNavbar from "@/components/Shared/SideNavbar/SideNavbar";
import React from "react";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col m-2">
      <div className="flex flex-grow gap-2">
        <SideNavbar />
        <div className="flex-grow">
          <Navbar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default dashboardLayout;
