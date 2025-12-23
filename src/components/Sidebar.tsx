import { useLocation, useNavigate } from "react-router-dom";
import { sidebarItems } from "../data/sidebarItems";
import logo from "../assets/imgs/Logo2.png";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          bb-sidebar
          fixed md:sticky
          top-0
          inset-y-0 left-0
          z-50 md:z-auto
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="bb-sidebar-header justify-center">
          <img
            src={logo}
            alt="Bistro Bill"
            className="object-contain"
            style={{ width: "130px", height: "118.5px" }}
          />
        </div>

        {/* Navigation */}
        <nav className="bb-sidebar-nav">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <div
                key={item.path}
                className={`bb-sidebar-link ${
                  isActive ? "bb-sidebar-link--active" : ""
                }`}
                onClick={() => {
                  navigate(item.path);
                  onClose();
                }}
              >
                <i className={`bi ${item.icon}`} />
                <span>{item.name}</span>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
