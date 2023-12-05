import React, { useState, useEffect } from 'react';
import CNavbar from "./components/navbar";
import { useSearchParams } from "react-router-dom";
import Sidebar from './components/sidebar'; 
import CustomerHome from './components/home';
import Products from './components/products';
function CustomerDashboard() {
    const [qStr,setQstr] = useState('')
    const [param] = useSearchParams();

   
        if(param.get('page') === 'products'){

            return <div>
                <Products />
            </div>
        }

  return (
    <div>
      <CNavbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />

          </div>
          <div className="col-md-9">

            <div>
              <CustomerHome />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}


export default CustomerDashboard;
