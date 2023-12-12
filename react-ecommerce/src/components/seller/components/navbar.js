import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SNavbar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" variant="light" bg="primary" style={{ backgroundColor: 'skyblue', borderBottom: '1px solid #4A55A2', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Navbar.Brand href="/home" className="brand fw-bold" style={{ color: 'white', fontFamily: 'Poppins', letterSpacing: '2px' }}>
        Seller Dashboard
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav className="ms-auto">
          <Nav.Link onClick={() => navigate('/home')} style={{ color: 'black' }}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/auth/register')} style={{ color: 'black' }}>Register</Nav.Link>
          <Nav.Link onClick={() => navigate('/auth/login')} style={{ color: 'black' }}>Login</Nav.Link>
          <Nav.Link onClick={() => navigate('/seller/myproducts')} style={{ color: 'black' }}>MyProducts</Nav.Link>
          <Nav.Link onClick={() => navigate('/seller/updatedetails')} style={{ color: 'black' }}>UpdateDetails</Nav.Link>

          <Nav.Link onClick={() => navigate('/auth/logout')} style={{ color: 'black' }}>Logout</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SNavbar;
