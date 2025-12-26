import DashboardLayout from "../layout/DashboardLayout";
import LineChartPlaceholder from "../components/Charts/LineChartPlaceholder";
import ProductRankingTable from "../components/Tables/ProductTable";
import NetRevenueByPaymentMode from "../components/Tables/NetRevenueByPaymentMode";
import BrandRankingTable from "../components/Tables/BrandRankingTable";
import BranchRankingTable from "../components/Tables/BranchRankingTable";
import StatCard from "../components/Cards/StatCard";
import SectionHeader from "../components/Common/SectionHeader";
import { revenueStats } from "../data/BusinessOwnerData";

const BODashboard = () => {
  return (
    <DashboardLayout>
      <div className="bg-bb-bg min-h-screen p-4 md:p-6 space-y-6">

        {/* Header */}
        {/* Top Summary Bar */}
        <div className="bg-[#FFFDF5]  rounded-xl p-4 flex flex-col gap-4">

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* Left */}
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-bb-text">Summary</h1>

              {/* Live Data Toggle */}
              <div className="flex items-center gap-2 border border-bb-border rounded-md px-3 py-1 bg-white">
                <span className="text-sm text-bb-textSoft">Live Data</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-bb-primary"></div>
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></div>
                </label>
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full border border-bb-border rounded-md px-4 py-2 pr-10 text-sm focus:outline-none"
              />
              <i className="bi bi-search absolute right-3 top-1/2 -translate-y-1/2 text-bb-textSoft"></i>
            </div>

          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-3">

            {/* Filter by Branch */}
            <select className="border border-bb-border rounded-md px-3 py-2 text-sm bg-white">
              <option>Filter by Branch</option>
              <option>Branch A</option>
              <option>Branch B</option>
            </select>

            {/* Date Range */}
            <button className="flex items-center gap-2 border border-bb-border rounded-md px-3 py-2 text-sm bg-white">
              <i className="bi bi-calendar-event text-bb-textSoft"></i>Nov 06, 2024 - Nov 06, 2024
            </button>

            {/* Clear */}
            <button className="bg-bb-primary text-black text-sm px-4 py-2 rounded-md font-medium">
              Clear
            </button>

          </div>

        </div>


        {/* Revenue Statistics */}
        <section className="bg-bb-bg rounded-xl shadow-bb-card p-4 border border-bb-border"
        >
          <SectionHeader title="Revenue Statistics" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {revenueStats.map((item) => (
              <StatCard
                key={item.id}
                title={item.title}
                value={item.value}
                icon={item.icon}
                iconBg={item.iconBg}
              />
            ))}
          </div>
        </section>

        {/* Order Metrics */}
        <section className="bg-bb-bg rounded-xl shadow-bb-card p-4 border border-bb-border"
        >
          <SectionHeader title="Order Metrics" />
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <LineChartPlaceholder />
          </div>
        </section>

        {/* Average Values */}
        <section className="bg-bb-bg rounded-xl shadow-bb-card p-4 border border-bb-border"
        >
          <SectionHeader title="Average Values" />

          <div className="space-y-4">
            {[
              { label: "Average Online Order Cost", value: 56 },
              { label: "Average Offline Order Cost", value: 40 },
              { label: "Average Delivery Cost", value: 70 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1 text-bb-textSoft">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>

                <div className="h-2 bg-bb-bgSoft rounded-full">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: "#987820",
                    }}
                  />

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="overflow-x-auto bg-bb-bg rounded-xl shadow-bb-card border border-bb-border">
            <ProductRankingTable />
          </div>

          <div className="overflow-x-auto bg-bb-bg rounded-xl shadow-bb-card border border-bb-border">
            <NetRevenueByPaymentMode />
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="overflow-x-auto bg-bb-bg rounded-xl shadow-bb-card border border-bb-border">
            <BrandRankingTable />
          </div>

          <div className="overflow-x-auto bg-bb-bg rounded-xl shadow-bb-card border border-bb-border">
            <BranchRankingTable />
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default BODashboard;
