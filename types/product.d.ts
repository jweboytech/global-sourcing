type Product = {
  createdAt: number;
  customData: string;
  description: string;
  id: string;
  imageUrl: string;
  importMeta: string;
  name: string;
  status: string;
  taxCategory: string;
  type: string;
  updatedAt: number;
  prices: Price[];
};

type Price = {
  billingCycle: { interval: string; frequency: number };
  createdAt: number;
  customData: string;
  description: string;
  id: string;
  importMeta: string;
  name: string;
  productId: string;
  quantity: { minimum: number; maximum: number };
  status: string;
  taxMode: string;
  trialPeriod: {
    interval: string;
    frequency: number;
    requires_payment_method: true;
  };
  type: string;
  unitPrice: { amount: string; currencyCode: string };
  unitPriceOverrides: any[];
  updatedAt: number;
};
