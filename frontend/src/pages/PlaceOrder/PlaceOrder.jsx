import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(
      "http://localhost:4000/api/order/place",
      orderData,
      {
        headers: { token },
      }
    );
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);
  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            required
            type="text"
            placeholder="firstname"
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
          ></input>
          <input
            required
            type="text"
            placeholder="lastname"
            name="lastName"
            value={data.lastName}
            onChange={onChangeHandler}
          ></input>
        </div>
        <input
          required
          type="email"
          placeholder="email Address"
          name="email"
          onChange={onChangeHandler}
          value={data.email}
        ></input>
        <input
          required
          type="text"
          placeholder="street"
          name="street"
          onChange={onChangeHandler}
          value={data.street}
        ></input>
        <div className="multi-fields">
          <input
            required
            type="text"
            placeholder="city"
            name="city"
            onChange={onChangeHandler}
            value={data.city}
          ></input>
          <input
            required
            type="text"
            placeholder="state"
            name="state"
            onChange={onChangeHandler}
            value={data.state}
          ></input>
        </div>
        <div className="multi-fields">
          <input
            required
            type="text"
            placeholder="zipcode"
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
          ></input>
          <input
            required
            type="text"
            placeholder="country"
            name="country"
            onChange={onChangeHandler}
            value={data.country}
          ></input>
        </div>
        <input
          required
          type="text"
          placeholder="phone"
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
        ></input>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$ {getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
