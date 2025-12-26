import { Search, Download } from "lucide-react";
import OrdersStatusSidebar from "./OrdersStatusSidebar";
import OrdersList from "./OrdersList";

export default function ProductBrowser() {
  return (
    <div className="flex-1 bg-[#FFF9EF] px-3 sm:px-6 lg:px-8 py-4 space-y-5 overflow-y-auto">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        {/* Tabs */}
        <div className="flex gap-3">
          <button className="px-4 sm:px-5 py-2 rounded-full bg-black text-white text-sm font-medium">
            Offline Orders
          </button>
          <button className="px-4 sm:px-5 py-2 rounded-full border bg-white text-sm font-medium">
            Online Orders
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-[260px] md:w-[320px] sm:ml-auto">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            placeholder="Search here..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border bg-white text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* ===== FILTER ROW ===== */}
      <div className="flex flex-wrap items-center gap-2">
        <button className="px-3 sm:px-4 py-2 rounded-xl border bg-white text-sm">
          Filter by Date
        </button>
        <button className="px-3 sm:px-4 py-2 rounded-xl border bg-white text-sm">
          Filter by Order Type
        </button>
        <button className="px-3 sm:px-4 py-2 rounded-xl border bg-white text-sm">
          Filter by Status
        </button>
        <button className="px-4 sm:px-5 py-2 rounded-xl bg-yellow-400 text-sm font-medium">
          Clear
        </button>
        <button className="px-3 sm:px-4 py-2 rounded-xl border bg-white text-sm flex items-center gap-2">
          <Download size={16} />
          Export
        </button>
      </div>

      <div className="flex gap-4 min-w-0">
        <div className="hidden lg:block shrink-0">
          <OrdersStatusSidebar />
        </div>
        <div className="flex-1 min-w-0">
          <OrdersList />
        </div>
      </div>

      <div className="block lg:hidden pt-4">
        <OrdersStatusSidebar />
      </div>
    </div>
  );
}
