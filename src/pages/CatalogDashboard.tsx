import DashboardLayout from "../layout/DashboardLayout";
import SummaryCard from "../components/SummaryCard";
import ProductCard from "../components/ProductCard";

import {
  summaryCards,
  topSellingProducts,
  leastSellingProducts,
} from "../data/CatalogDashboardData";

const CatalogDashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6 bg-[#FFFDF5] min-h-screen space-y-6">

        {/* Page Tabs */}
        <div className="flex gap-6 border-b text-sm">
          <button className="pb-2 border-b-2 border-black font-medium">
            Dashboard
          </button>
          <button className="pb-2 text-bb-textSoft">Products</button>
          <button className="pb-2 text-bb-textSoft">Channel Menu</button>
          <button className="pb-2 text-bb-textSoft">Configuration</button>
        </div>

        {/* SUMMARY */}
        <section className="border border-bb-border rounded-xl p-4 bg-[#FFF9ED]">
          <h2 className="text-sm font-semibold mb-4 text-bb-warning">
            Summary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {summaryCards.map((card) => (
              <SummaryCard
                key={card.title}
                title={card.title}
                value={card.value}
                icon={card.icon}
              />
            ))}
          </div>
        </section>

        {/* TOP SELLING */}
        <section className="border border-bb-border rounded-xl p-4 bg-[#FFF9ED]">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-semibold text-bb-warning">
              Top Selling Products
            </h2>

            <div className="flex gap-2">
              <select className="border rounded px-2 py-1 text-xs">
                <option>Yesterday</option>
                <option>Last Week</option>
                <option>Last Month</option>
              </select>

              <select className="border rounded px-2 py-1 text-xs">
                <option>Top 10 Products</option>
                <option>Top 5 Products</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topSellingProducts.map((p) => (
              <ProductCard
    key={p.name}
    name={p.name}
    price={p.price}
    image={p.imageUrl}
  />
            ))}
          </div>
        </section>

        {/* LEAST SELLING */}
        <section className="border border-bb-border rounded-xl p-4 bg-[#FFF9ED]">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-semibold text-bb-warning">
              Least Selling Products
            </h2>

            <div className="flex gap-2">
              <select className="border rounded px-2 py-1 text-xs">
                <option>Yesterday</option>
                <option>Last Week</option>
                <option>Last Month</option>
              </select>

              <select className="border rounded px-2 py-1 text-xs">
                <option>Least 10 Products</option>
                <option>Least 5 Products</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leastSellingProducts.map((p) => (
              <ProductCard
    key={p.name}
    name={p.name}
    price={p.price}
    image={p.imageUrl}
  />
            ))}
          </div>
        </section>

      </div>
    </DashboardLayout>
  );
};

export default CatalogDashboard;
