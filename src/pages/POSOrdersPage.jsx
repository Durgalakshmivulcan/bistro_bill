import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import ProductBrowser from "../components/POSOrderTake/ProductBrowser";
import OrderSummary from "../components/POSOrderTake/OrderSummary";
import POSActionsBar from "../components/POSTakeOrder/POSActionsBar";

export default function POSOrdersPage() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-screen bg-[#FFF9EF]">
        {/* TOP ACTION BAR */}
        <div className="shrink-0">
          <POSActionsBar />
        </div>

        {/* CONTENT AREA */}
        <div className="flex flex-1 overflow-hidden">
          {/* LEFT: Take Order */}
          <div className="flex-1 overflow-y-auto">
            <ProductBrowser onAdd={handleAddToCart} />
          </div>

          {/* RIGHT: Order Summary */}
          <div className="hidden lg:block w-[380px] shrink-0 border-l bg-white">
            <OrderSummary cart={cart} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
