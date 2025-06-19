import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const query = new URLSearchParams(window.location.search);
  const userEmail = query.get("user");

  return (
    <>
      <TopBar />
      {/* <Dashboard /> */}
       <Dashboard userEmail={userEmail} />
    </>
  );
};

export default Home;