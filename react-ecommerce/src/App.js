// Import necessary dependencies...
import { Route, Routes } from "react-router";
import "./App.css";
import CustomerDashboard from "./components/customer/dashboard";
import ExecutiveDashboard from "./components/executive/dashboard";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Clogin from "./components/auth/clogin";  // Rename the import here
import Signup from "./components/auth/signup";
import Logout from "./components/auth/logout";
import SellerHome from "./components/seller/components/home";
import ExecutiveHome from "./components/executive/components/home";
import Addcategory from "./components/executive/components/addcategory";
import Sellerview from "./components/executive/components/sellerview";
import CustomerView from "./components/executive/components/customervview";
import Login from "./components/auth/login"; 
import CustomerHome from "./components/customer/components/home";
function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}

      <Routes>
      {/* <Route path="/customer/products" element={<Products />}></Route> */}

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

        <Route path="/auth/logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
}

export default App;