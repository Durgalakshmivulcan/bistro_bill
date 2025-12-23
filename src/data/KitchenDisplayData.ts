// ✅ Item-level (controls row color only)
export interface OrderItem {
  name: string;
  variant?: string;
  qty: number;
  status?: "ready" | "preparing" | "normal";
}

// ✅ Order-level (card stays white)
export interface Order {
  id: string;
  time: string;        // 00:01
  orderTime: string;   // 06:38 PM
  kot: string;
  type: string;        // Dine In / Take Away / Delivery
  source?: string;     // Zomato / Bistro Bill
  table: string;
  items: OrderItem[];
}

// ✅ Column-level (only grouping, NOT coloring cards)
export interface KDSColumn {
  key: "new" | "ready" | "served" | "cancelled";
  title: string;
  borderColor: string;
  headerBg: string;
  orders: Order[];
}


export const kdsColumns: KDSColumn[] = [
  {
    key: "new",
    title: "New Orders (6)",
    borderColor: "border-blue-500",
    headerBg: "bg-blue-50",
    orders: [
      {
        id: "#ORD-0803",
        time: "00:01",
        orderTime: "06:38 PM",
        kot: "01",
        type: "Dine In",
        source: "Bistro Bill",
        table: "Table No: T-01 | Non-AC | Floor-01",
        items: [
          {
            name: "Keema Khichdi",
            variant: "Extra Spicy",
            qty: 1,
            status: "preparing",
          },
          {
            name: "Special Chicken Biryani",
            variant: "Small (500g)",
            qty: 1,
            status: "normal",
          },
        ],
      },
      {
        id: "#ORD-0804",
        time: "03:01",
        orderTime: "06:38 PM",
        kot: "04",
        type: "Dine In",
        source: "Bistro Bill",
        table: "Table No: T-02 | AC | Floor-01",
        items: [
          {
            name: "Butter Naan",
            qty: 2,
            status: "normal",
          },
          {
            name: "Paneer Butter Masala",
            qty: 1,
            status: "normal",
          },
        ],
      },
      {
        id: "#ORD-0805",
        time: "02:45",
        orderTime: "06:38 PM",
        kot: "05",
        type: "Take Away",
        source: "Bistro Bill",
        table: "-",
        items: [
          {
            name: "Chicken 65",
            qty: 1,
            status: "preparing",
          },
          {
            name: "Veg Fried Rice",
            qty: 1,
            status: "ready",
          },
        ],
      },
      {
        id: "#ORD-0806",
        time: "01:30",
        orderTime: "06:38 PM",
        kot: "06",
        type: "Delivery",
        source: "Zomato",
        table: "-",
        items: [
          {
            name: "Mutton Biryani",
            qty: 1,
            status: "normal",
          },
          {
            name: "Raita",
            qty: 1,
            status: "ready",
          },
        ],
      },
    ],
  },

  // 🟢 READY
  {
    key: "ready",
    title: "Orders Ready (5)",
    borderColor: "border-green-500",
    headerBg: "bg-green-50",
    orders: [
      {
        id: "#ORD-0810",
        time: "08:10",
        orderTime: "06:38 PM",
        kot: "10",
        type: "Dine In",
        source: "Bistro Bill",
        table: "Table No: T-03 | AC | Floor-01",
        items: [
          {
            name: "Chicken Biryani",
            qty: 2,
            status: "ready",
          },
          {
            name: "Coke",
            qty: 2,
            status: "ready",
          },
        ],
      },
      {
        id: "#ORD-0811",
        time: "07:40",
        orderTime: "06:38 PM",
        kot: "11",
        type: "Take Away",
        source: "Bistro Bill",
        table: "-",
        items: [
          {
            name: "Veg Manchurian",
            qty: 1,
            status: "ready",
          },
          {
            name: "Egg Fried Rice",
            qty: 1,
            status: "ready",
          },
        ],
      },
      {
        id: "#ORD-0812",
        time: "06:55",
        orderTime: "06:38 PM",
        kot: "12",
        type: "Delivery",
        source: "Zomato",
        table: "-",
        items: [
          {
            name: "Paneer Tikka",
            qty: 1,
            status: "ready",
          },
          {
            name: "Butter Naan",
            qty: 3,
            status: "ready",
          },
        ],
      },
      {
        id: "#ORD-0813",
        time: "05:20",
        orderTime: "06:38 PM",
        kot: "13",
        type: "Dine In",
        source: "Bistro Bill",
        table: "Table No: T-05 | Non-AC | Floor-02",
        items: [
          {
            name: "Fish Fry",
            qty: 1,
            status: "ready",
          },
          {
            name: "Lemon Soda",
            qty: 2,
            status: "ready",
          },
        ],
      },
    ],
  },

  // ⚪ SERVED
  {
    key: "served",
    title: "Orders Served (6)",
    borderColor: "border-gray-500",
    headerBg: "bg-gray-50",
    orders: [
      {
        id: "#ORD-0814",
        time: "12:30",
        orderTime: "06:38 PM",
        kot: "14",
        type: "Dine In",
        source: "Bistro Bill",
        table: "Table No: T-06 | AC | Floor-01",
        items: [
          {
            name: "Hyderabadi Biryani",
            qty: 1,
            status: "normal",
          },
          {
            name: "Water Bottle",
            qty: 2,
            status: "normal",
          },
        ],
      },
      {
        id: "#ORD-0815",
        time: "11:45",
        orderTime: "06:38 PM",
        kot: "15",
        type: "Delivery",
        source: "Zomato",
        table: "-",
        items: [
          {
            name: "Veg Biryani",
            qty: 1,
            status: "normal",
          },
          {
            name: "Curd",
            qty: 1,
            status: "normal",
          },
        ],
      },
      {
        id: "#ORD-0816",
        time: "10:30",
        orderTime: "06:38 PM",
        kot: "16",
        type: "Take Away",
        source: "Bistro Bill",
        table: "-",
        items: [
          {
            name: "Chicken Lollipop",
            qty: 1,
            status: "normal",
          },
          {
            name: "French Fries",
            qty: 1,
            status: "normal",
          },
        ],
      },
      {
        id: "#ORD-0817",
        time: "09:50",
        orderTime: "06:38 PM",
        kot: "17",
        type: "Dine In",
        source: "Bistro Bill",
        table: "Table No: T-08 | Non-AC | Floor-02",
        items: [
          {
            name: "Veg Meals",
            qty: 2,
            status: "normal",
          },
          {
            name: "Sweet",
            qty: 2,
            status: "normal",
          },
        ],
      },
    ],
  },

  // 🔴 CANCELLED
  {
    key: "cancelled",
    title: "Cancelled Orders (5)",
    borderColor: "border-red-500",
    headerBg: "bg-red-50",
    orders: [
      {
        id: "#ORD-0818",
        time: "01:10",
        orderTime: "06:38 PM",
        kot: "18",
        type: "Delivery",
        source: "Zomato",
        table: "-",
        items: [
          {
            name: "Chicken Burger",
            qty: 2,
            status: "normal",
          },
          {
            name: "Cold Coffee",
            qty: 1,
            status: "normal",
          },
        ],
      },
      {
        id: "#ORD-0819",
        time: "00:45",
        orderTime: "06:38 PM",
        kot: "19",
        type: "Take Away",
        source: "Bistro Bill",
        table: "-",
        items: [
          {
            name: "Veg Pizza",
            qty: 1,
            status: "normal",
          },
          {
            name: "Garlic Bread",
            qty: 1,
            status: "normal",
          },
        ],
      },
      {
        id: "#ORD-0820",
        time: "00:30",
        orderTime: "06:38 PM",
        kot: "20",
        type: "Dine In",
        source: "Bistro Bill",
        table: "Table No: T-10 | AC | Floor-01",
        items: [
          {
            name: "Chicken Shawarma",
            qty: 1,
            status: "normal",
          },
          {
            name: "Mint Lemonade",
            qty: 1,
            status: "normal",
          },
        ],
      },
      {
        id: "#ORD-0821",
        time: "00:15",
        orderTime: "06:38 PM",
        kot: "21",
        type: "Delivery",
        source: "Zomato",
        table: "-",
        items: [
          {
            name: "Mutton Curry",
            qty: 1,
            status: "normal",
          },
          {
            name: "Rice",
            qty: 1,
            status: "normal",
          },
        ],
      },
    ],
  },
];

