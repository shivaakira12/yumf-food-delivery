import React, { useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { MdOutlineFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";
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
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
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
