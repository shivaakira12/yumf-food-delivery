import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./List.css";

const List = ({ url }) => {
  console.log(url);
  const [list, setList] = useState([]);
  console.log(list);

  const fetchList = async () => {
    console.log("logging");
    try {
      const response = await fetch(`${url}/api/food/list`);
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.success) {
        setList(responseData.data);
      } else {
        toast.error("Error in Getting Data");
      }
    } catch (error) {
      console.error("Error fetching list:", error);
      toast.error("Error in Getting Data");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await fetch(`${url}/api/food/remove`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: foodId }),
      });
      const responseData = await response.json();
      await fetchList();
      if (responseData.success) {
        toast.success(responseData.message);
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.error("Error removing food:", error);
      toast.error("Error removing food");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt={item.name}></img>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
