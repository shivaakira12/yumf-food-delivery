import React, { useState } from "react";
import AppDownload from "../../components/AppDownload/AppDownload";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Header from "../../components/Navbar/Header/Header";
import "./Home.css";
export const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
    </div>
  );
};
