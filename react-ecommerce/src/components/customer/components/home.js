import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import CNavbar from "./navbar";

function CustomerHome(props) {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const navigate = useNavigate();
  const [param] = useSearchParams();

  useEffect(() => {
    if (param.get('page') === 'search') {
      const props = param.get('qStr');
      if (props !== null) {
        axios.get('http://localhost:8080/search/' + props)
          .then(response => setSearchProducts(response.data))
          .catch(error => console.error('Error in Fetching Search Products:', error));
      }
    } else {
      setSearchProducts([]);
    }

    axios.get('http://localhost:8080/featured/all')
      .then(response => setFeaturedProducts(response.data))
      .catch(error => console.error('Error in Fetching Featured Products:', error));
  }, [props.strVal]);

  const handleAddToCart = (product) => {
    if (localStorage.getItem('isLoggedIn') === null) {
      // If customer is not logged in, store the intended cart URL and redirect to login/signup
      localStorage.setItem('url', '/customer/cart');
      navigate('/auth/login'); // or navigate('/auth/signup') based on your requirement
    } else {
      // If customer is logged in, add product to cart and navigate to cart page
      let cartValues = [];
      let localCartData = localStorage.getItem('cart');
      if (localCartData) {
        cartValues = JSON.parse(localCartData);
      }
      cartValues.push(product);
      localStorage.setItem('cart', JSON.stringify(cartValues));

      navigate('/customer/cart');
    }
  };

  return (
    <div>
      <CNavbar />
      <div>
        <Card style={{ marginTop: '50px' }}>
          <Row>
            {searchProducts.map((p, index) => (
              <Col key={index} md={4} className="mb-4">
                {/* Render search products */}
              </Col>
            ))}
          </Row>
        </Card>

        <Card style={{ marginTop: '120px' }}>
          <Row>
            {featuredProducts.map((p) => (
              <Col key={p.productId} md={4} className="mb-4">
                <Card style={{ width: '100%', height: '100%', marginBottom: '10px' }}>
                  <CardBody>
                    <CardTitle tag="h5">{p.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Price: Rs. {p.price}
                    </CardSubtitle>
                    <CardText>colour: {p.colour}</CardText>
                    <CardText>screen: {p.size}</CardText>
                    <CardText>{p.productDescription}</CardText>
                    <Button onClick={() => handleAddToCart(p)}>Add to cart</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default CustomerHome;
