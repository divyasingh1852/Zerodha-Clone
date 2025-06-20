import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const query = new URLSearchParams(window.location.search);
  const userEmail = query.get("user");
  const navigate = useNavigate();
  return (
    <>
      <TopBar />
      {<Dashboard userEmail={userEmail} />} 
    </>
  );
};

export default Home;