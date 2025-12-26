import OrderCard from "./OrderCard";

const ORDERS = [
  {
    id: "ORD-0803",
    customer: "Paul Rey",
    initials: "C",
    payment: "Paid",
    type: "Catering",
    time: "06:30 PM",
    total: 610,
    items: [
      { name: "Scrambled eggs", price: 150 },
      { name: "Smoked Salmon Bagel", price: 980 },
      { name: "Belgian Waffles", price: 50 },
      { name: "Classic Lemonade", price: 80 },
    ],
  },
  {
    id: "ORD-2001",
    customer: "Maja B",
    initials: "TA",
    payment: "Partial Paid",
    type: "Take Away",
    time: "06:12 PM",
    total: 902,
    items: [
      { name: "Scrambled eggs", price: 150 },
      { name: "Smoked Salmon Bagel", price: 980 },
      { name: "Belgian Waffles", price: 50 },
      { name: "Classic Lemonade", price: 80 },
      { name: "Greek Gyro Plate", price: 300 },
    ],
  },
];

export default function OrdersList() {
  return (
    <div className="p-3 sm:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ORDERS.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
