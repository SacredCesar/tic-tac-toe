"use client"
import { useState } from "react";

function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function onSquareClick(idx){
    if (squares[idx] || calculateWinner(squares)) return;
    const newSquares = squares.slice();
    newSquares[idx] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(newSquares);
  }

  const winner = calculateWinner(squares);

  return (
  <>
    {winner ? (<p>Winner is: {winner}</p>) : (<p>Next Player: {xIsNext ? "X" : "O"}</p>)}<br></br>
    <div className="board-row">
      <Square value={squares[0]} onClick={() => onSquareClick(0)} ></Square>
      <Square value={squares[1]} onClick={() => onSquareClick(1)} ></Square>
      <Square value={squares[2]} onClick={() => onSquareClick(2)} ></Square>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onClick={() => onSquareClick(3)} ></Square>
      <Square value={squares[4]} onClick={() => onSquareClick(4)} ></Square>
      <Square value={squares[5]} onClick={() => onSquareClick(5)} ></Square>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onClick={() => onSquareClick(6)} ></Square>
      <Square value={squares[7]} onClick={() => onSquareClick(7)} ></Square>
      <Square value={squares[8]} onClick={() => onSquareClick(8)} ></Square>
    </div>
  </>
  )
}

function Square({value, onClick}){
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
    );
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] == squares[b] && squares[b] == squares[c]){
      return squares[a];
    }
  }
  return null;
}

export default function Game(){
  
  return (<div>
    <Board></Board>
  </div>)
}
