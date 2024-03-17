import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import SingleFoodItem from "../SingleFoodItem/SingleFoodItem";
import "./FoodDisplay.css";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishers near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <SingleFoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
              ></SingleFoodItem>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
