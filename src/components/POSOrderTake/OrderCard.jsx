export default function OrderCard({ order }) {
  return (
    <div className="bg-white rounded-xl border p-4 space-y-3 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-orange-500 text-white flex items-center justify-center font-semibold">
            {order.initials}
          </div>
          <div>
            <p className="font-medium">{order.customer}</p>
            <p className="text-xs text-gray-500">#{order.id}</p>
          </div>
        </div>

        <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
          {order.payment}
        </span>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded">
          {order.type}
        </span>
        <span>•</span>
        <span>{order.time}</span>
      </div>

      {/* Items */}
      <div className="text-sm space-y-1">
        {order.items.slice(0, 4).map((item) => (
          <div key={item.name} className="flex justify-between">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}
        {order.items.length > 4 && (
          <p className="text-xs text-gray-400">
            +{order.items.length - 4} more
          </p>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between font-medium pt-2 border-t">
        <span>Total Payable</span>
        <span>₹{order.total}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2">
        <button className="flex-1 border rounded-lg py-2 text-sm">
          Print KOT
        </button>
        <button className="flex-1 bg-yellow-400 rounded-lg py-2 text-sm font-medium">
          Pay Bill
        </button>
      </div>
    </div>
  );
}
