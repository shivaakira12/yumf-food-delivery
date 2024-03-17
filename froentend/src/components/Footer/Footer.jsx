import React from "react";
import "./Footer.css";
import { MdOutlineFoodBank } from "react-icons/md";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <a className="logo">
            <MdOutlineFoodBank
              color="#2bc5b4"
              style={{ fontSize: "26px", fontWeight: "bolder" }}
            />
            &nbsp; Yumf
          </a>
          <p>
            Savor convenience with every bite. Delight your taste buds with our
            wide selection of flavors delivered straight to your doorstep.
            Experience culinary excellence, one order at a time
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon}></img>
            <img src={assets.twitter_icon}></img>
            <img src={assets.linkedin_icon}></img>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 9182361656</li>
            <li>contact@yumf.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 &copy; yumf.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
