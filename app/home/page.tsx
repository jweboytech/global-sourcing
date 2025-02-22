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

export interface HomePageProps {
  onNext: (param: string) => () => void;
}

const HomePage = () => {
  const [step, setStep] = React.useState("signin");

  const handleChangeStep = (entry: string) => () => {
    setStep(entry);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle />
          {step === "signin" && <Signin onNext={handleChangeStep} />}
          {step === "signup" && <Signup onNext={handleChangeStep} />}
        </DialogContent>
      </Dialog>
      <Dialog open>
        <DialogTrigger>Message Dialog</DialogTrigger>
        <DialogContent className="max-w-[800px]">
          <DialogTitle />
          <BasicInfo />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;
