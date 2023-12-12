import React from "react";
import CNavbar from "./navbar";
import { FaCheckCircle } from "react-icons/fa"; 

function Order() {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Order Successful!</h2>
        <FaCheckCircle style={{ color: "green", fontSize: "3em" }} />
      </div>
      <CNavbar />
    </div>
  );
}

export default Order;
