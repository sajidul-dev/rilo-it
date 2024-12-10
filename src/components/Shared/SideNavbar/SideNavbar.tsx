"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { ImBin2 } from "react-icons/im";
import { FiArrowRightCircle } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

const SideNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [dashboardOpen, setIsDashboardOpen] = useState<boolean>(true);
  const [productsOpen, setIsProductsOpen] = useState<boolean>(true);
  return (
    <div
      className={`${
        isOpen ? "w-[180px]" : "w-[80px]"
      } transition-all duration-300 ease-in ${
        pathname.includes("/inventory") && "hidden"
      }`}
    >
      <div className={`relative bg-gray-400 h-16 p-2 rounded-md`}>
        <p>This is SideNavbar</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-1/2 -right-2 -translate-y-1/2 cursor-pointer w-4 h-4 rounded-full border-2 border-blue-500 flex justify-center items-center"
        >
          <GoArrowLeft
            className={`${
              isOpen ? "rotate-0" : "rotate-180"
            } text-xs font-bold text-blue-500`}
          />
        </button>
      </div>
      <div className="mt-4 bg-gray-400 rounded-md p-2">
        <Button
          onClick={() => setIsDashboardOpen(!dashboardOpen)}
          variant="ghost"
          className="flex justify-start items-center gap-2 px-2 py-1 w-full"
        >
          <MdDashboard />
          <p>Dashboard</p>
        </Button>
        {dashboardOpen && (
          <>
            <Button
              onClick={() => setIsProductsOpen(!productsOpen)}
              variant="ghost"
              className="flex justify-start items-center gap-2 px-2 py-1 w-full"
            >
              <ImBin2 />
              <p>Products</p>
            </Button>
            {productsOpen && (
              <div className="ml-4">
                <Button
                  onClick={() => router.push("/dashboard/products/inventory")}
                  variant="ghost"
                  className="flex justify-start items-center gap-2 px-2 py-1 w-full"
                >
                  <FiArrowRightCircle />
                  <p>Inventory</p>
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SideNavbar;
