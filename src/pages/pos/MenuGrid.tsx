import MenuCard from "./MenuCard";

const MenuGrid = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <MenuCard />
      <MenuCard />
      <MenuCard disabled />
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </div>
  );
};

export default MenuGrid;
