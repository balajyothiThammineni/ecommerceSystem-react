import React from "react";
import CNavbar from "./navbar";

function Contact()
{
    return(
        <div class="mt-5 pt-5">
        <div
    style={{
      height: '85vh',
      width: '100%',
      overflow: 'hidden',
      background: 'url("images/two.jpg")',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'centerLeft',
    }}
  >
    <h3>You can contact us at 
        Email: tbalajyothi17@gmail.com
    </h3>
  </div>
        <CNavbar />
    </div>
    )
}
export default Contact;