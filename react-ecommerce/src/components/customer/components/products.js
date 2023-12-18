import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import Sidebar from "./sidebar";
import CNavbar from "./navbar";

function Products() {
  const [param] = useSearchParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/category/all/" + param.get("cid"))
      .then((response) => setProducts(response.data));
  }, [param]);

  const handleReviewClick = (productId) => {
    navigate("/customer/review/" + productId);
  };

  const handleAddToCart = (product) => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      alert("Please login first before proceeding to your cart");
      localStorage.setItem("url", "/customer/cart");
      navigate("/auth/login");
    } else {
      let cartValues = [];
      let localCartData = localStorage.getItem("cart");
      if (localCartData) {
        cartValues = JSON.parse(localCartData);
      }
      cartValues.push(product);
      localStorage.setItem("cart", JSON.stringify(cartValues));

      navigate("/customer/cart");
    }
  };

  return (
    <div className="container-fluid">
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <CNavbar />
          <Row style={{ marginTop: "3cm" }}>
            {products.map((p, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card style={{ height: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={p.imageData}
                    style={{ height: "370px", objectFit: "cover" }}
                    alt="productImage"
                  />
                  <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>
                      <strong>Price:</strong> RS. {p.price}
                      <br />
                      <strong>Size:</strong> {p.size}
                      <br />
                      <strong>Colour:</strong> {p.colour}
                    </Card.Text>
                    <Card.Text>{p.productDescription}</Card.Text>
                    {/* <Button style={{marginRight:'10px'}} variant="primary" onClick={() => handleAddToCartClick(p)}>
                      Add to Cart
                    </Button> */}
                    <Button
                      style={{ marginRight: "10px" }}
                      variant="primary"
                      onClick={() => handleAddToCart(p)}
                    >
                      Cart
                    </Button>

                    <Button
                      style={{ marginRight: "10px" }}
                      variant="primary"
                      onClick={() => handleReviewClick(p.productId)}
                    >
                      Review
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Products;
