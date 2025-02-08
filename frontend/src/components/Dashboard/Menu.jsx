import React from "react";
import { CgNotes } from "react-icons/cg";
import { FaCheckDouble, FaHome, FaUser } from "react-icons/fa";
import {
  MdDashboard,
  MdLabelImportant,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { TbNotebookOff } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const Menu = ({ dark }) => {
  const menuCss = ({ isActive }) =>
    `inline-flex items-center w-full text-sm font-semibold ${
      dark ? "hover:text-gray-200" : "hover:text-gray-800"
    } ${isActive ? "border-l-4 pl-1 border-l-firstBg " : ""}`;

  return (
    <div className={`py-4 ${dark ? "text-gray-400" : "text-gray-500"}`}>
      <NavLink
        className={`ml-6 text-xl font-bold font-playWrite ${
          dark ? "text-green-200" : "text-green-800"
        }`}
        to={"/"}
      >
        {import.meta.env.VITE_NAME}
      </NavLink>
      <ul className="mt-6">
        <li className="relative px-6 py-1">
          <NavLink to={`/dashboard/userHome`} className={menuCss}>
            <MdDashboard className="text-xl" />
            <span className="ml-4">Dashboard</span>
          </NavLink>
        </li>
        <li className="relative px-6 py-1">
          <NavLink to={`/dashboard/allTasks`} className={menuCss}>
            <CgNotes className="text-xl" />
            <span className="ml-4">All Tasks</span>
          </NavLink>
        </li>
        <li className="relative px-6 py-1">
          <NavLink to={`/dashboard/importantTasks`} className={menuCss}>
            <MdLabelImportant className="text-xl" />
            <span className="ml-4">Important Tasks</span>
          </NavLink>
        </li>
        <li className="relative px-6 py-1">
          <NavLink to={`/dashboard/completedTasks`} className={menuCss}>
            <FaCheckDouble className="text-xl" />
            <span className="ml-4">Completed Tasks</span>
          </NavLink>
        </li>
        <li className="relative px-6 py-1">
          <NavLink to={`/dashboard/incompletedTasks`} className={menuCss}>
            <TbNotebookOff className="text-xl" />
            <span className="ml-4">Pending Tasks</span>
          </NavLink>
        </li>

        <div
          className={`divider md:mx-6 my-5 w-full h-1 ${
            dark ? "bg-gray-200" : "bg-gray-500"
          }`}
        ></div>
        <li className="relative px-6 py-1">
          <NavLink to={`/dashboard/profile`} className={menuCss}>
            <FaUser className="text-xl" />
            <span className="ml-4">Profile</span>
          </NavLink>
        </li>
        <li className="relative px-6 py-1">
          <NavLink to={`/`} className={menuCss}>
            <FaHome className="text-xl" />
            <span className="ml-4">Home</span>
          </NavLink>
        </li>
        <li className="relative px-6 py-1">
          <NavLink to={`/contact`} className={menuCss}>
            <MdOutlineSupportAgent className="text-xl" />
            <span className="ml-4">Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
