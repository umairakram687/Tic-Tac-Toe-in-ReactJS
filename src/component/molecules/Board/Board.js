import React, { useState } from "react";
import { Square } from "../../atoms";
import "./BoardStyle.css";
const Board = () => {
  const [boardarray, setBoardArray] = useState(Array(9).fill(null));
  const [xturn, setXTrun] = useState(true);
  const [colorbtn, setColorBtn] = useState("#0953ed");
  const [colortext, setColorText] = useState("#fff");

  const BtnStyleHandlar = (colorbtn, colortext) => {
    setColorBtn(colorbtn);
    setColorText(colortext);
  };

  const CheckWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        boardarray[a] !== null &&
        boardarray[a] === boardarray[b] &&
        boardarray[a] === boardarray[c]
      ) {
        return boardarray[a];
      }
    }
    return false;
  };
  const Iswinner = CheckWinner();

  const HandelClick = (index) => {
    if (boardarray[index] !== null) {
      return;
    }
    const exitingState = [...boardarray];
    exitingState[index] = xturn ? "X" : "0";
    setBoardArray(exitingState);
    setXTrun(!xturn);
  };
  const resetHandlar = () => {
    setBoardArray(Array(9).fill(null));
  };
  return (
    <div className="board-container">
      {Iswinner ? (
        <>
          {Iswinner} won the game
          <button
            style={{
              margin: "30px",
              backgroundColor: `${colorbtn}`,
              color: `${colortext}`,
              borderStyle: "none",
              padding: "10px 14px",
              fontSize: "14px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={resetHandlar}
            onMouseEnter={() => BtnStyleHandlar("#fff", "#0953ed")}
            onMouseOut={() => BtnStyleHandlar("#0953ed", "#fff")}
          >
            Play again
          </button>
        </>
      ) : (
        <>
          <h4>{xturn ? "X" : "0"} your turn </h4>
          <div className="board-row">
            <Square onClick={() => HandelClick(0)} value={boardarray[0]} />
            <Square onClick={() => HandelClick(1)} value={boardarray[1]} />
            <Square onClick={() => HandelClick(2)} value={boardarray[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => HandelClick(3)} value={boardarray[3]} />
            <Square onClick={() => HandelClick(4)} value={boardarray[4]} />
            <Square onClick={() => HandelClick(5)} value={boardarray[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => HandelClick(6)} value={boardarray[6]} />
            <Square onClick={() => HandelClick(7)} value={boardarray[7]} />
            <Square onClick={() => HandelClick(8)} value={boardarray[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
