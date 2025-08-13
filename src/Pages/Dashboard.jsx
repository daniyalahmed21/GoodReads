import React, { useEffect } from "react";
import Layout from "Layouts/Layout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("authState.isLoggedIn changed");
    if (!authState.isLoggedIn) {
      navigate("/signin");
    }
  }, [authState.isLoggedIn, navigate]);

  return <Layout>Dashboard</Layout>;
};

export default Dashboard;
