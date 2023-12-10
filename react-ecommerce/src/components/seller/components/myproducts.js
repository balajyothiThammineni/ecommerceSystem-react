import React, { useState, useEffect } from "react";
import axios from "axios";
import SNavbar from "./navbar";

function MyProducts({ sid }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/product/seller/${sid}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, [sid]);

  const handleAddProduct = () => {
    console.log("Add product functionality");
  };

  const handleDeleteProduct = (productId) => {
    console.log("Delete product functionality for productId:", productId);
  };

  return (
    <div>
      <SNavbar />

      <div>
        <h2>My Products</h2>

        <button onClick={handleAddProduct}>Add Product</button>

        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          <ul>
            {products.map(product => (
              <li key={product.productId}>
                <h3>{product.name}</h3>
                <p>Description: {product.productDescription}</p>
                <p>Color: {product.colour}</p>
                <p>Size: {product.size}</p>
                <p>Price: {product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>Featured: {product.featured ? "True" : "False"}</p>
                <button onClick={() => handleDeleteProduct(product.productId)}>
                  Delete Product
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MyProducts;
