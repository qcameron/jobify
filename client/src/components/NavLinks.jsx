import { useContext } from "react";
import { DashboardContext } from "../pages/DashboardLayout";
import { NavLink } from "react-router-dom";
import { links } from "../utils/links";

const useDashboardContext = () => useContext(DashboardContext);

const NavLinks = () => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (path === "admin" && role !== "admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
