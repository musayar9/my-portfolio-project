import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" w-[90vw] w-max-[1120px] mt-10 mb-0 flex items-center justify-end space-x-3 text-lg ">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive
            ? "text-teal-700 underline text-lg  font-bold  "
            : "text-[#334155] text-md   font-semibold";
        }}
      >
        Projects
      </NavLink>
      <NavLink
        to="/article"
        className={({ isActive }) => {
          return isActive
            ? "text-teal-700 underline text-lg font-bold  "
            : "text-[#334155] text-md  font-semibold ";
        }}
      >
        Articles
      </NavLink>
    </header>
  );
};

export default Header;
