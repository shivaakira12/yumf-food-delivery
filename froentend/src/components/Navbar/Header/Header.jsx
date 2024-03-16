import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your favorite Food Here</h2>
        <p>
          Dive into our curated selection of recipes, explore cuisines from
          around the globe, and find inspiration for your next culinary
          adventure. We're your one-stop shop for everything food, from easy
          weeknight meals to show-stopping feasts.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
