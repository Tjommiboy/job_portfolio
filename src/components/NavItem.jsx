import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `p-2 rounded block ${
          isActive
            ? "bg-[var(--generic-1)] text-[var(--generic-7)] w-[90%] "
            : "hover:bg-[var(--transparent-bg)] hover:text-[var(--generic-7)] w-[90%] hover:animate-pulse-once"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
