import { WINNER_COMBOS } from "../constants";
export const checkWinner = (board) => {
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

export const checkEndgame = (newBoard) => {
  return !newBoard.includes(null);
};
