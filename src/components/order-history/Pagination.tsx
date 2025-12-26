import React from "react";

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-end mt-6 gap-2">
      <button className="border px-2 py-1 rounded">«</button>
      <button className="border px-2 py-1 rounded">‹</button>

      <button className="bg-yellow-400 px-3 py-1 rounded">1</button>
      <button className="border px-3 py-1 rounded">2</button>
      <button className="border px-3 py-1 rounded">3</button>

      <button className="border px-2 py-1 rounded">›</button>
      <button className="border px-2 py-1 rounded">»</button>
    </div>
  );
};

export default Pagination;
