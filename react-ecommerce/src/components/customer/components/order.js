import React, { useState } from "react";
import CNavbar from "./navbar";

export default function Order() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    landmark: "",
    pincode: "",
    state: "",
    email: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    debugger
    event.preventDefault();
    console.log("data after submit", data);

    fetch("https:8080/orders/saveall", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Success", responseData);

        setData({
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
          landmark: "",
          pincode: "",
          state: "",
          email: "",
        });
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} tyle={{ fontFamily: "poppins" }}>
      <div className="form-group mt-5 pt-5">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={data.phone}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={data.address}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="landmark">Landmark</label>
        <input
          type="text"
          name="landmark"
          value={data.landmark}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pincode">Pincode</label>
        <input
          type="text"
          name="pincode"
          value={data.pincode}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          value={data.state}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          name="email"
          value={data.email}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="row">
        <div class="mt-3 text-center">
          <a
            href="/successful"
            class="btn text-decoration-none btn-success fw-bold mx-5"
            onClick={handleSubmit 
            }
            >
            
            Place Order 
          </a>
          <a href="/" class="btn text-decoration-none btn-danger fw-bold mx-5">
            Cancel
          </a>
          <CNavbar />
        </div>
      </div>
    </form>
  );
}