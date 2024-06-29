import React, { useEffect, useContext } from "react";
import "./Verify.css";
import { StoreContext } from "../../context/StoreContext";

const Verify = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get("success");
  const orderId = urlParams.get("orderId");
  const { url } = useContext(StoreContext);

  const verifyPayment = async () => {
    try {
      const response = await fetch(url + "/api/order/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ success, orderId }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = "/myorders";
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
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
