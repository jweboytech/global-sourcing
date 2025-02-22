import MainLayout from "@/layout/dashboard";
import React from "react";

const DashboardLayout = ({ children }: BaseProps) => {
  return <MainLayout>{children}</MainLayout>;
};

export default DashboardLayout;
