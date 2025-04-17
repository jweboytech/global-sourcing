"use client";

import BasicInfo from "@/app/home/components/basicInfo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getFetcher, postFetcher } from "@/utils/request/fetcher";
import React from "react";
import useSWR from "swr";

const ProfilePage = () => {
  const { data } = useSWR<User>("/user/detail", postFetcher);
  return (
    <div className="px-6 py-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <Dialog>
            <DialogTitle />
            <DialogTrigger asChild>
              <Button variant="primary">Edit</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[800px]">
              <BasicInfo userId={data?.id} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="bg-white rounded-2xl px-4 py-4">
          {JSON.stringify(data, null, 2)}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
