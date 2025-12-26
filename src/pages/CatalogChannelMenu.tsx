import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { catalogProducts } from "../data/catalogProducts";
import ProductCard from "../components/ProductCard";
import CatalogTabs from "../components/NavTabs/CatalogTabs";
import Select from "../components/form/Select";
import FilterGroupDropdown from "../components/Common/FilterGroupDropdown";
import { Search } from "lucide-react";
import Pagination from "../components/order-history/Pagination";

// type GroupByType = "none" | "type" | "category";

export default function ChannelMenuPage() {
 const [groupBy, setGroupBy] = useState<string>("none");
const [groupLabel, setGroupLabel] = useState<string>("Group By");

  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");

  /* ---------------- FILTERED PRODUCTS ---------------- */
  const filteredProducts = catalogProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  /* ---------------- GROUPED PRODUCTS ---------------- */
  const groupedProducts = filteredProducts.reduce((acc, item) => {
    let key = "All Items";

    if (groupBy === "type") key = item.type;
    if (groupBy === "category") key = item.category;

    if (!acc[key]) acc[key] = [];
    acc[key].push(item);

    return acc;
  }, {} as Record<string, typeof catalogProducts>);

  return (
    <DashboardLayout>
      <div className="bg-[#FFFDF6] min-h-screen p-6 space-y-4">

        {/* ================= TABS ================= */}
        <CatalogTabs />

        {/* ================= TITLE ================= */}
        <div>
          <h1 className="text-xl font-semibold">Channel Menu</h1>
          <p className="text-xs text-gray-500 max-w-4xl">
            The Channel Menu shows all the items, grouped by category and sub-category,
            available across the selected branch and channel.
          </p>
        </div>

        {/* ================= FILTER ROW ================= */}
        {/* ================= FILTER ROW ================= */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-center">

  {/* Branch */}
  <Select
    value="Hitech City"
    onChange={() => {}}
    options={[
      { label: "Hitech City", value: "Hitech City" },
      { label: "Kondapur", value: "Kondapur" },
    ]}
  />

  {/* Channel */}
  <Select
    value="Take Away"
    onChange={() => {}}
    options={[
      { label: "Take Away", value: "Take Away" },
      { label: "Dine In", value: "Dine In" },
    ]}
  />

<div className="relative w-full lg:col-span-2">
  <input
    value={search || (groupBy !== "none" ? groupLabel : "")}
    placeholder="Search here..."
    onFocus={() => setShowFilters(true)}
    onChange={(e) => {
      setSearch(e.target.value);
      setGroupBy("none");
      setGroupLabel("Group By");
    }}
    className="
    text-black
      w-full
      border rounded-md
      px-3 pr-10 py-2
      text-sm
      bg-white
      placeholder:text-black
      focus:outline-none
    "
  />

  {/* SEARCH ICON – RIGHT INSIDE INPUT */}
  <Search
    size={16}
    className="
      absolute right-3 top-1/2
      -translate-y-1/2
      text-black-400
      pointer-events-none
    "
  />

  {/* GROUP BY DROPDOWN */}
  {showFilters && (
    <div className="absolute left-0 mt-2 z-50">
      <FilterGroupDropdown
        showFilterBy={false}
        onGroupBySelect={(value, label) => {
          setGroupBy(value);
          setGroupLabel(label);
          setSearch("");
          setShowFilters(false);
        }}
      />
    </div>
  )}
</div>

  {/* Clear */}
  <button
    onClick={() => {
      setGroupBy("none");
      setGroupLabel("Group By");
      setSearch("");
    }}
    className="w-full bg-yellow-400 px-4 py-2 rounded text-sm"
  >
    Clear
  </button>

  {/* Export */}
  <button className="w-full border px-4 py-2 rounded text-sm">
    Export
  </button>

</div>

        {/* ================= CONTENT ================= */}
        {groupBy === "none" ? (
          /* -------- NORMAL GRID -------- */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.imageUrl}
              />
            ))}
          </div>
        ) : (
          /* -------- GROUPED VIEW -------- */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(groupedProducts).map(([group, items]) => (
              <div key={group} className="bg-white rounded-xl border p-3">
                <div className="mb-3 px-3 py-2 rounded-lg bg-bb-warning text-white text-sm font-semibold flex justify-between">
                  <span>{group}</span>
                  <span className="text-xs">{items.length} Items</span>
                </div>

                <div className="space-y-3">
                  {items.map((product) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.imageUrl}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
 <Pagination />
      </div>
      
    </DashboardLayout>
  );
}
