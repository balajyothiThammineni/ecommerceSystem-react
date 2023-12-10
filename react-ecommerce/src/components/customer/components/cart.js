import React,{useState,useEffect} from "react";
import CNavbar from "./navbar";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
      
    }
  }, []);

  const placeOrder = (data) => {
    debugger
    let orderData=[]
    let id=localStorage.getItems('id')
    data.map((ele,index)=>{
      debugger
      let orderProduct={
        quantity:quantities[index],
        pid:ele.productId,
        cid:id
      }
      orderData.push(orderProduct)
      
    })
    console.log("data after submit", data);

    fetch("https:8080/orders/saveall", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Success", responseData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    setQuantities(Array(cart.length).fill(1));
  }, [cart]);

  const updateQuantity = (index, quantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = quantity;
    setQuantities(newQuantities);
  }

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  const getTotalAmount = (item) => {
    const index = cart.indexOf(item);
    const quantity = quantities[index];
    return item.price * quantity;
  }

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price * quantities[index];
    });
    return total;
  }

  return (
    <div class="mt-5 pt-5">
        <div class="row">
            <div class="col-md-3">
            </div>
        </div>


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
         
          <tr>
                <td>{item.name}</td>
                <td>Rs.{item.price}</td>
                <td>
                <input type="number" value={quantities[index]} min="1" max="5" onChange={(e) => updateQuantity(index, e.target.value)} />
                </td>
                <td>Rs.{getTotalAmount(item)}</td>
                <td><button class="btn btn-warning" onClick={() => removeItem(index)}>Remove</button></td>
            </tr>
        
        ))}
        </tbody>
        <tfoot><tr>
        <td colspan="3">
              Total Price: Rs.{getTotalPrice()}
            </td>
          
          <td colspan="5">
            <a href ="/" onClick={()=>{
              placeOrder(cart)
            }}class ="btn text-decoration-none mb-3 btn-success fw-bold">order</a>
            </td>
            
            </tr></tfoot>
        </table>
        <CNavbar />
      </div>
    
  );
}

export default Cart;