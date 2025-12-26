import DashboardLayout from "../layout/DashboardLayout";
import SettingsTabs from "../components/payment-options/SettingsTabs";
import { NavLink } from "react-router-dom";
import BusinessInfo from "../components/business-profile/BusinessInfo";
import BusinessDescription from "../components/business-profile/BusinessDescription";
import { businessProfile } from "../data/businessProfile";

const BusinessProfile = () => {
  return (
    <DashboardLayout>
      <div className="bb-shell">
        <div className="bb-frame">
          <main className="flex-1 bg-[#FFFBF3] px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-lg font-medium mb-4">
              Business Settings
            </h1>

            <SettingsTabs />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left submenu */}
              <div className="space-y-2">
                <NavLink
                  to="/businessprofile"
                  end
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded text-sm ${
                      isActive
                        ? "bg-yellow-400 text-black font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  Business Profile
                </NavLink>

                <NavLink
                  to="/preferences"
                  end
                  className="block px-3 py-2 rounded text-sm text-gray-700 hover:bg-gray-100"
                >
                  Preferences
                </NavLink>

                <NavLink
                  to="/subscription"
                  end
                  className="block px-3 py-2 rounded text-sm text-gray-700 hover:bg-gray-100"
                >
                  Subscription Plan
                </NavLink>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 bg-[#FFF9E8] border rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">
                    Business Profile
                  </h2>

                  <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
                    Edit Details
                  </button>
                </div>

                <BusinessInfo data={businessProfile} />
                <BusinessDescription
                  description={businessProfile.description}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BusinessProfile;
