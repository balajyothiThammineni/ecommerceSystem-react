import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CNavbar from "./navbar";

function Review() {
  const { pid } = useParams();
  const [reviewData, setReviewData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data for pid:", pid);
        const response = await axios.get(`http://localhost:8080/review/product/${pid}`);
        console.log("API Response:", response.data);
        setReviewData(response.data);
        setIsDataLoaded(true); // Set the flag to trigger re-render
      } catch (error) {
        console.error("Error fetching review data:", error);
      }
    };

    fetchData();
  }, [pid]);

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Review for Product {pid}</h3>
      {isDataLoaded && reviewData.length > 0 ? (
        <div style={styles.reviewContainer}>
          <p style={styles.detail}>Rating: {reviewData[0].rating}</p>
          <p style={styles.detail}>Review Description: {reviewData[0].reviewDescription}</p>
          <p style={styles.detail}>Date: {reviewData[0].date}</p>
        </div>
      ) : (
        <p style={styles.loading}>Loading review data...</p>
      )}
      <CNavbar />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
  reviewContainer: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  detail: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  loading: {
    fontSize: "16px",
    color: "#888",
  },
};

export default Review;
