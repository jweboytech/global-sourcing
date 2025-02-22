import { Button } from "@/components/ui/button";
import { Coins, Star, User } from "lucide-react";
import React from "react";

const PricingPage = () => {
  return (
    <div className="px-6 py-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#00000008] py-12 px-6 rounded-lg flex flex-col gap-3">
          <div className="text-black font-bold text-2xl">Free</div>
          <div className="flex items-end gap-1">
            <span className="text-[48px] font-semibold leading-none">$0</span>
            <span className="text-sm text-black/60">/month</span>
          </div>
          <div className="py-9">
            <Button size="xl" fullWidth>
              Get started
            </Button>
          </div>
          <ul className="flex flex-col gap-6 text-[#626573]">
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>1 Seat</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Coins size={20} />
              <span>10 Credits</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>Product management</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Star size={20} />
              <span>AI product generation</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>Invite suppliers to inquiry</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#00000008] py-12 px-6 rounded-lg flex flex-col gap-3">
          <div className="text-black font-bold text-2xl">Free</div>
          <div className="flex items-end gap-1">
            <span className="text-[48px] font-semibold leading-none">$29</span>
            <span className="text-sm text-black/60">/month</span>
          </div>
          <div className="py-9">
            <Button size="xl" fullWidth>
              Get started
            </Button>
          </div>
          <ul className="flex flex-col gap-6 text-[#626573]">
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>1 Seat</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Coins size={20} />
              <span>10 Credits</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>Product management</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Star size={20} />
              <span>AI product generation</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>Invite suppliers to inquiry</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#00000008] py-12 px-6 rounded-lg flex flex-col gap-3">
          <div className="text-black font-bold text-2xl">Free</div>
          <div className="flex items-end gap-1">
            <span className="text-[48px] font-semibold leading-none">$0</span>
            <span className="text-sm text-black/60">/month</span>
          </div>
          <div className="py-9">
            <Button size="xl" fullWidth>
              Get started
            </Button>
          </div>
          <ul className="flex flex-col gap-6 text-[#626573]">
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>1 Seat</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Coins size={20} />
              <span>10 Credits</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>Product management</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Star size={20} />
              <span>AI product generation</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>Invite suppliers to inquiry</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#00000008] py-12 px-6 rounded-lg flex flex-col gap-3">
          <div className="text-black font-bold text-2xl">Free</div>
          <div className="flex items-end gap-1">
            <span className="text-[48px] font-semibold leading-none">$0</span>
            <span className="text-sm text-black/60">/month</span>
          </div>
          <div className="py-9">
            <Button size="xl" fullWidth>
              Get started
            </Button>
          </div>
          <ul className="flex flex-col gap-6 text-[#626573]">
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>1 Seat</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Coins size={20} />
              <span>10 Credits</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>Product management</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Star size={20} />
              <span>AI product generation</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <User size={20} />
              <span>Invite suppliers to inquiry</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
