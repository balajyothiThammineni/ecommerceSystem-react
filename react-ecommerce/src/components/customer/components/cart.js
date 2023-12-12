import React, { useState, useEffect } from "react";
import CNavbar from "./navbar";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  useEffect(() => {
    setQuantities(Array(cart.length).fill(1));
  }, [cart]);

  const updateQuantity = (index, quantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = quantity;
    setQuantities(newQuantities);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const getTotalAmount = (item) => {
    const index = cart.indexOf(item);
    const quantity = quantities[index];
    return item.price * quantity;
  };

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price * quantities[index];
    });
    return total;
  };

  const placeOrder = () => {
    // Logic to place the order goes here
    // For example, you can navigate to the "/customer/order" route
    navigate("/customer/order");
  };

  return (
    <div class="mt-5 pt-5">
      <table class="table table-striped table-light mt-5">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>Rs.{item.price}</td>
              <td>
                <input
                  type="number"
                  value={quantities[index]}
                  min="1"
                  max="5"
                  onChange={(e) => updateQuantity(index, e.target.value)}
                />
              </td>
              <td>Rs.{getTotalAmount(item)}</td>
              <td>
                <button
                  class="btn btn-warning"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">Total Price: Rs.{getTotalPrice()}</td>
            <td colspan="5">
              <button onClick={placeOrder} class="btn btn-success fw-bold">
                Order
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      <CNavbar />
    </div>
  );
}

export default Cart;
