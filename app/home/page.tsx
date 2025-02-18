import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Signin from "./components/signin";

const HomePage = () => {
  return (
    <div>
      <Dialog open>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle />
          <Signin />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;
