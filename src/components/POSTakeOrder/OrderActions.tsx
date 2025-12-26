import {
  RotateCcw,
  Pencil,
  Ban,
  Hand,
} from "lucide-react";

const actions = [
  { label: "Reset Order", icon: RotateCcw },
  { label: "Order Note’s", icon: Pencil },
  { label: "Cancel Order", icon: Ban },
  { label: "Hold Order", icon: Hand },
];

const OrderActions = () => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {actions.map(({ label, icon: Icon }) => (
        <div
          key={label}
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-gray-100
            px-4
            py-4
            text-center
            text-sm
            font-medium
            transition
            hover:bg-gray-200
            active:scale-95
          "
        >
          <Icon size={20} className="text-gray-600" />
          {label}
        </div>
      ))}
    </div>
  );
};

export default OrderActions;
