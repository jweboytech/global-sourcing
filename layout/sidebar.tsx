"use client";

import { LogOut, User } from "lucide-react";
import React from "react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import Link from "next/link";
import localStorage from "@/utils/storage";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { postFetcher } from "@/utils/request/fetcher";

interface Menu {
  path: string;
  name: string;
  icon: IconName;
}

const MENUS: Menu[] = [
  {
    path: "/dashboard/profile",
    name: "profile",
    icon: "user",
  },
];

const EXTRA_MENUS: Menu[] = [
  {
    path: "/home",
    name: "profile",
    icon: "user",
  },
];

const Sidebar = () => {
  const { data } = useSWR<User>("/user/detail", postFetcher);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.remove("userToken");
    router.push("/home");
  };

  return (
    <section className="w-56 px-6 py-6">
      <ul className="flex h-full flex-col justify-between">
        {MENUS.map((item) => (
          <Link href={item.path} key={item.name}>
            <li className="flex items-center gap-2">
              <DynamicIcon name={item.icon} />
              <span className="capitalize">{item.name}</span>
            </li>
          </Link>
        ))}
        <li className="flex justify-between items-center gap-2">
          <div className="inline-flex gap-2 items-center">
            <div className="bg-primary w-8 h-8 rounded-full" />
            <span className="text-sm">{data?.email.split("@")[0]}</span>
          </div>
          <LogOut size={16} onClick={handleLogout} className="cursor-pointer" />
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
