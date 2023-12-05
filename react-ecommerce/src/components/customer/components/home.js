import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import CNavbar from "./navbar";

function CustomerHome(props) {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const navigate = useNavigate();
  const [param] = useSearchParams();
  const [searchDone] = useState('');

 

  useEffect(() => {
    if(param.get('page') === 'search'){
     
     const props= param.get('qStr')
      if(props!== null){

      const searchDone='true'
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
  const handleAddProducts = (add) => {
    if (add !== null) {
      localStorage.setItem("cartItems", JSON.stringify(add));
    } else {
      alert("Error");
    }
    navigate('/customer/cart');
  };
  return (
    <div>
      <CNavbar />
    <div>
      <Card  style={{ marginTop: '50px' }}>
      {searchProducts.length !== 0?<div>
            {/* <hr /> */}
          </div>:''}
        <Row>
        
        {/* <CardHeader>Searched Products</CardHeader> */}
          {searchProducts.map((p, index) => (
            <div key={index} className="col-md-4 mb-4">
              
              <Card style={{ width: "90%", height: "100%" }}>
                <CardBody>
                  <CardTitle tag="h5">{p.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Price: RS. {p.price}
                  </CardSubtitle>
                  <CardText>{p.productDescription}</CardText>
                  <Button>Add to cart</Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </Row>
      </Card>
      <Card  style={{ marginTop: '120px' }}>
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
                  <Button onClick={() => { handleAddProducts(p) }}>Add to cart</Button>
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
