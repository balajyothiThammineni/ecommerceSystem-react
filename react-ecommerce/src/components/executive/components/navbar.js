import React from "react";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ENavbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <Navbar.Brand href="/home" className="brand fw-bold" style={{ color: '#4A55A2', fontFamily: 'poppins', letterSpacing: '2px',  marginLeft: '1cm'}}>
           Executive Dashboard
      </Navbar.Brand>

      <div className="ms-auto d-flex gap-2">
        <Navbar.Brand onClick={() => navigate('/home')}>Home </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate('/addcategory')}>Add Category </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate('/Sellerview')}>All Sellers </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate('/CustomerView')}>view customers </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate('/Logout')}>Logout </Navbar.Brand>



      </div>
    </nav>
  );
}

export default ENavbar;
