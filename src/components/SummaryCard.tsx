import React from "react";

type Props = {
  title: string;
  value: number | string;
  icon: string;
};

const SummaryCard: React.FC<Props> = ({ title, value, icon }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
    <img src={icon} className="h-12 w-12" alt="" />

    <div>
      <p className="text-xs text-gray-500">{title}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  </div>
);

export default SummaryCard;
