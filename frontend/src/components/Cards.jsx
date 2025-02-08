import React, { useState } from "react";
import Card from "./Card";
import { IoIosAddCircle } from "react-icons/io";
import InputData from "./InputData";

const Cards = ({ show, status }) => {
  const dark = true;
  const data = [
    {
      id: "1",
      userId: "101",
      title: "Complete Project Report",
      description:
        "Finish the final report for the project, including all necessary data and conclusions.",
      dueDate: "2025-02-15",
      status: "pending",
    },
    {
      id: "2",
      userId: "102",
      title: "Meeting with the Design Team",
      description:
        "Hold a meeting to discuss the user interface design updates and feedback.",
      dueDate: "2025-02-10",
      status: "completed",
    },
    {
      id: "3",
      userId: "103",
      title: "Prepare Client Presentation",
      description:
        "Prepare a presentation for the client showcasing the progress of the current project.",
      dueDate: "2025-02-12",
      status: "pending",
    },
    {
      id: "4",
      userId: "101",
      title: "Update Website Content",
      description:
        "Review and update the content on the website, including blog posts and product descriptions.",
      dueDate: "2025-02-18",
      status: "pending",
    },
    {
      id: "5",
      userId: "104",
      title: "Test New Feature Implementation",
      description:
        "Test the newly implemented feature for bugs and ensure everything is working as expected.",
      dueDate: "2025-02-14",
      status: "completed",
    },
    {
      id: "6",
      userId: "105",
      title: "Team Training Session",
      description:
        "Conduct a training session for the team on the latest project management tools and techniques.",
      dueDate: "2025-02-20",
      status: "pending",
    },
  ];
  const tasks =
    status == "all" ? data : data.filter((task) => task.status == status);
  const [inputForm, setInputForm] = useState("hidden");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-2">
      {tasks.map((task) => (
        <Card task={task} key={task.id} />
      ))}
      {show && (
        <div
          className={`w-full flex flex-1 flex-col justify-center items-center p-4 scale-100 hover:scale-105 hover:transition hover:cursor-pointer duration-400 ${
            dark ? "text-white bg-gray-600" : "text-gray-800 bg-gray-100"
          } rounded-xl`}
          onClick={() => setInputForm("fixed")}
        >
          <IoIosAddCircle className="text-5xl" />
          <h2 className={`text-center`}> Add Tasks</h2>
        </div>
      )}
      <InputData inputForm={inputForm} setInputForm={setInputForm} />
    </div>
  );
};

export default Cards;
