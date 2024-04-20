import React from "react";
import { assets } from "../../assets/assets";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <a className="logo">&nbsp; Yumf</a>
      <img className="profile" src={assets.profile_image}></img>
    </div>
  );
};

export default NavBar;
