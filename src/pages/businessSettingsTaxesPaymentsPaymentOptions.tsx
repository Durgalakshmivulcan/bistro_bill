import DashboardLayout from "../layout/DashboardLayout";
import SettingsTabs from "../components/payment-options/SettingsTabs";
import PaymentOptionsTable from "../components/payment-options/PaymentOptionsTable";
import { paymentOptions } from "../data/paymentOptions";
import { useState } from "react";
import AddPaymentModal from "../components/Common/AddPaymentModal";
import { NavLink } from "react-router-dom";

const PaymentOptions = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <DashboardLayout>
      <div className="bb-shell">
        <div className="bb-frame">
          <main className="flex-1 bg-[#FFFBF3] px-4 sm:px-6 lg:px-8 py-6">
            {/* Page title */}
            <h1 className="text-lg text-black font-medium mb-4">
              Business Settings
            </h1>

            {/* Tabs */}
            <SettingsTabs />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left menu */}
              <div className="space-y-2">
                <NavLink
                  to="/businesstaxoptions"
                  end
                  className={({ isActive }) =>
                    `block w-full text-left px-3 py-2 rounded text-sm
       ${
         isActive
           ? "bg-yellow-400 text-black font-medium"
           : "text-gray-700 hover:bg-gray-100"
       }`
                  }
                >
                  Tax
                </NavLink>

                <NavLink
                  to="/taxgroup"
                  end
                  className={({ isActive }) =>
                    `block w-full text-left px-3 py-2 rounded text-sm
       ${
         isActive
           ? "bg-yellow-400 text-black font-medium"
           : "text-gray-700 hover:bg-gray-100"
       }`
                  }
                >
                  Tax Group
                </NavLink>

                <NavLink
                  to="/paymentoptions"
                  end
                  className={({ isActive }) =>
                    `block w-full text-left px-3 py-2 rounded text-sm
       ${
         isActive
           ? "bg-yellow-400 text-black font-medium"
           : "text-gray-700 hover:bg-gray-100"
       }`
                  }
                >
                  Payment Options
                </NavLink>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 bg-[#FFF9E8] border rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Payment Options</h2>

                  <button
                    onClick={() => setOpenModal(true)}
                    className="bg-black text-white px-4 py-2 rounded-md text-sm"
                  >
                    Add New
                  </button>
                  <AddPaymentModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                  />
                </div>

                <PaymentOptionsTable options={paymentOptions} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PaymentOptions;
