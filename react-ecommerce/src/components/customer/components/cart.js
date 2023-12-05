import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from "react-bootstrap";
import CNavbar from "./navbar";

function Cart() {
  const [item, setItem] = useState({});

  useEffect(() => {
    const items = localStorage.getItem("cartItems");
    const parsedItem = JSON.parse(items);
    if (parsedItem) {
      setItem(parsedItem);
    }
  }, []);

  return (
    <div>
      <Card style={{ marginTop: "120px" }}>
        <CardHeader>Selected cart Items</CardHeader>
        <Card style={{ width: "100%", height: "100%", marginBottom: "20px" }}>
          <CardBody>
            <CardTitle tag="h5">{item.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Price: Rs. {item.price}
            </CardSubtitle>
            <CardText>{item.productDescription}</CardText>
          </CardBody>
        </Card>
        <CNavbar /> 
      </Card>
    </div>
  );
}

export default Cart;
