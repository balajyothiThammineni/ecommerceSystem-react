import SNavbar from "./navbar";

function SellerHome() {
  const backgroundImageUrl =
    "https://previews.123rf.com/images/ionutparvu/ionutparvu1801/ionutparvu180101578/92811571-painting-with-bestseller-message-on-blue-wallpaper-with-flowers-illustration.jpg";

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url(" + backgroundImageUrl + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        color: "white", // text color
      }}
    >
      <SNavbar />
      {/* Add other content as needed */}
    </div>
  );
}

export default SellerHome;
