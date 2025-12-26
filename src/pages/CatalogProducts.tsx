import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import ProductCard from "../components/ProductCard";
import FilterGroupDropdown from "../components/Common/FilterGroupDropdown";
import Pagination from "../components/Common/Pagination";
import { catalogProducts } from "../data/catalogProducts";
import CatalogTabs from "../components/NavTabs/CatalogTabs";
import { useNavigate } from "react-router-dom";


const CatalogProductsPage = () => {
    const [showFilters, setShowFilters] = useState(false);
const navigate = useNavigate();
    return (
        <DashboardLayout>
            <div className="bg-[#FFFDF6] min-h-screen p-6 space-y-4">

               <CatalogTabs />
                {/* Page Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <h1 className="text-xl font-semibold">Products</h1>

                    {/* Search + Hover Area */}
                    <div
                        className="relative"
                        onMouseEnter={() => setShowFilters(true)}
                        onMouseLeave={() => setShowFilters(false)}
                    >
                        {/* Action Row */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:items-center">

                            {/* Search */}
                            <input
                                placeholder="Search here..."
                                className="border rounded-md px-3 py-2 text-sm bg-white
        w-full sm:w-64
      "
                            />

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-2">
                                <button className="bg-yellow-400 px-3 py-2 rounded text-sm">
                                    Upload Menu
                                </button>

                                <button className="border px-3 py-2 rounded text-sm">
                                    Export
                                </button>

                                <button className="bg-black text-white px-3 py-2 rounded text-sm" onClick={() => navigate("/addproduct")}>
                                    Add New
                                </button>
                            </div>
                        </div>

                        {/* Hover Dropdown */}
                        {showFilters && (
                            <div
                                className="
        absolute z-30
        mt-2
        w-full sm:w-auto
        left-0
      "
                            >
                                <FilterGroupDropdown />
                            </div>
                        )}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {catalogProducts.map((product) => (
                        <ProductCard
                            key={product.name}
                            name={product.name}
                            price={product.price}
                            image={product.imageUrl}
                        />
                    ))}
                </div>

                <Pagination />
            </div>
        </DashboardLayout>
    );
};

export default CatalogProductsPage;
