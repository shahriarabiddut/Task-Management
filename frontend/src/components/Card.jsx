import React from "react";
import { FaHeart, FaPen, FaTrash } from "react-icons/fa";

const card = ({ task }) => {
  const dark = true;
  return (
    <div
      className={`w-full flex flex-col h-full justify-between shadow-md rounded-lg overflow-hidden p-4 space-y-2 ${
        dark ? "text-white bg-gray-600" : "text-gray-800 bg-gray-100"
      }`}
    >
      <h3
        className={`text-xl font-semibold ${
          dark ? "text-white " : "text-gray-800 "
        }`}
      >
        {task.title}
      </h3>
      <p className={`${dark ? "text-white " : "text-gray-800 "}`}>
        {task.description}
      </p>
      <div>
        <div className={`text-sm ${dark ? "text-white " : "text-gray-800 "}`}>
          <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium uppercase 
          ${
            task.status === "completed"
              ? "bg-green-200 text-green-800"
              : "bg-yellow-200 text-yellow-800"
          }`}
          >
            {task.status}
          </div>
          <div className="flex space-x-3">
            <button className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center justify-center cursor-pointer">
              <FaHeart />
            </button>
            <button className="text-green-500 hover:text-green-700 font-medium inline-flex items-center justify-center cursor-pointer">
              <FaPen />
            </button>
            <button className="text-red-500 hover:text-red-700 font-medium inline-flex items-center justify-center cursor-pointer">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
