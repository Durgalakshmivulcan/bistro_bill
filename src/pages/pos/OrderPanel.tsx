import OrderTypeTabs from "./OrderTypeTabs";
import OrderActions from "./OrderActions";
import AccordionItem from "./AccordionItem";

const OrderPanel = () => {
  return (
    <div
      className="
        rounded-2xl
        bg-white
        p-4
        w-full
        max-w-full
        overflow-hidden
      "
    >
      {/* Order Type Tabs */}
      <OrderTypeTabs />

      {/* Action Buttons */}
      <OrderActions />

      {/* Accordions */}
      <div className="mt-6 space-y-3">
        <AccordionItem title="Table & Captain Details" />
        <AccordionItem title="Customer Details" />
        <AccordionItem title="Add Items" />
        <AccordionItem title="Payment Summary" />
      </div>
    </div>
  );
};

export default OrderPanel;
