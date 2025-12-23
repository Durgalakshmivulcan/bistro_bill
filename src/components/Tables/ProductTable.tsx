import { useState } from "react";
import TableCard from "./TableCard";
import TableTabs from "../Common/TableTabs";

const data = [
  { name: "Guntur Pulkura", qty: 449, percent: 79, revenue: "9,38,000" },
  { name: "Masala Dosa", qty: 788, percent: 16, revenue: "3,11,000" },
  { name: "Biryani", qty: 950, percent: 9, revenue: "9,84,000" },
  { name: "Idly", qty: 825, percent: 50, revenue: "9,75,000" },
  { name: "Avakaya", qty: 960, percent: 28, revenue: "3,40,000" },
];

const ProductRankingTable = () => {
  const [tab, setTab] = useState("Top Selling Items");

  return (
    <TableCard title="Product Ranking" filterLabel="Filter by Item">
      <TableTabs
        active={tab}
        tabs={["Top Selling Items", "Least Selling Items"]}
        onChange={setTab}
      />

      <table className="w-full text-sm border border-bb-border rounded-lg overflow-hidden">
        <thead className="bg-bb-primary text-black">
          <tr>
            <th className="px-3 py-2 text-left">Item Name</th>
            <th className="px-3 py-2 text-center">Sales Qty</th>
            <th className="px-3 py-2 text-center">% Revenue</th>
            <th className="px-3 py-2 text-right">Total Revenue</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-bb-border ${
                i % 2 === 1 ? "bg-[#FFF9E8]" : "bg-white"
              }`}
            >
              <td className="px-3 py-2">{row.name}</td>
              <td className="px-3 py-2 text-center">{row.qty}</td>
              <td className="px-3 py-2 text-center">{row.percent}%</td>
              <td className="px-3 py-2 text-right">₹ {row.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableCard>
  );
};

export default ProductRankingTable;
