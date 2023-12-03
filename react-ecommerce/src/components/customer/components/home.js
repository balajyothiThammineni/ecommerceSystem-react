import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Nav, Row, Col } from "react-bootstrap";

function CustomerHome() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [msg, setMsg] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);
  <CustomerHome bg="blue" expand="md" fixed="top" className="px-sm-2 shadow py-1"></CustomerHome>


  useEffect(() => {
    axios.get('http://localhost:8080/featured/all')
      .then(response => setFeaturedProducts(response.data))
      .catch(error => setMsg('Error in Fetching Products'));
  }, []); 

  return (
    <div>
      <Card style={{ marginTop: '120px' }}>
        <CardHeader>Featured</CardHeader>
        <Row>
          {featuredProducts.map((p) => (
            <Col key={p.productId} xs={12} sm={6} md={4} className="mb-4">
              <Card style={{ width: '100%', height: '100%', marginBottom: '20px' }}>
                <CardBody>
                  <CardTitle tag="h5">{p.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Price: Rs. {p.price}
                  </CardSubtitle>
                  <CardText>{p.productDescription}</CardText>
                  <Button>Add to cart</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
      <Nav.Link></Nav.Link>
    </div>
  );
}

export default CustomerHome;
