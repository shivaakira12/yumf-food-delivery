import React, { useEffect, useContext } from "react";
import "./Verify.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get("success");
  const orderId = urlParams.get("orderId");
  const { url } = useContext(StoreContext);

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      window.location.href = "/myorders";
    } else {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
