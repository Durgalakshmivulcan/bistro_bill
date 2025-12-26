import DashboardLayout from "../layout/DashboardLayout";
import SettingsTabs from "../components/payment-options/SettingsTabs";
import PaymentOptionsTable from "../components/payment-options/PaymentOptionsTable";
import { paymentOptions } from "../data/paymentOptions";

const PaymentOptions = () => {
  return (
    <DashboardLayout>
      <div className="bb-shell">
        <div className="bb-frame">
          <main className="flex-1 bg-[#FFFBF3] px-4 sm:px-6 lg:px-8 py-6">

            {/* Page title */}
            <h1 className="text-lg font-medium mb-4">
              Business Settings
            </h1>

            {/* Tabs */}
            <SettingsTabs />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left menu */}
              <div className="space-y-2">
                {["Tax", "Tax Group", "Payment Options"].map((item) => (
                  <button
                    key={item}
                    className={`w-full text-left px-3 py-2 rounded text-sm
                      ${
                        item === "Payment Options"
                          ? "bg-yellow-400 font-medium"
                          : "hover:bg-gray-100"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="lg:col-span-3 bg-[#FFF9E8] border rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">
                    Payment Options
                  </h2>

                  <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
                    Add New
                  </button>
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
