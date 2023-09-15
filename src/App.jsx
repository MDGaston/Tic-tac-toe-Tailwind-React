import { useState } from "react";
import confetti from "canvas-confetti";

import { TURNS } from "./constants";

import { checkWinner, checkEndgame } from "./logic/board";

import { WinnerModal } from "./components/WinnerModal";
import { TurnIndicator } from "./components/TurnIndicator";
import { Board } from "./components/Board";
import { ResetButton } from "./components/ResetButton";
import { Title } from "./components/Title";
function App() {
  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem("board");
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem("turn");
    return savedTurn ? savedTurn : TURNS.X;
  });
  const [winner, setWinner] = useState(null); // null no hay ganador false es empate

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };
  const updateBoard = (index) => {
    console.log(index, winner);
    if (board[index] || winner) return;
    // actualizo el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // Cambio el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //guardar partida
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
    // Verifico si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndgame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <div className="backgroundcolor bg-stone-900 min-h-screen flex flex-col items-center">
      <Title />
      <ResetButton resetGame={resetGame} />
      <Board board={board} updateBoard={updateBoard} />
      <TurnIndicator turn={turn}></TurnIndicator>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </div>
  );
}
export default App;
