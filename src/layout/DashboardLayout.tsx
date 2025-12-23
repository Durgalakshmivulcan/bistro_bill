import { useState } from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bb-app-shell">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Area */}
      <div className="bb-main">
        {/* Top Bar */}
        <header className="bb-topbar">
          {/* Left */}
          <div className="flex items-center gap-2">
            <button
              className="bb-btn bb-btn-ghost md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <i className="bi bi-list" />
            </button>
            <span className="bb-topbar-title">Dashboard</span>
          </div>

          {/* Center */}
          <div className="flex-1 hidden md:flex justify-center px-4">
            <input
              className="bb-input max-w-md"
              placeholder="Search here..."
            />
          </div>

          {/* Right */}
          <div className="bb-topbar-actions">
            <i className="bi bi-bell" />
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/40"
                className="rounded-full"
                alt="User"
              />
              <div className="hidden md:block">
                <div className="text-sm font-medium">Ganesh</div>
                <div className="text-xs text-bb-muted">Super Admin</div>
              </div>
            </div>
          </div>
        </header>

        {/* Divider below top bar */}
        <hr className="mx-4 my-3 border-bb-border border-2 opacity-80" />

        {/* Page Content */}
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;