// Import necessary dependencies...
import { Route, Routes } from "react-router";
import "./App.css";
import CustomerDashboard from "./components/customer/dashboard";
import ExecutiveDashboard from "./components/executive/dashboard";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Clogin from "./components/auth/clogin";  
import Signup from "./components/auth/signup";
import Logout from "./components/auth/logout";
import SellerHome from "./components/seller/components/home";
import ExecutiveHome from "./components/executive/components/home";
import Addcategory from "./components/executive/components/addcategory";
import Sellerview from "./components/executive/components/sellerview";
import CustomerView from "./components/executive/components/customervview";
import Login from "./components/auth/login"; 
import Products from "./components/customer/components/products";
import Cart from "./components/customer/components/cart";
import CustomerHome from "./components/customer/components/home";
import Review from "./components/customer/components/Reviews";
import Register from "./components/auth/register";
import MyProducts from "./components/seller/components/myproducts";
import UpdateDetails from "./components/seller/components/updatedetails";
import History from "./components/customer/components/history";
import Allproducts from "./components/seller/components/allproducts";
import Order from "./components/customer/components/order";
import Contact from "./components/customer/components/contact";

function App() {
  return (
    <div>

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/customer/dashboard" element={<CustomerDashboard />}></Route>
        <Route path="/seller/Home" element={<SellerHome/>}></Route>
        <Route path="/executive/Home" element={<ExecutiveHome />}></Route>
        <Route path="/addcategory" element={<Addcategory/>}></Route>
        <Route path="/Sellerview" element={<Sellerview/>}></Route>
        <Route path="/CustomerView" element={<CustomerView/>}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
        <Route path="/auth/clogin" element={<Clogin />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/customer/products" element={<Products />}></Route>
        <Route path="/customer/cart" element={<Cart />}></Route>
        <Route path="/customer/home" element={<CustomerHome />}></Route>
        <Route path="/customer/review/:pid" element={<Review />}></Route>
        <Route path="/auth/logout" element={<Logout />}></Route>
        <Route path="/auth/register" element={<Register />}></Route>
        <Route path="/seller/myproducts" element={<MyProducts />}></Route>
        <Route path="/seller/updatedetails" element={<UpdateDetails/>}></Route>
        <Route path="/customer/history" element={<History />}></Route>
        <Route path="/seller/allproducts" element={<Allproducts />}></Route>
        <Route path="/customer/order" element={<Order />}></Route>
        <Route path="/customer/contact" element={<Contact />}></Route>


      </Routes>
    </div>
  );
}

export default App;