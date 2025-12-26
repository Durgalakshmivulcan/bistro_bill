const tabs = [
  "General Settings",
  "Taxes & Payments",
  "Sales Settings",
  "Charges",
  "Reasons",
  "Devices",
  "Templates",
];

const SettingsTabs = () => {
  return (
    <div className="flex gap-6 border-b mb-6 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-3 text-sm whitespace-nowrap ${
            tab === "Taxes & Payments"
              ? "border-b-2 border-black font-medium"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SettingsTabs;
