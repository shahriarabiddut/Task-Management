import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/CompletedTasks";
import IncompletedTasks from "./pages/IncompletedTasks";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/dashboard" element={<Dashboard />}>
        <Route index path="/dashboard" element={<UserDashboard />} />
        <Route index path="/dashboard/userHome" element={<UserDashboard />} />
        <Route path="/dashboard/allTasks" element={<AllTasks />} />
        <Route path="/dashboard/importantTasks" element={<ImportantTasks />} />
        <Route path="/dashboard/completedTasks" element={<CompletedTasks />} />
        <Route
          path="/dashboard/incompletedTasks"
          element={<IncompletedTasks />}
        />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/profile/updated" element={<EditProfile />} />
      </Route>
    </Routes>
  );
};

export default App;
