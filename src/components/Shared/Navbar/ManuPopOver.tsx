import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";

export function ManuPopOver() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="destructive">
          <FaRegUser />
          My Account
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 flex flex-col justify-start items-center gap-3 cursor-pointer p-2">
        <Link
          href="/dashboard"
          className="hover:bg-gray-400 w-full flex justify-start items-center px-4 py-2 gap-2 rounded-md"
        >
          <MdDashboard />
          Dashboard
        </Link>
        <Button
          onClick={() => signOut()}
          className="hover:bg-gray-400 w-full flex justify-start"
          variant="ghost"
        >
          <FiLogOut /> Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
}
