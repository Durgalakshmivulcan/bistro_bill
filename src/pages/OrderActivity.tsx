import DashboardLayout from "../layout/DashboardLayout";
import ActivityTimeline from "../components/order-activity/ActivityTimeline";
import InvoiceCard from "../components/order-activity/InvoiceCard";

const OrderActivity = () => {
  return (
    <DashboardLayout>
      <div className="bb-shell">
        <div className="bb-frame">
          <main className="flex-1 bg-[#FFFBF3] px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <ActivityTimeline />
              <InvoiceCard />
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OrderActivity;
