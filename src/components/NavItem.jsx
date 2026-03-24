import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `p-2 rounded block ${
          isActive
            ? "bg-[linear-gradient(to_right,rgba(13,148,136,0.8),rgba(8,145,178,0.5))] text-[var(--generic-7)] w-[90%] "
            : "hover:bg-sky-400/10 hover:text-[var(--generic-7)] w-[90%] hover:animate-pulse-once text-[var(--generic-2)]"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
