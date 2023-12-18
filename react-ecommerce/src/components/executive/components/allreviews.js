import React, { Component } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Table, Button, Row, Col, Card } from "react-bootstrap";
import ENavbar from "./navbar";

class AllReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get('http://localhost:8080/review/getall')
      .then(response => this.setState({ reviews: response.data }))
      .catch(error => console.error('Error fetching reviews:', error));
  };

  handleDeleteClick = (reviewId) => {
    if (reviewId === undefined || reviewId === null) {
      console.error('Review ID is undefined or null');
      return;
    }

    console.log(`Delete button clicked for review with ID: ${reviewId}`);
    axios.delete(`http://localhost:8080/review/delete/${reviewId}`)
      .then(response => {
        console.log('Delete response:', response);
        console.log('Review deleted successfully');
        this.setState(prevState => ({
          reviews: prevState.reviews.filter(review => review.reviewId !== reviewId),
        }));
      })
      .catch(error => console.error('Error deleting review:', error));
  };

  render() {
    const { reviews } = this.state;

    return (
      <div>
        <ENavbar />
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="my-4 p-3">
              <h2 className="mb-4">All Reviews</h2>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Sno</th>
                    <th>Product Name</th>
                    <th>Rating</th>
                    <th>Review Description</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review, index) => (
                    <tr key={review.reviewId}>
                      <td>{index + 1}</td>
                      <td>{review.product && review.product.name}</td>
                      <td>{review.rating}</td>
                      <td>{review.reviewDescription}</td>
                      <td>{review.date}</td>
                      <td>
                        <Button variant="danger" onClick={() => this.handleDeleteClick(review.reviewId)}>Delete</Button>
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

export default AllReviews;
