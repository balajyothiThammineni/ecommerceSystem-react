import React from "react";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <Navbar.Brand href="/home" className="brand fw-bold" style={{ color: '#4A55A2', fontFamily: 'poppins', letterSpacing: '2px',  marginLeft: '1cm'}}>
           Seller Dashboard
      </Navbar.Brand>

      <div className="ms-auto d-flex gap-2">
        <Navbar.Brand onClick={() => navigate('/home')}>Home </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate('/Register')}>Register </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate('/Login')}>Login </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate('/MyProducts')}>MyProducts </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate('/Update Details')}>Update Details </Navbar.Brand>

      </div>
    </nav>
  );
}

export default SNavbar;
