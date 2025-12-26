import React from "react";
import { OrderItem } from "../../data/orderHistory";

const paymentTagStyles: Record<OrderItem["paymentTag"], string> = {
  Paid: "bg-black text-yellow-300",
  Unpaid: "bg-black text-white",
  Due: "bg-black text-blue-400",
  Free: "bg-black text-green-400",
  "Partial Paid": "bg-black text-yellow-300",
};

type Props = {
  order: OrderItem;
};

const OrderRow: React.FC<Props> = ({ order }) => {
  return (
    <tr className="border-b last:border-none">
      <td className="px-4 py-3 font-medium">{order.orderNo}</td>
      <td className="px-4 py-3">{order.branch}</td>

      <td className="px-4 py-3">
        <p>{order.customerName}</p>
        <p className="text-xs text-gray-500">{order.phone}</p>
      </td>

      <td className="px-4 py-3">{order.orderType}</td>
      <td className="px-4 py-3">{order.orderValue}</td>

      <td className="px-4 py-3">
        <span
          className={`px-2 py-1 rounded text-xs ${paymentTagStyles[order.paymentTag]}`}
        >
          {order.paymentTag}
        </span>
      </td>

      <td className="px-4 py-3">
        <p>{order.createdAt}</p>
        <p className="text-xs text-gray-500">{order.createdBy}</p>
      </td>

      <td className="px-4 py-3 text-lg cursor-pointer">⋮</td>
    </tr>
  );
};

export default OrderRow;
