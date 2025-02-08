import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoIosAddCircle } from "react-icons/io";
import Cards from "../components/Cards";
import InputData from "../components/InputData";

const UserDashboard = () => {
  const dark = true;
  const [inputForm, setInputForm] = useState("hidden");
  return (
    <section>
      <Helmet>
        <title>Dashboard | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      <h1
        className={`text-5xl font-semibold text-center my-4 ${
          dark ? "text-white" : "text-gray-800"
        }`}
      >
        Dashboard
      </h1>
      <div className="flex justify-end">
        <div
          className={`hover:cursor-pointer my-2 ${
            dark ? "text-white " : "text-gray-800 "
          }`}
        >
          <IoIosAddCircle
            className="text-4xl"
            onClick={() => setInputForm("fixed")}
          />
        </div>
      </div>
      <Cards show={true} status={"all"} />
      <InputData inputForm={inputForm} setInputForm={setInputForm} />
    </section>
  );
};

export default UserDashboard;
