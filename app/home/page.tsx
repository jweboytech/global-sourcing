"use client";

import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Signin from "./components/signin";
import Signup from "./components/signup";
import BasicInfo from "./components/basicInfo";
import useSWR from "swr";
import { postFetcher } from "@/utils/request/fetcher";
import { Button } from "@/components/ui/button";

export interface HomePageProps {
  onNext: (param: string) => () => void;
}

const HomePage = () => {
  // const { data } = useSWR<User>("/user/detail", postFetcher, {
  //   revalidateOnFocus: false,
  // });

  return (
    <div className="flex">
      <section className="w-56 px-6 py-8 flex flex-col gap-4 bg-[#f8f8f8]">
        <Dialog>
          <DialogTrigger asChild>
            <div>
              <Button fullWidth>Sign in</Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle />
            <Signin />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary" fullWidth>
              Sign up
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle />
            <Signin />
          </DialogContent>
        </Dialog>
      </section>
      <main className="px-6 py-6 flex-1">
        <div className="flex h-full items-center justify-center w-full text-3xl font-medium">
          We&apos;re coming soon
        </div>
      </main>
    </div>
  );
};

export default HomePage;
