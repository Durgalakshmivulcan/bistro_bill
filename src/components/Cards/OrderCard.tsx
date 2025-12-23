import { Order } from "../../data/KitchenDisplayData";

interface Props {
  order: Order;
}

const getItemBg = (status?: string) => {
  if (status === "ready") return "bg-green-200";
  if (status === "preparing") return "bg-yellow-200";
  return "";
};

const OrderCard = ({ order }: Props) => {
  return (
    <div className="border rounded-md bg-white">

      {/* Header */}
      <div className="flex justify-between items-center px-2 py-1 border-b">
        <span className="font-medium text-sm">{order.id}</span>
        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
          {order.time}
        </span>
      </div>

      {/* Meta */}
      <div className="px-2 py-1 text-xs text-gray-600 space-y-0.5">
        <div className="flex justify-between">
          <span>KOT No: {order.kot}</span>
          <span>{order.orderTime}</span>
        </div>
        <div>
          {order.type}
          {order.source && ` | ${order.source}`}
        </div>
        <div>{order.table}</div>
      </div>

      {/* Items */}
      <div className="divide-y">
        {order.items.map((item, idx) => (
          <div
            key={idx}
            className={`px-2 py-1 text-xs ${getItemBg(item.status)}`}
          >
            <div className="font-medium">{item.name}</div>
            {item.variant && (
              <div className="italic text-gray-600">{item.variant}</div>
            )}
            <div className="flex justify-between items-center">
              <span>Qty: {item.qty}</span>

              {item.status === "ready" && (
                <span className="text-[10px] border border-green-600 text-green-700 px-1 rounded">
                  Ready
                </span>
              )}

              {item.status === "preparing" && (
                <span className="text-[10px] border border-yellow-600 text-yellow-700 px-1 rounded">
                  Preparing in 00:25:00
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer buttons (only where required) */}
      <div className="flex gap-2 p-2 border-t">
        <button className="text-xs border px-2 py-0.5 rounded">
          Select All
        </button>
        <button className="text-xs border px-2 py-0.5 rounded">
          Unselect All
        </button>
        <button className="text-xs border px-2 py-0.5 rounded">
          Prepare
        </button>
        <button className="text-xs border px-2 py-0.5 rounded">
          Ready
        </button>
      </div>

    </div>
  );
};

export default OrderCard;
