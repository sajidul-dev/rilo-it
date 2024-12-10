"use client";
import React from "react";
import styles from "./styles.module.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { ManuPopOver } from "./ManuPopOver";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <nav
      className={`${styles.container} ${
        pathname.includes("dashboard") ? "rounded-md" : ""
      }`}
    >
      <Link href="/">Logo</Link>
      <div className="">RILO IT</div>
      <div className={styles.buttons}>
        {!session?.user.email && (
          <>
            {(pathname === "/register" || "/") && (
              <Link href="/auth/login">
                <Button variant="destructive">Login</Button>
              </Link>
            )}
            {(pathname === "/login" || "/") && (
              <Link href="/auth/register">
                <Button variant="outline">Register</Button>
              </Link>
            )}
          </>
        )}
        {session?.user.email && <ManuPopOver />}
      </div>
    </nav>
  );
};

export default Navbar;
