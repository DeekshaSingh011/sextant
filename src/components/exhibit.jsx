import React from "react";

function Exhibit({ heading, children }) {
  return (
    <section style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      margin: "1rem",
      backgroundColor: "#f9f9f9"
    }}>
      <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{heading}</h2>
      <div>{children}</div>
    </section>
  );
}

export default Exhibit;
