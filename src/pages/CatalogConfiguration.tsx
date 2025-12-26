import { Search, MoreVertical } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import CatalogTabs from "../components/NavTabs/CatalogTabs";
import { categoryData } from "../data/categoryData";

export default function CatalogConfiguration() {
  return (
    <DashboardLayout>
      <div className="bg-[#FFFDF6] min-h-screen p-6 space-y-4">

        {/* TABS */}
        <CatalogTabs />

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <h1 className="text-xl font-semibold">Category</h1>

          <div className="relative w-full sm:w-64">
            <Search
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              placeholder="Search here..."
              className="w-full border rounded-md px-3 pr-9 py-2 text-sm bg-white placeholder:text-black"
            />
          </div>
        </div>

        {/* ACTION BAR */}
        <div className="flex flex-wrap items-center gap-2">
          <button className="bg-yellow-400 px-4 py-2 rounded text-sm font-medium">
            Import
          </button>
          <button className="border px-4 py-2 rounded text-sm">
            Export
          </button>
          <button className="bg-black text-white px-4 py-2 rounded text-sm">
            Add New
          </button>

          <div className="ml-auto flex gap-2">
            <select className="border px-3 py-2 rounded text-sm bg-white">
              <option>Filter by Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <button className="bg-yellow-400 px-4 py-2 rounded text-sm">
              Clear
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white border rounded-xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#FFF3CD]">
              <tr>
                <th className="px-4 py-3 text-left">Categories</th>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {categoryData.map((cat) => (
                <tr key={cat.id} className="border-t">
                  <td className="px-4 py-3">{cat.name}</td>

                  <td className="px-4 py-3">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {cat.description}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          cat.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {cat.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-center">
                    <button className="p-2 rounded hover:bg-gray-100">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-black text-white px-2 py-1 rounded text-xs">
            2 Selected
          </span>
          <button className="border px-3 py-1 rounded">Delete</button>
        </div>

      </div>
    </DashboardLayout>
  );
}
