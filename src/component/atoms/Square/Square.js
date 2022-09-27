import React, { useState } from "react";
import "./SquareStyle.css";
const Square = (props) => {
  const [squarebg, setSquareBg] = useState("#000");
  const [squaretext, setSquareText] = useState("#fff");
  const SquareHandlar = (squarebg, squaretext) => {
    setSquareBg(squarebg);
    setSquareText(squaretext);
  };
  return (
    <div
      onMouseEnter={() => SquareHandlar("#fff", "#000")}
      onMouseOut={() => SquareHandlar("#000", "#fff")}
      onClick={props.onClick}
      style={{
        border: "1px solid",
        borderColor: "#0953ed",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${squarebg}`,
        color: `${squaretext}`,
      }}
      className="square"
    >
      <h3>{props.value}</h3>
    </div>
  );
};
export default Square;
