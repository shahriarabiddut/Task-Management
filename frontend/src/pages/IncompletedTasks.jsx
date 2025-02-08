import React from "react";
import Cards from "../components/Cards";
import { Helmet } from "react-helmet-async";

const IncompletedTasks = () => {
  const dark = true;
  return (
    <>
      <Helmet>
        <title>Pending Tasks | {import.meta.env.VITE_NAME} </title>
      </Helmet>
      <h1
        className={`text-2xl font-semibold text-center my-4 ${
          dark ? "text-white" : "text-gray-800"
        }`}
      >
        Pending Tasks
      </h1>
      <Cards show={false} status={"pending"} />
    </>
  );
};

export default IncompletedTasks;
