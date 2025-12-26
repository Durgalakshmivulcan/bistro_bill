import React from "react";

const filters = [
  "Filter by Date",
  "Filter by Branch",
  "Filter by Customer",
  "Filter by Order Type",
  "Filter by Payment Tag",
];

const FilterBar: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {filters.map((item) => (
        <button
          key={item}
          className="bg-white border px-4 py-2 rounded-md text-sm flex items-center gap-2"
        >
          {item}
          <span>⌄</span>
        </button>
      ))}

      <button className="ml-auto bg-yellow-400 px-5 py-2 rounded-md text-sm font-medium">
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
