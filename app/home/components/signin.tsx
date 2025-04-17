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
import { DASHBOARD, REQUEST_BASE_URL } from "@/constants/common";
import useSWRMutation from "swr/mutation";
import { getFetcher, postFetcher } from "@/utils/request/fetcher";
import toast from "react-hot-toast";
import localStorage from "@/utils/storage";

const schema = z.object({
  email: z
    .string({ message: "Enter your email" })
    .email({ message: "invalid email address" }),
  password: z.string().optional(),
});

const Signin = () => {
  const router = useRouter();
  const { trigger: postUserLogin, isMutating } = useSWRMutation(
    "/user/emailLogin",
    postFetcher,
    {
      onSuccess(data) {
        toast.success("登录成功");
        localStorage.set("userToken", data.userToken);
        router.push("/dashboard/profile");
      },
    }
  );
  const { trigger: sendEmailCode, isMutating: isSending } = useSWRMutation(
    "/email/send/code",
    postFetcher,
    {
      onSuccess() {
        toast.success("email 发送成功");
      },
    }
  );
  const { trigger } = useSWRMutation<{ data: string }, any, any, any>(
    "/user/googleLoginUrl",
    getFetcher,
    {
      onSuccess(data) {
        window.location.href = data;
      },
    }
  );
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "jweboy0630@gmail.com",
    },
  });

  const submitForm = (values: z.infer<typeof schema>) => {
    console.log(values);
    // router.push(DASHBOARD);
    if (!values.password) {
      sendEmailCode(values);
    } else {
      postUserLogin({ email: values.email, code: values.password });
    }
  };

  const handleGoogleAuth = () => {
    // const params = getGoogleWindowParams();
    // const url = "/user/googleLoginUrl";
    // window.open(url, "New Window", params);
    trigger();
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Sign in</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)}>
          <div className="flex flex-col gap-6">
            <InputField
              control={form.control}
              name="email"
              placeholder="Enter your email"
            />
            <InputField
              control={form.control}
              name="password"
              placeholder="Enter your password"
            />
            <Button
              type="submit"
              size="xl"
              isLoading={isMutating || isSending}
              fullWidth
            >
              Sign in
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex flex-col gap-5">
        <p className="text-sm text-center">
          <span>New to Accio?&nbsp;&nbsp;</span>
          <span className="underline font-semibold cursor-pointer">
            Sign up now
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

export default Signin;
