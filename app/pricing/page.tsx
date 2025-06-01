"use client";

import { Button } from "@/components/ui/button";
import { getFetcher, postFetcher } from "@/utils/request/fetcher";
import { Coins, Star, User } from "lucide-react";
import React from "react";
import useSWR from "swr";
import { initializePaddle, Paddle } from "@paddle/paddle-js";
import { useTypedMutation } from "@/hooks/useTypedMutation";

const PricingPage = () => {
  const priceIdRef = React.useRef<string>("");
  const activeKeyRef = React.useRef(-1);
  const [paddle, setPaddle] = React.useState<Paddle>();
  const { trigger, isMutating } = useTypedMutation<
    { productId: string },
    string
  >("/order/create", postFetcher, {
    onSuccess(data) {
      paddle?.Checkout.open({
        items: [{ priceId: priceIdRef.current, quantity: 1 }],
        customData: { orderNo: data },
      });
    },
  });
  const { data: paymentToken } = useSWR(
    "/order/clientSideToken",
    getFetcher<string>
  );
  const { data, isLoading } = useSWR("/order/goods", getFetcher<Product[]>);
  const goods = React.useMemo(() => {
    if (Array.isArray(data)) {
      return data.sort((a, b) => {
        const price1 = a.prices[0];
        const price2 = b.prices[0];
        return (
          Number(price1.unitPrice.amount) - Number(price2.unitPrice.amount)
        );
      });
    }

    return [];
  }, [data]);

  const getCurrPrice = (prices: Price[]) => {
    const price = prices[0];
    const usdFormatter = new Intl.NumberFormat("en-US", {
      currency: price.unitPrice.currencyCode,
      style: "currency",
    });
    const result = (Number(price.unitPrice.amount) / 100).toFixed(2);
    return usdFormatter.format(Number(result));
  };

  const handlePayment = (data: Product, index: number) => () => {
    activeKeyRef.current = index;
    priceIdRef.current = data.prices[0]?.id;
    trigger({ productId: data.id });
  };

  React.useEffect(() => {
    if (paymentToken) {
      initializePaddle({
        environment: "sandbox",
        token: paymentToken,
      }).then((paddleInstance?: Paddle) => {
        if (paddleInstance) {
          setPaddle(paddleInstance);
        }
      });
    }
  }, [paymentToken]);

  return (
    !isLoading && (
      <div className="px-6 py-6">
        <div className="grid grid-cols-4 gap-4">
          {goods.map((item, index) => (
            <div
              className="bg-[#00000008] py-12 px-6 rounded-lg flex flex-col gap-3"
              key={item.id}
            >
              <div className="text-black font-bold text-2xl">{item.name}</div>
              <div className="flex items-end gap-1">
                <span className="text-[48px] font-semibold leading-none">
                  {getCurrPrice(item.prices)}
                </span>
                <span className="text-sm text-black/60">/month</span>
              </div>
              <div className="py-9">
                <Button
                  size="xl"
                  fullWidth
                  onClick={handlePayment(item, index)}
                  isLoading={isMutating && index === activeKeyRef.current}
                >
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
          ))}
          <div className="bg-[#00000008] py-12 px-6 rounded-lg flex flex-col gap-3">
            <div className="text-black font-bold text-2xl">Enterprise</div>
            <div className="flex items-end gap-1">
              <span className="text-[36px] font-semibold leading-none">
                Customer price
              </span>
            </div>
            <div className="py-9">
              <Button size="xl" fullWidth>
                Get started
              </Button>
            </div>
            <p className="flex flex-col gap-6 text-[#626573]">
              For organizations that require enterprise-level security and
              scalability for your business.
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default PricingPage;
