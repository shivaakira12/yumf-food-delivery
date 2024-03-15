import React, { useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { MdOutlineFoodBank } from "react-icons/md";
const NavBar = () => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="navbar">
      <a className="logo">
        <MdOutlineFoodBank
          color="#2bc5b4"
          style={{ fontSize: "26px", fontWeight: "bolder" }}
        />
        &nbsp; Yumf
      </a>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon}></img>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon}></img>
          <div className="dot"></div>
        </div>
        <button>signin</button>
      </div>
    </div>
  );
};

export default NavBar;
