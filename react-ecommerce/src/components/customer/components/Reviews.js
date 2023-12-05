import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div>
      <h3>Review for Product {pid}</h3>
      {isDataLoaded && reviewData.length > 0 ? (
        <div>
          <p>Rating: {reviewData[0].rating}</p>
          <p>Review Description: {reviewData[0].reviewDescription}</p>
          <p>Date: {reviewData[0].date}</p>
        </div>
      ) : (
        <p>Loading review data...</p>
      )}
    </div>
  );
}

export default Review;
