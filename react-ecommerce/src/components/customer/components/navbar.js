import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CNavbar = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    // Handle search functionality, e.g., navigate to a search results page
    console.log("Search query:", query);
  };

  return (
    <Navbar bg="blue" expand="md" fixed="top" className="px-sm-2 shadow py-1">
      <Container fluid>
        <Navbar.Brand href="/home" className="brand fw-bold" style={{ color: '#4A55A2', fontFamily: 'poppins', letterSpacing: '2px' }}>
          Customer Dashboard
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarTogglerDemo02" />

        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="ms-auto" style={{ fontFamily: 'poppins' }}>

            <Navbar.Brand onClick={() => navigate('/home')}>Home </Navbar.Brand>
            <Navbar.Brand onClick={() => navigate('/auth/Signup')}>Signup </Navbar.Brand>
            <Navbar.Brand onClick={() => navigate('/customer/cart')}>Cart</Navbar.Brand>
            <Navbar.Brand onClick={() => navigate('/customer/previous_orders')}>Previous Orders</Navbar.Brand>
            <Form className="d-flex ms-2">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Button variant="outline-light" onClick={() => handleSearch("search query")}>
                Search
              </Button>
              <Navbar.Brand onClick={() => navigate('/auth/logout')}>Logout</Navbar.Brand>

            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Exporting the NavbarComponent for use in other parts of the application
export default CNavbar;