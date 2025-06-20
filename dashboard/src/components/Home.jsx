import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const query = new URLSearchParams(window.location.search);
  const userEmail = query.get("user");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("/verify", {}, { withCredentials: true })
      .then((res) => {
        if (!res.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error("Verification failed:", err);
        navigate("/login");
      });
  }, [navigate]);

  return (
    <>
      <TopBar />
      <Dashboard userEmail={userEmail} />
    </>
  );
};

export default Home;