import { useState } from "react";
import TableCard from "./TableCard";
import TableTabs from "../Common/TableTabs";

const branchData = [
  { name: "Hitech City", qty: 960, percent: 28, revenue: "3,40,000" },
  { name: "Kondapur", qty: 825, percent: 50, revenue: "9,75,000" },
  { name: "Uppal", qty: 449, percent: 79, revenue: "9,38,000" },
  { name: "Miyapur", qty: 825, percent: 50, revenue: "9,75,000" },
  { name: "Habsiguda", qty: 788, percent: 16, revenue: "3,11,000" },
  { name: "LB Nagar", qty: 950, percent: 9, revenue: "9,84,000" },
];

const BranchRankingTable = () => {
  const [tab, setTab] = useState("Top Performing Branch");

  return (
    <TableCard title="Branch Ranking" subtitle="By Revenue">
      <TableTabs
        active={tab}
        tabs={["Top Performing Branch", "Worst Performing Branch"]}
        onChange={setTab}
      />

      <table className="w-full text-sm border border-bb-border rounded-lg overflow-hidden">
        <thead className="bg-bb-primary text-black">
          <tr>
            <th className="px-3 py-2 text-left font-medium">Branch Name</th>
            <th className="px-3 py-2 text-center font-medium">Sales Qty</th>
            <th className="px-3 py-2 text-center font-medium">% Revenue</th>
            <th className="px-3 py-2 text-right font-medium">Total Revenue</th>
          </tr>
        </thead>

        <tbody>
          {branchData.map((row, i) => (
            <tr
              key={row.name}
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

export default BranchRankingTable;
