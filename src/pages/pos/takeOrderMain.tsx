import DashboardLayout from "../../layout/DashboardLayout";
import DiscountSection from "./DiscountSection";
import MenuTabs from "./MenuTabs";
import MenuGrid from "./MenuGrid";
import OrderPanel from "./OrderPanel";

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
