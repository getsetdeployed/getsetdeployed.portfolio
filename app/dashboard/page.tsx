"use client";
// pages/dashboard.js
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isClient && (
        <iframe
          src="https://focalboard-latest-jntk.onrender.com"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Focalboard"
        />
      )}
    </div>
  );
};

export default Dashboard;
