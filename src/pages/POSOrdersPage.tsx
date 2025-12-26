import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import ProductBrowser from "../components/POSOrderTake/ProductBrowser";
import OrderSummary from "../components/POSOrderTake/OrderSummary";
import POSActionsBar from "../components/POSTakeOrder/POSActionsBar";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function POSOrdersPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [openSummary, setOpenSummary] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col min-h-screen bg-[#FFF9EF]">

        {/* TOP ACTION BAR */}
        <div className="shrink-0">
          <POSActionsBar />
        </div>

        {/* CONTENT AREA */}
        <div className="flex flex-1 overflow-hidden relative">

          {/* LEFT */}
          <div className="flex-1 overflow-y-auto pr-10 lg:pr-0">
            <ProductBrowser onAdd={handleAddToCart} />
          </div>

          {/* RIGHT — DESKTOP ONLY */}
          <div
            className="
              hidden lg:block
              w-[300px] xl:w-[380px]
              shrink-0
              border-l
              bg-white
            "
          >
            <OrderSummary cart={cart} />
          </div>

          {/* EDGE OPEN BUTTON — MOBILE & TABLET */}
          <button
            onClick={() => setOpenSummary(true)}
            className="
              fixed right-0 top-1/2 -translate-y-1/2
              z-40 lg:hidden
              h-24 w-8
              bg-gray-700 text-white
              rounded-l-full
              flex items-center justify-center
              shadow-lg
            "
            aria-label="Open Order Summary"
          >
            &lt;
          </button>

          {/* SLIDE-IN SUMMARY — MOBILE & TABLET */}
          {openSummary && (
            <div className="fixed inset-0 z-50 lg:hidden">

              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setOpenSummary(false)}
              />

              {/* Panel */}
              <div
                className="
                  absolute right-0 top-0
                  h-full w-[90%] max-w-sm
                  bg-white
                  animate-slide-in
                "
              >
                <OrderSummary
                  cart={cart}
                  onClose={() => setOpenSummary(false)}
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </DashboardLayout>
  );
}
