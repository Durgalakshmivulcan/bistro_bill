import { kdsColumns } from "../data/KitchenDisplayData";
import OrderCard from "../components/Cards/OrderCard";

const KitchenDisplaySystem = () => {
  return (
    <div className="p-4 bg-[#FFFDF5] min-h-screen space-y-4">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold flex items-center gap-2">
          ← Kitchen Display System
        </h1>

        <select className="border rounded-md px-2 py-1 text-sm">
          <option>Kitchen-1</option>
          <option>Kitchen-2</option>
        </select>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[calc(100vh-120px)]">

        {kdsColumns.map((column) => (
          <div
            key={column.key}
            className="rounded-md flex flex-col"
          >
            <div className= "p-2 font-semibold text-sm" style={{ backgroundColor: "#EDE7D4"}}>
              {column.title}
            </div>

            <div className="p-2 space-y-3 overflow-y-auto flex-1"  style={{ backgroundColor: "#EDE7D4"}}>
  {column.orders.map((order) => (
    <OrderCard
      key={order.id}
      order={order}
    />
  ))}
</div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default KitchenDisplaySystem;
