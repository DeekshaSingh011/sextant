import React from "react";

function Banner({ title }) {
  return (
    <header style={{
      backgroundColor: "#1E40AF", // Your original blue
      color: "#fff",
      padding: "1.25rem",
      textAlign: "center",
      fontSize: "1.75rem", // Slightly larger for better visual impact
      fontWeight: "bold",
      letterSpacing: "0.5px"
    }}>
      {title}
    </header>
  );
}

export default Banner;
