import React, { useState, useEffect } from 'react';
import CNavbar from "./components/navbar";
import { useSearchParams } from "react-router-dom";
import Sidebar from './components/sidebar'; 
import CustomerHome from './components/home';
function CustomerDashboard() {
  const [qStr,setQstr] = useState('')
    const [param] = useSearchParams();

    const process = ()=>{


        if(param.get('page') === 'products'){
             
            return <div>
                <Products />
            </div>
        }
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
            {/* The rest of your dashboard content */}
          </div>
        </div>
      </div>
    </div>
  );
}


export default CustomerDashboard;
