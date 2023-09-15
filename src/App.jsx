import { useState } from "react";

const TURNS = {
  X: "X",
  O: "O",
};

const Square = ({ children, updateBoard, index, isSelected, isSmall }) => {
  const backgroundColor = isSelected
    ? "bg-green-500 transition-colors"
    : "bg-stone-900";
  // Determina el tamaño de fuente y el tamaño del cuadro en función de isSmall
  const fontSizeClass = isSmall ? "text-2xl" : "text-48";
  const squareSizeClass = isSmall ? "w-24 h-24" : "w-40 h-40";
  const pointer = isSmall ? "" : "cursor-pointer";
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div
      onClick={handleClick}
      className={`border-solid border-gray-300 border-2 rounded grid place-items-center ${pointer} ${backgroundColor} ${squareSizeClass} ${fontSizeClass}`}
    >
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // null no hay ganador false es empate

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };
  const checkWinner = (board) => {
    //Revisamos el array de las combinaciones ganadoras para verificar si hay un ganador
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    // Si no hay ganador
    return null;
  };
  const checkEndgame = (newBoard) => {
    return !newBoard.includes(null);
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
    // Verifico si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndgame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <div className="backgroundcolor bg-stone-900 min-h-screen flex flex-col items-center">
      <div className="header">
        <h1 className="text-3xl font-bold text-white mb-4 text-center mt-10">
          Tic tac toe
        </h1>
      </div>
      <button
        className="bg-transparent px-4 py-2 text-2xl mt-10 border-2 border-gray-300 rounded-2xl text-white hover:bg-white hover:text-stone-900 transition-colors"
        onClick={resetGame}
      >
        Reset
      </button>
      <div className="flex-grow flex items-center justify-center">
        <section className="flex justify-center">
          <div className="grid gap-5 grid-cols-3 text-white text-5xl font-bold">
            {board.map((row, index) => (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            ))}
          </div>
        </section>
      </div>
      <div className="footer flex justify-center mb-12">
        <section className="flex justify-center text-white gap-4">
          <Square isSelected={turn === TURNS.X} isSmall={true}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O} isSmall={true}>
            {TURNS.O}
          </Square>
        </section>
      </div>
      {winner !== null && (
        <section className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
          <div className="h-300px custom-width custom-height border-2 border-gray-300 rounded flex flex-col justify-center items-center bg-stone-900">
            <h1 className="text-5xl font-bold text-white text-center">
              {winner === false ? "Empate" : "Gano "}
              <header className=" m-auto w-fit border-3 border-gray-300 rounded-2xl flex gap-5 mt-10">
                {winner && <Square isSmall={true}>{winner}</Square>}
              </header>
              <footer className="mb-5 mt-5">
                <button
                  className="bg-blue-500 rounded px-4 py-2 text-2xl"
                  onClick={resetGame}
                >
                  Reset del juego
                </button>
              </footer>
            </h1>
          </div>
        </section>
      )}
    </div>
  );
}
export default App;
