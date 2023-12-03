import React from "react";
import Navbar from "./navbar";

function Home() {

  const backgroundImageUrl = "https://wallpaperaccess.com/full/2593108.png";

  return (
    <div
      style={{
        backgroundImage: "url(" + backgroundImageUrl + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <Navbar />

      <div style={{ marginTop: "40px" }}>
        <img
          src="https://i.pinimg.com/originals/b9/7d/c2/b97dc288d71e7938c1ce8b7faacdc9ac.gif"
          height="200"
          width="300"
        />
      </div>

     
    </div>
  );
}

export default Home;
