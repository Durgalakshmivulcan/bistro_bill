import POSActionsBar from "./POSActionsBar";
import MenuCard from "./MenuCard";

const DiscountSection = () => {
  return (
    <>
      {/* POS ACTION BAR – EXACT FIGMA POSITION */}
      <POSActionsBar />

      {/* Discount Header */}
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-yellow-600">
          Special Discount for Today
        </h3>

        <span className="rounded-lg border bg-white px-3 py-1 text-sm">
          Ends in 12:10:09
        </span>
      </div>

      {/* Discount Cards */}
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <MenuCard tag="Veg" discount="20% Off" />
        <MenuCard tag="Non-Veg" discount="10% Off" />
        <MenuCard tag="Veg" discount="9% Off" />
        <MenuCard tag="Non-Veg" discount="25% Off" />
      </div>
    </>
  );
};

export default DiscountSection;
