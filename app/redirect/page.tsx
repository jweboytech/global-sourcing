"use client";

import localStorage from "@/utils/storage";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const RedirectPage = () => {
  React.useEffect(() => {
    // 使用 URLSearchParams 解析查询参数
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log(token);

    if (token != null) {
      localStorage.set("userToken", token);
      toast.success("登录成功");
      redirect("/dashboard/profile");
    }
  }, []);

  return null;
};

export default RedirectPage;
