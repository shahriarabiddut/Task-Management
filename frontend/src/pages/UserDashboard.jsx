import React from "react";
import { Helmet } from "react-helmet-async";
import { IoIosAddCircle } from "react-icons/io";
import Cards from "../components/Cards";

const UserDashboard = () => {
  const dark = true;
  return (
    <section>
      <Helmet>
        <title>Dashboard | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      <h1
        className={`text-2xl font-semibold text-center my-4 ${
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
          <IoIosAddCircle className="text-4xl" />
        </div>
      </div>

      <Cards show={true} status={"all"} />
    </section>
  );
};

export default UserDashboard;
