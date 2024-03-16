import React, { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Navbar/Header/Header";
import "./Home.css";
export const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
    </div>
  );
};
