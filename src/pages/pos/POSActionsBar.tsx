import {
  ShoppingCart,
  ClipboardList,
  Table,
  CalendarDays,
  Search,
  List,
  LayoutGrid,
} from "lucide-react";

const POSActionsBar = () => {
  return (
    <div className="space-y-4">

      {/* ROW 1: Action Tabs */}
      <div
        className="
          flex items-center gap-2
          rounded-full bg-white px-3 py-2 shadow-sm
          w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory
          sm:w-fit sm:overflow-visible
        "
      >
        <button className="shrink-0 snap-start flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white">
          <ShoppingCart size={16} />
          Take Order
        </button>

        <button className="shrink-0 snap-start flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-black hover:bg-gray-100">
          <ClipboardList size={16} />
          My Orders
        </button>

        <button className="shrink-0 snap-start flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
          <Table size={16} />
          Table View
        </button>

        <button className="shrink-0 snap-start flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
          <CalendarDays size={16} />
          Reservations
        </button>
      </div>

      {/* ROW 2: Search */}
      <div className="flex flex-wrap items-center justify-end gap-2">
        <div className="relative w-full sm:w-64">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            placeholder="Search here..."
            className="w-full rounded-lg border pl-9 pr-3 py-2 text-sm"
          />
        </div>

        <div className="flex gap-2">
          <button className="rounded-lg border px-3 py-2">
            <Search size={16} />
          </button>
          <button className="rounded-lg border px-3 py-2">
            <List size={16} />
          </button>
          <button className="rounded-lg border px-3 py-2">
            <LayoutGrid size={16} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default POSActionsBar;
