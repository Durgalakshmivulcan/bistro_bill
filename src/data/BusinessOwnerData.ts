/* ============================
   Revenue Statistics (WITH ICONS)
============================ */

export interface RevenueStat {
  id: number;
  title: string;
  value: string;
  icon: string;
  iconBg: string;
}

export const revenueStats: RevenueStat[] = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹ 1,25,000",
    icon: "💰",
    iconBg: "bg-purple-100",
  },
  {
    id: 2,
    title: "Given Discount Amount",
    value: "₹ 5,000",
    icon: "✂️",
    iconBg: "bg-green-100",
  },
  {
    id: 3,
    title: "Charges Collected",
    value: "₹ 12,000",
    icon: "💳",
    iconBg: "bg-indigo-100",
  },
  {
    id: 4,
    title: "Non-Chargeable Orders Revenue",
    value: "₹ 2,000",
    icon: "🧾",
    iconBg: "bg-orange-100",
  },
  {
    id: 5,
    title: "Cancelled Orders Revenue",
    value: "₹ 1,000",
    icon: "❌",
    iconBg: "bg-gray-100",
  },
  {
    id: 6,
    title: "Take Away Revenue",
    value: "₹ 20,000",
    icon: "🍔",
    iconBg: "bg-yellow-100",
  },
  {
    id: 7,
    title: "Dine In Revenue",
    value: "₹ 35,000",
    icon: "🍽️",
    iconBg: "bg-blue-100",
  },
  {
    id: 8,
    title: "Subscriptions Revenue",
    value: "₹ 10,000",
    icon: "🎫",
    iconBg: "bg-pink-100",
  },
];


/* ============================
   Order Metrics (Charts)
============================ */

export interface MonthlyOrderMetric {
  month: string;
  online: number;
  offline: number;
}

export const monthlyOrderMetrics: MonthlyOrderMetric[] = [
  { month: "Jan", online: 120, offline: 80 },
  { month: "Feb", online: 140, offline: 90 },
  { month: "Mar", online: 160, offline: 110 },
  { month: "Apr", online: 150, offline: 100 },
  { month: "May", online: 180, offline: 120 },
  { month: "Jun", online: 200, offline: 140 },
  { month: "Jul", online: 220, offline: 160 },
  { month: "Aug", online: 210, offline: 150 },
  { month: "Sep", online: 230, offline: 170 },
  { month: "Oct", online: 250, offline: 190 },
  { month: "Nov", online: 270, offline: 210 },
  { month: "Dec", online: 300, offline: 240 },
];


/* ============================
   Average Values
============================ */

export interface AverageMetric {
  label: string;
  percentage: number;
}

export const averageMetrics: AverageMetric[] = [
  { label: "Average Online Order Cost", percentage: 56 },
  { label: "Average Offline Order Cost", percentage: 40 },
  { label: "Average Delivery Cost", percentage: 72 },
  { label: "Average Discount Cost", percentage: 30 },
  { label: "Average Tax Cost", percentage: 18 },
];


/* ============================
   Product Ranking
============================ */

export interface ProductRanking {
  product: string;
  sales: number;
  revenue: string;
}

export const productRankingData: ProductRanking[] = [
  { product: "Burger", sales: 120, revenue: "₹12,500" },
  { product: "Pizza", sales: 98, revenue: "₹11,800" },
  { product: "Sandwich", sales: 85, revenue: "₹9,400" },
  { product: "Pasta", sales: 70, revenue: "₹8,100" },
  { product: "Fries", sales: 60, revenue: "₹6,900" },
];


/* ============================
   Brand Ranking
============================ */

export interface BrandRanking {
  brand: string;
  stores: number;
  revenue: string;
}

export const brandRankingData: BrandRanking[] = [
  { brand: "Foodies Hub", stores: 15, revenue: "₹75,000" },
  { brand: "Burger Town", stores: 10, revenue: "₹62,000" },
  { brand: "Pizza World", stores: 8, revenue: "₹55,500" },
  { brand: "Snack Stop", stores: 6, revenue: "₹41,200" },
];


/* ============================
   Branch Ranking
============================ */

export interface BranchRanking {
  branch: string;
  orders: number;
  revenue: string;
}

export const branchRankingData: BranchRanking[] = [
  { branch: "Bangalore", orders: 450, revenue: "₹92,000" },
  { branch: "Chennai", orders: 380, revenue: "₹81,500" },
  { branch: "Hyderabad", orders: 320, revenue: "₹69,200" },
  { branch: "Coimbatore", orders: 290, revenue: "₹60,800" },
];
