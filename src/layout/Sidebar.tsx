import React from "react";
import {
  LayoutDashboard,
  Utensils,
  ListChecks,
  Calendar,
  Boxes,
  Settings,
  Users,
  ShoppingCart,
  BarChart,
} from "lucide-react";

const menu = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Point of sale", icon: Utensils },
  { label: "All Orders", icon: ListChecks },
  { label: "Reservations", icon: Calendar },
  { label: "Catalog", icon: Boxes, active: true },
  { label: "Inventory", icon: ShoppingCart },
  { label: "Purchase Order", icon: ShoppingCart },
  { label: "Customers", icon: Users },
  { label: "Marketing", icon: Settings },
  { label: "Analytics & Report", icon: BarChart },
  { label: "Manage Resources", icon: Settings },
  { label: "Business Settings", icon: Settings },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen p-5 flex flex-col">
      <div className="mb-8">
        <img src="/logo.png" alt="logo" className="h-14 mx-auto" />
      </div>

      <nav className="space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg text-sm 
                ${item.active ? "bg-yellow-500 text-white font-semibold" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
