const Pagination = () => {
  return (
    <div className="flex items-center gap-2 justify-end text-sm mt-6">
      <button className="px-2 border rounded">«</button>
      <button className="px-3 py-1 bg-yellow-400 rounded">1</button>
      <button className="px-3 py-1 border rounded">2</button>
      <button className="px-3 py-1 border rounded">3</button>
      <span>...</span>
      <button className="px-3 py-1 border rounded">10</button>
      <button className="px-2 border rounded">»</button>
    </div>
  );
};

export default Pagination;
