import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Nav,
} from "react-bootstrap";
import Sidebar from "./sidebar";
import CNavbar from "./navbar";

function Products() {
  const [param] = useSearchParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    axios
      .get("http://localhost:8080/category/all/" + param.get("cid"))
      .then((response) => setProducts(response.data));
  }, [param]);

  const handleReviewClick = (productId) => {
    navigate("/customer/review/" + productId);
  };

  const handleAddToCartClick = async (p) => {
  
    if (!parseInt(isLoggedIn)) {
      navigate("/auth/signup");
      return;
    }

    let cartvalues = [];
    let localCartData = localStorage.getItem("cart");
    if (localCartData) {
      cartvalues = JSON.parse(localCartData);
    }
    cartvalues.push(p);
    localStorage.setItem("cart", JSON.stringify(cartvalues));
    navigate("/customer/cart");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <CNavbar />
          <div className="row" style={{ marginTop: "3cm" }}>
            {products.map((p, index) => (
              <div key={index} className="col-md-4 mb-4">
                <Card
                  style={{
                    width: "100%",
                    height: "100%",
                    overflowX: "scroll",
                  }}
                >
                  <CardBody>
                    <img src={p.imageData} alt="productImage"></img>
                    <CardTitle tag="h5">{p.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Price: RS. {p.price}
                    </CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Size: {p.size}
                    </CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Colour: {p.colour}
                    </CardSubtitle>
                    <CardText>{p.productDescription}</CardText>
                    <Button
                      style={{ marginRight: "8px" }}
                      onClick={() => handleAddToCartClick(p)}
                    >
                      Cart
                    </Button>
                    <Button
                      style={{ marginLeft: "8px" }}
                      onClick={() => handleReviewClick(p.productId)}
                    >
                      Review
                    </Button>
                  </CardBody>
                </Card>
                <Nav.Link> </Nav.Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

