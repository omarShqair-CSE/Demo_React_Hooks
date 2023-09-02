import React, { useState } from "react";

function Toggle() {
  const [color, setColor] = useState(true);

  const toggleColor = () => {
    setColor(!color);
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={toggleColor}>
        Toggle Color
      </button>
      <h3
        className={color ? "text-danger" : "text-primary"}
        style={{ marginTop: "15px" }}
      >
        This is a Paragraph
      </h3>
    </div>
  );
}

export default Toggle;
