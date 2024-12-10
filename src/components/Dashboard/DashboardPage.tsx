"use client";
import { useSession } from "next-auth/react";
import React from "react";

const DashboardPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      Hello, {session?.user?.firstName} {session?.user?.lastName}. Welcome to
      dashboard.
    </div>
  );
};

export default DashboardPage;
