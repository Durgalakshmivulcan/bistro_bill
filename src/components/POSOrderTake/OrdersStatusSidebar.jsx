const MENU = [
  { label: "Open Orders", active: true },
  { label: "Closed Orders" },
  { label: "Cancelled Orders" },
  { label: "Amount Due" },
  { label: "Advance Orders" },
  { label: "Hold Orders" },
];

export default function OrdersStatusSidebar() {
  return (
    <div
      className="
        w-full md:w-[220px]
        p-3 md:p-4
        space-y-2
        bg-transparent
      "
    >
      {MENU.map((item) => (
        <button
          key={item.label}
          className={`w-full flex items-center justify-center md:justify-start
            gap-3 px-4 py-2.5 md:py-3
            rounded-xl text-sm whitespace-nowrap
            ${
              item.active
                ? "bg-black text-white"
                : "bg-white border text-gray-700"
            }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
