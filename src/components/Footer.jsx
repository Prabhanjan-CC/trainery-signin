import React from "react";
import "./styles/Navbar-footer.css";
const footer = () => {
  return (
    <div className="Footer">
      <div className="text-line">
        The best captial of all is{" "}
        <span style={{ color: "#295bdc" }}>Human</span>.
      </div>
      <div className="text-line2">
        TRAINING NETWORK |
        <span style={{ fontWeight: "200" }}>
          {" "}
          800.397.5215 | info@trainery.com | New York | North Carolina | Iowa |
          Arkansas{" "}
        </span>
      </div>
    </div>
  );
};

export default footer;
