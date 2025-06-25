import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";


const Home = () => {
  return (
    <>
     <div className="dashboard-scope">
      <TopBar />
      <Dashboard />
      </div>
    </>
  );
};

export default Home;
