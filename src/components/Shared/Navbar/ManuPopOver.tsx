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
        <Button
          onClick={() => signOut()}
          className="hover:bg-gray-400 w-full flex justify-start"
          variant="ghost"
        >
          <MdDashboard />
          Dashboard
        </Button>
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
