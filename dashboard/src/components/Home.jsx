import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const query = new URLSearchParams(window.location.search);
  const userEmail = query.get("user");
  const navigate = useNavigate();

  const [authChecked, setAuthChecked] = useState(false);      
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  useEffect(() => {
  const API = process.env.REACT_APP_API_URL || "https://zerodha-backend-89hl.onrender.com";

  axios.post(`${API}/verify`, {}, { withCredentials: true })
    .then((res) => {
     if (res.data.status) {
          setIsAuthenticated(true);                           
        } else {
          navigate("/login");
        }
    })
    .catch((err) => {
      console.error("Verification failed:", err);
      navigate("/login");
    })
    .finally(() => {
        setAuthChecked(true);                               
      });
}, [navigate]);

 if (!authChecked) return <p>Checking login...</p>; 
  return (
    <>
      <TopBar />
      {isAuthenticated && <Dashboard userEmail={userEmail} />} 
    </>
  );
};

export default Home;