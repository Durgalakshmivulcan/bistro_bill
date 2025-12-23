const tabs = [
  "All",
  "Popular",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Appetizers",
  "Main Course",
];

const MenuTabs = () => {
  return (
    <>
      <h3 className="mt-8 text-lg font-semibold text-yellow-600">Menu</h3>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm ${
              i === 0 ? "bg-black text-white" : "border bg-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default MenuTabs;
