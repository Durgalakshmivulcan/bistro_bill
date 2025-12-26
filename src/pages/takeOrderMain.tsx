import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import DiscountSection from "../components/POSTakeOrder/DiscountSection";
import MenuTabs from "../components/POSTakeOrder/MenuTabs";
import MenuGrid from "../components/POSTakeOrder/MenuGrid";
import OrderPanel from "../components/POSTakeOrder/OrderPanel";

const POSPage = () => {
  const [openOrderPanel, setOpenOrderPanel] = useState(false);

  return (
    <DashboardLayout>
      <div className="relative mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[2.2fr_1fr]">

        {/* LEFT SIDE */}
        <div>
          <DiscountSection />
          <MenuTabs />
          <MenuGrid />
        </div>

        {/* RIGHT SIDE (DESKTOP ONLY) */}
        <div className="hidden lg:block">
          <OrderPanel />
        </div>

        {/* MOBILE FLOAT BUTTON */}
        {/* MOBILE / TAB EDGE BUTTON */}
<button
  onClick={() => setOpenOrderPanel(true)}
  className="
    fixed
    right-0
    top-1/2
    -translate-y-1/2
    z-40
    lg:hidden

    h-24 w-8
    bg-gray-700
    text-white
    rounded-l-full

    flex items-center justify-center
    shadow-lg
  "
>
  <span className="text-lg font-semibold">&lt;</span>
</button>


        {/* MOBILE SLIDE PANEL */}
        {openOrderPanel && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpenOrderPanel(false)}
            />

            {/* Slide Panel */}
            <div
              className="
                absolute right-0 top-0 h-full w-[90%] max-w-sm
                bg-white
                animate-slide-in
              "
            >
              <OrderPanel />

              {/* Close button */}
              <button
                onClick={() => setOpenOrderPanel(false)}
                className="
                  absolute top-4 right-4
                  text-gray-600 text-xl
                "
              >
                ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default POSPage;
