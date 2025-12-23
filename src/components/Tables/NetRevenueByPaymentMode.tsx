import TableCard from "./TableCard";

const paymentData = [
  { mode: "Credit Card", percent: 79, revenue: "9,38,000" },
  { mode: "Online Payments", percent: 16, revenue: "3,11,000" },
  { mode: "Cash", percent: 9, revenue: "9,84,000" },
  { mode: "UPI", percent: 28, revenue: "3,40,000" },
  { mode: "Debit Card", percent: 50, revenue: "9,75,000" },
  { mode: "Wallet", percent: 16, revenue: "3,11,000" },
];

const NetRevenueByPaymentMode = () => {
  return (
    <TableCard title="Net Revenue" subtitle="By Payment Mode">
      <table className="w-full text-sm border border-bb-border rounded-lg overflow-hidden">
        <thead className="bg-bb-primary text-black">
          <tr>
            <th className="px-3 py-2 text-left font-medium">Payment Mode</th>
            <th className="px-3 py-2 text-center font-medium">% Revenue</th>
            <th className="px-3 py-2 text-right font-medium">Total Revenue</th>
          </tr>
        </thead>

        <tbody>
          {paymentData.map((row, i) => (
            <tr
              key={row.mode}
              className={`border-t border-bb-border ${
                i % 2 === 1 ? "bg-[#FFF9E8]" : "bg-white"
              }`}
            >
              <td className="px-3 py-2">{row.mode}</td>
              <td className="px-3 py-2 text-center">{row.percent}%</td>
              <td className="px-3 py-2 text-right">₹ {row.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableCard>
  );
};

export default NetRevenueByPaymentMode;
