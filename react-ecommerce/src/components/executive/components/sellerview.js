import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Table, Button, Row, Col, Card } from "react-bootstrap";
import ENavbar from "./navbar";

function Sellerview() {
  const [param] = useSearchParams();
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/seller/view/all')
      .then(response => setSellers(response.data))
      .catch(error => console.error('Error fetching sellers:', error));
  }, []);


  const handleDeleteClick = (sellerId) => {
    console.log(`Delete button clicked for seller with ID: ${sellerId}`);
  };

  return (
    <div>
    <ENavbar />
    <Row>
      <Col md={8} className="mx-auto">
        <Card className="my-4 p-3">
          <h2 className="mb-4">All Sellers</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, index) => (
                <tr key={seller.id}>
                  <td>{index + 1}</td>
                  <td>{seller.sellerName}</td>
                  <td>{seller.email}</td>
                  <td>{seller.number}</td>
                  <td>{`${seller.address.hno}, ${seller.address.street}, ${seller.address.city}, ${seller.address.state}`}</td>

                  <td>
                    <Button variant="danger" onClick={() => handleDeleteClick(seller.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
    </ div>
  );
}

export default Sellerview;
