import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar-options">
        <NavLink to="/add" className="sideBar-option">
          <img src={assets.add_icon}></img>
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sideBar-option">
          <img src={assets.order_icon}></img>
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sideBar-option">
          <img src={assets.order_icon}></img>
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
