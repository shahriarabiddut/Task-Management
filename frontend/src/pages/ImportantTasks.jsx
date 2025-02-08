import React from "react";
import { Helmet } from "react-helmet-async";

const ImportantTasks = () => {
  const dark = true;
  return (
    <>
      <Helmet>
        <title>Important Tasks | {import.meta.env.VITE_NAME} </title>
      </Helmet>
      <h1
        className={`text-5xl font-semibold text-center my-4 ${
          dark ? "text-white" : "text-gray-800"
        }`}
      >
        Important Tasks
      </h1>
    </>
  );
};

export default ImportantTasks;
