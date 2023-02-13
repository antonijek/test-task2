import React from "react";
import "../style/dashboard.css";
import { NavLink } from "react-router-dom";

const tabs = [
  "Community",
  "User information",
  "Account Settings",
  "Billing",
  "Invoices",
  "Payment Processing",
  "CRM",
  "Team",
  "Add ON",
  "App Market",
  "Help",
];
let activeStyle = {
  backgroundColor: "#FEC40E",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <img className="logo" src="../images/logo.svg" alt="" />

      {tabs.map((item, i) => (
        <ul key={i}>
          <NavLink
            to={item.replaceAll(" ", "-").toLowerCase()}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {item}
          </NavLink>
        </ul>
      ))}
    </div>
  );
};

export default Dashboard;
