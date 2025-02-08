import React from "react";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold text-green-600">Task Manager</h1>
        <nav>
          <Link to="/login" className="text-gray-700 hover:text-green-600 mx-4">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </Link>
        </nav>
      </header>
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Task Manager
        </h2>
        <p className="text-lg text-gray-600 max-w-lg">
          Effortlessly organize, track, and manage your daily tasks with ease.
          Stay productive and focused with our intuitive task management system.
        </p>
        <div className="mt-6">
          <Link
            to="/dashboard"
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section id="about" className="py-20 bg-white text-center px-6">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          About Task Manager
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our Task Manager helps you stay organized and productive. Features
          include:
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto px-6">
          <div className="bg-green-200 p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Task Organization
            </h4>
            <p className="text-gray-600">
              Easily create, edit, and manage your tasks.
            </p>
          </div>
          <div className="bg-green-200 p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Task Status
            </h4>
            <p className="text-gray-600">
              Completed and Pending Tasks management.
            </p>
          </div>
          <div className="bg-green-200 p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Security
            </h4>
            <p className="text-gray-600">
              Data is private only you have the access to the data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
