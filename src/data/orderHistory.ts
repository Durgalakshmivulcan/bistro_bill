export type OrderItem = {
  id: number;
  orderNo: string;
  branch: string;
  customerName: string;
  phone: string;
  orderType: string;
  orderValue: string;
  paymentTag: "Paid" | "Unpaid" | "Due" | "Free" | "Partial Paid";
  createdAt: string;
  createdBy: string;
};

export const orders: OrderItem[] = [
  {
    id: 1,
    orderNo: "#ORD-2231",
    branch: "Hitech City",
    customerName: "Priya Gupta",
    phone: "+91 912345678",
    orderType: "Dine In",
    orderValue: "₹ 1231.00",
    paymentTag: "Partial Paid",
    createdAt: "20/01/2025, 02:23 PM",
    createdBy: "Sara Jordon",
  },
  {
    id: 2,
    orderNo: "#ORD-1060",
    branch: "Hitech City",
    customerName: "Vivek",
    phone: "+91 934567812",
    orderType: "Dine In",
    orderValue: "₹ 2310.00",
    paymentTag: "Paid",
    createdAt: "20/01/2025, 02:23 PM",
    createdBy: "Sara Jordon",
  },
];
