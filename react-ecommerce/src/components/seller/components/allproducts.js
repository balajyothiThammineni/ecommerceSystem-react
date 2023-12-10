import React, { useEffect, useState } from "react";
import axios from "axios";
import SNavbar from "./navbar";

function Allproducts() {
  const [products, setProducts] = useState([]);
  const sid = "your_seller_id"; // Replace with the actual seller ID

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(`http://localhost:8080/product/seller/${sid}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  };

  return (
    <div>
      <SNavbar />

      <div className="container mt-5">
        <h2>All Products</h2>
        <div className="row">
          {products.map(product => (
            <div className="col-md-4 mb-4" key={product.productId}>
              <div className="card">
                <img
                  src={`http://localhost:8080/product/image/${product.imageData}`} // Assuming the image URL is served by the server
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.productDescription}</p>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Allproducts;
