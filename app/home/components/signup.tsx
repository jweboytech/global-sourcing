"use client";

import InputField from "@/components/form/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { getGoogleWindowParams } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HomePageProps } from "../page";
import useSWR from "swr";
import { getFetcher } from "@/utils/request/fetcher";

const schema = z.object({
  email: z
    .string({ message: "Enter your email" })
    .email({ message: "invalid email address" }),
  password: z.string({ message: "Enter your password" }),
});

const Signup = () => {
  const data = useSWR("/user/googleLoginUrl", getFetcher);
  const router = useRouter();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const submitForm = (values: z.infer<typeof schema>) => {
    console.log(values);
    router.push("/dashboard");
  };

  const handleGoogleAuth = () => {
    const params = getGoogleWindowParams();
    const url = "/user/googleLogin";
    console.log(data);

    // window.open(url, "New Window", params);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Sign up</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)}>
          <div className="flex flex-col gap-6">
            <InputField
              control={form.control}
              name="email"
              placeholder="Enter your email"
            />
            {/* <InputField
              control={form.control}
              name="password"
              placeholder="Enter your password"
            /> */}
            <Button type="submit" size="xl" fullWidth>
              Sign up
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex flex-col gap-5">
        <p className="text-sm text-center">
          <span>Already have an account?&nbsp;&nbsp;</span>
          <span className="underline font-semibold cursor-pointer">
            Sign in
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="border w-[120px] h-[1px]" />
        <span>Or continue with</span>
        <div className="border w-[120px] h-[1px]" />
      </div>
      <div className="flex gap-4 justify-center">
        <Image
          onClick={handleGoogleAuth}
          className="cursor-pointer"
          src="https://pub-f155f595f2134bd79c1604322dd08db6.r2.dev/google.png"
          alt="google icon"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};

export default Signup;
