const items = [
  { name: "Scrambled eggs with toast", qty: 1, price: "₹ 150.00" },
  { name: "Smoked Salmon Bagel", qty: 1, price: "₹ 80.00" },
  { name: "Belgian Waffles", qty: 1, price: "₹ 50.00" },
  { name: "Chicken Burger", qty: 1, price: "₹ 80.00" },
  { name: "Greek Gyro Plate", qty: 1, price: "₹ 300.00" },
];

const InvoiceItemsTable = () => {
  return (
    <table className="w-full text-sm mt-4">
      <thead className="border-b">
        <tr className="text-left text-gray-500">
          <th>Items</th>
          <th className="text-center">Qty</th>
          <th className="text-right">Price</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.name} className="border-b last:border-none">
            <td className="py-2">{item.name}</td>
            <td className="text-center">{item.qty}</td>
            <td className="text-right">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceItemsTable;
