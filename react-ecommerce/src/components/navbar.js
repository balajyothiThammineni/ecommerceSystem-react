import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();

  return (

    <Navbar bg="primary" expand="md" fixed="top" className="px-sm-4 shadow py-3">
      <Container fluid>
        <Navbar.Brand href="/home" className="brand fw-bold" style={{ color: 'yellow', letterSpacing: '4px' }}>EPIC PICS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarTogglerDemo02" />

        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="ms-auto" style={{ fontFamily: 'poppins' }}>

          <Navbar.Brand onClick={() => navigate('/home')}>Home </Navbar.Brand>
          <Navbar.Brand onClick={() => navigate('/customer/dashboard')}>Customer </Navbar.Brand>
            <Navbar.Brand onClick={() => navigate('/seller/Home')}>Seller </Navbar.Brand>
            <Navbar.Brand onClick={() => navigate('/auth/login')}>Executive </Navbar.Brand>
            <Navbar.Brand onClick={() => navigate('/auth/login')}>Login </Navbar.Brand>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default MyNavbar;