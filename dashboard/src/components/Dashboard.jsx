import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "../App";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = ({ userEmail }) => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">

        <div style={{ padding: "1rem", fontWeight: "500" }}>
          {userEmail
            ? `Welcome back, ${userEmail}`
            : "Welcome to your dashboard"}
        </div>


        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </div>
      </div>
  );
};

export default Dashboard;
















































