import {
  Utensils,
  ShoppingBag,
  Briefcase,
  CreditCard,
} from "lucide-react";

const tabs = [
  { label: "Dine In", icon: Utensils },
  { label: "Take Away", icon: ShoppingBag },
  { label: "Catering", icon: Briefcase },
  { label: "Subscription", icon: CreditCard },
];

const OrderTypeTabs = () => {
  return (
    <div
      className="
        flex
        gap-2
        overflow-x-auto
        scrollbar-hide
        pb-2
        sm:overflow-visible
      "
    >
      {tabs.map((tab, i) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.label}
            className={`
              shrink-0
              flex
              items-center
              gap-2
              rounded-full
              px-4
              py-2
              text-sm
              font-medium
              ${
                i === 0
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700"
              }
            `}
          >
            <Icon size={16} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default OrderTypeTabs;
