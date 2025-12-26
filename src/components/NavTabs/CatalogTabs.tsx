import { NavLink } from "react-router-dom";

const CatalogTabs = () => {
  const baseTab = "pb-2 text-sm";
  const inactive = "text-bb-textSoft";
  const active =
    "px-3 py-1.5 bg-black text-white rounded-t-md font-medium";

  return (
    <div className="flex gap-6 border-b text-sm items-end">
      <NavLink
        to="/catalogdashboard"
        className={({ isActive }) =>
          isActive ? active : `${baseTab} ${inactive}`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/catalogproducts"
        className={({ isActive }) =>
          isActive ? active : `${baseTab} ${inactive}`
        }
      >
        Products
      </NavLink>
       <NavLink
        to="/catalogchannelmenu"
        className={({ isActive }) =>
          isActive ? active : `${baseTab} ${inactive}`
        }
      >
       Channel Menu
      </NavLink>
<NavLink
        to="/catalogconfiguration"
        className={({ isActive }) =>
          isActive ? active : `${baseTab} ${inactive}`
        }
      >
       Configuration
      </NavLink>
    </div>
  );
};

export default CatalogTabs;
