export type ActivityItem = {
  id: number;
  title: string;
  description?: string;
  time: string;
  completed: boolean;
};

export const activityLog: ActivityItem[] = [
  {
    id: 1,
    title: "Order is Placed",
    time: "23/01/2025 at 02:50 PM",
    completed: true,
  },
  {
    id: 2,
    title: "Order is In progress",
    time: "23/01/2025 at 02:50 PM",
    completed: true,
  },
  {
    id: 3,
    title: "Order is Modified",
    description:
      "Items added by Sara Jordon; 1x Chicken Burger, Updated Total",
    time: "23/01/2025 at 02:56 PM",
    completed: true,
  },
  {
    id: 4,
    title: "Order is Ready",
    time: "23/01/2025 at 03:03 PM",
    completed: true,
  },
  {
    id: 5,
    title: "Order Served",
    description: "By Sara Jordon",
    time: "23/01/2025 at 03:06 PM",
    completed: true,
  },
  {
    id: 6,
    title: "Payment Done",
    time: "",
    completed: false,
  },
  {
    id: 7,
    title: "Order Closed",
    time: "",
    completed: false,
  },
];
