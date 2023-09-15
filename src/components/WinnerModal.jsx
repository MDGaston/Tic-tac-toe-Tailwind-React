import { Square } from "./Square";

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  const winnertext = winner === false ? "Empate" : "Gano ";
  return (
    <section className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
      <div className="h-300px custom-width custom-height border-2 border-gray-300 rounded flex flex-col justify-center items-center bg-stone-900">
        <h1 className="text-5xl font-bold text-white text-center">
          {winnertext}
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
  );
}
