import React from "react";
import CNavbar from "./navbar";

function Contact() {
  return (
    <div className="container mt-5 pt-5">
      <div className="card">
        <div
          className="card-header"
          style={{ background: "#007BFF", color: "#fff" }}
        >
          <h3 className="mb-0">Contact Us</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h4>Contact Information</h4>
              <p>
                Email:{" "}
                <a href="mailto:tbalajyothi17@gmail.com">
                  tbalajyothi17@gmail.com
                </a>
              </p>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>

      <CNavbar />
    </div>
  );
}
export default Contact;
