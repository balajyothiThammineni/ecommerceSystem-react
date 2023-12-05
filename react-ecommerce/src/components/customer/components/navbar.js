
import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CNavbar() {
  const [qStr, setQStr] = useState('');
  const navigate = useNavigate();
  const func=(str)=>{
    navigate("/customer/home?page=search&qStr="+str)
   

  }
  return (
    <Navbar bg="primary" expand="md" fixed="top" className="px-sm-2 shadow py-1">
      <Container fluid>
        <Navbar.Brand href="/home" className="brand fw-bold" style={{ color: 'Black', fontFamily: 'poppins', letterSpacing: '2px' }}>
          Customer Dashboard
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarTogglerDemo02" />

        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="ms-auto" style={{ fontFamily: 'poppins' }}>
            <Navbar.Brand onClick={() => navigate('/home')}>Home </Navbar.Brand>
            <Navbar.Brand onClick={() => navigate('/auth/Signup')}>Signup </Navbar.Brand>
            <Navbar.Brand onClick={() => navigate('/customer/cart')}>Cart</Navbar.Brand>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Form onSubmit={(e)=>{
              e.preventDefault();
              func(qStr);
            }}>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    onChange={(e) => setQStr(e.target.value)}
                  />
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CNavbar;
