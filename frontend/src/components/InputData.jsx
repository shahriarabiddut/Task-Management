import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const InputData = ({ inputForm, setInputForm }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.description || !task.dueDate) {
      alert("Please fill in all fields!");
      return;
    }
    console.log(task);
    // setTask({ title: "", description: "", dueDate: "", status: "pending" });
    setInputForm("hidden");
  };
  return (
    <>
      <div
        className={` ${inputForm} top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}
      ></div>
      <div
        className={` ${inputForm} top-0 left-0 flex items-center justify-center h-screen w-full md:ml-32 my-8`}
        onClick={() => setInputForm("hidden")}
      >
        <div
          className="w-5/6 md:w-3/6 bg-gray-400 min-h-[80vh] p-4 space-y-2 rounded-lg shadow-md"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-between items-center">
            <div className="mx-auto ">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 ">
                Add New Task
              </h2>
            </div>
            <div className="-mt-3 ">
              <button
                className="cursor-pointer"
                onClick={() => setInputForm("hidden")}
              >
                <ImCross className="text-xl text-white" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-800 font-medium">Title:</label>
              <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-purple-600 placeholder:text-white"
                placeholder="Enter task title"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium">
                Description:
              </label>
              <textarea
                name="description"
                value={task.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-purple-600 placeholder:text-white"
                placeholder="Enter task description"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium">
                Due Date:
              </label>
              <input
                type="date"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-purple-600 placeholder:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium">Status:</label>
              <select
                name="status"
                value={task.status}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-purple-600 placeholder:text-white"
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputData;
