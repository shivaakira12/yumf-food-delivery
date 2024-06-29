import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { MdOutlineFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const NavBar = ({ setshowLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className="navbar">
      {" "}
      <Link to="/">
        <a className="logo">
          {" "}
          <MdOutlineFoodBank
            color="#2bc5b4"
            style={{ fontSize: "26px", fontWeight: "bolder" }}
          />
          &nbsp; Yumf
        </a>
      </Link>
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
          <Link to="/cart">
            <img src={assets.basket_icon}></img>
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setshowLogin(true)}>signin</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon}></img>
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                {/* <img src={assets.bag_icon}></img> */}
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                {/* <img src={assets.logout_icon}></img> */}
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
