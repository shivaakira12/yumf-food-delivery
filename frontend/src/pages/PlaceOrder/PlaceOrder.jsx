import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="firstname"></input>
          <input type="text" placeholder="lastname"></input>
        </div>
        <input type="email" placeholder="email Address"></input>
        <input type="text" placeholder="street"></input>
        <div className="multi-fields">
          <input type="text" placeholder="city"></input>
          <input type="text" placeholder="state"></input>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="zipcode"></input>
          <input type="text" placeholder="country"></input>
        </div>
        <input type="text" placeholder="phone"></input>
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
