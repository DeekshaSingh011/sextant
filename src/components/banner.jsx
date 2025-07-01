import React from "react";

function Banner({ title }) {
  return (
    <header style={{
      backgroundColor: "#1E40AF",
      color: "#fff",
      padding: "1rem",
      textAlign: "center",
      fontSize: "1.5rem",
      fontWeight: "bold"
    }}>
      {title}
    </header>
  );
}

export default Banner;
