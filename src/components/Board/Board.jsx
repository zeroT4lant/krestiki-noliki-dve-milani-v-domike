import { useState } from "react";
import Square from "../Square";

const Board = () => {
  const [xIsNext,setXIsNext] = useState(true)
  const [sqrs, setSqr] = useState(Array(9).fill(null));//заполняем sqrs null-ями

  function calculateWinner(sqrs) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i];
      if (
        sqrs[a] &&
        sqrs[a] === sqrs[b] &&
        sqrs[a] === sqrs[c]
      ) {
        return sqrs[a]
      }
    }
    return null
  }


  function handleClick(i) {

    if (sqrs[i] || calculateWinner(sqrs)) {
      return;
    }

    const nextSquares = sqrs.slice();//копия с которой работаем
    if (xIsNext) {
      nextSquares[i]='X'
    }
    else {
      nextSquares[i]='O'
    }
    setSqr(nextSquares);//меняем состояние
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div className="row-of-squares">
        <Square value={sqrs[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={sqrs[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={sqrs[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="row-of-squares">
        <Square value={sqrs[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={sqrs[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={sqrs[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="row-of-squares">
        <Square value={sqrs[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={sqrs[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={sqrs[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </div>
  );
};

export default Board;
