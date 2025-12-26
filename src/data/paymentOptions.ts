export type PaymentOption = {
  id: number;
  name: string;
  enabled: boolean;
};

export const paymentOptions: PaymentOption[] = [
  { id: 1, name: "Gift Card", enabled: true },
  { id: 2, name: "Card", enabled: false },
  { id: 3, name: "UPI", enabled: true },
];
