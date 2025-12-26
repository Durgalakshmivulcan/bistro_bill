import DashboardLayout from "../layout/DashboardLayout";
import DiscountSection from "../components/POSTakeOrder/DiscountSection";
import MenuTabs from "../components/POSTakeOrder/MenuTabs";
import MenuGrid from "../components/POSTakeOrder/MenuGrid";
import OrderPanel from "../components/POSTakeOrder/OrderPanel";

const POSPage = () => {
  return (
    <DashboardLayout>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[2.2fr_1fr]">
        <div>
          <DiscountSection />
          <MenuTabs />
          <MenuGrid />
        </div>

        <OrderPanel />
      </div>
    </DashboardLayout>
  );
};

export default POSPage;
