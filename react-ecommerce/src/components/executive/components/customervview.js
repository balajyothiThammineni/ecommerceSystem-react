import React, { Component } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Table, Button, Row, Col, Card } from "react-bootstrap";
import ENavbar from "./navbar";

class Sellerview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/customer/all")
      .then((response) => this.setState({ customers: response.data }))
      .catch((error) => console.error("Error fetching customers:", error));
  }

  handleDeleteClick = (customerId) => {
    // Log the customerId to check if it's correct
    console.log(`Delete button clicked for customer with ID: ${customerId}`);
  
    axios
      .delete(`http://localhost:8080/customer/delete/${customerId}`)
      .then((response) => {
        console.log("Customer deleted successfully");
        // Update the state to remove the deleted customer from the list
        this.setState((prevState) => ({
          customers: prevState.customers.filter(
            (customer) => customer.id !== customerId
          ),
        }));
      })
      .catch((error) => console.error("Error deleting customer:", error));
  };

  render() {
    const { customers } = this.state;

    return (
      <div>
        <ENavbar />

        <Row>
          <Col md={8} className="mx-auto">
            <Card className="my-4 p-3">
              <h2 className="mb-4">All Customers</h2>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Address</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={customer.id}>
                      <td>{index + 1}</td>
                      <td>{customer.customerName}</td>
                      <td>{customer.customerEmail}</td>
                      <td>{customer.customerNumber}</td>
                      <td>{`${customer.address.hno}, ${customer.address.street}, ${customer.address.city}, ${customer.address.state}`}</td>

                      <td>
                        {/* <Button
                          variant="danger"
                          onClick={() =>
                            this.handleDeleteClick(customer.id)
                          }
                        >
                          Delete
                        </Button> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Sellerview;
