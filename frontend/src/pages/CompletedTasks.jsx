import React from "react";
import { Helmet } from "react-helmet-async";
import Cards from "../components/Cards";

const CompletedTasks = () => {
  const dark = true;
  return (
    <>
      <Helmet>
        <title>Completed Tasks | {import.meta.env.VITE_NAME} </title>
      </Helmet>
      <h1
        className={`text-5xl font-semibold text-center my-4 ${
          dark ? "text-white" : "text-gray-800"
        }`}
      >
        Completed Tasks
      </h1>
      <Cards show={false} status={"completed"} />
    </>
  );
};

export default CompletedTasks;
