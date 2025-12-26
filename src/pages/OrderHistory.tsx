import React from "react";
import FilterBar from "../components/order-history/FilterBar";
import OrderTable from "../components/order-history/OrderTable";
import Pagination from "../components/order-history/Pagination";
import { orders } from "../data/orderHistory";
// import TopNav from "../components/TopNav";
import DashboardLayout from "../layout/DashboardLayout";

const OrderHistory: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="bb-shell">
        <div className="bb-frame flex flex-col">
          <main className="flex-1 bg-[#FFFBF3] px-4 sm:px-6 lg:px-8 py-6">

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <h1 className="text-2xl font-bold">Order History</h1>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  placeholder="Search here..."
                  className="w-full sm:w-72 rounded-md border px-4 py-2 text-sm"
                />
                <button className="border px-4 py-2 rounded-md text-sm bg-white">
                  Export
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="mt-5">
              <FilterBar />
            </div>

            {/* Table */}
            <div className="mt-6">
              <OrderTable orders={orders} />
            </div>

            {/* Pagination */}
            <Pagination />

          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};


export default OrderHistory;
